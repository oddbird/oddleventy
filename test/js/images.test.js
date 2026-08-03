import { jest } from '@jest/globals';

jest.unstable_mockModule('@11ty/eleventy-img', () => ({
  default: jest.fn(),
}));

const eleventyImg = await import('@11ty/eleventy-img');
const { cacheImageMetadata, image, imageMetadata } =
  await import('#filters/images');

eleventyImg.default.generateHTML = jest.fn();

const metadata = { jpeg: [{ url: '/assets/images/img-960w.webp' }] };

describe('image filters', () => {
  describe('image', () => {
    let warn;
    const src = './src/images/foo/img.jpg';

    beforeAll(() => {
      warn = global.console.warn;
      global.console.warn = jest.fn();
    });

    beforeEach(() => {
      imageMetadata.set('src/images/foo/img.jpg', metadata);
      imageMetadata.set('foo/img.jpg', metadata);
    });

    afterAll(() => {
      global.console.warn = warn;
      imageMetadata.clear();
    });

    test('calls eleventy-img plugin with options', () => {
      image(src, 'alt text', { class: 'foobar' });

      expect(eleventyImg.default).toHaveBeenCalledTimes(1);
      expect(eleventyImg.default.mock.calls[0][0]).toEqual(src);

      const options = eleventyImg.default.mock.calls[0][1];

      expect(options.widths).toEqual([480, 960, 1600]);
      expect(options.formats).toEqual(['webp', 'jpeg']);
      expect(options.filenameFormat('hash', src, 480, 'webp')).toBe(
        'img-480w.webp',
      );
      expect(eleventyImg.default.generateHTML).toHaveBeenCalledTimes(1);
      expect(eleventyImg.default.generateHTML.mock.calls[0][0]).toEqual(
        metadata,
      );
      expect(eleventyImg.default.generateHTML.mock.calls[0][1]).toEqual({
        alt: 'alt text',
        sizes: '(min-width: 45em) 50vw, 100vw',
        loading: 'lazy',
        decoding: 'async',
        class: 'foobar',
      });
    });

    test('can override sizes', () => {
      image(src, null, null, 'gallery');

      expect(eleventyImg.default.generateHTML).toHaveBeenCalledTimes(1);
      expect(eleventyImg.default.generateHTML.mock.calls[0][1]).toEqual({
        alt: '',
        sizes: '(min-width: 95em) 30vw, 50vw',
        loading: 'lazy',
        decoding: 'async',
      });
    });

    test('can return url', () => {
      const url = image(src, null, null, null, true);

      expect(url).toBe('/assets/images/img-960w.webp');
    });

    test('normalizes the metadata lookup', () => {
      image('./src/images//foo/img.jpg', null, null, null, true);

      expect(eleventyImg.default.generateHTML).not.toHaveBeenCalled();
    });

    test('warns if unexpected src prefix', () => {
      image('foo/img.jpg');

      expect(global.console.warn).toHaveBeenCalledTimes(1);
    });

    test('throws if metadata was not pre-computed', () => {
      imageMetadata.clear();

      expect(() => image(src)).toThrow('Missing image metadata');
    });
  });

  describe('cacheImageMetadata', () => {
    let warn;

    beforeAll(() => {
      warn = global.console.warn;
      global.console.warn = jest.fn();
    });

    afterEach(() => {
      imageMetadata.clear();
    });

    afterAll(() => {
      global.console.warn = warn;
    });

    test('stores metadata for every source image', async () => {
      eleventyImg.default.mockResolvedValue(metadata);

      await cacheImageMetadata();

      expect(imageMetadata.size).toBeGreaterThan(0);
      // keys are normalized, relative to the project root
      for (const key of imageMetadata.keys()) {
        expect(key.startsWith('src/images/')).toBe(true);
      }
      expect(imageMetadata.values().next().value).toEqual(metadata);
      expect(eleventyImg.default.mock.calls[0][1].statsOnly).toBe(true);
    });

    test('warns (and skips) images it cannot read', async () => {
      eleventyImg.default.mockRejectedValue(new Error('nope'));

      await cacheImageMetadata();

      expect(imageMetadata.size).toBe(0);
      expect(global.console.warn).toHaveBeenCalled();
      expect(global.console.warn.mock.calls[0][0]).toContain(
        'Unable to read image metadata',
      );
    });
  });
});
