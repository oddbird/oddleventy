import { readdir } from 'node:fs';
import { join } from 'node:path';

import doxray from 'doxray';

// relative path from the root directory of remedocs
// to the root directory of any package to be documented
const remeDir = './';

// relative path from remeDir to filters inside the project
const filterDir = join(remeDir, 'src/filters/');

// define the documentation regex…
const doxOptions = {
  regex: {
    js: {
      opening: /\/\*\s*@docs[^\n]*\n/m,
      closing: /\*\//,
      comment: /\/\*\s*@docs[^*]*\*+(?:[^/*][^*]*\*+)*\//gm,
      ignore: /\/\*\s*ignore-@docs[\s\S]*/gm,
    },
    cjs: {
      opening: /\/\*\s*@docs[^\n]*\n/m,
      closing: /\*\//,
      comment: /\/\*\s*@docs[^*]*\*+(?:[^/*][^*]*\*+)*\//gm,
      ignore: /\/\*\s*ignore-@docs[\s\S]*/gm,
    },
  },
};

export default () =>
  new Promise((resolve, reject) => {
    // get the docs
    readdir(filterDir, (err, files) => {
      if (err) {
        reject(err);
      }

      const js = files
        .filter((file) => file.endsWith('.js') || file.endsWith('.cjs'))
        .map((file) => {
          const filePath = join(filterDir, file);
          const docs = doxray([filePath], doxOptions);
          const info = docs.patterns.find(
            (pattern) => String(pattern.category).toLowerCase() === 'file',
          );
          const name = file;

          return {
            name,
            info,
            path: filePath,
            slug: file.slice(0, file.indexOf('.')),
            title: info ? info.label : name,
            patterns: docs.patterns.filter(
              (pattern) => String(pattern.category).toLowerCase() !== 'file',
            ),
          };
        });
      resolve(js);
    });
  });
