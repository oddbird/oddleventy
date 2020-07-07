// const fs = require('fs');

const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');
const Table = require('cli-table');

// const flags = { onlyCategories: ['performance'] }; // if you only need performance scores from lighthouse

// instantiate cli table
const table = new Table({
  head: ['Key', 'Score'],
});

const printCLITable = (scores) => {
  Object.keys(scores).forEach((key) => {
    table.push([key, scores[key]]);
  });
  return table.toString();
};

const launchChromeAndRunLighthouse = (url, opts = {}, config = null) =>
  chromeLauncher.launch({ chromeFlags: opts.chromeFlags }).then((chrome) => {
    opts.port = chrome.port;
    return lighthouse(url, opts, config).then((results) =>
      // use results.lhr for the JS-consumable output
      // https://github.com/GoogleChrome/lighthouse/blob/master/types/lhr.d.ts
      // use results.report for the HTML/JSON/CSV output as a string
      // use results.artifacts for the trace/screenshots/other specific case you need (rarer)
      chrome.kill().then(() => results),
    );
  });

test('Lighthouse Prformance Audit', async () => {
  const { lhr } = await launchChromeAndRunLighthouse('http://localhost:8080'); // flags

  // create reports
  // fs.writeFileSync('./report.html', report);

  const scores = {};
  const categories = lhr.categories;
  // eslint-disable-next-line guard-for-in
  for (const key in categories) {
    scores[key] = categories[key].score;
  }
  // scores = {performance: 0.98, seo: 0.97, accessibility: 0.99...}
  // eslint-disable-next-line no-console
  console.log(printCLITable(scores));

  expect(scores.performance).toBeGreaterThanOrEqual(0.95); // 95%
  expect(scores.accessibility).toBe(1);
  expect(scores['best-practices']).toBeGreaterThanOrEqual(0.93);
  expect(scores.seo).toBe(1);
}, 30000);
