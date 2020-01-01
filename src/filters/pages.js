'use strict';

const path = require('path');

const removeMd = require('remove-markdown');

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
      if (data === value || !value) {
        return true;
      }

      if (Array.isArray(data)) {
        return data.includes(value);
      }
    }

    return false;
  });

const meta = (collection, page, renderData, site) => {
  page = fromCollection(collection, page.url) || page;
  renderData = renderData || {};
  const data = page.data || {};

  data.title = renderData.title || data.title || page.fileSlug || '';
  data.banner = renderData.banner || data.banner || data.title;
  data.description = removeMd(
    renderData.sub || data.sub || data.summary || site.description,
  );
  data.index = renderData.index || data.index;
  data.canonical = path.join(site.url, page.url || '');

  return data;
};

module.exports = {
  isPublic,
  getPublic,
  fromCollection,
  withData,
  titleSort,
  meta,
};
