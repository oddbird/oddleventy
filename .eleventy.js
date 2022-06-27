'use strict';

const rss = require('@11ty/eleventy-plugin-rss');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const yaml = require('js-yaml');
const _ = require('lodash');

const birds = require('#/birds');
const events = require('#/events');
const images = require('#/images');
const pages = require('#/pages');
const tags = require('#/tags');
const taxonomy = require('#/taxonomy');
const time = require('#/time');
const type = require('#/type');
const utils = require('#/utils');

module.exports = (eleventyConfig) => {
  eleventyConfig.setUseGitIgnore(false);
  eleventyConfig.setWatchThrottleWaitTime(100);
  eleventyConfig.addPlugin(rss);
  eleventyConfig.addPlugin(syntaxHighlight);

  // pass-through
  eleventyConfig.addPassthroughCopy({ _built: 'assets' });
  eleventyConfig.addPassthroughCopy({ 'src/media': 'assets/media' });

  // Open Source project documentation
  eleventyConfig.addPassthroughCopy({
    'src/docs/cascading-colors': 'cascading-colors/docs',
  });
  eleventyConfig.addPassthroughCopy({ 'src/docs/blend': 'blend/docs' });
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
      .sort((a, b) => a.date - b.date),
  );
  eleventyConfig.addCollection('_sorted-posts', (collection) =>
    pages.eventSort(collection.getFilteredByTag('_post')),
  );
  eleventyConfig.addCollection('oss', (collection) =>
    collection
      .getAll()
      .filter((item) => item.data.oss)
      .sort((a, b) => {
        if (a.data.feature && !b.data.feature) {
          return -1;
        }
        if (b.data.feature && !a.data.feature) {
          return 1;
        }

        if (a.data.end !== b.data.end) {
          if (!a.data.end) {
            return -1;
          }
          if (!b.data.end) {
            return 1;
          }
          return b.data.end - a.data.end;
        }

        return b.date - a.date;
      }),
  );
  eleventyConfig.addCollection('work', (collection) =>
    collection
      .getAll()
      .filter((item) => item.data.client)
      .sort((a, b) => {
        if (!a.data.end) {
          return b.data.end ? -1 : b.date - a.date;
        }
        if (!b.data.end) {
          return 1;
        }
        return b.data.end - a.data.end;
      }),
  );
  eleventyConfig.addCollection('sample', (collection) =>
    collection.getAll().filter((item) => item.data.sample),
  );

  // filters
  eleventyConfig.addFilter('concat', _.concat);
  eleventyConfig.addFilter('merge', _.merge);
  eleventyConfig.addFilter('group', _.groupBy);

  eleventyConfig.addFilter('typeCheck', utils.typeCheck);
  eleventyConfig.addFilter('styles', utils.styles);
  eleventyConfig.addFilter('onlyShow', utils.onlyShow);

  eleventyConfig.addFilter('getDate', time.getDate);

  eleventyConfig.addFilter('tagIsPublic', tags.isPublic);
  eleventyConfig.addFilter('publicTags', tags.publicTags);
  eleventyConfig.addFilter('getTags', tags.getTags);
  eleventyConfig.addFilter('tagData', tags.tagData);
  eleventyConfig.addFilter('displayName', tags.displayName);
  eleventyConfig.addFilter('tagLink', tags.tagLink);

  eleventyConfig.addFilter('isPublic', pages.isPublic);
  eleventyConfig.addFilter('getPublic', pages.getPublic);
  eleventyConfig.addFilter('isCurrent', pages.isCurrent);
  eleventyConfig.addFilter('getCurrent', pages.getCurrent);
  eleventyConfig.addFilter('getPage', pages.getPage);
  eleventyConfig.addFilter('findPage', pages.findPage);
  eleventyConfig.addFilter('hasData', pages.hasData);
  eleventyConfig.addFilter('getData', pages.getData);
  eleventyConfig.addFilter('findData', pages.findData);
  eleventyConfig.addFilter('withData', pages.withData);
  eleventyConfig.addFilter('pageYears', pages.pageYears);
  eleventyConfig.addFilter('eventSort', pages.eventSort);
  eleventyConfig.addFilter('byYear', pages.byYear);
  eleventyConfig.addFilter('removePage', pages.removePage);

  eleventyConfig.addFilter('fromTaxonomy', taxonomy.fromTaxonomy);
  eleventyConfig.addFilter('ossGroups', taxonomy.ossGroups);
  eleventyConfig.addFilter('pageType', taxonomy.pageType);

  eleventyConfig.addFilter('buildEvent', events.buildEvent);
  eleventyConfig.addFilter('getEvents', events.getEvents);
  eleventyConfig.addFilter('pageEvents', events.pageEvents);
  eleventyConfig.addFilter('isFuture', events.isFuture);
  eleventyConfig.addFilter('getFuture', events.getFuture);

  eleventyConfig.addFilter('byBird', birds.getPages);
  eleventyConfig.addFilter('active', birds.active);
  eleventyConfig.addFilter('authorPage', birds.authorPage);
  eleventyConfig.addFilter('activeAuthor', birds.activeAuthor);
  eleventyConfig.addFilter('withActiveAuthor', birds.withActiveAuthor);

  eleventyConfig.addFilter('typogr', type.typogr);
  eleventyConfig.addFilter('md', type.md);
  eleventyConfig.addFilter('mdInline', type.mdInline);
  eleventyConfig.addFilter('removeMd', type.removeMd);
  eleventyConfig.addFilter('elide', type.elide);

  eleventyConfig.addFilter('max', (array) => Math.max(...array));

  eleventyConfig.addFilter('imgSrc', (src) =>
    images.image(src, null, null, null, true),
  );

  // shortcodes
  eleventyConfig.addPairedShortcode('md', type.md);
  eleventyConfig.addPairedShortcode('mdInline', type.mdInline);
  eleventyConfig.addPairedShortcode('h', type.heading);
  eleventyConfig.addShortcode('getDate', (format) =>
    time.getDate(time.now(), format),
  );
  eleventyConfig.addNunjucksShortcode('image', images.image);

  // config
  eleventyConfig.setLibrary('md', type.mdown);
  eleventyConfig.addDataExtension('yaml', yaml.load);
  eleventyConfig.setQuietMode(true);

  // settings
  return {
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: {
      input: 'content',
      includes: '_includes',
      layouts: '_layouts',
    },
  };
};
