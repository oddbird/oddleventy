'use strict';

const { publicTags } = require('#/tags.cjs');

module.exports = {
  pagination: {
    data: 'collections',
    before: (data) => publicTags(data),
  },
};
