/* eslint-disable max-len */

import { openCollectiveAvatar } from '#filters/support.js';

describe('support filters', () => {
  test('openCollectiveAvatar', () => {
    const url = 'https://v1.image.11ty.dev/https%3A%2F%2Fwww.example.com/webp/';
    expect(openCollectiveAvatar('https://www.example.com', 'User Name')).toBe(
      `<img src="${url}80/" width="80" height="80" alt="Open Collective Avatar for User Name" loading="lazy" decoding="async">`,
    );
    expect(openCollectiveAvatar('https://www.example.com')).toBe(
      `<img src="${url}80/" width="80" height="80" alt="Open Collective Avatar" loading="lazy" decoding="async">`,
    );
    expect(openCollectiveAvatar('https://www.gravatar.com')).toBe(
      `<img src="https://v1.image.11ty.dev/https%3A%2F%2Fwww.gravatar.com%26s%3D80/webp/80/" width="80" height="80" alt="Open Collective Avatar" loading="lazy" decoding="async">`,
    );
    expect(
      openCollectiveAvatar('https://www.example.com', 'User Name', 'md'),
    ).toBe(
      `<img src="${url}120/" width="120" height="120" alt="Open Collective Avatar for User Name" loading="lazy" decoding="async">`,
    );
    expect(
      openCollectiveAvatar('https://www.example.com', 'User Name', 'lg'),
    ).toBe(
      `<img src="${url}160/" width="160" height="160" alt="Open Collective Avatar for User Name" loading="lazy" decoding="async">`,
    );
  });
});
