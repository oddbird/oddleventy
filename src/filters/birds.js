'use strict';

const { fromCollection } = require('./pages');

const getPages = (collection, bird) =>
  collection.filter((page) => {
    const author = page.data.author || [];
    return author === bird || author.includes(bird);
  });

const authorPage = (collection, bird) => {
  if (bird) {
    bird = typeof bird === 'string' ? bird : bird[0];
    const url = `/authors/${bird}/`;
    return fromCollection(collection, url);
  }

  return undefined;
};

module.exports = {
  getPages,
  authorPage,
};
