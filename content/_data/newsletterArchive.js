import eleventyFetch from '@11ty/eleventy-fetch';

export default async () => {
  const url =
    'https://oddbird.us19.list-manage.com/generate-js/?u=80219aa68d7bad77b9fd2eb93&fid=27537&show=10';
  const res = await eleventyFetch(url, {
    type: 'text',
    duration: '0s',
    directory: '.cache/eleventy-fetch/',
    dryRun: false,
  });
  const archives = res.replace(/^document.write\("/, '').replace(/"\);$/, '');

  return archives;
};
