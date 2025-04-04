import MockDate from 'mockdate';

import {
  birdEvents,
  buildEvent,
  getEvents,
  getFuture,
  isFuture,
  pageEvents,
} from '#filters/events.js';

import { collection, collection4 } from './utils.js';

const event = {
  date: new Date('2011-04-11T10:20:30Z'),
  venue: 'SmashingConf',
};
const page = {
  page: {
    inputPath: './test1.md',
    fileSlug: 'test1',
    outputPath: './_site/test1/index.html',
    url: '/test1/',
    date: '2019-01-09T04:10:17.000Z',
  },
  data: {
    title: 'Test Title',
    tags: ['tag1', 'tag2'],
    author: 'miriam',
    events: [event],
  },
  content: '<h1>This is my title</h1>\n\n<p>This is content…',
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
      const expected = page.page.date;

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
    expect(getFuture(getEvents(collection))).toHaveLength(0);
    expect(getFuture(getEvents(collection4))).toHaveLength(3);
  });

  test('birdEvents', () => {
    const events = [
      {
        id: 1,
        birds: ['jonny', 'ed'],
      },
      {
        id: 2,
        birds: ['ed', 'miriam'],
      },
      {
        id: 3,
        birds: ['ed'],
      },
      {
        id: 4,
        birds: ['oddbird'],
      },
    ];
    const expected = [
      { name: 'jonny', events: [events[0]] },
      { name: 'ed', events: [events[0], events[1], events[2]] },
      { name: 'miriam', events: [events[1]] },
    ];

    expect(birdEvents(events)).toEqual(expected);
  });
});
