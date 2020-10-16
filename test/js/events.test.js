import MockDate from 'mockdate';

import {
  buildEvent,
  getEvents,
  getFuture,
  isFuture,
  pageEvents,
} from '#/events';

import { collection } from './utils';

const event = {
  date: new Date('2011-04-11T10:20:30Z'),
  venue: 'SmashingConf',
};
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
    events: [event],
  },
  templateContent: '<h1>This is my title</h1>\n\n<p>This is content…',
};

describe('event filters', () => {
  beforeAll(() => {
    MockDate.set('2020-02-01');
  });

  afterAll(() => {
    MockDate.reset();
  });

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
    test('return the built events from a collection', () => {
      expect(getEvents(collection)).toHaveLength(2);
    });
  });
  describe('pageEvents', () => {
    test('return the built events from a page', () => {
      expect(pageEvents(page)).toHaveLength(1);
    });
  });

  test('isFuture', () => {
    const events = [
      {
        foo: 'bar',
        date: '2020-01-09T04:10:17.000Z',
        end: '2020-01-10T04:10:17.000Z',
      },
      {
        bar: 'baz',
        date: '2018-04-09T04:10:17.000Z',
        end: '2020-04-10T04:10:17.000Z',
      },
    ];

    expect(isFuture(events[0])).toBeFalsy();
    expect(isFuture(events[1])).toBeTruthy();
  });

  test('getFuture', () => {
    expect(getFuture(collection)).toHaveLength(2);
  });
});
