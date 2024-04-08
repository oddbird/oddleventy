// https://opencollective.com/oddbird-open-source/members/all.json
import eleventyFetch from '@11ty/eleventy-fetch';

const FilteredProfiles = [
  // if there are backers we need to exclude…
];

const isMonthlyOrYearlyOrder = (order) =>
  (order.frequency === 'MONTHLY' || order.frequency === 'YEARLY') &&
  order.status === 'ACTIVE';

const getUniqueContributors = (orders) => {
  const uniqueContributors = {};
  for (const order of orders) {
    if (uniqueContributors[order.slug]) {
      // if order already exists, overwrite only if existing is not an active monthly contribution
      if (!isMonthlyOrYearlyOrder(uniqueContributors[order.slug])) {
        uniqueContributors[order.slug] = order;
      }
    } else {
      uniqueContributors[order.slug] = order;
    }
  }
  return Object.values(uniqueContributors);
};

export default async () => {
  try {
    // eslint-disable-next-line max-len
    const url = `https://rest.opencollective.com/v2/oddbird-open-source/orders/incoming?limit=1000&status=paid,active`;
    const json = await eleventyFetch(url, {
      type: 'json',
      duration: '0s',
      directory: '.cache/eleventy-fetch/',
      dryRun: false,
    });

    let orders = json.nodes
      .map((order) => {
        order.name = order.fromAccount.name;
        order.slug = order.fromAccount.slug;
        order.twitter = order.fromAccount.twitterHandle;
        order.image = order.fromAccount.imageUrl;
        order.website = order.fromAccount.website;
        order.profile = `https://opencollective.com/${order.slug}`;
        order.totalAmountDonated = order.totalDonations.value;
        order.isMonthly = isMonthlyOrYearlyOrder(order);
        order.hasDefaultAvatar =
          order.image ===
          `https://images.opencollective.com/${order.slug}/avatar.png`;
        return order;
      })
      .filter((order) => FilteredProfiles.indexOf(order.slug) === -1);

    orders = getUniqueContributors(orders);

    orders.sort(
      (a, b) =>
        // Sort by total amount donated (desc)
        b.totalAmountDonated - a.totalAmountDonated,
    );

    const backers = orders.length;

    const monthlyBackers = orders.filter((order) =>
      isMonthlyOrYearlyOrder(order),
    ).length;

    return {
      supporters: orders,
      backers,
      monthlyBackers,
    };
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error('Failed, returning 0 opencollective backers.', e);
    return {
      supporters: [],
      backers: 0,
      monthlyBackers: 0,
    };
  }
};
