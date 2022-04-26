'use strict';

const removeMd = require('@tommoor/remove-markdown');
const _ = require('lodash');
const markdown = require('markdown-it');
const mdAnchor = require('markdown-it-anchor');
const mdFootnote = require('markdown-it-footnote');
const mdMark = require('markdown-it-mark');
const striptags = require('striptags');
const truncate = require('truncate-html');
const type = require('typogr');

const mdown = markdown({
  html: true,
  breaks: false,
  typographer: true,
})
  .disable('code')
  .use(mdAnchor, {
    level: [2],
    permalink: mdAnchor.permalink.linkAfterHeader({
      symbol:
        '<svg data-icon="link" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" viewBox="0 0 20 20"> <path d="M10.682 12.998c-0.943 0-1.886-0.359-2.604-1.077-0.195-0.195-0.195-0.512 0-0.707s0.512-0.195 0.707 0c1.046 1.046 2.747 1.046 3.793 0l3.636-3.636c1.046-1.046 1.046-2.747 0-3.793s-2.747-1.046-3.793 0l-3.068 3.068c-0.195 0.195-0.512 0.195-0.707 0s-0.195-0.512 0-0.707l3.068-3.068c1.436-1.436 3.772-1.436 5.207 0s1.436 3.772 0 5.207l-3.636 3.636c-0.718 0.718-1.661 1.077-2.604 1.077z"></path><path d="M4.682 18.998c-0.943 0-1.886-0.359-2.604-1.077-1.436-1.436-1.436-3.772 0-5.207l3.636-3.636c1.436-1.436 3.772-1.436 5.207 0 0.195 0.195 0.195 0.512 0 0.707s-0.512 0.195-0.707 0c-1.046-1.046-2.747-1.046-3.793 0l-3.636 3.636c-1.046 1.046-1.046 2.747 0 3.793s2.747 1.046 3.793 0l3.068-3.068c0.195-0.195 0.512-0.195 0.707 0s0.195 0.512 0 0.707l-3.068 3.068c-0.718 0.718-1.661 1.077-2.604 1.077z"></path></svg>',
      style: 'visually-hidden',
      assistiveText: (title) => `Permalink to “${title}”`,
      visuallyHiddenClass: 'sr-only',
      wrapper: ['<div class="anchor-link-wrapper">', '</div>'],
      placement: 'before',
    }),
  })
  .use(mdMark)
  .use(mdFootnote);

/* @docs
label: Typography Filters
category: File
*/

/* @docs
label: typogr
category: typesetting
links:
  - '[Typogr.js](https://github.com/ekalinin/typogr.js/)'
params:
  content:
    type: string
  inline:
    type: boolean
    default: false
    note: |
      Inline typesetting removes the "widont" filter
      if the text has fewer than 5 words
*/
const typogr = (content, inline = false) => {
  if (content) {
    // if this is inline text with less than 5 words
    // avoid the "widont" feature
    return inline && content.split(' ').length < 5
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
category: typesetting
note: Block markdown with typesetting
params:
  content:
    type: string
*/
const md = (content) => (content ? typogr(mdown.render(content)) : content);

/* @docs
label: mdInline
category: typesetting
note: Inline markdown with inline typesetting
params:
  content:
    type: string
*/
const mdInline = (content) =>
  content ? typogr(mdown.renderInline(content), true) : content;

/* @docs
label: elide
category: typesetting
note: |
  Elide HTML at a given word count,
  and append `…` if elided.
params:
  html:
    type: string
  count:
    type: Number
    default: 50
*/
const elide = (html, count = 50) => {
  // Strip links, paragraph breaks, etc:
  const stripped = striptags(html.trim(), ['code', 'strong', 'em']);
  // Truncate stripped html:
  let truncated = truncate(stripped, count, { byWords: true, ellipsis: '…' });
  // This will catch both cases where no truncation was needed, but also
  // (unintentionally) cases where the truncation is within a final tag
  // (e.g. `<em>final words…</em>`) -- but that's probably good enough for now?
  if (!truncated.endsWith('…')) {
    return truncated;
  }
  // Strip non-alphanumeric trailing chars (e.g. commas, periods):
  if (truncated.slice(-2, -1).match(/[^A-Z|a-z|0-9]/) !== null) {
    truncated = `${truncated.slice(0, -2)}…`;
  }
  return truncated;
};

/* @docs
label: h
category: headings
note: Generate a heading at any given level
params:
  content:
    type: string
  level:
    type: Number (1-6)
  attrs:
    type: object
*/
const heading = (content, level, attrs = {}) => {
  const attr_html = _(attrs)
    .map((val, attr) => {
      if (!val) {
        return undefined;
      }
      return typeof val === 'boolean' || val === ''
        ? `${attr}`
        : `${attr}="${val}"`;
    })
    .compact()
    .uniq()
    .join(' ');

  return `<h${level} ${attr_html}>${content}</h${level}>`;
};

module.exports = {
  mdown,
  elide,
  typogr,
  md,
  mdInline,
  removeMd,
  heading,
};
