import ccs from 'cascading-color-systems';
import { clickToCopy } from './clickToCopy.cjs';
import algoliasearchNetlify from '@algolia/algoliasearch-netlify-frontend/dist/algoliasearchNetlify';

// Initialize Cascading Colors
// https://www.oddbird.net/cascading-colors/
ccs();
clickToCopy();

// Initialize Algolia search widget
// https://www.algolia.com/doc/tools/crawler/netlify-plugin/front-end/
algoliasearchNetlify({
  appId: 'WVUJ3O7KS6',
  apiKey: 'd71de03d6d2a856252f54ea24bdce576',
  siteId: '4f75b5a7-8412-4586-bad0-b4de64bb4f17',
  branch: 'main',
  selector: '#search',
  hitsPerPage: 10,
});
