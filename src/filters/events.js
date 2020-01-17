'use strict';

const pages = require('./pages');
const { getDate, now } = require('./time');
const { unique, groupBy } = require('./utils');

/* @docs
label: Event Filters
category: file
todo: |
  These filters come from miriamsuzanne.com,
  and I'm not at all sure how/if we'll use them.
  I'll document them in more detail
  once I set up our events pages…
*/

/* @docs
label: isPublic
params:
  event:
    type: event object
*/
const isPublic = (event) => Boolean(event.draft);

/* @docs
label: hasEvents
params:
  page:
    type: page object
*/
const hasEvents = (page) => page.data.events;

const groupNames = {
  5000: 'now',
  now: 5000,
  4000: 'ongoing',
  ongoing: 4000,
  3000: 'soon',
  soon: 3000,
};

/* @docs
label: isEvent
params:
  page:
    type: page object
*/
const isEvent = (page) =>
  page.data.tags ? page.data.tags.includes('_post') : false;

/* @docs
label: buildEvent
note:
params:
  page:
    type: page object
  event:
    type: event object
    note: can be empty, for building events from pages
*/
const buildEvent = (page, event) => {
  const eventStart = event ? event.start || event.date : null;
  const start = eventStart || page.data.start || page.date;
  let end = eventStart ? event.end : page.data.end;
  end = end ? end : start;

  // set end for far future…
  if (end === 'ongoing') {
    end = new Date(`${groupNames.ongoing}-01-01`);
  }

  // set group…
  const end_iso = getDate(end, 'iso');
  const start_iso = getDate(start, 'iso');
  const now_iso = getDate(now, 'iso');
  const date = start;
  let group = getDate(date, 'year');

  if (end_iso >= now_iso) {
    const endYear = `${getDate(end, 'year')}`;
    if (groupNames[endYear]) {
      group = endYear;
    } else {
      group = start_iso > now_iso ? groupNames.soon : groupNames.now;
    }
  }

  // concat tags
  const pageTags = page.data.tags || [];
  const eventTags = event ? event.tags || [] : [];
  const tags = unique([...pageTags, ...eventTags]);

  // feature
  const feature = event ? event.feature : page.data.feature;

  return { page, event, start, end, date, group, tags, feature };
};

/* @docs
label: fromData
note: Get events from `page.data.events` yaml
params:
  page:
    type: page object
*/
const fromData = (page) => {
  const events = [];

  page.data.events
    .filter((event) => isPublic(event))
    .forEach((event) => {
      events.push(buildEvent(page, event));
    });

  return events;
};

/* @docs
label: fromCollection
note: Get both page and data events from a collection
params:
  collection:
    type: array of pages
*/
const fromCollection = (collection) => {
  const events = [];

  collection
    .filter((page) => pages.isPublic(page))
    .forEach((page) => {
      if (hasEvents(page)) {
        Array.prototype.push.apply(events, fromData(page));
      }

      if (isEvent(page) && pages.isPublic(page)) {
        events.push(buildEvent(page));
      }
    });

  return events;
};

/* @docs
label: byGroup
note: Group events by year, and sort
params:
  events:
    type: array of events
*/
const byGroup = (events) => {
  const groups = groupBy(events, 'group');
  const sorted = [];

  Object.keys(groups)
    .sort((a, b) => a - b)
    .forEach((group) => {
      const data = groups[group].sort((a, b) => a.date - b.date);
      group = groupNames[group] || group;
      sorted.push({ group, data });
    });

  return sorted.reverse();
};

/* @docs
label: getEvents
note: |
  Get events from a collection,
  optionally filtering by tag,
  and grouping by year
params:
  collection:
    type: array of pages
  tag:
    type: string
    note: Filter by tag
  group:
    type: boolean
    default: true
*/
const getEvents = (collection, tag, group = true) => {
  let events = fromCollection(collection);

  if (tag) {
    events = events.filter((event) => event.tags.includes(tag));
  }

  if (group) {
    events = byGroup(events);
  }

  return events;
};

/* @docs
label: groupName
note: |
  Get the name of a special-case group,
  like "now" / "soon" / "ongoing"
params:
  group:
    type: group id
*/
const groupName = (group) => groupNames[group] || group;

module.exports = {
  isPublic,
  isEvent,
  hasEvents,
  fromCollection,
  byGroup,
  getEvents,
  groupName,
};
