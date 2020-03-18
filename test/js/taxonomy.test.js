import { fromTaxonomy, ossGroups, pageType, taxonomy } from '#/taxonomy';

import { collection3 } from './utils';

describe('fromTaxonomy', () => {
  test('Return data from taxonomy', () => {
    expect(fromTaxonomy('post', { icon: 'news' })).toEqual({
      tag: 'Article',
      icon: 'news',
    });
    expect(fromTaxonomy('post', { icon: 'news' }, 'tag')).toEqual('Article');
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
