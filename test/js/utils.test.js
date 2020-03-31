const { typeCheck, styles, imgSuffix } = require('#/utils');

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
    expect(styles(emptyStyles)).toEqual('');
  });

  test('imgSuffix', () => {
    const image = 'birds/carl.jpg';
    const expected = 'birds/carl-550.jpg';

    expect(imgSuffix(image, '550')).toEqual(expected);
  });
});
