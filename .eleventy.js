'use strict';

const hljs = require('@11ty/eleventy-plugin-syntaxhighlight');

const utils = require('./src/filters/utils');
const pages = require('./src/filters/pages');
const tags = require('./src/filters/tags');
const time = require('./src/filters/time');
const type = require('./src/filters/type');
const birds = require('./src/filters/birds');

module.exports = (eleventyConfig) => {
  eleventyConfig.setUseGitIgnore(false);
  eleventyConfig.addPlugin(hljs);

  // pass-through
  eleventyConfig.addPassthroughCopy({ _built: 'assets' });
  eleventyConfig.addPassthroughCopy({ 'src/fonts': 'assets/fonts' });
  eleventyConfig.addPassthroughCopy({ 'src/images': 'assets/images' });
  eleventyConfig.addPassthroughCopy({ 'src/media': 'assets/media' });

  eleventyConfig.addPassthroughCopy({ 'src/docs/susy': 'susy/docs' });
  eleventyConfig.addPassthroughCopy({ 'src/docs/herman': 'herman/docs' });
  eleventyConfig.addPassthroughCopy({ 'src/docs/true': 'true/docs' });
  eleventyConfig.addPassthroughCopy({
    'src/docs/accoutrement': 'accoutrement/docs',
  });

  eleventyConfig.addPassthroughCopy('content/robots.txt');
  eleventyConfig.addPassthroughCopy('content/favicon.ico');

  // collections
  eleventyConfig.addCollection('birds', (collection) =>
    collection
      .getAll()
      .filter((item) => item.data.bird)
      .sort((a, b) => a.data.title - b.data.title),
  );
  eleventyConfig.addCollection('oss', (collection) =>
    collection
      .getAll()
      .filter((item) => item.data.oss)
      .sort((a, b) => a.data.date - b.data.date),
  );
  eleventyConfig.addCollection('sample', (collection) =>
    collection.getAll().filter((item) => item.data.sample),
  );

  // filters
  eleventyConfig.addFilter('merge', () =>
    [...arguments].reduce((all, current) => ({ ...all, ...current }), {}),
  );
  eleventyConfig.addFilter('typeCheck', utils.typeCheck);
  eleventyConfig.addFilter('items', utils.items);
  eleventyConfig.addFilter('get', utils.get);
  eleventyConfig.addFilter('just', utils.just);
  eleventyConfig.addFilter('getJust', utils.getJust);
  eleventyConfig.addFilter('styles', utils.styles);

  eleventyConfig.addFilter('getDate', time.getDate);
  eleventyConfig.addFilter('rssDate', time.rssDate);
  eleventyConfig.addFilter('rssLatest', time.rssLatest);

  eleventyConfig.addFilter('isPublic', tags.isPublic);
  eleventyConfig.addFilter('publicTags', tags.publicTags);
  eleventyConfig.addFilter('allTags', tags.allTags);
  eleventyConfig.addFilter('tagData', tags.tagData);
  eleventyConfig.addFilter('displayName', tags.displayName);
  eleventyConfig.addFilter('tagLink', tags.tagLink);

  eleventyConfig.addFilter('meta', pages.meta);
  eleventyConfig.addFilter('getPage', pages.fromCollection);
  eleventyConfig.addFilter('pageData', pages.pageData);
  eleventyConfig.addFilter('findData', pages.findData);
  eleventyConfig.addFilter('pageContent', pages.pageContent);
  eleventyConfig.addFilter('getPublic', pages.getPublic);
  eleventyConfig.addFilter('withData', pages.withData);

  eleventyConfig.addFilter('byBird', birds.getPages);
  eleventyConfig.addFilter('active', birds.active);
  eleventyConfig.addFilter('authorPage', birds.authorPage);

  eleventyConfig.addFilter('typogr', type.typogr);
  eleventyConfig.addFilter('md', type.md);
  eleventyConfig.addFilter('mdInline', type.mdInline);

  // shortcodes
  eleventyConfig.addPairedShortcode('md', type.md);
  eleventyConfig.addPairedShortcode('mdInline', type.mdInline);
  eleventyConfig.addShortcode(
    'getDate',
    (format) => `${time.getDate(time.now, format)}`,
  );

  // markdown
  eleventyConfig.setLibrary('md', type.mdown);

  // settings
  return {
    markdownTemplateEngine: 'njk',
    dir: {
      input: 'content',
      includes: '_includes',
      layouts: '_layouts',
    },
  };
};
