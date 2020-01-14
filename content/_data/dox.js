'use strict';

const path = require('path');
const fs = require('fs');

const doxray = require('doxray');

// relative path from the root directory of remedocs
// to the root directory of any package to be documented
const remeDir = './';

// relative path from remeDir to njk documents inside the project
const includeDir = path.join(remeDir, 'content/_includes/');

// define the documentation regex…
const doxOptions = {
  regex: {
    css: {
      opening: /\{#*\s*@docs[^\n]*\n/m,
      closing: /#}/,
      comment: /\{#\s*@docs\s*([^#]|#[^}])*\s*#}/gm,
      ignore: /\{#\s*@no-docs[\s\S]*/gm,
    },
  },
};

module.exports = () => {
  const njk = [];

  // get the docs
  fs.readdir(includeDir, (err, files) => {
    if (err) {
      throw err;
    }

    files
      .filter((file) => file.endsWith('.macros.njk'))
      .forEach((file) => {
        const data = {};

        const filePath = path.join(includeDir, file);
        const docs = doxray([filePath], doxOptions);

        data.name = file;
        data.path = filePath;
        data.slug = file.slice(0, file.indexOf('.'));
        data.info = docs.patterns.find(
          (pattern) => pattern.category === 'file',
        );
        data.patterns = docs.patterns.filter(
          (pattern) => pattern.category !== 'file',
        );

        njk.push(data);
      });
  });

  return njk;
};
