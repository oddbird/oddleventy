/* eslint-disable no-sync */

'use strict';

const { createHash } = require('crypto');
const path = require('path');

const eleventyImg = require('@11ty/eleventy-img');
const fs = require('fs-extra');
const _ = require('lodash');

const { fromTaxonomy } = require('#/taxonomy.cjs');

/* @docs
label: Responsive Images
category: File
*/

const imgConfig = fromTaxonomy('img');
const imgOptions = {
  widths: imgConfig.widths,
  formats: imgConfig.formats,
  sharpJpegOptions: {
    progressive: true,
    quality: 80,
  },
  sharpWebpOptions: {
    quality: 60,
    nearLossless: true,
    reductionEffort: 3,
  },
  filenameFormat: (id, imgSrc, width, format) => {
    const extension = path.extname(imgSrc);
    const name = path.basename(imgSrc, extension);
    return `${name}-${width}w.${format}`;
  },
};
const IMG_SRC = './src/images/';
const CACHE_FILE = path.join(__dirname, 'image_cache.json');
// eslint-disable-next-line no-process-env
const useCache = process.env.CONTEXT !== 'production';
// eslint-disable-next-line no-process-env
const rebuildCache = Boolean(process.env.IMAGE_CACHE_REBUILD);
let cache = { html: {}, src: {} };
if (useCache && !rebuildCache && fs.existsSync(CACHE_FILE)) {
  cache = fs.readJsonSync(CACHE_FILE);
}
let cacheChanged = false;

/* @docs
label: image
category: responsive images
note: Generate responsive image using eleventy img plugin
example: |
  {%- image src, "alt text", {"class":"my-image"}, "media" -%}
params:
  src:
    type: string
  alt:
    type: string | none
    default: none
  attrs:
    type: object
    default: '{}'
  sizes:
    type: string | none
    default: none
    note: |
      Only required for small images, since the default is 100vw.
      See taxonomy data for named sizes
      like "card", "media", and "gallery".
  getUrl:
    type: boolean | none
    default: none
    note: |
      Returns url to largest jpeg image instead of full HTML
*/
const image = (src, alt, attrs, sizes, getUrl) => {
  let outputDir = './_site/assets/images/';
  let urlPath = '/assets/images/';
  if (src.startsWith(IMG_SRC)) {
    const dir = path.dirname(src.slice(IMG_SRC.length));
    outputDir = `${outputDir}${dir}`;
    urlPath = `${urlPath}${dir}`;
  } else {
    // eslint-disable-next-line no-console
    console.warn(`Unexpected image source path: "${src}"`);
  }
  const opts = {
    ...imgOptions,
    outputDir,
    urlPath,
  };
  const imgSizes =
    sizes && imgConfig.sizes[sizes]
      ? imgConfig.sizes[sizes]
      : sizes || imgConfig.sizes.default;
  const imageAttributes = _.merge(
    {
      alt: alt || '',
      sizes: imgSizes,
      loading: 'lazy',
      decoding: 'async',
    },
    attrs || {},
  );
  let cacheKey = src;

  if (useCache) {
    if (getUrl && cache.src[cacheKey]) {
      return cache.src[cacheKey];
    } else if (!getUrl) {
      const hash = createHash('sha256');
      hash.update(src);
      hash.update(JSON.stringify(imageAttributes));
      cacheKey = hash.digest('base64');
      if (cache.html[cacheKey]) {
        return cache.html[cacheKey];
      }
    }
    if (!cacheChanged) {
      cacheChanged = true;
      // eslint-disable-next-line no-process-env
      process.env.IMAGE_CACHE_CHANGED = true;
    }
  }

  // generate images; this is async but we don’t wait
  eleventyImg(src, opts);

  // eslint-disable-next-line no-sync
  const metadata = eleventyImg.statsSync(src, opts);

  if (getUrl) {
    const data = metadata.jpeg[metadata.jpeg.length - 1];
    if (useCache) {
      cache.src[cacheKey] = data.url;
    }
    return data.url;
  }

  const html = eleventyImg.generateHTML(metadata, imageAttributes, {
    whitespaceMode: 'inline',
  });
  if (useCache) {
    cache.html[cacheKey] = html;
  }
  return html;
};

module.exports = {
  image,
  imageCache: cache,
  CACHE_FILE,
};
