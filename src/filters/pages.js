'use strict';

const path = require('path');

const removeMd = require('remove-markdown');
const _ = require('lodash');

/* @docs
label: Page Filters
category: File
*/

const isPublic = (page) => {
  const live = page.data.draft !== true;
  const title = page.data && page.data.title;
  return live && title;
};

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
label: withData
category: Filter
note: Return pages with particular data
params:
  collection:
    type: array of pages
  keys:
    type: string
    note: Any nested data attributes to get
  value:
    type: any
    note: Only get pages where the desired attributes have this value
*/
const withData = (collection, keys, value) =>
  collection.filter((page) =>
    value ? _.includes(_.get(page, keys), value) : _.hasIn(page, keys),
  );

/* @docs
label: getData
category: Data
note: Return combined data from a collection
example: |
  {# all events #}
  {{ collections.all | getData('data.events') }}
  {# all events with a venue #}
  {{ collections.all | getData('data.events', 'venue') }}
  {# all events with a venue of 'Smashing Conf' #}
  {{ collections.all | getData('data.events', {'venue': 'Smashing Conf'}) }}
params:
  collection:
    type: array
    note: often an array of pages, but can be an array of  any objects
  keys:
    type: string
    note: use dot-notation (`data.press`) for nested keys
  test:
    type: string | object
    default: undefined
    note: filter the resulting collection
*/
const getData = (collection, keys, test) => {
  const data = _.flatMap(_.filter(collection, keys), (page) =>
    _.get(page, keys),
  );
  return test ? _.filter(data, test) : data;
};

/* @docs
label: findData
category: Data
note: The same as getData, but only returns the first match in the collection
example: |
  {{ collections.all | findData('data.press', {'slug': 'handoff'}) }}
params:
  collection:
    type: array
    note: often an array of pages, but can be an array of  any objects
  keys:
    type: string
    note: use dot-notation (`data.press`) for nested keys
  test:
    type: string | object
    default: undefined
    note: filter the resulting collection
*/
const findData = (collection, keys, test) => getData(collection, keys, test)[0];

/* @docs
label: getPage
category: Data
note: Return a single page by url, or data from inside that page
example: |
  {{ collections.all | getPage('/work/timedesigner/', 'data.press') }}
params:
  collection:
    type: array
    note: often an array of pages, but can be an array of  any objects
  url:
    type: string
    note: The url of the desired page
  keys:
    type: string
    note: use dot-notation (`data.press`) for nested keys
  test:
    type: string | object
    default: undefined
    note: filter the resulting collection
*/
const getPage = (collection, url, keys, test) => {
  const page = _.find(collection, { url });
  const data = keys ? _.get(page, keys) : page;
  return test ? _.filter(data, test) : data;
};

/* @docs
label: pageContent
category: Data
note: Return the content of any page
params:
  collection:
    type: array of pages
  url:
    type: url
*/
const pageContent = (collection, url) =>
  getPage(collection, url, 'templateContent');

/* @docs
label: meta
category: Data
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
  page = getPage(collection, page.url) || page;
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
  getPage,
  getData,
  findData,
  pageContent,
  withData,
  meta,
};
