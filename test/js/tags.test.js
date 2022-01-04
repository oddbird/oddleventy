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
  const tags = ['Workshop', '_foo bar', 'Talk'];

  test('isPublic', () => {
    expect(isPublic(tags[0])).toBe(true);
    expect(isPublic(tags[1])).toBe(false);
  });

  test('publicTags', () => {
    const expected = [tags[0], tags[2]];

    expect(publicTags(tags)).toEqual(expected);
    expect(publicTags()).toEqual([]);
  });

  test('displayName', () => {
    expect(displayName(tags[0])).toBe('Workshop');
    expect(displayName(tags[1])).toBe('Foo bar');
    expect(displayName('_')).toBe('');
    expect(displayName()).toBe('');
  });

  test('tagData', () => {
    const collections = {
      all: collection,
      Workshop: [],
      Talk: collection,
    };
    const expected1 = [
      {
        is_type: true,
        tag: 'Workshop',
        type: { tag: 'Workshop', icon: 'workshop', img: true },
        url: '/tags/workshop/',
        pageCount: 0,
      },
      {
        is_type: true,
        tag: 'Talk',
        type: { tag: 'Talk', icon: 'talk', img: true },
        url: '/tags/talk/',
        pageCount: 5,
      },
    ];
    const expected2 = [
      {
        is_type: false,
        tag: 'tag 1',
        type: false,
        url: '/test5/',
        pageCount: 0,
      },
      {
        is_type: false,
        tag: 'tag2',
        type: false,
        url: '/tags/tag2/',
        pageCount: 0,
      },
    ];

    expect(tagData(collections, tags)).toEqual(expected1);
    expect(tagData(collections, 'all')).toEqual(expected2);
  });

  test('tagLink', () => {
    expect(tagLink(collection, 'foo')).toBe('/tags/foo/');
    expect(tagLink(collection, 'tag 1')).toBe('/test5/');
    expect(tagLink(collection, 'tag')).toBe('/tags/tag/');
  });

  test('getTags', () => {
    const expected = ['tag 1', 'tag2'];
    const tagCollection = [collection[0]];

    expect(getTags(tagCollection)).toEqual(expected);
  });
});
