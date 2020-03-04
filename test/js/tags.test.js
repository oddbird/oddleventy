const {
  displayName,
  isPublic,
  publicTags,
  tagData,
  getTags,
  tagLink,
} = require('#/tags');

import { collection } from './utils';

describe('tag filters', () => {
  const tags = ['workshops', '_foo bar', 'talks'];

  test('isPublic', () => {
    expect(isPublic(tags[0])).toEqual(true);
    expect(isPublic(tags[1])).toBe(false);
  });

  test('displayName', () => {
    expect(displayName(tags[0])).toEqual('Workshops');
    expect(displayName(tags[1])).toEqual('Foo bar');
  });

  test('publicTags', () => {
    const expected = [tags[0], tags[2]];

    expect(publicTags(tags)).toEqual(expected);
  });

  test('tagData', () => {
    const collections = {
      all: collection,
      workshops: [],
      talks: collection,
    };
    const expected1 = [
      { tag: 'talks', url: '/tags/talks/', pageCount: 4 },
      { tag: 'workshops', url: '/tags/workshops/', pageCount: 0 },
    ];
    const expected2 = [
      { tag: 'tag1', url: '/tags/tag1/', pageCount: 0 },
      { tag: 'tag2', url: '/tags/tag2/', pageCount: 0 },
    ];

    expect(tagData(collections, tags)).toEqual(expected1);
    expect(tagData(collections, 'all')).toEqual(expected2);
  });

  test('getTags', () => {
    const expected = ['tag1', 'tag2'];
    const tagCollection = [collection[0]];
    expect(getTags(tagCollection)).toEqual(expected);
  });

  test('tagLink', () => {
    const expected = '/tags/foo/';
    expect(tagLink(collection, 'foo')).toEqual(expected);
  });
});
