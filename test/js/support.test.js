/* eslint-disable max-len */

import { openCollectiveAvatar } from '#filters/support.js';

describe('support filters', () => {
  test('openCollectiveAvatar', () => {
    const url =
      'https://v1.image.11ty.dev/https%3A%2F%2Fwww.example.com/webp/66/';
    expect(openCollectiveAvatar('https://www.example.com', 'User Name')).toBe(
      `<img src="${url}" width="66" height="66" alt="Open Collective Avatar for User Name" loading="lazy" decoding="async">`,
    );
    expect(openCollectiveAvatar('https://www.example.com')).toBe(
      `<img src="${url}" width="66" height="66" alt="Open Collective Avatar" loading="lazy" decoding="async">`,
    );
  });
});
