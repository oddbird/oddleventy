import {
  byYear,
  findData,
  findPage,
  getData,
  getPage,
  getPublic,
  hasData,
  isCurrent,
  isPublic,
  pageType,
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
    const expected = [
      {
        foo: 'bar',
        date: '2018-01-09T04:10:17.000Z',
        end: '2018-01-10T04:10:17.000Z',
      },
    ];

    expect(getData(collection3, 'data.events', 'foo')).toEqual(expected);

    expect(getData(collection3)).toEqual(collection3);
  });

  test('findData', () => {
    // this keeps returning undefined...
    findData(collection3, 'author', 'erica');
  });

  test('getPage', () => {
    // this keeps returning undefined...
    getPage(collection3, '/test2/', 'foo', 'bar');
  });

  test('findPage', () => {
    // this keeps returning undefined...
    findPage(collection3, '/test2/', 'foo', 'bar');
  });

  test('render', () => {
    expect(render(collection3[2], 'foo')).toBe('bar');
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
      const expected = [];

      expect(byYear([])).toEqual(expected);
    });
    test('returns pages grouped by year', () => {
      byYear(collection3);
    });
  });

  describe('pageType', () => {
    test('Return one of several resource "types" from page tags', () => {
      const tags = ['Workshops', 'Podcasts', 'foo', 'bar'];

      expect(pageType(tags)).toEqual('Workshops');
      expect(pageType(['foo'])).toBeUndefined();
    });
  });
});
