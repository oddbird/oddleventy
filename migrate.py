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
import logging
import os
import re
import subprocess
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


def convert_rst_to_md(source):
    with open(".content.rst", "w") as f:
        f.write(source)
    subprocess.run(
        ["pandoc", ".content.rst", "-o", ".content.md", "-t", "markdown_strict"]
    )
    with open(".content.md", "r") as f:
        result = f.read()
    os.remove(".content.rst")
    os.remove(".content.md")
    return result


def convert_page(source, add_to_header=None):
    header, content = source.split("\n\n\n", 1)

    # Convert body
    content = convert_rst_to_md(content)

    # Adjust header
    header = yaml.safe_load(header)
    if add_to_header:
        header.update(add_to_header)
    # Turn list of images into a single image
    if "image" in header:
        images = header["image"]
        if len(images) > 1:
            raise Exception("Found more than one image in yaml header")
        header["image"] = images[0]
    # Convert rst in summary
    if "summary" in header:
        header["summary"] = convert_rst_to_md(header["summary"])
    # Translate public flag to eleventyExcludeFromCollections
    if header.get("public") != "yes":
        header.pop("public")
        header["eleventyExcludeFromCollections"] = True
    header = yaml.dump(header, Dumper=Dumper, sort_keys=False)

    result = f"---\n{header}\n---\n\n{content}"
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

    target = args.files.pop()
    for path in args.files:
        migrate(path, target)
