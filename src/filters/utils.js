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
label: get
category: Inspect
note: |
  Returns true if an object contains a particular attribute
  or attr:value pair,
  including values inside an array.
example: |
  {% if page.data | get('author', 'miriam') %}
params:
  obj:
    type: object
  attrs:
    type: string | array
    note: Attribute to filter for
  value:
    type: any
    default: undefined
    note: Optional value to find within the attribute
*/
const get = (obj, attrs, value) => {
  attrs = typeof attrs === 'string' ? [attrs] : attrs || [];

  if (attrs && attrs.length) {
    attrs.forEach((attr) => {
      obj = obj[attr];
    });
  }

  if (value && obj) {
    return obj === value || (Array.isArray(obj) && obj.includes(value));
  }

  return obj;
};

/* @docs
label: just
category: Data
note: |
  Returns a filtered array of objects with a given attribute,
  or the first object where that attribute is equal to a particular value.
example: |
  {{ embed.figure(media | just('audio')) }}
  {{ quotes.blockquote(press | just('slug', 'extension')) }}
params:
  array:
    type: array of objects
  attrs:
    type: string | array
    note: Attribute to filter for
  value:
    type: any
    default: undefined
    note: Optional attribute-value to just
*/
const just = (array, attrs, value) => {
  const items = array.filter((item) => get(item, attrs, value));
  return items && value ? items[0] : items;
};

/* @docs
label: getJust
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
  data:
    type: object
  attrs:
    type: string | array
    note: The attributes to get
  test:
    type: object
    note: attribute/value pairs to find in the resulting array
*/
const getJust = (data, attrs, test) => {
  data = get(data, attrs);

  if (data && test) {
    Object.keys(test).forEach((key) => {
      data = just(data, key, test[key]);
    });
  }

  return data;
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
  text && typeof text === 'string'
    ? text
        .toString()
        .toLowerCase()
        .replace(/\s+/g, '-') // Replace spaces with -
        .replace(/[^\w-]+/g, '') // Remove all non-word chars
        .replace(/--+/g, '-') // Replace multiple - with single -
        .replace(/^-+/, '') // Trim - from start of text
        .replace(/-+$/, '') // Trim - from end of text
    : text;

const groupBy = (objectArray, property) =>
  objectArray.reduce((acc, obj) => {
    const key = obj[property];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});

const unique = (array) =>
  array.filter((value, index, self) => self.indexOf(value) === index);

// -----------------------------------

module.exports = {
  groupBy,
  typeCheck,
  slugify,
  unique,
  items,
  get,
  just,
  getJust,
  styles,
};
