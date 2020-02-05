'use strict';

const { withData } = require('./pages');

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
  withData(collection, 'data.author', bird);

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
const authorPage = (collection, bird) =>
  withData(collection, 'data.bird', bird)[0];

module.exports = {
  getPages,
  authorPage,
};
