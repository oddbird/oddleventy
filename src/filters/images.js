'use strict';

const { taxonomy } = require('#/taxonomy');

const responsiveConfig = taxonomy.img.srcset.map((size) => ({
  width: size,
  rename: {
    suffix: `-${size}`,
  },
}));

/* @docs
label: imgSuffix
category: responsive images
note: Add img suffix for responsiveness
example: |
  <img srcset="{{ src | imgSuffix('320') }} 320w" />
params:
  imgSrc:
    type: string
  suffix:
    type: string | number
*/
const imgSuffix = (imgSrc, suffix) => {
  const idx = imgSrc.lastIndexOf('.');
  const imgPath = imgSrc.substring(0, idx);
  const ext = imgSrc.substring(idx + 1);
  return `${imgPath}-${suffix}.${ext}`;
};

/* @docs
label: imgSize
category: responsive images
note: Resize image height/width attributes to match output
example: |
  {% set size = img.width | imgSize(img.height) %}
  <img src="..." width="{{ size.width }}" height="{{ size.height }}" />
params:
  width:
    type: number
    default: null
  height:
    type: number
    default: null
*/
const imgSize = (width = null, height = null) => {
  const fallback = taxonomy.img.fallback;
  const size = { width, height };

  if (width && width > fallback) {
    size.width = fallback;
    size.height = height ? Math.round((fallback / width) * height) : height;
  }

  return size;
};

module.exports = {
  imgSize,
  imgSuffix,
  responsiveConfig,
};
