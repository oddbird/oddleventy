/* eslint-disable no-process-env */

import rss from '@11ty/eleventy-plugin-rss';
import syntaxHighlight from '@11ty/eleventy-plugin-syntaxhighlight';
import fs from 'fs-extra';
import yaml from 'js-yaml';
import { concat, groupBy, merge } from 'lodash-es';

import * as birds from '#filters/birds.js';
import * as events from '#filters/events.js';
import * as images from '#filters/images.js';
import * as mentions from '#filters/mentions.js';
import * as pages from '#filters/pages.js';
import * as tags from '#filters/tags.js';
import * as taxonomy from '#filters/taxonomy.js';
import * as time from '#filters/time.js';
import * as type from '#filters/type.js';
import * as utils from '#filters/utils.js';

export default (eleventyConfig) => {
  eleventyConfig.setUseGitIgnore(false);
  eleventyConfig.setWatchThrottleWaitTime(100);
  eleventyConfig.addPlugin(rss);
  eleventyConfig.addPlugin(syntaxHighlight, {
    errorOnInvalidLanguage: true,
  });

  // pass-through
  eleventyConfig.addPassthroughCopy({ _built: 'assets' });
  eleventyConfig.addPassthroughCopy({ 'src/media': 'assets/media' });

  eleventyConfig.addPassthroughCopy('content/robots.txt');
  eleventyConfig.addPassthroughCopy('content/favicon.ico');

  // https://www.11ty.dev/docs/copy/#emulate-passthrough-copy-during-serve
  // Used because: https://github.com/11ty/eleventy/issues/2297
  eleventyConfig.setServerPassthroughCopyBehavior('passthrough');

  // collections
  eleventyConfig.addCollection('birds', (collectionApi) =>
    collectionApi
      .getAll()
      .filter((item) => item.data.bird)
      .sort((a, b) => a.page.date - b.page.date),
  );
  eleventyConfig.addCollection('oss', (collectionApi) =>
    collectionApi
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

        return b.page.date - a.page.date;
      }),
  );
  eleventyConfig.addCollection('work', (collectionApi) =>
    collectionApi
      .getAll()
      .filter((item) => item.data.client)
      .sort((a, b) => {
        if (!a.data.end) {
          return b.data.end ? -1 : b.page.date - a.page.date;
        }
        if (!b.data.end) {
          return 1;
        }
        return b.data.end - a.data.end;
      }),
  );
  eleventyConfig.addCollection('sample', (collectionApi) =>
    collectionApi.getAll().filter((item) => item.data.sample_content),
  );
  eleventyConfig.addCollection('posts', (collectionApi) => {
    const posts = collectionApi.getFilteredByTag('_post');
    return pages.eventSort(posts);
  });

  // filters
  eleventyConfig.addFilter('concat', concat);
  eleventyConfig.addFilter('merge', merge);
  eleventyConfig.addFilter('group', groupBy);

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
  eleventyConfig.addFilter('addCallToAction', pages.addCallToAction);
  eleventyConfig.addFilter('isType', pages.isType);
  eleventyConfig.addFilter('isHome', pages.isHome);

  eleventyConfig.addFilter('fromTaxonomy', taxonomy.fromTaxonomy);
  eleventyConfig.addFilter('ossGroups', taxonomy.ossGroups);
  eleventyConfig.addFilter('pageType', taxonomy.pageType);

  eleventyConfig.addFilter('buildEvent', events.buildEvent);
  eleventyConfig.addFilter('getEvents', events.getEvents);
  eleventyConfig.addFilter('pageEvents', events.pageEvents);
  eleventyConfig.addFilter('isFuture', events.isFuture);
  eleventyConfig.addFilter('getFuture', events.getFuture);
  eleventyConfig.addFilter('birdEvents', events.birdEvents);

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
  eleventyConfig.addAsyncFilter('stripTagsForRSS', type.stripTagsForRSS);

  eleventyConfig.addFilter('mentionsForUrl', mentions.forUrl);

  eleventyConfig.addFilter('max', (array) => Math.max(...array));
  eleventyConfig.addFilter('getDomain', (url) => new URL(url).hostname);

  eleventyConfig.addFilter('imgSrc', (src) =>
    images.image(src, null, null, null, true),
  );
  eleventyConfig.addFilter('oddNewsTags', (name) => utils.oddNewsTags(name));

  // shortcodes
  eleventyConfig.addPairedShortcode('typogr', type.typogr);
  eleventyConfig.addPairedShortcode('md', type.md);
  eleventyConfig.addPairedShortcode('mdInline', type.mdInline);
  eleventyConfig.addPairedShortcode('h', type.heading);
  eleventyConfig.addPairedShortcode('callout', type.callout);
  eleventyConfig.addShortcode('getDate', (format) =>
    time.getDate(time.now(), format),
  );
  eleventyConfig.addNunjucksShortcode('image', images.image);

  // config
  eleventyConfig.setLibrary('md', type.mdown);
  eleventyConfig.addDataExtension('yml, yaml', yaml.load);
  eleventyConfig.setQuietMode(true);

  if (!process.env.NETLIFY) {
    eleventyConfig.on('eleventy.before', () => {
      delete process.env.IMAGE_CACHE_CHANGED;
    });

    eleventyConfig.on('eleventy.after', () => {
      if (process.env.IMAGE_CACHE_CHANGED) {
        // If the image cache has been updated, emit the new JSON file
        // eslint-disable-next-line no-sync
        fs.outputJsonSync(images.CACHE_FILE, images.imageCache, { spaces: 2 });
      }
    });
  }

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
