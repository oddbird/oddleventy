import { forUrl } from '#filters/mentions.js';

import { webmentions } from './utils.js';

describe('event filters', () => {
  describe('forUrl', () => {
    const url = 'https://www.oddbird.net/1/';

    test('returns mentions matching url', () => {
      expect(forUrl(webmentions, url)).toHaveLength(2);
    });

    test('elides long mention', () => {
      const mention = Object.assign({}, webmentions.children[0], {
        content: {
          html: 'This is very long. It is more than 50 words. Because 50 words would be too short. And that would be too bad, because there is much for me to say. Far more than could be said in a mere fifty words, I tell you. It really would be a shame.',
        },
      });

      expect(
        forUrl({ children: [mention] }, url)[0].content.value.endsWith('…'),
      ).toBe(true);
    });

    test('elides long mention without final punctuation', () => {
      const mention = Object.assign({}, webmentions.children[0], {
        content: {
          html: 'This is very long. It is more than 50 words. Because 50 words would be too short. And that would be too bad, because there is much for me to say. Far more than could be said in a mere fifty words, I tell you. It really would be bad. Trust me.',
        },
      });
      const result = forUrl({ children: [mention] }, url)[0].content.value;

      expect(result.endsWith('…')).toBe(true);
      expect(result.endsWith('.…')).toBe(false);
    });

    test('sanitizes text/html', () => {
      const mention = Object.assign({}, webmentions.children[0], {
        content: {
          html: undefined,
          text: 'This <em>has</em> a <discard>discard</discard>.',
        },
      });
      const result = forUrl({ children: [mention] }, url)[0].content.value;

      expect(result).toBe('This <em>has</em> a discard.');
    });
  });
});
