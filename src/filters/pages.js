'use strict';

const path = require('path');

const removeMd = require('remove-markdown');

const { just, get, getJust } = require('./utils');

/* @docs
label: Page Filters
category: file
*/

const isPublic = (page) => {
  const live = page.data.draft !== true;
  const title = page.data && page.data.title;
  return live && title;
};

/* @docs
label: getPublic
category: filter
note: Return only the public pages from a collection
params:
  collection:
    type: array of pages
*/
const getPublic = (collection) => collection.filter((page) => isPublic(page));

/* @docs
label: getPage
category: filter
note: Return full page data based on a URL or current `page` object
params:
  collection:
    type: array of pages
  page:
    type: url | page
*/
const fromCollection = (collection, page) => {
  const pageURL = typeof page === 'string' ? page : page.url;
  return just(collection, 'url', pageURL) || page;
};

/* @docs
label: pageData
category: data
note: Return data from a given page
example: |
  {% set chQuotes = collections.all | pageData('/work/coachhub/', 'press') %}
params:
  collection:
    type: array of pages
  page:
    type: url | page
  attrs:
    type: string | array
    note: Any nested data attributes to get
  test:
    type: object
    note: Any attribute/value pairs to find in a resulting array
*/
const pageData = (collection, page, attrs, test) =>
  getJust(fromCollection(collection, page).data, attrs, test);

/* @docs
label: findData
category: data
note: Find data anywhere in a collection
example: |
  {% set quote = collections.all | findData('press', {'slug': 'extension'}) %}
params:
  collection:
    type: array of pages
  attrs:
    type: string | array
    note: Any nested data attributes to get
  test:
    type: object
    note: Any attribute/value pairs to find in a resulting array
*/
const findData = (collection, attrs, test) => {
  const found = [];

  collection.forEach((page) => {
    const inPage = getJust(page.data, attrs, test);
    if (inPage) {
      found.push(inPage);
    }
  });

  return found && test ? found[0] : found;
};

/* @docs
label: pageContent
category: data
note: Return the content of any page
params:
  collection:
    type: array of pages
  page:
    type: url | page
*/
const pageContent = (collection, page) =>
  fromCollection(collection, page).templateContent;

/* @docs
label: withData
category: filter
note: Return pages with particular data
params:
  collection:
    type: array of pages
  attrs:
    type: string | array
    note: Any nested data attributes to get
  value:
    type: any
    note: Only get pages where the desired attributes have this value
*/
const withData = (collection, attrs, value, first = false) => {
  const pages = collection.filter((page) => get(page.data, attrs, value));
  return pages && first ? pages[0] : pages;
};

/* @docs
label: meta
category: data
note: Collate metadate for the page from various sources
params:
  collection:
    type: array of pages
  page:
    type: url | page
  renderData:
    type: object
    note: Current page only
  site:
    type: object
    note: From `_data/site.json`
*/
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

  const local = page.url ? path.join(site.url, page.url) : null;
  data.canonical = data.canonical || local;

  return data;
};

module.exports = {
  isPublic,
  getPublic,
  fromCollection,
  findData,
  pageData,
  pageContent,
  withData,
  meta,
};
