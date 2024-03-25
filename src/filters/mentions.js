import sanitizeHTML from 'sanitize-html';
import truncate from 'truncate-html';

/* @docs
label: Webmention Filters
category: File
*/

// define which types of webmentions are included by default
// possible values listed here:
// https://github.com/aaronpk/webmention.io#find-links-of-a-specific-type-to-a-specific-page
const defaultTypes = ['mention-of', 'in-reply-to'];

// sort webmentions by published timestamp chronologically.
// swap a.published and b.published to reverse order.
const orderByDate = (a, b) => new Date(a.published) - new Date(b.published);

const normalizeURL = (input) => {
  const url = new URL(input);
  url.search = url.hash = '';
  const output = url.toString();
  if (!output.endsWith('/')) {
    return `${output}/`;
  }
  return output;
};

// clean webmention content for output
const clean = (entry) => {
  const { html, text } = entry.content;

  if (html) {
    let truncated = truncate(html, 50, { byWords: true, ellipsis: '…' });
    // Strip non-alphanumeric trailing chars (e.g. commas, periods):
    if (
      truncated.endsWith('…') &&
      truncated.slice(-2, -1).match(/[^A-Z|a-z|0-9]/) !== null
    ) {
      truncated = `${truncated.slice(0, -2)}…`;
    }
    entry.content.value = sanitizeHTML(truncated);
  } else {
    entry.content.value = sanitizeHTML(text);
  }

  return entry;
};

const getTypes = (mentions, allow) =>
  // run all of the above for each webmention that targets the current URL
  mentions
    .filter((entry) => (allow || defaultTypes).includes(entry['wm-property']))
    .sort(orderByDate)
    .map(clean);

/* @docs
label: forUrl
category: Filter
note: |
  Filter list of Webmentions by a given URL and webmention type (`wm-property`)
example: |
  {% set mentions = webmentions | forUrl(abs_url, ['mention-of']) %}
params:
  mentions:
    type: object
    note: |
      Webmentions object, with list of `children` webmentions
      (see `/content/_data/webmentions.json`)
  url:
    type: url
    note: Absolute URL to filter webmentions by
  allow:
    type: array
    default: "['mention-of', 'in-reply-to']"
    note: |
      Containing string webmention types to filter by
      (see [https://github.com/aaronpk/webmention.io#find-links-of-a-specific-type-to-a-specific-page]())
*/
export const forUrl = (mentions, url, allow) =>
  getTypes(
    mentions.children.filter(
      (entry) =>
        normalizeURL(entry['wm-target']) === normalizeURL(url) &&
        !entry['wm-private'],
    ),
    allow,
  );
