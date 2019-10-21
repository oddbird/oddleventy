'use strict';

const pages = require('./pages');

const getPages = (collection, bird) =>
  collection.filter((page) => {
    const author = page.data.author || '';
    return author === bird || author.includes(bird);
  });

const authorPage = (collection, bird) => {
  bird = typeof bird === 'string' ? bird : bird[0];
  const url = `/authors/${bird}/`;
  return pages.fromCollection(collection, url);
};

module.exports = {
  getPages,
  authorPage,
};
