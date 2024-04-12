// https://opencollective.com/oddbird-open-source/members/all.json
import eleventyFetch from '@11ty/eleventy-fetch';

const FilteredProfiles = [
  // if there are backers we need to exclude…
];

const getDefaultAvatarUrl = (url) => {
  const slug = url.split('/').at(-1);
  return slug ? `https://images.opencollective.com/${slug}/avatar.png` : null;
};

export default async () => {
  try {
    const url =
      'https://opencollective.com/oddbird-open-source/members/all.json?limit=1000';
    const json = await eleventyFetch(url, {
      type: 'json',
      duration: '0s',
      directory: '.cache/eleventy-fetch/',
      dryRun: false,
    });

    const supporters = json
      .filter(
        (c) =>
          c.role === 'BACKER' &&
          c.totalAmountDonated &&
          !FilteredProfiles.includes(c.name),
      )
      .map((c) => ({
        name: c.name,
        tier: c.tier,
        website: c.website || c.profile,
        image: c.image || getDefaultAvatarUrl(c.profile),
        total: c.totalAmountDonated,
      }))
      .sort(
        (a, b) =>
          // Sort by total amount donated (desc)
          b.total - a.total,
      );

    return {
      supporters,
    };
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error('Failed fetching Open Collective backers.', e);
    return {
      supporters: [],
    };
  }
};
