'use strict';

const _ = require('lodash');

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
const styles = (dict) =>
  _(dict)
    .map((val, prop) => (val ? `${prop}:${val};` : ''))
    .reduce((all, one) => `${all}${one}`, '');

const imgSuffix = (imgSrc, suffix) => {
  const i = imgSrc.lastIndexOf('.');
  const path = imgSrc.substring(0, i);
  const extension = imgSrc.substring(i + 1);
  return `${path}-${suffix}.${extension}`;
};
module.exports = { typeCheck, styles, imgSuffix };
