import { fromTaxonomy, ossGroups, pageType, taxonomy } from '#/taxonomy';

import { collection3 } from './utils';

describe('fromTaxonomy', () => {
  test('Return data from taxonomy', () => {
    const allPosts = [
      { tag: 'Podcast', icon: 'audio' },
      { tag: 'Video', icon: 'video' },
      { tag: 'Link', icon: 'link' },
      { tag: 'Case Study', icon: 'tools' },
      { tag: 'Article', icon: 'news' },
    ];

    expect(fromTaxonomy('post', { icon: 'news' })).toEqual({
      tag: 'Article',
      icon: 'news',
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
    expect(pageType('Podcast', 'icon')).toEqual(podcast.icon);
    expect(pageType('Podcast')).toBe(podcast);
    expect(pageType('foo')).toBe(false);
    expect(pageType('foo', 'bar')).toBe(false);
    expect(pageType()).toBe(false);
  });
});
