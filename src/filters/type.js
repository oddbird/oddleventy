'use strict';

const removeMd = require('remove-markdown');
const type = require('typogr');
const mdown = require('markdown-it')({
  html: true,
  breaks: false,
  linkify: true,
  typographer: true,
})
  .use(require('markdown-it-mark'))
  .use(require('markdown-it-footnote'));

/* @docs
label: Typography Filters
category: File
*/

/* @docs
label: typogr
links:
  - '[Typogr.js](https://github.com/ekalinin/typogr.js/)'
params:
  content:
    type: string
  inline:
    type: boolean
    default: false
    note: Inline typesetting removes the "widont" filter
*/
const typogr = (content, inline = false) => {
  if (content) {
    return inline
      ? type(content)
          .chain()
          .amp()
          .smartypants()
          .initQuotes()
          .caps()
          .ord()
          .value()
      : type.typogrify(content);
  }

  return content;
};

/* @docs
label: md
note: Block markdown with typesetting
params:
  content:
    type: string
*/
const md = (content) => (content ? typogr(mdown.render(content)) : content);

/* @docs
label: mdInline
note: Inline markdown with inline typesetting
params:
  content:
    type: string
*/
const mdInline = (content) =>
  content ? typogr(mdown.renderInline(content), true) : content;

module.exports = {
  mdown,
  typogr,
  md,
  mdInline,
  removeMd,
};
