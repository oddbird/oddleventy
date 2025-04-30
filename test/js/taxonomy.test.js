import {
  fromTaxonomy,
  ossGroups,
  pageType,
  taxonomy,
} from '#filters/taxonomy.js';

import { collection3 } from './utils.js';

describe('fromTaxonomy', () => {
  test('Return data from taxonomy', () => {
    const allPosts = [
      {
        tag: '_talk',
        icon: 'talk',
        url: '/talks/',
        display: 'Talks & Workshops',
      },
      { tag: 'Podcast', icon: 'audio', plural: 'Podcasts' },
      { tag: 'Video', icon: 'video', plural: 'Videos' },
      { tag: 'Link', icon: 'link', plural: 'Links' },
      { tag: 'Case Study', icon: 'tools', plural: 'Case Studies' },
      { tag: 'Article', icon: 'news', plural: 'Articles' },
      { tag: 'Winging It', icon: 'winging-it-lines', plural: 'Episodes' },
      { tag: 'Course', icon: 'mail-open', plural: 'Courses' },
    ];

    expect(fromTaxonomy('post', { icon: 'news' })).toEqual({
      tag: 'Article',
      icon: 'news',
      plural: 'Articles',
    });
    expect(fromTaxonomy('post', { icon: 'news' }, 'tag')).toBe('Article');
    expect(fromTaxonomy('post')).toEqual(allPosts);
  });
});

describe('ossGroups', () => {
  test('Return group of oss pages', () => {
    expect(ossGroups(collection3)).toEqual({ OddTools: [collection3[0]] });
    expect(ossGroups(collection3, 'OddTools')).toEqual([collection3[0]]);
    expect(ossGroups(collection3, 'foobar')).toBeUndefined();
  });
});

describe('pageType', () => {
  test('Return one of several post "types" from page tags', () => {
    const podcast = taxonomy.post.find((type) => type.tag === 'Podcast');

    expect(pageType(['foo', 'Podcast'])).toEqual(podcast);
    expect(pageType(['foo', 'Podcast'], 'tag')).toEqual(podcast.tag);
    expect(pageType('Podcast', 'plural')).toEqual(podcast.plural);
    expect(pageType('Podcast', 'icon')).toEqual(podcast.icon);
    expect(pageType('Podcast')).toBe(podcast);
    expect(pageType('foo')).toBe(false);
    expect(pageType('foo', 'bar')).toBe(false);
    expect(pageType()).toBe(false);
  });
});
