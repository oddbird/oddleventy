/* eslint-disable no-console */

'use strict';

const path = require('path');

const autoprefixer = require('autoprefixer');
const fs = require('fs-extra');
const postcss = require('postcss');
const sass = require('sass');

const baseDir = path.resolve(__dirname, '..');
const inDir = path.join(baseDir, 'src', 'scss');
const outDir = path.join(baseDir, '_built', 'css');

let pnp;

try {
  // eslint-disable-next-line global-require
  pnp = require('pnpapi');
} catch (error) {
  // not in PnP; not a problem
}

const resolved = new Map();

const nodeImporter = (url, prev, done) => {
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
        done(null);
      } else {
        components[0] = res;
        done({ file: components.join('/') });
      }
    } else {
      // Try loading file from "node_modules" dir
      done({ file: path.join(baseDir, 'node_modules', url.substring(1)) });
    }
  } else {
    // Fall back to default Sass importer
    done(null);
  }
};

const outputFile = (file, contents) =>
  fs.outputFile(file, contents.toString().trim(), (writeErr) => {
    console.log(`Compiled: ${file}`);
    if (writeErr) {
      throw writeErr;
    }
  });

const compileSass = ({ name, sourceMap, postCSS }) => {
  const inFile = path.join(inDir, `${name}.scss`);
  const outFilename = `${name}.css`;
  const outFile = path.join(outDir, outFilename);
  const outMap = path.join(outDir, `${outFilename}.map`);
  sass.render(
    {
      file: inFile,
      sourceMap: Boolean(sourceMap),
      outFile: outFilename,
      importer: nodeImporter,
    },
    (compileErr, result) => {
      if (compileErr) {
        throw compileErr;
      }
      if (postCSS) {
        return postcss([autoprefixer])
          .process(result.css, {
            from: inFile,
            to: outFilename,
            map: { prev: result.map.toString() },
          })
          .then((res) => {
            res.warnings().forEach((warn) => {
              console.warn(warn.toString());
            });
            if (sourceMap && res.map) {
              outputFile(outMap, res.map);
            }
            return outputFile(outFile, res.css);
          })
          .catch(console.error);
      }
      if (sourceMap && result.map) {
        outputFile(outMap, result.map);
      }
      return outputFile(outFile, result.css);
    },
  );
};

compileSass({ name: 'screen', sourceMap: true, postCSS: true });
compileSass({ name: 'styleguide', sourceMap: true, postCSS: true });
compileSass({ name: 'json' });
