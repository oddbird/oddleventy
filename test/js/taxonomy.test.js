import { fromTaxonomy, ossGroups, pageType, taxonomy } from '#/taxonomy';

import { collection3 } from './utils';

describe('fromTaxonomy', () => {
  test('Return data from taxonomy', () => {
    expect(fromTaxonomy('post', { icon: 'news' })).toEqual({
      tag: 'News',
      icon: 'news',
    });
    expect(fromTaxonomy('post', { icon: 'news' }, 'icon')).toEqual('news');
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
  test('Return one of several resource "types" from page tags', () => {
    const workshops = taxonomy.post.find((type) => type.tag === 'Workshops');
    expect(pageType(['foo', 'Workshops'])).toEqual(workshops);
    expect(pageType(['foo', 'Workshops'], 'tag')).toEqual(workshops.tag);
    expect(pageType('Workshops', 'icon')).toEqual(workshops.icon);
    expect(pageType('Workshops')).toBe(workshops);
    expect(pageType('foo')).toBe(false);
    expect(pageType('foo', 'bar')).toBe(false);
    expect(pageType()).toBe(false);
  });
});
