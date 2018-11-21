const pluginSyntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const markdownItAnchor = require('markdown-it-anchor');
const markdownIt = require('markdown-it')({
  html: true,
  breaks: true,
  linkify: true,
  typographer: true
}).use(markdownItAnchor, {
  permalink: true,
  permalinkClass: 'heading-link',
  permalinkSymbol: '#',
  level: [1, 2, 3, 4]
});

const formatDate = (date, format) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]

  const m0 = date.getMonth();
  const mm = m0 + 1;
  const MM = months[m0];
  const M = MM.slice(0, 3);
  const dd = date.getDate();
  const D = days[date.getDay()];
  const yyyy = date.getFullYear();

  const formats = {
    'day': `${D}`,
    'date': `${dd}`,
    'month': `${mm}`,
    'month-name': `${MM}`,
    'year': `${yyyy}`,
    'numeric': `${mm}/${dd}/${yyyy}`,
    'short': `${M} ${dd}, ${yyyy}`,
    'long': `${MM} ${dd}, ${yyyy}`,
  }

  return formats[format];
}

const getDate = (format = null, date = null) => {
  const now = date ? new Date(date) : new Date();
  return format ? formatDate(now, format) : now;
}

module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(pluginSyntaxHighlight);
  eleventyConfig.addPassthroughCopy('assets');

  eleventyConfig.addFilter("typeOf", (val) => {
    return typeof val;
  });

  eleventyConfig.addFilter("formatDate", (date, format = 'short') => {
    return formatDate(date, format);
  });

  eleventyConfig.addFilter("getDate", (date = null, format = 'short') => {
    return getDate(format, date);
  });

  eleventyConfig.addShortcode("getDate", (format = null) => {
    return getDate(format);
  });

  eleventyConfig.addPairedShortcode("markdown", (content, inline = null) => {
    return inline
      ? markdownIt.renderInline(content)
      : markdownIt.render(content);
  });

  // Create Nav Collection
  eleventyConfig.addCollection('nav', (collection) => {
    return collection.getAll().filter(item => {
      return 'nav' in item.data;
    }).sort((a, b) => {
      return a.data.nav.order > b.data.nav.order;
    });
  })

  eleventyConfig.addCollection("all_events", (collection) => {
    const events = [];

    collection.getAll().filter((page) => {
      return 'events' in page.data;
    }).forEach((page) => {
      page.data.events.forEach((event) => {
        event['data'] = page.data;
        events.push(event);
      });
    });

    return events.sort((a, b) => a.date > b.date );
  });

  /* Markdown */
  eleventyConfig.setLibrary('md', markdownIt);

  return {
    markdownTemplateEngine: "njk",
  }
};
