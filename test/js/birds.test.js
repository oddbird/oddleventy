import {
  active,
  activeAuthor,
  authorPage,
  getPages,
  withActiveAuthor,
} from '#filters/birds.js';

import { collection2, collections } from './utils.js';

describe('getPages', () => {
  test('returns pages that the "bird" has authored', () => {
    expect(getPages(collection2, 'miriam', true)).toEqual([collection2[0]]);
  });

  test('returns "oddbird" authored pages', () => {
    const expected = [collection2[1], collection2[2]];

    expect(getPages(collection2, 'erica')).toEqual(expected);
  });
});

describe('active', () => {
  test('filters inactive bird-detail pages', () => {
    const expected = collection2[3];

    expect(active(collection2)).toEqual(expect.not.objectContaining(expected));
  });

  test('returns inactive bird-detail pages', () => {
    const expected = [collection2[3]];

    expect(active(collection2, false)).toEqual(expected);
  });
});

describe('authorPage', () => {
  test('returns author home page', () => {
    const expected = collection2[2];

    expect(authorPage(collection2, 'erica')).toEqual(expected);
  });
});

describe('activeAuthor', () => {
  test('checks if page author is active', () => {
    const pageWithAuthor = collection2[1];
    const pageWithoutAuthor = collection2[4];
    const pageWithCurrentAuthor = collection2[2];

    expect(activeAuthor(pageWithAuthor, collection2)).toBeTruthy();
    expect(activeAuthor(pageWithoutAuthor, collection2)).toBeFalsy();
    expect(activeAuthor(pageWithCurrentAuthor, collection2)).toBeTruthy();
  });
});

describe('withActiveAuthor', () => {
  test('returns pages with active author', () => {
    const expected = [collection2[1]];

    expect(withActiveAuthor(collection2, collections.all)).toEqual(expected);
  });
});
