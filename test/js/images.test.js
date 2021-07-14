/* eslint-disable no-sync */

const eleventyImg = require('@11ty/eleventy-img');

const { image } = require('#/images');

jest.mock('@11ty/eleventy-img');

eleventyImg.statsSync.mockReturnValue({
  jpeg: [{ url: '/assets/images/img-960w.webp' }],
});

describe('image filters', () => {
  describe('image', () => {
    let warn;
    const src = './src/images/foo/img.jpg';

    beforeAll(() => {
      warn = global.console.warn;
      global.console.warn = jest.fn();
    });

    afterAll(() => {
      global.console.warn = warn;
    });

    test('calls eleventy-img plugin with options', () => {
      image(src, 'alt text', { class: 'foobar' });

      expect(eleventyImg).toHaveBeenCalledTimes(1);
      expect(eleventyImg.mock.calls[0][0]).toEqual(src);

      const options = eleventyImg.mock.calls[0][1];

      expect(options.widths).toEqual([480, 960, 1600]);
      expect(options.formats).toEqual(['webp', 'jpeg']);
      expect(options.filenameFormat('hash', src, 480, 'webp')).toEqual(
        'img-480w.webp',
      );
      expect(eleventyImg.statsSync).toHaveBeenCalledTimes(1);
      expect(eleventyImg.generateHTML).toHaveBeenCalledTimes(1);
      expect(eleventyImg.generateHTML.mock.calls[0][1]).toEqual({
        alt: 'alt text',
        sizes: '(min-width: 45em) 50vw, 100vw',
        loading: 'lazy',
        decoding: 'async',
        class: 'foobar',
      });
    });

    test('can override sizes', () => {
      image(src, null, null, 'gallery');

      expect(eleventyImg.generateHTML).toHaveBeenCalledTimes(1);
      expect(eleventyImg.generateHTML.mock.calls[0][1]).toEqual({
        alt: '',
        sizes: '(min-width: 95em) 30vw, 50vw',
        loading: 'lazy',
        decoding: 'async',
      });
    });

    test('can return url', () => {
      const url = image(src, null, null, null, true);

      expect(url).toEqual('/assets/images/img-960w.webp');
    });

    test('warns if unexpected src prefix', () => {
      image('foo/img.jpg');

      expect(global.console.warn).toHaveBeenCalledTimes(1);
    });
  });
});
