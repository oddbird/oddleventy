'use strict';

const hljs = require('@11ty/eleventy-plugin-syntaxhighlight');

const utils = require('./src/filters/utils');
const pages = require('./src/filters/pages');
const events = require('./src/filters/events');
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
      .sort((a, b) => b.data.title - a.data.title),
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
  eleventyConfig.addFilter('styles', utils.styles);

  eleventyConfig.addFilter('getDate', time.getDate);
  eleventyConfig.addFilter('rssDate', time.rssDate);
  eleventyConfig.addFilter('rssLatest', time.rssLatest);

  eleventyConfig.addFilter('tagIsPublic', tags.isPublic);
  eleventyConfig.addFilter('publicTags', tags.publicTags);
  eleventyConfig.addFilter('getTags', tags.getTags);
  eleventyConfig.addFilter('tagData', tags.tagData);
  eleventyConfig.addFilter('displayName', tags.displayName);
  eleventyConfig.addFilter('tagLink', tags.tagLink);

  eleventyConfig.addFilter('meta', pages.meta);
  eleventyConfig.addFilter('getPage', pages.getPage);
  eleventyConfig.addFilter('hasData', pages.hasData);
  eleventyConfig.addFilter('getData', pages.getData);
  eleventyConfig.addFilter('findData', pages.findData);
  eleventyConfig.addFilter('withData', pages.withData);
  eleventyConfig.addFilter('pageContent', pages.pageContent);
  eleventyConfig.addFilter('render', pages.render);
  eleventyConfig.addFilter('pageType', pages.pageType);
  eleventyConfig.addFilter('getPublic', pages.getPublic);

  eleventyConfig.addFilter('buildEvent', events.buildEvent);
  eleventyConfig.addFilter('includeEvents', events.includeEvents);

  eleventyConfig.addFilter('byBird', birds.getPages);
  eleventyConfig.addFilter('active', birds.active);
  eleventyConfig.addFilter('authorPage', birds.authorPage);

  eleventyConfig.addFilter('typogr', type.typogr);
  eleventyConfig.addFilter('md', type.md);
  eleventyConfig.addFilter('mdInline', type.mdInline);
  eleventyConfig.addFilter('removeMd', type.removeMd);

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
