'use strict';

const { getDate } = require('./time');

/* @docs
label: Event Filters
category: File
*/

/* @docs
label: buildEvent
note: |
  Build an event-page out of combined event and page data,
  so that events can be treated as a page of their own
params:
  page:
    type: page object
  event:
    type: object
*/
const buildEvent = (page, event) => ({
  date: event ? getDate(event.date) || page.date : page.date,
  url: page.url,
  inputPath: page.inputPath,
  fileSlug: page.fileSlug,
  outputPath: page.outputPath,
  data: page.data,
  event,
});

/* @docs
label: includeEvents
note: |
  Turn collection-events into top-level pages,
  either in-addition-to or replacing their source pages
params:
  collection:
    type: 11ty collection
  replace:
    type: boolean
    default: true
    note: |
      Set `false` in order to see both events and
      event-having pages in the list
*/
const includeEvents = (collection, replace = true) => {
  const results = [];

  collection.forEach((page) => {
    if (page.data.events) {
      page.data.events.forEach((event) => {
        results.push(buildEvent(page, event));
      });

      if (!replace) {
        results.push(page);
      }
    } else {
      results.push(page);
    }
  });

  return results.sort((a, b) => b.date - a.date);
};

module.exports = {
  buildEvent,
  includeEvents,
};
