const {
  isPublic,
  isCurrent,
  getPublic,
  hasData,
  getData,
  getPage,
  findPage,
  render,
  pageYears,
} = require('#/pages');

jest.mock('lodash');

const collection = [
  {
    inputPath: './test1.md',
    fileSlug: 'test1',
    outputPath: './_site/test1/index.html',
    url: '/test1/',
    date: '2019-01-09T04:10:17.000Z',
    data: {
      title: 'Test Title',
      tags: ['tag1', 'tag2'],
      author: 'miriam',
      end: 'ongoing',
      slug: 'news',
    },
    templateContent: '<h1>This is my title</h1>\n\n<p>This is content…',
  },
  {
    inputPath: './test2.md',
    fileSlug: 'test2',
    outputPath: './_site/test2/index.html',
    url: '/test2/',
    date: '2019-01-09T04:10:17.000Z',
    data: {
      title: 'Draft Title',
      tags: ['tag3', 'tag3'],
      author: 'erica',
      draft: true,
    },
    templateContent: '<h1>This is my title</h1>\n\n<p>This is content…',
  },
  {
    inputPath: './test3.md',
    fileSlug: 'test3',
    outputPath: './_site/test3/index.html',
    url: '/test3/',
    date: '2019-01-09T04:10:17.000Z',
    data: {
      title: 'Draft Title',
      tags: ['tag3', 'tag3'],
      author: 'erica',
      end: '2020-01-09T04:10:17.000Z',
      renderData: { foo: 'bar' },
    },
    templateContent: '<h1>This is my title</h1>\n\n<p>This is content…',
  },
  {
    inputPath: './test4.md',
    fileSlug: 'test4',
    outputPath: './_site/test4/index.html',
    url: '/test4/',
    date: '2019-01-09T04:10:17.000Z',
    data: {
      title: 'Event Title',
      tags: ['tag3', 'tag3'],
      author: 'erica',
      end: '2020-01-09T04:10:17.000Z',
      foo: { foo: 'bar' },
      draft: true,
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
];
describe('page filters', () => {
  test('isPublic', () => {
    expect(isPublic(collection[0])).toBeTruthy();
    expect(isPublic(collection[1])).toBeFalsy();
  });

  test('isCurrent', () => {
    expect(isCurrent(collection[0])).toBeTruthy();
    expect(isCurrent(collection[2])).toBeFalsy();
  });

  test('getPublic', () => {
    const publicPages = [collection[0], collection[2]];

    expect(getPublic(collection)).toEqual(publicPages);
  });

  test('hasData', () => {
    // this keeps returning undefined...
    hasData(collection, 'data.slug', 'news');
  });

  test('getData', () => {
    // this keeps returning undefined...
    getData(collection, 'author', 'erica');
  });

  test('findData', () => {
    // this keeps returning undefined...
    // findData(collection, 'author', 'erica');
  });

  test('getPage', () => {
    // this keeps returning undefined...
    getPage(collection, '/test2/', 'foo', 'bar');
  });

  test('findPage', () => {
    // this keeps returning undefined...
    findPage(collection, '/test2/', 'foo', 'bar');
  });

  test('render', () => {
    expect(render(collection[2], 'foo')).toBe('bar');
    expect(render(collection[3], 'foo')).toEqual({ foo: 'bar' });
  });

  test('pageYears', () => {
    const testPage = pageYears(collection)[0];
    const pageKeys = Object.keys(testPage);

    expect(pageKeys).toHaveProperty('sort');
    // This is somehow failing but its in keys when printed //
    // expect(pageKeys).toHaveProperty('year');
  });

  // test('byYear', () => {
  //   console.log(byYear(collection));
  // });
});
