import _ from 'lodash-es';

import { pageType } from '#filters/taxonomy.js';
import { getDate, now } from '#filters/time.js';
import { getSort } from '#filters/utils.js';

import { isPublic as tagIsPublic } from './tags.js';

/* @docs
label: Page Filters
category: File
*/

/* @docs
label: isPublic
category: Status
note: Check that a page is public
params:
  page:
    type: 11ty page object
*/
export const isPublic = (page) => {
  const live = !page.data.draft;
  const title = Boolean(page.data.title);
  return live && title;
};

/* @docs
label: isCurrent
category: Status
note: Check that the page does not have an end date
params:
  page:
    type: 11ty page object
*/
export const isCurrent = (page) => {
  /* istanbul ignore if */
  if (!page || !page.data) {
    return false;
  }

  return !page.data.end || getDate(page.data.end) >= now();
};

/* @docs
label: getCurrent
category: Filter
note: Filter to pages that do not have an end date
params:
  collection:
    type: array
    note: containing 11ty page objects
*/
export const getCurrent = (collection) => collection.filter(isCurrent);

/* @docs
label: getPublic
category: Filter
note: Return only the public pages from a collection
params:
  collection:
    type: array
    note: containing 11ty page objects
*/
export const getPublic = (collection) => collection.filter(isPublic);

/* @docs
label: hasData
category: Filter
note: Return true if a an object (often a page) has particular data
params:
  obj:
    type: object
    note: The object to search for data
  keys:
    type: string
    note: Any nested data attributes to get
  value:
    type: any
    note: Only approve pages where the desired attributes have a given value
  exact:
    type: boolean
    note: Force an exact match, rather than inclusion
*/
export const hasData = (obj, keys, value) => {
  if (value) {
    const data = _(obj).get(keys);
    if (_.isUndefined(data)) {
      return false;
    }
    if (_.isString(data)) {
      return data === value;
    }
    if (_.isArray(data)) {
      return data.includes(value);
    }
    return false;
  }

  return _.hasIn(obj, keys);
};

/* @docs
label: withData
category: Filter
note: Return pages with particular data
params:
  collection:
    type: array
    note: containing 11ty page objects
  keys:
    type: string
    note: Any nested data attributes to get
  value:
    type: any
    note: Only get pages where the desired attributes have this value
  exact:
    type: boolean
    note: Force an exact match, rather than inclusion
*/
export const withData = (collection, keys, value) =>
  collection.filter((page) => hasData(page, keys, value));

/* @docs
label: removePage
category: Filter
note: |
  Remove any one page from a collection
  (especially for removing tag index pages from their own post list)
params:
  collection:
    type: array
    note: containing 11ty page objects
  url:
    type: url
    note: URL of the page to remove
*/
export const removePage = (collection, url) =>
  collection.filter((page) => page.page.url !== url);

/* @docs
label: getData
category: Data
note: Return combined data from a collection
example: |
  {# all events #}
  {{ collections.all | getData('data.events') }}
  {# all events with a venue #}
  {{ collections.all | getData('data.events', 'venue') }}
  {# all events with a venue of 'Smashing Conf' #}
  {{ collections.all | getData('data.events', {'venue': 'Smashing Conf'}) }}
params:
  collection:
    type: array
    note: often an array of 11ty pages, but can be an array of any objects
  keys:
    type: string | false
    note: |
      use dot-notation (`data.press`) for nested keys,
      or `false` to filter without digging into nested data
  test:
    type: string | object
    default: undefined
    note: filter the resulting collection
*/
export const getData = (collection, keys, test) => {
  const data = keys
    ? _.flatMap(_.filter(collection, keys), (page) => _.get(page, keys))
    : collection;
  return test ? _.filter(data, test) : data;
};

/* @docs
label: findData
category: Data
note: The same as getData, but only returns the first match in the collection
example: |
  {{ collections.all | findData('data.press', {'slug': 'handoff'}) }}
params:
  collection:
    type: array
    note: often an array of 11ty pages, but can be an array of any objects
  keys:
    type: string
    note: use dot-notation (`data.press`) for nested keys
  test:
    type: string | object
    default: undefined
    note: filter the resulting collection
*/
export const findData = (collection, keys, test) =>
  getData(collection, keys, test)[0];

/* @docs
label: getPage
category: Data
note: Return a single page by url, or return data from inside that page
example: |
  {{ collections.all | getPage('/work/timedesigner/', 'data.press') }}
params:
  collection:
    type: array
    note: often an array of 11ty pages, but can be an array of any objects
  url:
    type: url
    note: The url of the desired page
  keys:
    type: string
    note: use dot-notation (`data.press`) for nested keys
  test:
    type: string | object
    default: undefined
    note: filter the resulting collection
*/
export const getPage = (collection, url, keys, test) => {
  const page = _.find(collection, (p) => p.page.url === url.split('#')[0]);
  const data = keys ? _.get(page, keys) : page;
  return test ? _.filter(data, test) : data;
};

