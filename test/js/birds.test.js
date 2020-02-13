import { active, authorPage, getPages } from '#/birds';

const collection = [
  {
    inputPath: './test1.md',
    fileSlug: 'test1', // fileSlug was added in 0.5.3
    outputPath: './_site/test1/index.html',
    url: '/test1/',
    date: '2018-01-09T04:10:17.000Z',
    data: {
      title: 'Test Title',
      tags: ['tag1', 'tag2'],
      author: 'miriam',
    },
    templateContent: '<h1>This is my title</h1>\n\n<p>This is content…',
  },
  {
    inputPath: './test2.md',
    fileSlug: 'test1', // fileSlug was added in 0.5.3
    outputPath: './_site/test2/index.html',
    url: '/test2/',
    date: '2018-01-09T04:10:17.000Z',
    data: {
      title: 'Test Title',
      tags: ['tag1', 'tag2'],
      author: 'oddbird',
    },
    templateContent: '<h1>This is my title</h1>\n\n<p>This is content…',
  },
  {
    inputPath: './test3.md',
    fileSlug: 'test3', // fileSlug was added in 0.5.3
    outputPath: './_site/test3/index.html',
    url: '/test1/',
    date: '2018-01-09T04:10:17.000Z',
    data: {
      title: 'Test Title',
      tags: ['tag1', 'tag2'],
      author: 'erica',
    },
    templateContent: '<h1>This is my title</h1>\n\n<p>This is content…',
  },
  {
    inputPath: './test4.md',
    fileSlug: 'test4', // fileSlug was added in 0.5.3
    outputPath: './_site/test4/index.html',
    url: '/test1/',
    date: '2018-01-09T04:10:17.000Z',
    data: {
      title: 'Test Title',
      tags: ['tag1', 'tag2'],
      author: 'jimbob',
      end: 'end-date',
    },
    templateContent: '<h1>This is my title</h1>\n\n<p>This is content…',
  },
];

describe('getPages', () => {
  test('returns pages that the "bird" has authored', () => {
    expect(getPages(collection, 'miriam', true)).toEqual([collection[0]]);
  });
  test('returns "oddbird" authored pages', () => {
    const expected = [collection[1], collection[2]];

    expect(getPages(collection, 'erica')).toEqual(expected);
  });
});

describe('active', () => {
  test('filters pages from inactive birds', () => {
    const expected = collection[3];

    expect(active(collection)).toEqual(expect.not.objectContaining(expected));
  });
  test('returns pages from inactive birds', () => {
    const expected = [collection[3]];

    expect(active(collection, false)).toEqual(expected);
  });
});

describe('authorPage', () => {
  test('returns author home page', () => {
    authorPage(collection, 'erica'); // / this is returning undefined which is not expected
  });
});
