'use strict';

const { just, get, getJust } = require('./utils');
const { now, getDate } = require('./time');

/* @docs
label: Page Filters
category: File
*/

/* @docs
label: isPublic
category: Status
note: Check that a page is
params:
  collection:
    type: array of pages
*/
const isPublic = (page) => {
  const live = page.data.draft !== true;
  const title = page.data && page.data.title;
  return live && title;
};

/* @docs
label: isCurrent
category: Status
note: Check that the page does not have an end date
params:
  collection:
    type: array of pages
*/
const isCurrent = (page) =>
  page.data.end === 'ongoing' || !page.data.end || getDate(page.data.end) > now;

/* @docs
label: getPublic
category: Filter
note: Return only the public pages from a collection
params:
  collection:
    type: array of pages
*/
const getPublic = (collection) => collection.filter((page) => isPublic(page));

/* @docs
label: getPage
category: Filter
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
category: Data
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
category: Data
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
category: Data
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
category: Filter
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

module.exports = {
  isPublic,
  isCurrent,
  getPublic,
  fromCollection,
  findData,
  pageData,
  pageContent,
  withData,
};
