// if we want to filter the list… (not currently used)
export const donorFacePile = (supporters) =>
  supporters.filter(
    (supporter) => supporter.status === 'ACTIVE' && !supporter.hasDefaultAvatar,
  );

export const openCollectiveAvatar = (url, username = '') => {
  const alt = `Open Collective Avatar for ${username}`;
  const size = 'width="66" height="66"';

  return `<img src="https://v1.image.11ty.dev/${encodeURIComponent(
    url,
  )}/webp/66/" ${size} alt="${alt}" loading="lazy" decoding="async">`;
};
