export const collection = [
  {
    inputPath: './test1.md',
    fileSlug: 'test1',
    outputPath: './_site/test1/index.html',
    url: '/test1/',
    date: '2018-01-09T04:10:17.000Z',
    data: {
      title: 'Test Title',
      tags: ['tag 1', 'tag2'],
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
    fileSlug: 'test2',
    outputPath: './_site/test2/index.html',
    url: '/test2/',
    date: '2018-03-09T04:10:17.000Z',
    data: {
      title: 'Test Title',
      tags: ['tag 1', 'tag2'],
      date: 'Last Modified',
    },
    templateContent: '<h1>This is my title</h1>\n\n<p>This is content…',
  },
  {
    inputPath: './test3.md',
    fileSlug: 'test3',
    outputPath: './_site/test3/index.html',
    url: '/test3/',
    date: '2018-03-09T04:10:17.000Z',
    event: {
      date: '2018-05-10T04:10:17.000Z',
      end: '2018-04-10T04:10:17.000Z',
    },
    data: {
      title: 'Test Title',
      tags: ['tag 1', 'tag2'],
      date: '2020-04-10T04:10:17.000',
    },
    templateContent: '<h1>This is my title</h1>\n\n<p>This is content…',
  },
  {
    inputPath: './test4.md',
    fileSlug: 'test4',
    outputPath: './_site/test4/index.html',
    url: '/test4/',
    date: '2020-04-10T04:10:17.000Z',
    event: {
      date: '2018-04-09T04:10:17.000Z',
      end: '2021-04-10T04:10:17.000Z',
    },
    data: {
      title: 'Test Title',
      tags: ['tag 1', 'tag2'],
      date: '2020-04-10T04:10:17.000Z',
    },
    templateContent: '<h1>This is my title</h1>\n\n<p>This is content…',
  },
  {
    inputPath: './test5.md',
    fileSlug: 'test5',
    outputPath: './_site/test5/index.html',
    url: '/test5/',
    date: '2020-04-10T04:10:17.000Z',
    data: {
      title: 'Test Title',
      index: 'tag 1',
      date: '2020-04-10T04:10:17.000Z',
    },
    templateContent: '<h1>This is my title</h1>\n\n<p>This is content…',
  },
];

export const collection2 = [
  {
    inputPath: './test1.md',
    fileSlug: 'test1',
    outputPath: './_site/test1/index.html',
    url: '/test1/',
    date: '2018-01-09T04:10:17.000Z',
    data: {
      title: 'Test Title',
      tags: ['tag 1', 'tag2'],
      author: 'miriam',
    },
    templateContent: '<h1>This is my title</h1>\n\n<p>This is content…',
  },
  {
    inputPath: './test2.md',
    fileSlug: 'test1',
    outputPath: './_site/test2/index.html',
    url: '/test2/',
    date: '2018-01-09T04:10:17.000Z',
    data: {
      title: 'Test Title',
      tags: ['tag 1', 'tag2'],
      author: 'oddbird',
    },
    templateContent: '<h1>This is my title</h1>\n\n<p>This is content…',
  },
  {
    inputPath: './test3.md',
    fileSlug: 'test3',
    outputPath: './_site/test3/index.html',
    url: '/test1/',
    date: '2018-01-09T04:10:17.000Z',
    data: {
      title: 'Test Title',
      tags: ['tag 1', 'tag2'],
      author: 'erica',
      bird: 'erica',
    },
    templateContent: '<h1>This is my title</h1>\n\n<p>This is content…',
  },
  {
    inputPath: './test4.md',
    fileSlug: 'test4',
    outputPath: './_site/test4/index.html',
    url: '/test1/',
    date: '2018-01-09T04:10:17.000Z',
    data: {
      title: 'Test Title',
      tags: ['tag 1', 'tag2'],
      author: 'jimbob',
      end: '2019-01-09T04:10:17.000Z',
    },
    templateContent: '<h1>This is my title</h1>\n\n<p>This is content…',
  },
  {
    inputPath: './test5.md',
    fileSlug: 'test5',
    outputPath: './_site/test5/index.html',
    url: '/test5/',
    date: '2018-01-09T04:10:17.000Z',
    data: {
      title: 'Test Title',
      tags: ['tag 1', 'tag2'],
    },
    templateContent: '<h1>This is my title</h1>\n\n<p>This is content…',
  },
];

export const collection3 = [
  {
    inputPath: './test1.md',
    fileSlug: 'test1',
    outputPath: './_site/test1/index.html',
    url: '/test1/',
    date: '2019-01-09T04:10:17.000Z',
    data: {
      title: 'Test Title',
      tags: ['tag 1', 'tag2'],
      author: 'miriam',
      end: 'ongoing',
      slug: 'news',
      oss: 'owner',
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

export const collections = {
  all: [collection, collection2, collection3],
};
