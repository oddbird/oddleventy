/* eslint-disable no-console */

import { join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

import autoprefixer from 'autoprefixer';
import chalk from 'chalk';
import fs from 'fs-extra';
import postcss from 'postcss';
import { compile } from 'sass';

const __dirname = import.meta.dirname;
const baseDir = resolve(__dirname, '..');
const inDir = join(baseDir, 'src', 'scss');
const outDir = join(baseDir, '_built', 'css');
const destCssDir = join(baseDir, 'assets', 'css');

let pnp;

try {
  // eslint-disable-next-line global-require
  pnp = require('pnpapi');
} catch (error) {
  // not in PnP; not a problem
}

const resolved = new Map();

const nodeImporter = {
  findFileUrl(url) {
    if (url.startsWith('~')) {
      if (pnp) {
        // We need to resolve the imported path to a node module path. Instead of
        // re-creating the Sass import rules (where, for example,
        // ``@import 'foo'`` can be shorthand for ``@import 'foo/_index.scss'``),
        // we extract the module name from the full path, resolve that, then
        // re-add the rest of the path.
        const components = url.substring(1).split('/');
        // Adjust for scoped packages (e.g. ``@foo/bar``)...
        if (components[0].startsWith('@') && components.length > 1) {
          components[0] = components.slice(0, 2).join('/');
          components.splice(1, 1);
        }
        let res;
        if (resolved.has(components[0])) {
          res = resolved.get(components[0]);
        } else {
          res = pnp.resolveToUnqualified(components[0], `${baseDir}/`);
          resolved.set(components[0], res);
        }
        if (res === null) {
          // No resolved module found... fall back to default Sass importer
          return null;
        }
        components[0] = res;
        return new URL(pathToFileURL(components.join('/')));
      }
      // Try loading file from "node_modules" dir
      return new URL(
        pathToFileURL(join(baseDir, 'node_modules', url.substring(1))),
      );
    }
    // Fall back to default Sass importer
    return null;
  },
};

const outputFile = (file, inputName, contents) =>
  fs.outputFile(file, contents.toString().trim(), (writeErr) => {
    console.log(chalk.green.bold(`Compiled Sass: ${inputName} => ${file}`));
    if (writeErr) {
      throw writeErr;
    }
  });

const compileSass = ({ name, usePostCSS }) => {
  const inFilename = `${name}.scss`;
  const inFile = join(inDir, inFilename);
  const outFilename = `${name}.css`;
  const outFile = join(outDir, outFilename);
  const outMap = join(outDir, `${outFilename}.map`);
  const destCssFile = join(destCssDir, outFilename);
  try {
    const result = compile(inFile, {
      style: 'compressed',
      sourceMap: usePostCSS,
      sourceMapIncludeSources: true,
      importers: [nodeImporter],
    });
    if (usePostCSS) {
      return postcss([autoprefixer])
        .process(result.css, {
          from: inFile,
          to: destCssFile,
          map: {
            annotation: true,
            prev: result.sourceMap,
            sourcesContent: true,
          },
        })
        .then((res) => {
          res.warnings().forEach((warn) => {
            console.warn(chalk.yellow(warn.toString()));
          });
          if (res.map) {
            outputFile(outMap, inFilename, res.map);
          }
          return outputFile(outFile, inFilename, res.css);
        })
        .catch((err) => {
          console.error(chalk.red(err));
        });
    }
    return outputFile(outFile, inFilename, result.css);
  } catch (error) {
    throw error.message;
  }
};

compileSass({ name: 'screen', usePostCSS: true });
compileSass({ name: 'styleguide', usePostCSS: true });
compileSass({ name: 'json' });

// page-specific CSS; this should maybe not be hardcoded?
compileSass({ name: 'page/support-unknown', usePostCSS: true });
