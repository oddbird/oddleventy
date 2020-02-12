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
      const components = url.substring(1).split('/');
      let res;
      if (resolved.has(components[0])) {
        res = resolved.get(components[0]);
      } else {
        res = pnp.resolveToUnqualified(components[0], `${baseDir}/`);
        resolved.set(components[0], res);
      }
      if (res === null) {
        done(res);
      } else {
        components[0] = res;
        done({ file: components.join('/') });
      }
    } else {
      done({ file: path.join(baseDir, 'node_modules', url.substring(1)) });
    }
  } else {
    done({ file: url });
  }
};

const outputFile = (file, contents) =>
  fs.outputFile(file, contents.toString().trim(), (writeErr) => {
    console.log(`Compiled: ${file}`);
    if (writeErr) {
      throw writeErr;
    }
  });

const compileSass = ({ name, postCSS }) => {
  const inFile = path.join(inDir, `${name}.scss`);
  const outFilename = `${name}.css`;
  const outFile = path.join(outDir, outFilename);
  const outMap = path.join(outDir, `${outFilename}.map`);
  sass.render(
    {
      file: inFile,
      sourceMap: Boolean(postCSS),
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
            if (res.map) {
              outputFile(outMap, res.map);
            }
            return outputFile(outFile, res.css);
          })
          .catch(console.error);
      }
      if (result.map) {
        outputFile(outMap, result.map);
      }
      return outputFile(outFile, result.css);
    },
  );
};

compileSass({ name: 'screen', sourceMap: true, postCSS: true });
compileSass({ name: 'styleguide', sourceMap: true, postCSS: true });
compileSass({ name: 'json', sourceMap: false });
