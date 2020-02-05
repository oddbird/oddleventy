'use strict';

/* @docs
label: Utility Filters
category: File
*/

/* @docs
label: typeCheck
category: Inspect
note: Return either the type, or the result of a type-check.
example: |
  {{ my_data | typeCheck('array') }}
params:
  val:
    type: any
    note: The data to check
  is:
    type: string
    default: undefined
    note: Optionally check for a particular type
*/
const typeCheck = (val, is) => {
  const type = typeof val;
  return is ? type === is : type;
};

/* @docs
label: items
category: Data
note: |
  The built-in nunjucks `slice` filter returns
  an array of arrays at a given length.
  This filter acts more like the js `array.slice()`,
  returning a single sub-array from a given start index,
  to the given end (or end of array).
example: |
  {# the first 5 items in a list #}
  {% for item in my_array | items(0, 5) %}
params:
  list:
    type: array
  start:
    type: 0-index
  end:
    type: 0-index
*/
const items = (list, start, end) => list.slice(start, end);

/* @docs
label: styles
category: Formatting
note: |
  Convert an object of property-value pairs
  into valid CSS for an inline-style.
example: |
  <div style="{{ style_dict | styles }}">
params:
  dict:
    type: object
    note: CSS property-value pairs
*/
const styles = (dict) => {
  const map = Object.keys(dict).map((prop) => {
    const val = dict[prop];
    return val ? `${prop}:${val};` : '';
  });
  return map.reduce((all, one) => `${all}${one}`, '');
};

// Not currently available as filters…
// -----------------------------------
// Slugify & groupBy already have built-in filters,
// but we need a JS version as well…

const slugify = (text) =>
  text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w-]+/g, '') // Remove all non-word chars
    .replace(/--+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, ''); // Trim - from end of text

const groupBy = (objectArray, property) =>
  objectArray.reduce((acc, obj) => {
    const key = obj[property];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});

// -----------------------------------

module.exports = {
  groupBy,
  typeCheck,
  slugify,
  items,
  styles,
};
