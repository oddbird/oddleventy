import _ from 'lodash-es';

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
export const typeCheck = (val, is) => {
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
export const styles = (dict) =>
  _(dict)
    .map((val, prop) => (val ? `${prop}:${val};` : ''))
    .join('');

/* @docs
label: onlyShow
category: Filter
note: |
  Return only the first n items in a collection.
params:
  dict:
    type: object
    note: CSS property-value pairs
*/
export const onlyShow = (array, n) => {
  if (n < 0) {
    return array.slice(n);
  }

  return array.slice(0, n);
};

/* @docs
label: oddNewsTags
category: Filter
note: |
  Returns the matching mailchimp form tag
  for the page where the signup form lives |
params:
  name:
    type: string
    note: name of page such as 'footer'
*/
export const oddNewsTags = (name) => {
  switch (name) {
    case 'footer':
      return '6264369';
    case 'oddblog':
      return '6265233';
    case 'oddnews':
      return '6265089';
    default:
      return '';
  }
};

/* @docs
label: getSort
category: Filter
note: |
  Returns a sort compare function for the provided attribute.
params:
  attr:
    type: string
    note: Attribute by which to sort
  reverse:
    type: boolean
    default: false
    note: If `true`, sorts descending
*/
export const getSort =
  (attr, reverse = false) =>
  (a, b) => {
    if (a[attr] < b[attr]) {
      return reverse ? 1 : -1;
    }
    if (a[attr] > b[attr]) {
      return reverse ? -1 : 1;
    }
    return 0;
  };
