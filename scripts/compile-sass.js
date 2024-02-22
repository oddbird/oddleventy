/* eslint-disable no-console */

import { join, resolve } from 'node:path';

import autoprefixer from 'autoprefixer';
import chalk from 'chalk';
import fs from 'fs-extra';
import postcss from 'postcss';
import { initAsyncCompiler, NodePackageImporter } from 'sass-embedded';

const __dirname = import.meta.dirname;
const baseDir = resolve(__dirname, '..');
const inDir = join(baseDir, 'src', 'scss');
const outDir = join(baseDir, '_built', 'css');
const destCssDir = join(baseDir, 'assets', 'css');

const compiler = await initAsyncCompiler();

const outputFile = async (file, inputName, contents) => {
  await fs.outputFile(file, contents.toString().trim());
  console.log(chalk.green.bold(`Compiled Sass: ${inputName} => ${file}`));
};

const compileSass = async ({ name, usePostCSS }) => {
  const inFilename = `${name}.scss`;
  const inFile = join(inDir, inFilename);
  const outFilename = `${name}.css`;
  const outFile = join(outDir, outFilename);
  const outMap = join(outDir, `${outFilename}.map`);
  const destCssFile = join(destCssDir, outFilename);
  try {
    const result = await compiler.compileAsync(inFile, {
      style: 'compressed',
      sourceMap: usePostCSS,
      sourceMapIncludeSources: true,
      importers: [new NodePackageImporter()],
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
    console.error(chalk.red(error));
    return null;
  }
};

Promise.all([
  compileSass({ name: 'screen', usePostCSS: true }),
  compileSass({ name: 'styleguide', usePostCSS: true }),
  compileSass({ name: 'json' }),

  // page-specific CSS; this should maybe not be hardcoded?
  compileSass({ name: 'page/support-unknown', usePostCSS: true }),
]).finally(() => compiler.dispose());
