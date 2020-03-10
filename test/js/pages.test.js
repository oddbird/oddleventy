import {
  byYear,
  findData,
  findPage,
  getCurrent,
  getData,
  getPage,
  getPublic,
  hasData,
  isCurrent,
  isPublic,
  pageYears,
  render,
} from '#/pages';

import { collection3 } from './utils';

describe('page filters', () => {
  test('isPublic', () => {
    expect(isPublic(collection3[0])).toBeTruthy();
    expect(isPublic(collection3[1])).toBeFalsy();
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

  test('render', () => {
    expect(render(collection3[2], 'foo')).toEqual('bar');
    expect(render(collection3[2], 'title')).toEqual('Draft Title');
    expect(render(collection3[3], 'foo')).toEqual({ foo: 'bar' });
    expect(render(collection3[0], 'title')).toEqual('Test Title');
  });

  test('pageYears', () => {
    const testPage = pageYears(collection3)[0];

    expect(testPage).toHaveProperty('sort');
    expect(testPage).toHaveProperty('year');
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
});
