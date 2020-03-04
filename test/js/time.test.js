const { now, getDate, rssDate, rssLatest } = require('#/time');
import { collection } from './utils';

describe('time filters', () => {
  test('getDate', () => {
    const expected = now;

    expect(getDate()).toEqual(expected);
  });

  test('rssDate', () => {
    const page1 = collection[1];
    const expected = page1.date;

    expect(rssDate(collection[1])).toEqual(
      expected.replace('04:10:17.000Z', '12:00:00-06:00'),
    );
  });

  test('rssLatest', () => {
    const expected = '2018-01-09T12:00:00-06:00';

    expect(rssLatest(collection)).toEqual(expected);
  });
});
