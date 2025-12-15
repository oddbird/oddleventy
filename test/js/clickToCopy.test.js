/**
 * @jest-environment jsdom
 */

import { jest } from '@jest/globals';

import { anchorLinkIconString } from '#filters/type.js';

import { clickToCopy, copyAnchorLink } from '../../src/js/clickToCopy.js';

describe('clickToCopy tests', () => {
  let clipboard;
  beforeAll(() => {
    clipboard = window.navigator.clipboard;

    window.navigator.clipboard = {
      writeText: jest.fn().mockResolvedValue(),
    };
    // eslint-disable-next-line max-len
    const anchorLinkHTML = `<div class="anchor-link-wrapper"><h2 id="background" tabindex="-1">Background</h2><a class="header-anchor" href="#background"><span aria-hidden="true">${anchorLinkIconString}</span> <span class="sr-only">Click to copy the permalink to “Background”</span></a></div>`;
    document.body.innerHTML = anchorLinkHTML;
  });

  afterAll(() => {
    window.navigator.clipboard = clipboard;
  });

  test('clickToCopy calls clipboard with href', () => {
    clickToCopy();
    const evt = new Event('click');
    const anchorLink = document.querySelector('.header-anchor');
    anchorLink.dispatchEvent(evt);

    expect(window.navigator.clipboard.writeText).toHaveBeenCalledWith(
      anchorLink.href,
    );
  });

  test('copyAnchorLink adds and removes clicked class', async () => {
    jest.useFakeTimers();
    const anchorLink = document.querySelector('.header-anchor');
    const mockedAnchorLinkElementDOM = {
      classList: { remove: jest.fn(), add: jest.fn() },
      href: anchorLink.href,
    };

    await copyAnchorLink(mockedAnchorLinkElementDOM);
    jest.runAllTimers();
    expect(mockedAnchorLinkElementDOM.classList.add).toHaveBeenCalledWith(
      'anchor-clicked',
    );
    expect(mockedAnchorLinkElementDOM.classList.remove).toHaveBeenCalledWith(
      'anchor-clicked',
    );
  });

  test('Throw an error and handle when navigator clipboard is undefined (i.e. in IE)', () => {
    jest.resetAllMocks();
    window.navigator = undefined;

    const anchorLink = document.querySelector('.header-anchor');
    const mockedAnchorLinkElementDOM = {
      classList: { remove: jest.fn(), add: jest.fn() },
      href: anchorLink.href,
    };
    expect(() => copyAnchorLink(mockedAnchorLinkElementDOM)).toThrow(
      new Error('An error occurred with copying the anchor link.'),
    );
  });
});
