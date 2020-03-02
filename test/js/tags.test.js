const {
  displayName,
  isPublic,
  publicTags,
  tagData,
  getTags,
} = require('#/tags');

const collection = [
  {
    inputPath: './test1.md',
    fileSlug: 'test1',
    outputPath: './_site/test1/index.html',
    url: '/test1/',
    date: '2018-01-09T04:10:17.000Z',
    data: {
      index: {
        slug: 'foo',
      },
      title: 'Test Title',
      tags: ['tag 1', 'tag 2'],
      author: 'miriam',
    },
    templateContent: '<h1>This is my title</h1>\n\n<p>This is content…',
  },
];

describe('tag filters', () => {
  const tags = ['workshops', '_foo bar', 'talks'];

  test('isPublic', () => {
    expect(isPublic(tags[0])).toEqual(true);
    expect(isPublic(tags[1])).toBe(false);
  });

  test('displayName', () => {
    expect(displayName(tags[0])).toEqual('Workshops');
    expect(displayName(tags[1])).toEqual('Foo bar');
  });

  test('publicTags', () => {
    const expected = [tags[0], tags[2]];

    expect(publicTags(tags)).toEqual(expected);
  });

  test('tagData', () => {
    const collections = {
      all: collection,
      workshops: [],
      talks: collection,
    };
    const expected = [
      { tag: 'talks', url: '/tags/talks/', pageCount: 1 },
      { tag: 'workshops', url: '/tags/workshops/', pageCount: 0 },
    ];

    expect(tagData(collections, tags)).toEqual(expected);
  });

  test('getTags', () => {
    const expected = ['tag 1', 'tag 2'];

    expect(getTags(collection)).toEqual(expected);
  });
});
