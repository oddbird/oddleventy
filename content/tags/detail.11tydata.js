'use strict';

const { publicTags } = require('../../src/filters/tags');

module.exports = {
  pagination: {
    data: 'collections',
    before: (data) => publicTags(data),
  },
};
