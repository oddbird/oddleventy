'use strict';

const { typogrify } = require('typogr');
const mdown = require('markdown-it')({
  html: true,
  breaks: false,
  linkify: true,
  typographer: true,
})
  .use(require('markdown-it-mark'))
  .use(require('markdown-it-footnote'));

const amp = (s) => {
  const r = '<span class="amp">&</span>';
  return s ? s.replace(/&amp;/g, '&').replace(/&/g, r) : s;
};

const set = (content, typeset = true) => {
  if (content && typeset) {
    return typeset === 'amp' ? amp(content) : typogrify(content);
  }

  return content;
};
const render = (content, typeset = true) => {
  const md = mdown.render(content);
  return typeset ? set(md, typeset) : md;
};

const inline = (content, typeset = true) => {
  const md = mdown.renderInline(content);
  return typeset ? set(md, typeset) : md;
};

module.exports = {
  mdown,
  amp,
  set,
  render,
  inline,
};
