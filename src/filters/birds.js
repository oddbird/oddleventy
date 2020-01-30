'use strict';

const { withData, isCurrent } = require('./pages');
const { get } = require('./utils');

/* @docs
label: Bird Filters
category: File
note: Filtering data related to individual Odd Birds
*/

/* @docs
label: byBird
category: Pages
note: Get all the pages where a given bird is one of the authors
example: |
  {{ collections.all | byBird('miriam') }}
params:
  collection:
    type: array
    note: The 11ty collection of pages to filter
  bird:
    type: string
    note: The name of the bird (as used in `author` settings)
*/
const getPages = (collection, bird) =>
  collection.filter(
    (page) =>
      get(page.data, 'author', bird) || get(page.data, 'author', 'oddbird'),
  );

/* @docs
label: active
category: pages
note: |
  Return all active bird pages in a collection,
  sorted by active date.
example: |
  {{ collections.birds | active }}
params:
  collection:
    type: array
    note: The 11ty collection of pages to filter
*/
const active = (collection) =>
  collection
    .filter((page) => isCurrent(page) && page.data.bird !== 'oddbird')
    .sort((a, b) => a.data.title - b.data.title)
    .sort((a, b) => a.data.date - b.data.date);

/* @docs
label: authorPage
category: Pages
note: Return the home page of a given author
example: |
  {{ collections.all | authorPage('miriam') }}
params:
  collection:
    type: array
    note: The 11ty collection of pages to filter
  bird:
    type: string
    note: The name of the bird (as used in `author` settings)
*/
const authorPage = (collection, bird) => {
  if (bird) {
    bird = typeof bird === 'string' ? bird : `${bird[0]}`;
    return withData(collection, 'bird', bird, true);
  }

  return undefined;
};

module.exports = {
  getPages,
  active,
  authorPage,
};
