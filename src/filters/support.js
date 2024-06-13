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
export const openCollectiveAvatar = (url, username = '', size = 'sm') => {
  const sizeNumber = {
    sm: '66',
    md: '88',
    lg: '110',
  }[size];
  const alt = `Open Collective Avatar${username ? ` for ${username}` : ''}`;
  const sizeString = `width="${sizeNumber}" height="${sizeNumber}"`;

  return `<img src="https://v1.image.11ty.dev/${encodeURIComponent(
    url,
    // eslint-disable-next-line max-len
  )}/webp/${sizeNumber}/" ${sizeString} alt="${alt}" loading="lazy" decoding="async">`;
};
