import MockDate from 'mockdate';

import {
  addCallToAction,
  byYear,
  eventSort,
  findData,
  findPage,
  getCurrent,
  getData,
  getPage,
  getPublic,
  hasData,
  isCurrent,
  isHome,
  isPublic,
  isPublicType,
  isType,
  pageYears,
  removePage,
  withData,
} from '#filters/pages.js';

import { collection3, collection4 } from './utils.js';

describe('page filters', () => {
  test('isPublic', () => {
    expect(isPublic(collection3[0])).toBeTruthy();
    expect(isPublic(collection3[1])).toBeFalsy();
  });

  test('isPublicType', () => {
    expect(isPublicType(collection4)).toHaveLength(3);
    expect(collection4).toHaveLength(4);
  });

  test('isCurrent', () => {
    expect(isCurrent(collection3[0])).toBeTruthy();
    expect(isCurrent(collection3[2])).toBeFalsy();
  });

  test('getCurrent', () => {
    const currentPages = [collection3[0], collection3[1]];

    expect(getCurrent(collection3)).toEqual(currentPages);
  });

  test('getPublic', () => {
    const publicPages = [collection3[0], collection3[2]];

    expect(getPublic(collection3)).toEqual(publicPages);
  });

  test('hasData', () => {
    const page = collection3[0];

    expect(hasData(page, 'data.slug', 'news')).toBeTruthy();
    expect(hasData(page, 'data.index')).toBeFalsy();
    expect(hasData(page, 'data', 'news')).toBeFalsy();
  });

  test('withData', () => {
    expect(withData(collection3, 'data.slug', 'news')).toHaveLength(1);
    expect(withData(collection3, 'data.slug', 'new')).toHaveLength(0);
    expect(withData(collection3, 'data.tags', 'tag 1')).toHaveLength(1);
    expect(withData(collection3, 'data.tags')).toHaveLength(4);
    expect(withData(collection3, 'data.nothing')).toHaveLength(0);
    expect(withData(collection3, 'data', 'news')).toHaveLength(0);
  });

  test('removePage', () => {
    const testUrl = '/test2/';
    const filtered = removePage(collection3, testUrl);
    const testPage = collection3.find((page) => page.page.url === testUrl);

    expect(collection3).toContain(testPage);
    expect(filtered).not.toContain(testPage);
    expect(filtered).toHaveLength(collection3.length - 1);
  });

  test('getData', () => {
    expect(getData(collection3, 'data.events', 'foo')).toEqual([
      collection3[3].data.events[0],
    ]);
    expect(getData(collection3)).toEqual(collection3);
  });

  test('findData', () => {
    expect(findData(collection3, 'data.events', 'foo')).toEqual(
      collection3[3].data.events[0],
    );
  });

  test('getPage', () => {
    expect(
      getPage(collection3, '/test4/', 'data.events', { foo: 'bar' }),
    ).toEqual([collection3[3].data.events[0]]);
    expect(getPage(collection3, '/test1/')).toEqual(collection3[0]);
  });

  test('findPage', () => {
    expect(findPage(collection3, 'data.author', 'erica')).toEqual(
      collection3[1],
    );
  });

  test('pageYears', () => {
    const testPage = pageYears(collection3)[0];

    expect(testPage).toHaveProperty('sort');
    expect(testPage).toHaveProperty('year');
  });

  describe('eventSort', () => {
    beforeAll(() => {
      MockDate.set('2020-02-01');
    });

    afterAll(() => {
      MockDate.reset();
    });

    test('sorts collection', () => {
      const slugs = ['test3', 'events', 'test1', 'talk1'];
      const years = ['2018', '2019', '2040', '2040'];
      const actual = eventSort(collection4);

      expect(actual.map((item) => item.page.fileSlug)).toEqual(slugs);
      expect(actual.map((item) => item.year)).toEqual(years);
    });

    test('sorts collection including future events', () => {
      const slugs = ['test3', 'test1', 'talk1', 'events'];
      const years = ['2018', '2040', '2040', '2030'];
      const actual = eventSort(collection4, true);

      expect(actual.map((item) => item.page.fileSlug)).toEqual(slugs);
      expect(actual.map((item) => item.future_year ?? item.year)).toEqual(
        years,
      );
    });
  });

  describe('byYear', () => {
    test('returns empty if no collection3', () => {
      expect(byYear([])).toEqual([]);
    });

    test('returns pages grouped by year', () => {
      const expected = ['2020', '2019'];
      const actual = byYear(collection3);

      expect(actual.map((item) => item.year)).toEqual(expected);
      expect(actual.map((item) => item.posts.length)).toEqual([2, 2]);
    });
  });

  describe('addCallToAction', () => {
    test('returns true for work list URL', () => {
      const exampleURL = '/work/';
      expect(addCallToAction(exampleURL)).toBe(true);
    });

    test('returns true for work detail URLs', () => {
      const exampleURL = '/work/metecho/';
      expect(addCallToAction(exampleURL)).toBe(true);
    });

    test('returns true for services list URL', () => {
      const exampleURL = '/services/';
      expect(addCallToAction(exampleURL)).toBe(true);
    });

    test('returns true for services detail URL', () => {
      const exampleURL = '/services/development/';
      expect(addCallToAction(exampleURL)).toBe(true);
    });

    test('returns false for services consulting URL', () => {
      const exampleURL = '/services/consulting/';
      expect(addCallToAction(exampleURL)).toBe(false);
    });

    test('returns false for blog URL', () => {
      const exampleURL = '/blog/';
      expect(addCallToAction(exampleURL)).toBe(false);
    });

    test('returns false for blog detail URL', () => {
      const exampleURL = '/talks/work-units/';
      expect(addCallToAction(exampleURL)).toBe(false);
    });
  });

  test('isType', () => {
    const filtered = isType(collection4, 'Article');

    expect(collection4).toHaveLength(4);
    expect(filtered).toHaveLength(1);
  });

  describe('isHome', () => {
    const collection = [...collection3, ...collection4];

    test('filters down to limit', () => {
      const filtered = isHome(collection, 3);

      expect(filtered).toHaveLength(3);
    });

    test('prioritizes pinned posts', () => {
      const filtered = isHome(collection, 1);

      expect(filtered).toHaveLength(1);
      expect(filtered[0].data.home).toBe('pinned');
    });

    test('returns all posts if no limit', () => {
      const filtered = isHome(collection);

      expect(filtered).toHaveLength(collection.length - 1);
    });
  });
});
