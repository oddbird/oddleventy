'use strict';

const slugify = require('slugify');
const _ = require('lodash');

const { pageType } = require('#/taxonomy');
const { withData, getData } = require('#/pages');

/* @docs
label: Tag Filters
category: File
*/

/* @docs
label: isPublic
category: Visibility
note: Return false if a tag name starts with `_`
params:
  tag:
    type: string
*/
const isPublic = (tag) => !tag.startsWith('_');

/* @docs
label: publicTags
category: Visibility
note: Remove private `_<name>` tags from a list
params:
  tags:
    type: array
*/
const publicTags = (tags) => (tags || []).filter((tag) => isPublic(tag));

/* @docs
label: displayName
category: Visibility
note: |
  Returns a tag name with private `_` removed,
  for those rare cases where we want to display private tags.
params:
  tag:
    type: string
*/
const displayName = (tag) => {
  const capitalize = ([first, ...rest]) =>
    first ? first.toUpperCase() + rest.join('') : '';

  if (!tag) {
    return '';
  }
  return tag.startsWith('_') ? capitalize(tag.slice(1)) : capitalize(tag);
};

/* @docs
label: tagLink
category: Links
note: |
  Returns the link for a given tag --
  either the auto-generated tag page,
  or page marked as `index` for that tag
params:
  all:
    type: array
    note: containing all 11ty page objects (`collections.all`)
  tag:
    type: string
*/
const tagLink = (all, tag) => {
  const index =
    withData(all, 'data.index', tag, true)[0] ||
    withData(all, 'data.index.slug', tag, true)[0];
  return index ? index.url : `/tags/${slugify(tag, { lower: true })}/`;
};

/* @docs
label: getTags
category: List
note: Returns all tags in a collection
params:
  collection:
    type: array
    note: containing 11ty page objects
*/
const getTags = (collection) => getData(collection, 'data.tags');

/* @docs
label: tagData
category: List
note: |
  Returns an array tag-data objects for each tag,
  including name, url, and page count
params:
  collections:
    type: 11ty collections object
  tags:
    type: array | 'all'
    default: undefined
    note: Will return data for all tags when set to `all`
*/
const tagData = (collections, tags) => {
  const tagList = tags === 'all' ? getTags(collections.all) : tags;
  return _.uniq(publicTags(tagList)).map((tag) => {
    const type = pageType(tag);
    return {
      tag,
      type,
      is_type: Boolean(type),
      url: tagLink(collections.all, tag),
      pageCount: (collections[tag] || []).length,
    };
  });
};

module.exports = {
  isPublic,
  publicTags,
  getTags,
  tagData,
  displayName,
  tagLink,
};
