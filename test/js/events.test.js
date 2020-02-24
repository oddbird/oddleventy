const { buildEvent, getEvents, isFuture, getFuture } = require('#/events');

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
      date: 'Last Modified',
      events: [
        {
          foo: 'bar',
          date: '2018-01-09T04:10:17.000Z',
          end: '2018-01-10T04:10:17.000Z',
        },
        {
          bar: 'baz',
          date: '2018-02-09T04:10:17.000Z',
          end: '2018-01-10T04:10:17.000Z',
        },
      ],
    },
    templateContent: '<h1>This is my title</h1>\n\n<p>This is content…',
  },
  {
    inputPath: './test2.md',
    fileSlug: 'test2', // fileSlug was added in 0.5.3
    outputPath: './_site/test2/index.html',
    url: '/test2/',
    date: '2018-03-09T04:10:17.000Z',
    data: {
      title: 'Test Title',
      tags: ['tag1', 'tag2'],
      date: 'Last Modified',
    },
    templateContent: '<h1>This is my title</h1>\n\n<p>This is content…',
  },
  {
    inputPath: './test3.md',
    fileSlug: 'test3', // fileSlug was added in 0.5.3
    outputPath: './_site/test3/index.html',
    url: '/test3/',
    date: '2018-03-09T04:10:17.000Z',
    event: {
      date: '2018-05-10T04:10:17.000Z',
      end: '2018-04-10T04:10:17.000Z',
    },
    data: {
      title: 'Test Title',
      tags: ['tag1', 'tag2'],
      date: '2020-04-10T04:10:17.000',
    },
    templateContent: '<h1>This is my title</h1>\n\n<p>This is content…',
  },
  {
    inputPath: './test4.md',
    fileSlug: 'test4', // fileSlug was added in 0.5.3
    outputPath: './_site/test4/index.html',
    url: '/test4/',
    date: '2020-04-10T04:10:17.000Z',
    event: {
      date: '2020-04-10T04:10:17.000Z',
      end: '2020-04-11T04:10:17.000Z',
    },
    data: {
      title: 'Test Title',
      tags: ['tag1', 'tag2'],
      date: '2020-04-10T04:10:17.000Z',
    },
    templateContent: '<h1>This is my title</h1>\n\n<p>This is content…',
  },
];

describe('event filters', () => {
  describe('buildEvent', () => {
    test('sets page date from event date', () => {
      const expected = event.date;

      expect(buildEvent(page, event).date).toEqual(expected);
    });

    test('sets page date from page if no event date', () => {
      const expected = page.date;

      expect(buildEvent(page, { ...event, date: null }).date).toEqual(expected);
    });
  });

  describe('getEvents', () => {
    test('returns pages without events, and built event pages', () => {
      expect(getEvents(collection, 'mixed').length).toBe(5);
    });

    test('returns all pages and all built events', () => {
      expect(getEvents(collection, true).length).toBe(6);
    });
    test('return just the built events', () => {
      expect(getEvents(collection, false).length).toBe(2);
    });
  });

  describe('isFuture', () => {
    test('returns false for event dates not in the future', () => {
      expect(isFuture(collection[2])).toBeFalsy();
    });

    test('returns true for events dates in the future', () => {
      expect(isFuture(collection[3])).toBeTruthy();
    });
  });

  test('getFuture', () => {
    expect(getFuture(collection).length).toBe(1);
  });
});
