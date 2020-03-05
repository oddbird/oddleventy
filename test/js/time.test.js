const { now, getDate } = require('#/time');

describe('time filters', () => {
  test('getDate', () => {
    const expected = now;

    expect(getDate()).toEqual(expected);
  });
});
