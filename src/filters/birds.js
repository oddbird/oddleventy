'use strict';

const { fromCollection, withData } = require('./pages');

const getPages = (collection, bird) => withData(collection, 'author', bird);

const active = (collection) =>
  collection
    .filter((bird) => bird.data.active)
    .sort((a, b) => a.data.active - b.data.active);

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
  active,
  authorPage,
};
