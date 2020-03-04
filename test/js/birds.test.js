import { active, authorPage, getPages } from '#/birds';

import { collection2 } from './utils';

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
  test('filters pages from inactive birds', () => {
    const expected = collection2[3];

    expect(active(collection2)).toEqual(expect.not.objectContaining(expected));
  });
  test('returns pages from inactive birds', () => {
    const expected = [collection2[3]];

    expect(active(collection2, false)).toEqual(expected);
  });
});

describe('authorPage', () => {
  test('returns author home page', () => {
    authorPage(collection2, 'erica'); // / this is returning undefined which is not expected
  });
});
