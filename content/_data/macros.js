import { readdir } from 'node:fs';
import { join } from 'node:path';

import doxray from 'doxray';

// relative path from the root directory of remedocs
// to the root directory of any package to be documented
const remeDir = './';

// relative path from remeDir to njk documents inside the project
const includeDir = join(remeDir, 'content/_includes/');

// define the documentation regex…
const doxOptions = {
  regex: {
    njk: {
      opening: /\{#*\s*@docs[^\n]*\n/m,
      closing: /#}/,
      comment: /\{#\s*@docs\s*([^#]|#[^}])*\s*#}/gm,
      ignore: /\{#\s*@no-docs[\s\S]*/gm,
    },
  },
};

export default () =>
  new Promise((resolve, reject) => {
    // get the docs
    readdir(includeDir, (err, files) => {
      if (err) {
        reject(err);
      }

      const njk = files
        .filter((file) => file.endsWith('.macros.njk'))
        .map((file) => {
          const filePath = join(includeDir, file);
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

      resolve(njk);
    });
  });
