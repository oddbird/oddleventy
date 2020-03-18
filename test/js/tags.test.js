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
  const tags = ['workshop', '_foo bar', 'talk'];

  test('isPublic', () => {
    expect(isPublic(tags[0])).toEqual(true);
    expect(isPublic(tags[1])).toBe(false);
  });

  test('publicTags', () => {
    const expected = [tags[0], tags[2]];

    expect(publicTags(tags)).toEqual(expected);
    expect(publicTags()).toEqual([]);
  });

  test('displayName', () => {
    expect(displayName(tags[0])).toEqual('Workshop');
    expect(displayName(tags[1])).toEqual('Foo bar');
    expect(displayName('_')).toEqual('');
    expect(displayName()).toEqual('');
  });

  test('tagData', () => {
    const collections = {
      all: collection,
      workshop: [],
      talk: collection,
    };
    const expected1 = [
      { tag: 'talk', url: '/tags/talk/', pageCount: 5 },
      { tag: 'workshop', url: '/tags/workshop/', pageCount: 0 },
    ];
    const expected2 = [
      { tag: 'tag 1', url: '/test5/', pageCount: 0 },
      { tag: 'tag2', url: '/tags/tag2/', pageCount: 0 },
    ];

    expect(tagData(collections, tags)).toEqual(expected1);
    expect(tagData(collections, 'all')).toEqual(expected2);
  });

  test('tagLink', () => {
    expect(tagLink(collection, 'foo')).toEqual('/tags/foo/');
    expect(tagLink(collection, 'tag 1')).toEqual('/test5/');
    expect(tagLink(collection, 'tag')).toEqual('/tags/tag/');
  });

  test('getTags', () => {
    const expected = ['tag 1', 'tag2'];
    const tagCollection = [collection[0]];

    expect(getTags(tagCollection)).toEqual(expected);
  });
});
