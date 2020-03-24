const { getDate } = require('#/time');

describe('time filters', () => {
  test('getDate', () => {
    const date = '2020-02-01';
    const expected = '02/01/2020';

    expect(getDate(date, 'slash')).toEqual(expected);
  });
});