/* @docs
label: findPage
category: Data
note: Find the first page with any particular data
example: |
  {{ collections.all | findPage('data.info_slug', 'alert') }}
params:
  collection:
    type: array
    note: often an array of 11ty pages, but can be an array of any objects
  keys:
    type: string
    note: use dot-notation (`data.press`) for nested keys
  value:
    type: any
    note: Only find pages where the desired keys have a given value
*/
export const findPage = (collection, keys, value) =>
  collection.find((page) => hasData(page, keys, value));

/* @docs
label: pageYears
category: Sorting
note: |
  Add `sort` and `year` keys to the page object,
  based on the latest date available (`date` or `end`),
  optionally including dates from events
params:
  collection:
    type: array
    note: containing 11ty page objects
*/
export const pageYears = (collection) =>
  collection.map((page) => {
    if (page.sort && page.year) {
      return page;
    }

    const dates = [page.page.date];
    const future = [];

    if (page.data.end) {
      dates.push(page.data.end);
    }

    if (page.data.events) {
      page.data.events.forEach((event) => {
        if (getDate(event.date) <= now()) {
          dates.push(event.date);
        } else {
          future.push(event.date);
        }
      });
    }

    // soonest upcoming future date
    page.future_sort = future.length
      ? future.reduce((a, b) => (a < b ? a : b))
      : null;
    // most recent past date
    page.sort = dates.reduce((a, b) => (a > b ? a : b));
    page.year = getDate(page.sort, 'year');
    page.future_year = page.future_sort
      ? getDate(page.future_sort, 'year')
      : null;

    return page;
  });

/* @docs
label: eventSort
category: Sorting
note: |
  Sort pages based on either the page date,
  or the most recently past event date.
params:
  collection:
    type: array
    note: containing 11ty page objects
*/
export const eventSort = (collection, includeFuture = false) =>
  pageYears(collection).sort((a, b) => {
    if (includeFuture) {
      /* istanbul ignore if */
      if (a.future_sort && b.future_sort) {
        return getSort('future_sort', true)(a, b);
      }
      if (a.future_sort) {
        return 1;
      }
      /* istanbul ignore if */
      if (b.future_sort) {
        return -1;
      }
    }
    return getSort('sort')(a, b);
  });

/* @docs
label: byYear
category: Sorting
note: |
  Runs a collection through `pageYears`,
  and then groups them by the resulting `year` value
params:
  collection:
    type: array
    note: containing 11ty page objects
*/
export const byYear = (collection) => {
  if (!collection || collection.length === 0) {
    return [];
  }

  const groups = _.groupBy(pageYears(collection), 'year');

  return Object.keys(groups)
    .reverse()
    .map((year) => ({
      year,
      posts: groups[year],
    }));
};

/* @docs
label: addCallToAction
category: Status
note: |
  Check if a page is a Work or Services index or detail page
  (under `/work/` or `/services/` URL).
params:
  pageURL:
    type: url
    note: URL of page to test
*/
export const addCallToAction = (pageURL) =>
  _.isString(pageURL) &&
  (pageURL.startsWith('/work/') || pageURL.startsWith('/services/')) &&
  pageURL !== '/services/consulting/';

/* @docs
label: isType
category: Filter
note: |
  Filters collection by a given tag,
  expected to be one of several post "types"
  (types are defined in the `taxonomy.yaml` data file)
params:
  collection:
    type: array
    note: containing 11ty page objects
  type:
    type: type
    note: post type to filter by
*/
export const isType = (collection, type) =>
  collection.filter((page) => pageType(page.data.tags, 'tag') === type);

/* @docs
label: isPublicType
category: Filter
note: |
  Filters collection and removes any pages
  that are of a non-public type.
  (types are defined in the `taxonomy.yaml` data file)
params:
  collection:
    type: array
    note: containing 11ty page objects
*/
export const isPublicType = (collection) =>
  collection.filter((page) => {
    const type = pageType(page.data.tags, 'tag');
    return type && tagIsPublic(type);
  });

/* @docs
label: isHome
category: Filter
note: |
  Filters collection by `home` data.
  Posts are included if `home` is not `false`.
  If `limit` is set, only the first `limit` posts are included,
  plus any posts with `home` set to `pin` or `pinned`.
params:
  collection:
    type: array
    note: containing 11ty page objects
  limit:
    type: number
*/
export const isHome = (collection, limit) => {
  const posts = pageYears(
    collection.filter((page) => page.data.home !== false),
  ).reverse();
  if (!limit) {
    return posts;
  }
  const isPinned = (page) => ['pin', 'pinned'].includes(page.data.home);
  const pinned = posts.filter(isPinned);
  if (pinned.length >= limit) {
    return pinned.slice(0, limit);
  }
  const featured = [];
  const nonPinnedFeatured = [];
  const nonPinnedLimit = limit - pinned.length;
  for (let i = 0; i < posts.length; i = i + 1) {
    const page = posts[i];
    if (isPinned(page)) {
      featured.push(page);
    } else if (nonPinnedFeatured.length < nonPinnedLimit) {
      featured.push(page);
      nonPinnedFeatured.push(page);
    }
  }
  return featured;
};
