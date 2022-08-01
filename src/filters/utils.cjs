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
    .join('');

/* @docs
label: onlyShow
category: Filter
note: |
  Return only the first n items in a collection.
example: |

params:
  dict:
    type: object
    note: CSS property-value pairs
*/
const onlyShow = (array, n) => {
  if (n < 0) {
    return array.slice(n);
  }

  return array.slice(0, n);
};

module.exports = { typeCheck, styles, onlyShow };
