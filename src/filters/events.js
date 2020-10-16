'use strict';

const { now, getDate } = require('#/time');

/* @docs
label: Event Filters
category: File
*/

/* @docs
label: buildEvent
category: List
note: |
  Build an event-page out of combined event and page data,
  so that events can be treated as a page of their own
params:
  page:
    type: 11ty page object
  event:
    type: object
*/
const buildEvent = (page, event) => ({
  date: event.date ? getDate(event.date) : page.date,
  end: event.end ? getDate(event.end) : null,
  url: page.url,
  inputPath: page.inputPath,
  fileSlug: page.fileSlug,
  outputPath: page.outputPath,
  page: page.data,
  data: event,
});

/* @docs
label: pageEvents
category: List
note: |
  Turn page events
  into a structured event collection
links:
  - '[Event-list samples](/sample/events/)'
params:
  page:
    type: 11ty page
*/
const pageEvents = (page) => {
  const events = page.data.events || [];

  return events
    .map((event) => buildEvent(page, event))
    .sort((a, b) => b.date - a.date);
};

/* @docs
label: getEvents
category: List
note: |
  Turn events from multiple pages
  into a structured event collection
links:
  - '[Event-list samples](/sample/events/)'
params:
  collection:
    type: 11ty collection
*/
const getEvents = (collection) => {
  const results = [];

  collection.forEach((page) => {
    Array.prototype.push.apply(results, pageEvents(page));
  });

  return results.sort((a, b) => b.date - a.date);
};

/* @docs
label: isFuture
category: Upcoming
note: Check that the page/event has a start date in the future (or today)
params:
  page:
    type: event object
*/
const isFuture = (event) =>
  event.end ? getDate(event.end) >= now() : getDate(event.date) >= now();

/* @docs
label: getFuture
category: Upcoming
note: Return only the pages/events in the future
params:
  events:
    type: array of events
*/
const getFuture = (events) => events.filter(isFuture);

module.exports = {
  buildEvent,
  getEvents,
  pageEvents,
  isFuture,
  getFuture,
};
