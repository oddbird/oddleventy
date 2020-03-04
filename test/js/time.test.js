const { now, getDate, rssDate, rssLatest } = require('#/time');

const page = {
  inputPath: './test1.md',
  fileSlug: 'test1',
  outputPath: './_site/test1/index.html',
  url: '/test1/',
  date: new Date('2019-01-09T04:10:17.000Z'),
  data: {
    title: 'Test Title',
    tags: ['tag1', 'tag2'],
    author: 'miriam',
    end: 'ongoing',
    slug: 'news',
  },
  templateContent: '<h1>This is my title</h1>\n\n<p>This is content…',
};
describe('time filters', () => {
  test('getDate', () => {
    const expected = now;

    expect(getDate()).toEqual(expected);
  });

  test('rssDate', () => {
    rssDate(page);
  });

  test('rssLatest', () => {
    rssLatest(page);
  });
});
