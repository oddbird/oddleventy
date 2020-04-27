const { imgSize, imgSuffix } = require('#/images');

describe('utility filters', () => {
  test('imgSuffix', () => {
    const image = 'birds/carl.jpg';
    const expected = 'birds/carl-550.jpg';

    expect(imgSuffix(image, 550)).toEqual(expected);
  });

  describe('imgSize', () => {
    test('returns an object with width & height properties', () => {
      expect(imgSize()).toEqual({ width: null, height: null });
    });

    test('scales width down to responsive-image fallback', () => {
      expect(imgSize(3000)).toEqual({
        width: 1280,
        height: null,
      });
    });

    test('scales height accordingly', () => {
      expect(imgSize(2560, 1000)).toEqual({
        width: 1280,
        height: 500,
      });
    });

    test('does not scale up', () => {
      expect(imgSize(200, 100)).toEqual({
        width: 200,
        height: 100,
      });
    });

    test('rounds re-calculated height', () => {
      expect(imgSize(4410, 2159)).toEqual({
        width: 1280,
        height: 627,
      });
    });
  });
});
