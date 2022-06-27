const { onlyShow, typeCheck, styles } = require('#/utils');

describe('utility filters', () => {
  test('typeCheck', () => {
    expect(typeCheck('foo', 'string')).toBe(true);
    expect(typeCheck(false)).toBe('boolean');
  });

  test('styles', () => {
    const testStyles = { foo: 'bar-baz' };
    const expected = 'foo:bar-baz;';
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
});
