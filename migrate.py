"""
Script to migrate content from rstblog to oddleventy.

Prerequisites:

* Install pandoc:
  ``brew install pandoc``
* Create a virtualenv:
  ``python3 -m venv venv``
* Install dependencies into the virtualenv:
  ``venv/bin/pip install PyYAML``

Run:

    $ venv/bin/python migrate.py [paths for source files] [target directory]
"""

import argparse
import datetime
import json
import logging
import os
import re
import subprocess
import tempfile
import yaml

DATE_RE = re.compile(r"(\d{4})/(\d{2})/(\d{2})")
logger = logging.getLogger("rstblog-2-11ty")


class Dumper(yaml.Dumper):
    # Make sure yaml lists get indented
    def increase_indent(self, flow=False, indentless=False):
        return super(Dumper, self).increase_indent(flow, False)

    def represent_scalar(self, tag, value, style=None):
        # Format multiline strings using |
        if tag == "tag:yaml.org,2002:str" and "\n" in value:
            style = "|"
        return super().represent_scalar(tag, value, style)


def rst_to_pandoc_ast(source):
    with tempfile.NamedTemporaryFile("w", delete=False) as fd:
        fd.write(source)
        fd.close()
        result = subprocess.run(
            ["pandoc", "-f", "rst", fd.name, "-t", "json"], stdout=subprocess.PIPE
        )
    return json.loads(result.stdout)


def pandoc_ast_to_md(tree):
    with tempfile.NamedTemporaryFile("w", delete=False) as fd:
        fd.write(json.dumps(tree))
        fd.close()
        result = subprocess.run(
            [
                "pandoc",
                "-f",
                "json",
                fd.name,
                "-t",
                "markdown_strict",
                "--atx-headers",
                "--reference-links",
                "--reference-location=section",
            ],
            stdout=subprocess.PIPE,
        )
    return result.stdout.decode("utf-8")


def convert_rst_to_md(source, ast_filter=None):
    ast = rst_to_pandoc_ast(source)
    if ast_filter is not None:
        ast_filter(ast)
    return pandoc_ast_to_md(ast)


def convert_page(source, add_to_header=None):
    raw_header, content = source.split("\n\n\n", 1)
    header = {}

    # Convert body
    def hoist_title(ast):
        if ast["blocks"][0]["t"] == "Header":
            node = ast["blocks"].pop(0)
            title = " ".join(n["c"] for n in node["c"][2] if n["t"] == "Str")
            header["title"] = title

    content = convert_rst_to_md(content, ast_filter=hoist_title)

    # Adjust header
    header.update(yaml.safe_load(raw_header))
    if add_to_header:
        header.update(add_to_header)
    # De-listify images and headline
    if "image" in header:
        header["image"] = header["image"][0]
    if "headline" in header:
        header["headline"] = header["headline"][0]
    # Convert rst in summary
    if "summary" in header:
        header["summary"] = convert_rst_to_md(header["summary"])
    # Translate public flag to eleventyExcludeFromCollections
    if not header.get("public"):
        header.pop("public")
        header["eleventyExcludeFromCollections"] = True
    header = yaml.dump(header, Dumper=Dumper, sort_keys=False)

    result = f"---\n{header}---\n\n{content}"
    return result


def migrate(path, target_dir):
    target = os.path.join(
        target_dir, os.path.splitext(os.path.basename(path))[0] + ".md"
    )
    logger.info(f"Migrating {path} to {target}")

    with open(path, "r") as f:
        before = f.read()

    add_to_header = {}
    m = DATE_RE.search(path)
    if m is not None:
        add_to_header["date"] = datetime.date(*map(int, m.groups()))

    try:
        after = convert_page(before, add_to_header)
    except Exception:
        raise Exception(f"Error while converting {path}")

    with open(target, "w") as f:
        f.write(after)


if __name__ == "__main__":
    logging.basicConfig(level=logging.INFO)

    parser = argparse.ArgumentParser(description="Convert rstblog to 11ty.")
    parser.add_argument("files", metavar="N", nargs="+", help="Source files")
    args = parser.parse_args()

    if len(args.files) == 1:
        target = "."
    else:
        target = args.files.pop()
    if not os.path.exists(target):
        logger.info(f"Creating target {target}")
        os.makedirs(target)
    for path in args.files:
        migrate(path, target)
