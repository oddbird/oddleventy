const { buildEvent } = require('#/events');

const page = {
  inputPath: './test1.md',
  fileSlug: 'test1',
  outputPath: './_site/test1/index.html',
  url: '/test1/',
  date: '2019-01-09T04:10:17.000Z',
  data: {
    title: 'Test Title',
    tags: ['tag1', 'tag2'],
    author: 'miriam',
  },
  templateContent: '<h1>This is my title</h1>\n\n<p>This is content…',
};
const event = {
  date: new Date('2011-04-11T10:20:30Z'),
};
describe('buildEvent', () => {
  test('builds pages from page data', () => {
    const expected = event.date;

    expect(buildEvent(page, event).date).toEqual(expected);
  });

  test('does something else', () => {
    const expected = page.date;

    expect(buildEvent(page, { ...event, date: null }).date).toEqual(expected);
  });
});
