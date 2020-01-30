'use strict';

const path = require('path');
const { promisify } = require('util');
const fs = require('fs');
const readFileAsync = promisify(fs.readdir); // node js module

const doxray = require('doxray');

// relative path from the root directory of remedocs
// to the root directory of any package to be documented
const remeDir = './';
// relative path from remeDir to filters inside the project
const filterDir = path.join(remeDir, 'src/filters/');

// define the documentation regex…
const doxOptions = {
  regex: {
    js: {
      opening: /\/\*\s*@docs[^\n]*\n/m,
      closing: /\*\//,
      comment: /\/\*\s*@docs[^*]*\*+(?:[^/*][^*]*\*+)*\//gm,
      ignore: /\/\*\s*ignore-@docs[\s\S]*/gm,
    },
  },
};

module.exports = async () => {
  const js = await readFileAsync(filterDir, (err, files) => {
    if (err) {
      return err;
    }
    return files
      .filter((file) => file.endsWith('.js'))
      .map((file) => {
        const filePath = path.join(filterDir, file);
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
  });
  return js;
};
