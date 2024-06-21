// https://opencollective.com/oddbird-open-source/members/all.json
import eleventyFetch from '@11ty/eleventy-fetch';
import { groupBy } from 'lodash-es';

const GITHUBKEY = '';

const FilteredProfiles = [
  // if there are backers we need to exclude…
];

const TIERS = [
  'Great Horned Owl',
  'Blue-Footed Booby',
  'Common Loon',
  'GitHub',
];

const getDefaultAvatarUrl = (url) => {
  const slug = url.split('/').at(-1);
  return slug ? `https://images.opencollective.com/${slug}/avatar.png` : null;
};

const loadGithubSponsors = async () => {
  const url = 'https://api.github.com/graphql';
  const { data } = await eleventyFetch(url, {
    type: 'json',
    duration: '0s',
    fetchOptions: {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${GITHUBKEY}`,
      },
      body: JSON.stringify({
        query: `
        {
  organization(login: "oddbird") {
    name
    sponsors(first: 100) {
      totalCount pageInfo { hasNextPage }
      nodes {
        __typename
        ... on User { name avatarUrl websiteUrl url }
        ... on Organization { name avatarUrl websiteUrl url }
      }
    }
  }
}`,
      }),
    },
  });
  if (data?.organization.sponsors.pageInfo.hasNextPage) {
    // eslint-disable-next-line no-console
    console.error(
      'Good news- we have over 100 GitHub sponsors and need to implement out pagination.',
    );
  }
  return data?.organization.sponsors.nodes.map((node) => ({
    name: node.name,
    tier: 'GitHub',
    website: node.websiteUrl || node.url,
    image: node.avatarUrl,
    total: 0,
  }));
};

const loadOpenCollectiveSponsors = async () => {
  const url =
    'https://opencollective.com/oddbird-open-source/members/all.json?limit=1000';
  const json = await eleventyFetch(url, {
    type: 'json',
    duration: '0s',
    directory: '.cache/eleventy-fetch/',
    dryRun: false,
  });

  return json
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
    }));
};

export default async () => {
  try {
    const [ocSupporters, githubSponsors] = await Promise.all([
      loadOpenCollectiveSponsors(),
      loadGithubSponsors(),
    ]);

    const supporters = [...githubSponsors, ...ocSupporters].sort(
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
    console.error('Failed fetching Open Collective and GitHub backers.', e);
    return {
      tiers: {},
    };
  }
};
