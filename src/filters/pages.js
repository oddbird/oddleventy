'use strict';

const path = require('path');

const removeMd = require('remove-markdown');

const { get } = require('./utils');

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

const getData = (data, attrs, test) => {
  attrs = typeof attrs === 'string' ? [attrs] : attrs || [];

  if (attrs && attrs.length) {
    attrs.forEach((attr) => {
      data = data[attr];
    });
  }

  if (test) {
    Object.keys(test).forEach((key) => {
      data = get(data, key, test[key]);
    });
  }

  return data;
};

const pageData = (collection, page, attrs, test) =>
  getData(fromCollection(collection, page).data, attrs, test);

const pageContent = (collection, page) =>
  fromCollection(collection, page).templateContent;

const titleSort = (collection) =>
  collection.sort((a, b) => a.data.title - b.data.title);

const withData = (collection, key, value) =>
  collection.filter((page) =>
    page.data && page.data.length ? get(page.data, key, value) : false,
  );

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
  getData,
  pageData,
  pageContent,
  withData,
  titleSort,
  meta,
};
