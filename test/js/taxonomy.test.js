import { fromTaxonomy, ossGroups, pageType, taxonomy } from '#/taxonomy';

import { collection3 } from './utils';

describe('fromTaxonomy', () => {
  test('Return data from taxonomy', () => {
    const allPosts = [
      { tag: 'Talk', icon: 'talk', img: true },
      { tag: 'Workshop', icon: 'workshop', img: true },
      { tag: 'Podcast', icon: 'audio' },
      { tag: 'Video', icon: 'video' },
      { tag: 'Link', icon: 'link' },
      { tag: 'Case Study', icon: 'tools', img: true },
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
    const workshop = taxonomy.post.find((type) => type.tag === 'Workshop');

    expect(pageType(['foo', 'Workshop'])).toEqual(workshop);
    expect(pageType(['foo', 'Workshop'], 'tag')).toEqual(workshop.tag);
    expect(pageType('Workshop', 'icon')).toEqual(workshop.icon);
    expect(pageType('Workshop')).toBe(workshop);
    expect(pageType('foo')).toBe(false);
    expect(pageType('foo', 'bar')).toBe(false);
    expect(pageType()).toBe(false);
  });
});
