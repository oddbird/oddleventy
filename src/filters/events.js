'use strict';

const { getDate } = require('./time');
const { getPage } = require('./pages');

/* @docs
label: Event Filters
category: File
*/

const buildEvent = (page, event = null) => ({
  date: event ? getDate(event.date) || page.date : page.date,
  url: page.url,
  is_event: Boolean(event),
  event,
  data: page.data,
});

const includeEvents = (collection, replace = true) => {
  const results = [];

  collection.forEach((page) => {
    if (page.data.events) {
      page.data.events.forEach((event) => {
        results.push(buildEvent(page, event));
      });

      if (!replace) {
        results.push(buildEvent(page));
      }
    } else {
      results.push(buildEvent(page));
    }
  });

  return results.sort((a, b) => b.date - a.date);
};

const pageEvents = (collection, url, replace = true) => {
  const page = getPage(collection, url);
  return page ? includeEvents([page], replace) : undefined;
};

module.exports = {
  buildEvent,
  includeEvents,
  pageEvents,
};
