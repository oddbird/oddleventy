import removeMd from 'remove-markdown';
import type from 'typogr';
import markdown from 'markdown-it';
import mdMark from 'markdown-it-mark';
import mdFootnote from 'markdown-it-footnote';

const mdown = markdown({
  html: true,
  breaks: false,
  linkify: true,
  typographer: true,
})
  .use(mdMark)
  .use(mdFootnote);

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

export { mdown, typogr, md, mdInline, removeMd };
