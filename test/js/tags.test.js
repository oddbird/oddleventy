const {
  displayName,
  isPublic,
  publicTags,
  // tagData,
  // tagLink,
} = require('#/tags');

jest.mock('slugify');

// const collection = [
//   {
//     inputPath: './test1.md',
//     fileSlug: 'test1',
//     outputPath: './_site/test1/index.html',
//     url: '/test1/',
//     date: '2018-01-09T04:10:17.000Z',
//     data: {
//       index: {
//         slug: 'foo',
//       },
//       title: 'Test Title',
//       tags: ['tag 1', 'tag 2'],
//       author: 'miriam',
//     },
//     templateContent: '<h1>This is my title</h1>\n\n<p>This is content…',
//   },
// ];

describe('tag filters', () => {
  const tags = ['bar baz', '_foo bar', 'foo bar baz'];
  test('isPublic', () => {
    expect(isPublic(tags[0])).toEqual(true);
    expect(isPublic(tags[1])).toBe(false);
  });

  test('displayName', () => {
    expect(displayName(tags[0])).toEqual('Bar baz');
    expect(displayName(tags[1])).toEqual('Foo bar');
  });

  test('publicTags', () => {
    const expected = [tags[0], tags[2]];

    expect(publicTags(tags)).toEqual(expected);
  });
});
