import eleventyFetch from '@11ty/eleventy-fetch';
import { config } from 'dotenv';
import { groupBy } from 'lodash-es';

// eslint-disable-next-line no-process-env
if (!process.env.GITHUB_KEY) {
  // Load .env variables with dotenv
  config();
}

// eslint-disable-next-line no-process-env
const GITHUB_KEY = process.env.GITHUB_KEY;

const FilteredProfiles = [
  // if there are backers we need to exclude…
];

const TIERS = ['Great Horned Owl', 'Blue-Footed Booby', 'Common Loon'];

// https://docs.github.com/en/graphql/reference/objects#sponsorshipconnection
const loadGithubSponsors = async () => {
  if (!GITHUB_KEY) {
    // eslint-disable-next-line no-console
    console.error('Github sponsors not loaded; set `GITHUB_KEY` in `.env`.');
    return new Promise((resolve) => resolve([]));
  }
  const url = 'https://api.github.com/graphql?';
  const { data } = await eleventyFetch(url, {
    type: 'json',
    duration: '0s',
    directory: '.cache/eleventy-fetch/',
    dryRun: false,
    fetchOptions: {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${GITHUB_KEY}`,
      },
      body: JSON.stringify({
        query: `{
  organization(login: "oddbird") {
    name
    sponsorshipsAsMaintainer(first: 100, activeOnly: false) {
      totalCount pageInfo { hasNextPage }
      nodes {
        sponsorEntity{
          ... on User { name avatarUrl websiteUrl url }
          ... on Organization { name avatarUrl websiteUrl url }
        }
      }
    }
  }
}`,
      }),
    },
  });
  if (data?.organization.sponsorshipsAsMaintainer.pageInfo.hasNextPage) {
    // eslint-disable-next-line no-console
    console.error(
      'Good news! We have over 100 GitHub sponsors and need to implement pagination.',
    );
  }
  return data?.organization.sponsorshipsAsMaintainer.nodes.map(
    ({ sponsorEntity }) => ({
      name: sponsorEntity.name,
      tier: 'Common Loon',
      website: sponsorEntity.websiteUrl || sponsorEntity.url,
      image: sponsorEntity.avatarUrl,
      total: 0,
    }),
  );
};

const getDefaultOpenCollectiveAvatarUrl = (url) => {
  const slug = url.split('/').at(-1);
  return slug ? `https://images.opencollective.com/${slug}/avatar.png` : null;
};

// https://opencollective.com/oddbird-open-source/members/all.json
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
      image: c.image || getDefaultOpenCollectiveAvatarUrl(c.profile),
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
