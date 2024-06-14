// https://opencollective.com/oddbird-open-source/members/all.json
import eleventyFetch from '@11ty/eleventy-fetch';
import { groupBy } from 'lodash-es';

const FilteredProfiles = [
  // if there are backers we need to exclude…
];

const TIERS = ['Great Horned Owl', 'Blue-Footed Booby', 'Common Loon'];

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
          c.tier !== 'Donation' &&
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

    const tiers = groupBy(supporters, ({ tier }) =>
      TIERS.find((t) => tier.startsWith(t)),
    );

    return {
      tiers,
    };
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error('Failed fetching Open Collective backers.', e);
    return {
      tiers: {},
    };
  }
};
