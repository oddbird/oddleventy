/* @docs
label: OSS Support Filters
category: File
*/

/* @docs
label: openCollectiveAvatar
category: Image
note: Generate Open Collective avatar
params:
  url:
    type: url
    note: image url
  username:
    type: string
    default: ''
*/
export const openCollectiveAvatar = (url, username = '') => {
  const alt = `Open Collective Avatar${username ? ` for ${username}` : ''}`;
  const size = 'width="66" height="66"';

  return `<img src="https://v1.image.11ty.dev/${encodeURIComponent(
    url,
  )}/webp/66/" ${size} alt="${alt}" loading="lazy" decoding="async">`;
};
