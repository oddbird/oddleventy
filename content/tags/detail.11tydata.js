'use strict';

const { publicTags } = require('#/tags');

module.exports = {
  pagination: {
    data: 'collections',
    before: (data) => publicTags(data),
  },
};
