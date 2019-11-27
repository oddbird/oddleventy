'use strict';

const isPublic = (page) => {
  const live = page.data.draft !== true;
  const title = page.data && page.data.title;
  return live && title;
};

const getPublic = (collection) => collection.filter((page) => isPublic(page));

const fromCollection = (collection, page) => {
  const pageURL = typeof page === 'string' ? page : page.url;
  return collection.find((thisPage) => thisPage.url === pageURL) || page;
};

const titleSort = (collection) =>
  collection.sort((a, b) => a.data.title - b.data.title);

const withData = (collection, key, value) =>
  collection.filter((page) => {
    const data = page.data[key];

    if (data) {
      if (data === value || value === null) {
        return true;
      }

      if (Array.isArray(data)) {
        return data.includes(value);
      }
    }

    return false;
  });

module.exports = {
  isPublic,
  getPublic,
  fromCollection,
  withData,
  titleSort,
};
