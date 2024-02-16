import {
  displayName,
  getTags,
  isPublic,
  publicTags,
  tagData,
  tagLink,
} from '#filters/tags.js';

import { collection } from './utils.js';

describe('tag filters', () => {
  const tags = ['Link', '_foo bar', '_talk', 'Video'];

  test('isPublic', () => {
    expect(isPublic(tags[0])).toBe(true);
    expect(isPublic(tags[1])).toBe(false);
    expect(isPublic(tags[2])).toBe(false);
  });

  test('publicTags', () => {
    const expected = [tags[0], tags[3]];

    expect(publicTags(tags)).toEqual(expected);
    expect(publicTags()).toEqual([]);
  });

  test('displayName', () => {
    expect(displayName(tags[0])).toBe('Link');
    expect(displayName(tags[1])).toBe('Foo bar');
    expect(displayName(tags[2])).toBe('Talk');
    expect(displayName('_')).toBe('');
    expect(displayName()).toBe('');
  });

  test('tagData', () => {
    const collections = {
      all: collection,
      Link: [],
      Video: collection,
    };
    const expected1 = [
      {
        is_type: true,
        tag: 'Link',
        type: { tag: 'Link', icon: 'link', plural: 'Links' },
        url: '/tags/link/',
        pageCount: 0,
      },
      {
        is_type: true,
        tag: 'Video',
        type: { tag: 'Video', icon: 'video', plural: 'Videos' },
        url: '/tags/video/',
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
