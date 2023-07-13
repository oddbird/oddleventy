'use strict';

const fs = require('fs');

const yaml = require('js-yaml');
const _ = require('lodash');

const taxonomy = yaml.load(
  // eslint-disable-next-line no-sync
  fs.readFileSync('./content/_data/taxonomy.yaml', 'utf8'),
);

/* @docs
label: Taxonomy Filters
category: File
*/

/* @docs
label: fromTaxonomy
category: general
note: |
  Access the taxonomy directly.
  This can also be done in nunjucks,
  using the `taxonomy` global variable,
  but a filter makes that available
  from inside macros,
  without passing it in as an argument.
params:
  type:
    type: oss | post
    note: Any taxonomy defined in the `taxonomy.yaml` data file
  find:
    type: any
    default: undefined
    note: Optionally return an object in the taxonomy, using lodash `_.find()`
  get:
    type: string
    default: undefined
    note: Optionally return a single attribute of the found object
*/
const fromTaxonomy = (type, find, get) => {
  const source = taxonomy[type];
  const found = find ? _.find(source, find) : source;
  return found && get ? found[get] : found;
};

/* @docs
label: ossGroups
category: open-source
note: |
  Group a collection of open-source project-pages
  based on the type of OSS contribution made.
  Groups are defined in the `taxonomy.yaml` data file.
params:
  collection:
    type: array
    note: containing 11ty page objects
  only:
    type: string
    default: undefined
    note: Optionally return a single group, based on the group title
*/
const ossGroups = (collection, only) => {
  const grouped = {};

  taxonomy.oss.forEach((type) => {
    const pages = collection.filter((page) => {
      const all = type.all || [];
      const current = type.current || [];
      const past = type.past || [];
      const oss = page.data.oss;

      if (page.data.end) {
        return all.includes(oss) || past.includes(oss);
      }

      return all.includes(oss) || current.includes(oss);
    });
    if (pages.length) {
      grouped[type.title] = pages;
    }
  });

  return only ? grouped[only] : grouped;
};

/* @docs
label: pageType
category: posts
note: |
  Return one of several post "types"
  which we can use to provide different list styling
  or filtering.
  Types are defined in the `taxonomy.yaml` data file.
params:
  tags:
    type: array
  get:
    type: false | 'tag' | 'icon' | 'url' | 'display' | 'plural'
    default: undefined
    note: False will return the entire taxonomy of the type
*/
const pageType = (tags, get) => {
  const taglist = typeof tags === 'string' ? [tags] : tags || [];
  const type = taglist.reduce(
    (found, item) => found || fromTaxonomy('post', { tag: item }, get),
    null,
  );
  return type || false;
};

module.exports = {
  taxonomy,
  fromTaxonomy,
  ossGroups,
  pageType,
};
