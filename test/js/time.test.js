const { getDate } = require('#/time');

describe('time filters', () => {
  let warn;

  beforeAll(() => {
    warn = global.console.warn;
    global.console.warn = jest.fn();
  });

  afterAll(() => {
    global.console.warn = warn;
  });

  test('getDate', () => {
    const date = '2020-02-01';

    expect(getDate(date, 'url')).toBe('2020/02/01');
    expect(getDate(date, 'eeee')).toBe('Saturday');
    expect(global.console.warn).toHaveBeenCalledTimes(1);
  });
});
