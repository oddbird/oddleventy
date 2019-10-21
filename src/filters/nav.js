'use strict';

const pages = require('./pages');

const urlIsActive = (link, location, collection, page) => {
  const target = pages.fromCollection(collection, link.url);

  link.title = target.data.title || target.fileSlug;
  link.active =
    link.url === page.url ||
    link.url === location ||
    target.fileSlug === location;

  return link;
};

const itemIsActive = (item, location, collection, page) => {
  if (item.url) {
    return urlIsActive(item, location, collection, page);
  }

  if (item.subnav) {
    const subnav = item.subnav.map((sub) =>
      urlIsActive(sub, location, collection, page),
    );

    item.subnav = subnav;
    item.active =
      subnav.filter((sub) => sub.active).length > 0 || item.title === location;

    return item;
  }

  return undefined;
};

const getActive = (collection, nav, page) => {
  page = pages.fromCollection(collection, page.url);
  const location = page.data ? page.data.location : page.fileSlug;
  return nav.map((main) => itemIsActive(main, location, collection, page));
};

module.exports = {
  getActive,
};
