'use strict';

const path = require('path');
const fs = require('fs');

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

module.exports = () => {
  const js = [];

  // get the docs
  fs.readdir(filterDir, (err, files) => {
    if (err) {
      throw err;
    }

    files
      .filter((file) => file.endsWith('.js'))
      .forEach((file) => {
        const data = {};

        const filePath = path.join(filterDir, file);
        const docs = doxray([filePath], doxOptions);

        data.name = file;
        data.path = filePath;
        data.slug = file.slice(0, file.indexOf('.'));
        data.info = docs.patterns.find(
          (pattern) => pattern.category === 'file',
        );
        data.title = data.info ? data.info.label : data.name;
        data.patterns = docs.patterns.filter(
          (pattern) => pattern.category !== 'file',
        );

        js.push(data);
      });
  });

  return js;
};
