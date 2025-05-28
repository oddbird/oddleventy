import {
  getSort,
  oddNewsTags,
  onlyShow,
  styles,
  typeCheck,
} from '#filters/utils.js';

describe('utility filters', () => {
  test('typeCheck', () => {
    expect(typeCheck('foo', 'string')).toBe(true);
    expect(typeCheck(false)).toBe('boolean');
  });

  test('styles', () => {
    const testStyles = { foo: 'bar-baz', buz: 'bang', other: null };
    const expected = 'foo:bar-baz;buz:bang;';
    const emptyStyles = { foo: '' };

    expect(styles(testStyles)).toEqual(expected);
    expect(styles(emptyStyles)).toBe('');
  });

  test('onlyShow', () => {
    const arr = [1, 2, 3];

    expect(onlyShow(arr, 2)).toEqual([1, 2]);
    expect(onlyShow(arr, -2)).toEqual([2, 3]);
    expect(onlyShow(arr, 4)).toEqual(arr);
  });

  test('oddNewsTags', () => {
    expect(oddNewsTags('')).toBe('');
    expect(oddNewsTags('footer')).toBe('6264369');
    expect(oddNewsTags('oddblog')).toBe('6265233');
    expect(oddNewsTags('oddnews')).toBe('6265089');
    expect(oddNewsTags('course-anchor-positioning')).toBe('25860341');
    expect(oddNewsTags('advanced-css-video')).toBe('25860548');
  });

  test('getSort', () => {
    const arr = [{ a: 5 }, { a: 3 }, { a: 4 }, { a: 3 }, { a: 6 }];

    expect([...arr].sort(getSort('a')).map((i) => i.a)).toEqual([
      3, 3, 4, 5, 6,
    ]);
    expect([...arr].sort(getSort('a', true)).map((i) => i.a)).toEqual([
      6, 5, 4, 3, 3,
    ]);
  });
});
