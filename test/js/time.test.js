const { getDate } = require('#/time');

describe('time filters', () => {
  test('getDate', () => {
    const date = '2020-02-01';

    expect(getDate(date, 'url')).toEqual('2020/02/01');
    expect(getDate(date, 'eeee')).toEqual('Saturday');
  });
});
