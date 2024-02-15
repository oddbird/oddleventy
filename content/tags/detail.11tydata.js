import { publicTags } from '#filters/tags.js';

export default {
  pagination: {
    data: 'collections',
    before: (data) => publicTags(data),
  },
};
