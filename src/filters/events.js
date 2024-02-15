import { uniq } from 'lodash-es';

import { getDate, now } from '#filters/time.js';

/* @docs
label: Event Filters
category: File
*/

/* @docs
label: isFuture
category: Upcoming
note: Check that the page/event has a start date in the future (or today)
example: |
  {%- if event | isFuture -%}
    <strong>{{ utility.datetime(event.date) }}</strong>
  {%- else -%}
    {{ utility.datetime(event.date) }}
  {%- endif %}
params:
  page:
    type: event object
*/
export const isFuture = (event) =>
  event.end ? getDate(event.end) >= now() : getDate(event.date) >= now();

/* @docs
label: getFuture
category: Upcoming
note: Return only the pages/events in the future
example: |
  {% set events = events | getFuture if events else none %}
params:
  events:
    type: array of events
*/
export const getFuture = (events) => events.filter(isFuture);

/* @docs
label: buildEvent
category: List
note: |
  Build an event-page out of combined event and page data,
  so that events can be treated as a page of their own
example: |
  {% set first_event = page | buildEvent(page.data.events[0]) %}
params:
  page:
    type: 11ty page object
  event:
    type: object
*/
export const buildEvent = (page, event) => {
  const built = {
    date: event.date ? getDate(event.date) : page.date,
    end: event.end ? getDate(event.end) : null,
    venue: event.venue || page.data.venue,
    url: page.url,
    birds: page.data.author || page.data.bird,
    inputPath: page.inputPath,
    fileSlug: page.fileSlug,
    outputPath: page.outputPath,
    page: page.data,
    data: event,
  };

  built.is_future = isFuture(built);

  return built;
};

/* @docs
label: pageEvents
category: List
note: |
  Turn page events
  into a structured event collection
example: |
  {{ events.list(
    'Page Events',
    collections.all | getCollectionItem(page) | pageEvents
  ) }}
params:
  page:
    type: 11ty page
*/
export const pageEvents = (page) => {
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
example: |
  {{ events.section(
    title='Upcoming Events',
    events=collections.all | getEvents | getFuture,
    all=false
  ) }}
params:
  collection:
    type: 11ty collection
*/
export const getEvents = (collection) => {
  const results = [];

  collection.forEach((page) => {
    Array.prototype.push.apply(results, pageEvents(page));
  });

  return results.sort((a, b) => b.date - a.date);
};

/* @docs
label: birdEvents
category: List
note: |
  Group events by Bird
params:
  events:
    type: collection of events
*/
export const birdEvents = (events) => {
  const groups = [];
  const birds = uniq(events.flatMap((event) => event.birds));

  birds.forEach((name) => {
    if (name !== 'oddbird') {
      groups.push({
        name,
        events: events.filter((event) => event.birds.includes(name)),
      });
    }
  });

  return groups;
};
