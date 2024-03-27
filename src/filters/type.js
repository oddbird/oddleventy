import rmMd from '@tommoor/remove-markdown';
import _ from 'lodash-es';
import markdown from 'markdown-it';
import mdAnchor from 'markdown-it-anchor';
import mdFootnote from 'markdown-it-footnote';
import mdMark from 'markdown-it-mark';
import posthtml from 'posthtml';
import striptags from 'striptags';
import truncate from 'truncate-html';
import typogrify from 'typogr';

import { anchorLinkIconString } from '../js/clickToCopy.js';

export const removeMd = rmMd;

export const mdown = markdown({
  html: true,
  typographer: true,
})
  .use(mdAnchor, {
    level: [2],
    permalink: mdAnchor.permalink.linkAfterHeader({
      class: 'header-anchor',
      symbol: anchorLinkIconString,
      style: 'visually-hidden',
      assistiveText: (title) => `Copy permalink to “${title}”`,
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
*/
export const typogr = (content) =>
  content
    ? typogrify(content)
        .chain()
        .amp()
        .smartypants()
        .caps()
        .initQuotes()
        .ord()
        .value()
    : content;

/* @docs
label: md
category: typesetting
note: Block markdown with typesetting
params:
  content:
    type: string
*/
export const md = (content) => (content ? mdown.render(content) : content);

/* @docs
label: mdInline
category: typesetting
note: Inline markdown with typesetting
params:
  content:
    type: string
*/
export const mdInline = (content) =>
  content ? mdown.renderInline(content) : content;

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
export const elide = (html, count = 50) => {
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
label: stripPermalinks
category: RSS
note: |
  Remove permalinks from headings
params:
  html:
    type: string
*/
export const stripPermalinks = async (html) => {
  const modifier = posthtml().use((tree) => {
    if (!Array.isArray(tree) || !tree.length) {
      return tree;
    }
    tree.walk((node) => {
      const classes =
        node.attrs?.class?.split(' ')?.map((c) => c.trim().toLowerCase()) || [];
      if (node.tag === 'a' && classes.includes('header-anchor')) {
        node.tag = false;
        node.content = [];
      }
      return node;
    });
    return tree;
  });
  const result = await modifier.process(html);
  return result.html;
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
export const heading = (content, level, attrs = {}) => {
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

/* @docs
label: callout
category: callouts
note: |
  Add callout boxes for highlighted content,
  e.g. `{% callout type, label %}content{% endcallout %}`
params:
  content:
    type: markdown string
  type:
    type: string
    default: 'note'
    note: |
      The primary expected values are 'note' or 'warn',
      though we currently only have styling for 'note' callouts.
  label:
    type: string | boolean
    default: true
    note: |
      `true` label will default to
      'Note' when the type is 'note',
      'Warning' when the type is 'warn',
      and otherwise the type as given.
*/
export const callout = (content, type = 'note', label = true) => {
  const labels = {
    note: 'Note',
    warn: 'Warning',
  };
  const displayLabel = label
    ? (typeof label === 'string' && label) || labels[type] || type
    : null;

  return `<div data-callout="${type}">${
    displayLabel ? `<strong>${displayLabel}:</strong>` : ''
  }<div>${md(content.trim())}</div></div>`;
};
