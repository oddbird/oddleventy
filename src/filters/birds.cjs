'use strict';

const { hasData, withData, isCurrent } = require('#/pages.cjs');

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
    note: containing 11ty page objects
  bird:
    type: string
    note: The name of the bird (as used in `author` settings)
  solo:
    type: boolean
    default: false
    note: Optionally remove `oddbird`-authored pages from the collection
*/
const getPages = (collection, bird, solo = false) =>
  collection.filter(
    (page) =>
      hasData(page, 'data.author', bird, true) ||
      (solo ? false : hasData(page, 'data.author', 'oddbird')),
  );

/* @docs
label: authorPage
category: Pages
note: Return the home page of a given author
example: |
  {{ collections.all | authorPage('miriam') }}
params:
  collection:
    type: array
    note: containing 11ty page objects
  bird:
    type: string
    note: The name of the bird (as used in `author` settings)
*/
const authorPage = (collection, bird) =>
  withData(collection, 'data.bird', bird, true)[0];

/* @docs
label: active
category: Status
note: |
  Return all active bird pages in a collection,
  sorted by active date.
example: |
  {{ collections.birds | active }}
params:
  collection:
    type: array
    note: containing 11ty page objects
  current:
    type: boolean
    default: 'true'
    note: Flip result to show inactive birds
*/
const active = (collection, current = true) =>
  collection.filter(
    (page) =>
      page.data.bird !== 'oddbird' &&
      (current ? isCurrent(page) : !isCurrent(page)),
  );

/* @docs
label: activeAuthor
category: Status
note: |
  Check if any author of a page is currently active
  (if 'oddbird' is an author, this will return true)
example: |
  {{ post | activeAuthor(collections.all) }}
params:
  page:
    type: 11ty page object
  all:
    type: array
    note: |
      Any collection that includes the author pages,
      such as `collections.all`
*/
const activeAuthor = (page, all) => {
  const author = page.data.author || [];
  const list = typeof author === 'string' ? [author] : author;
  return (
    list.includes('oddbird') ||
    list.some((name) => isCurrent(authorPage(all, name)))
  );
};

/* @docs
label: withActiveAuthor
category: Status
note: |
  Filter a collection to only include
  pages with a currently active author.
  (if 'oddbird' is an author, this will returrn true)
example: |
  {{ collections.oss | withActiveAuthor(collections.all) }}
params:
  collection:
    type: 11ty collection
    note: |
      The collection to filter
  all:
    type: array
    note: |
      Any collection that includes the author pages,
      such as `collections.all`
*/
const withActiveAuthor = (collection, all) =>
  collection.filter((page) => activeAuthor(page, all));

module.exports = {
  getPages,
  active,
  authorPage,
  activeAuthor,
  withActiveAuthor,
};
