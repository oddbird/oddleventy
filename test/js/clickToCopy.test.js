/**
 * @jest-environment jsdom
 */
/* eslint-disable no-undef */
import {
  anchorLinkIconString,
  clickToCopy,
  copyAnchorLink,
} from '../../src/js/clickToCopy';

describe('clickToCopy tests', () => {
  beforeAll(() => {
    Object.assign(window.navigator, {
      clipboard: {
        writeText: jest.fn().mockImplementation(() => Promise.resolve()),
      },
    });
    // eslint-disable-next-line max-len
    const anchorLinkHTML = `<div class="anchor-link-wrapper"><h2 id="background" tabindex="-1">Background</h2><a class="header-anchor" href="#background"><span aria-hidden="true">${anchorLinkIconString}</span> <span class="sr-only">Click to copy the permalink to “Background”</span></a></div>`;
    document.body.innerHTML = anchorLinkHTML;
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

  test('copyAnchorLink adds and removed clicked class', async () => {
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
});
