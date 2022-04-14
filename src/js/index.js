import { autocomplete, getAlgoliaResults } from '@algolia/autocomplete-js';
import algoliasearch from 'algoliasearch/lite';
import ccs from 'cascading-color-systems';

const searchClient = algoliasearch(
  'WVUJ3O7KS6',
  '717b3ecf3bd11b0381be7dd62ca95a6c',
);

let stateHolder;

autocomplete({
  container: '#search',
  placeholder: 'Search',
  panelContainer: 'main',
  panelPlacement: 'full-width',
  initialState: {
    // This uses the `search` query parameter as the initial query
    query: new URL(window.location).searchParams.get('search'),
  },
  onStateChange({ state }) {
    stateHolder = state;
  },
  getSources({ query, setContext }) {
    return [
      {
        sourceId: 'products',
        getItems() {
          return getAlgoliaResults({
            searchClient,
            queries: [
              {
                indexName:
                  'netlify_4f75b5a7-8412-4586-bad0-b4de64bb4f17_main_all',
                query,
              },
            ],
            transformResponse({ results, hits }) {
              setContext({
                numberHits: results[0].nbHits,
              });

              return hits;
            },
          });
        },
        templates: {
          header: () =>
            `${stateHolder.context.numberHits} results for ${query}`,
          item: ({ item, html }) => html`<div>
            <a href=${item.url}>
              <p>${item.title}</p>
            </a>
            <p>${item.url}</p>
            <p>${item.content}</p>
          </div>`,
        },
      },
    ];
  },
});

// Initialize Cascading Colors
// https://www.oddbird.net/cascading-colors/
ccs();
