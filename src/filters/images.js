'use strict';

const path = require('path');

const eleventyImg = require('@11ty/eleventy-img');
const _ = require('lodash');

const { fromTaxonomy } = require('#/taxonomy');

const imgConfig = fromTaxonomy('img');

/* @docs
label: Responsive Images
category: File
*/

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
  const imgSizes =
    sizes && imgConfig.sizes[sizes]
      ? imgConfig.sizes[sizes]
      : sizes || imgConfig.sizes.default;

  const options = {
    widths: imgConfig.widths,
    formats: imgConfig.formats,
    urlPath: '/assets/images/',
    outputDir: './_site/assets/images/',
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

  // generate images; this is async but we don’t wait
  eleventyImg(src, options);

  // eslint-disable-next-line no-sync
  const metadata = eleventyImg.statsSync(src, options);

  if (getUrl) {
    const data = metadata.jpeg[metadata.jpeg.length - 1];
    return data.url;
  }

  const imageAttributes = _.merge(
    {
      alt: alt || '',
      sizes: imgSizes,
      loading: 'lazy',
      decoding: 'async',
    },
    attrs || {},
  );

  return eleventyImg.generateHTML(metadata, imageAttributes, {
    whitespaceMode: 'inline',
  });
};

module.exports = {
  image,
};
