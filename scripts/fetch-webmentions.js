/* eslint-disable no-console */

import { join, resolve } from 'node:path';

import chalk from 'chalk';
import { config } from 'dotenv';
import fs from 'fs-extra';
import { load } from 'js-yaml';
import { compact, map, unionBy } from 'lodash-es';
import fetch from 'node-fetch';

import { blocklist } from './webmention-blocklist.js';

const __dirname = import.meta.dirname;
const baseDir = resolve(__dirname, '..');

const site = load(
  // eslint-disable-next-line no-sync
  fs.readFileSync(join(baseDir, 'content/_data/site.yaml'), 'utf8'),
);

// Define Cache Location and API Endpoint
const CACHE_FILE = join(baseDir, 'content/_data/webmentions.json');
const API = 'https://webmention.io/api';

// eslint-disable-next-line no-process-env
if (!process.env.WEBMENTION_IO_TOKEN) {
  // Load .env variables with dotenv
  config();
}
// eslint-disable-next-line no-process-env
const TOKEN = process.env.WEBMENTION_IO_TOKEN;

const fetchWebmentions = async (since, perPage = 10000) => {
  if (!site.domain) {
    // If we don't have a domain name, abort
    console.warn(
      chalk.yellow(
        '>>> unable to fetch webmentions: no domain name specified in site.json',
      ),
    );
    return false;
  }

  if (!TOKEN) {
    // If we don't have a domain access token, abort
    console.warn(
      chalk.yellow(
        '>>> unable to fetch webmentions: no access token specified in env.',
      ),
    );
    return false;
  }

  const urlBase = `${API}/mentions.jf2`;
  // eslint-disable-next-line max-len
  let url = `${urlBase}?domain=${site.domain}&token=${TOKEN}&per-page=${perPage}`;

  if (since) {
    url = `${url}&since=${since}`;
  }

  const response = await fetch(url);
  if (response.ok) {
    const feed = await response.json();
    console.log(
      `>>> ${feed.children.length} new webmentions fetched from ${API}`,
    );
    return feed;
  }

  return null;
};

const getDomain = (entry) => new URL(entry['wm-source']).hostname;

// only allow webmentions that have contents, an author name, and a timestamp
const checkRequiredFields = (entry) => {
  const { author, published, content, url } = entry;
  return Boolean(
    url &&
      entry['wm-id'] &&
      entry['wm-source'] &&
      entry['wm-property'] &&
      entry['wm-target'] &&
      author?.name &&
      published &&
      (content?.text || content?.html),
  );
};

// Merge fresh webmentions with cached entries, unique per id
const mergeWebmentions = (a, b) => {
  const all = unionBy(a.children, b.children, 'wm-id').filter(
    checkRequiredFields,
  );
  const syns = compact(map(all, 'syndication'));

  return all.filter(
    (entry) =>
      !syns.includes(entry.url) && !blocklist.includes(getDomain(entry)),
  );
};

// save combined webmentions in cache file
const writeToCache = (data) => {
  // write data to cache json file
  fs.outputJson(CACHE_FILE, data, { spaces: 2 }, (writeErr) => {
    console.log(chalk.green.bold(`>>> webmentions saved to ${CACHE_FILE}`));
    if (writeErr) {
      throw writeErr;
    }
  });
};

// get cache contents from json file
const readFromCache = () => {
  // eslint-disable-next-line no-sync
  if (fs.existsSync(CACHE_FILE)) {
    // eslint-disable-next-line no-sync
    return fs.readJsonSync(CACHE_FILE);
  }

  // no cache found.
  return {
    lastFetched: null,
    children: [],
  };
};

const doFetch = async () => {
  const cache = readFromCache();

  if (cache.children.length) {
    console.log(`>>> ${cache.children.length} webmentions loaded from cache`);
  }

  const feed = await fetchWebmentions(cache.lastFetched);
  if (feed) {
    const webmentions = {
      lastFetched: new Date().toISOString(),
      children: mergeWebmentions(feed, cache),
    };

    writeToCache(webmentions);
    return webmentions;
  }

  return cache;
};

doFetch();
