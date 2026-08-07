import { globSync } from 'node:fs';
import { extname, normalize } from 'node:path';

import { jest } from '@jest/globals';

jest.unstable_mockModule('@11ty/eleventy-img', () => ({
  default: jest.fn(),
}));

const eleventyImg = await import('@11ty/eleventy-img');
const { cacheImageMetadata, finishImages, image, imageErrors, imageMetadata } =
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
      imageMetadata.clear();
      imageErrors.clear();
      // the only key shape `cacheImageMetadata` can produce
      imageMetadata.set('src/images/foo/img.jpg', metadata);
      // eleventy-img always returns a promise
      eleventyImg.default.mockResolvedValue(metadata);
    });

    // drain the generation queue, so nothing leaks into a later block
    afterEach(() => finishImages());

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
      // filenames are not hashed, so output paths must mirror the source dirs
      expect(options.outputDir).toBe('./_site/assets/images/foo');
      expect(options.urlPath).toBe('/assets/images/foo');
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

    // `content/blog/2025/custom-functions.md` sets `image.src: /projects/w3c.jpg`,
    // and `embed.macros.njk` prepends `./src/images/`
    test('normalizes a doubled slash in the source path', () => {
      image('./src/images//foo/img.jpg', 'alt text');

      expect(eleventyImg.default.generateHTML).toHaveBeenCalledTimes(1);
      expect(eleventyImg.default.generateHTML.mock.calls[0][0]).toBe(metadata);
      // generation must target the same paths the metadata was computed with
      expect(eleventyImg.default.mock.calls[0][1].outputDir).toBe(
        './_site/assets/images/foo',
      );
    });

    test('normalizes a doubled slash when returning a url', () => {
      expect(image('./src/images//foo/img.jpg', null, null, null, true)).toBe(
        '/assets/images/img-960w.webp',
      );
    });

    test('warns and throws if src is outside the image directory', () => {
      // `cacheImageMetadata` can only ever key paths under `./src/images/`
      expect(() => image('foo/img.jpg')).toThrow('Missing image metadata');
      expect(global.console.warn).toHaveBeenCalledWith(
        'Unexpected image source path: "./foo/img.jpg"',
      );
    });

    test('throws if metadata was not pre-computed', () => {
      imageMetadata.clear();

      expect(() => image(src)).toThrow('Missing image metadata');
    });

    test('reports the underlying cause for an unreadable image', () => {
      imageMetadata.clear();
      imageErrors.set('src/images/foo/img.jpg', new Error('bad header'));

      expect(() => image(src)).toThrow('Unable to process image');
      expect(() => image(src)).toThrow('bad header');
    });
  });

  describe('finishImages', () => {
    const src = './src/images/foo/img.jpg';

    beforeEach(() => {
      imageMetadata.clear();
      imageErrors.clear();
      imageMetadata.set('src/images/foo/img.jpg', metadata);
    });

    afterEach(() => {
      eleventyImg.default.mockReset();
    });

    test('resolves when every image generated', async () => {
      eleventyImg.default.mockResolvedValue(metadata);
      image(src, 'alt text');

      await expect(finishImages()).resolves.toBeUndefined();
    });

    test('reports the source of any image that failed', async () => {
      eleventyImg.default.mockRejectedValue(new Error('sharp exploded'));
      image(src, 'alt text');

      await expect(finishImages()).rejects.toThrow(
        `Unable to generate images:\n  ${src}: sharp exploded`,
      );
    });

    test('does not re-report failures on a later build', async () => {
      eleventyImg.default.mockRejectedValue(new Error('sharp exploded'));
      image(src, 'alt text');

      await expect(finishImages()).rejects.toThrow('sharp exploded');
      await expect(finishImages()).resolves.toBeUndefined();
    });
  });

  describe('cacheImageMetadata', () => {
    let warn;

    beforeAll(() => {
      warn = global.console.warn;
      global.console.warn = jest.fn();
    });

    beforeEach(() => {
      imageMetadata.clear();
      imageErrors.clear();
    });

    // `clearMocks` resets calls but not implementations, which would
    // otherwise leak into `image()`'s un-awaited `eleventyImg()` call
    afterEach(() => {
      eleventyImg.default.mockReset();
    });

    afterAll(() => {
      global.console.warn = warn;
    });

    test('stores metadata for every source image', async () => {
      eleventyImg.default.mockResolvedValue(metadata);

      await cacheImageMetadata();

      // The extension list is intentionally duplicated rather than imported
      // from the filter: sharing the set would make this assertion
      // tautological, and it would no longer catch a dropped extension.
      const expected = globSync('./src/images/**/*')
        .filter((file) =>
          ['.avif', '.gif', '.jpeg', '.jpg', '.png', '.svg', '.webp'].includes(
            extname(file).toLowerCase(),
          ),
        )
        .map((file) => normalize(file));

      expect(expected.length).toBeGreaterThan(0);
      expect([...imageMetadata.keys()].sort()).toEqual(expected.sort());
      expect(imageMetadata.values().next().value).toEqual(metadata);

      for (const [src, opts] of eleventyImg.default.mock.calls) {
        expect(src.startsWith('./src/images/')).toBe(true);
        expect(opts.statsOnly).toBe(true);
      }
    });

    test('warns (and skips) images it cannot read', async () => {
      eleventyImg.default.mockRejectedValue(new Error('nope'));

      await cacheImageMetadata();

      expect(imageMetadata.size).toBe(0);
      expect(imageErrors.size).toBeGreaterThan(0);
      const [message] = global.console.warn.mock.calls[0];

      expect(message).toMatch(/^Unable to read image metadata for/u);
      expect(message).toMatch(/"\.\/src\/images\/.+": Error: nope$/u);
    });

    test('clears stale entries, so removed images do not linger', async () => {
      imageMetadata.set('src/images/gone.jpg', metadata);
      eleventyImg.default.mockResolvedValue(metadata);

      await cacheImageMetadata();

      expect(imageMetadata.has('src/images/gone.jpg')).toBe(false);
    });
  });
});
