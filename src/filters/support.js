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
  size:
    type: string
    default: 'sm'
*/
export const openCollectiveAvatar = (url, username = '', size = 'sm') => {
  const sizeNumber = {
    sm: '80',
    md: '120',
    lg: '160',
  }[size];
  const alt = `Open Collective Avatar${username ? ` for ${username}` : ''}`;
  const sizeString = `width="${sizeNumber}" height="${sizeNumber}"`;
  let urlWithSize = url;

  if (urlWithSize.includes('gravatar.com')) {
    urlWithSize = `${urlWithSize}&s=${sizeNumber}`;
  }

  return `<img src="https://v1.image.11ty.dev/${encodeURIComponent(
    urlWithSize,
    // eslint-disable-next-line max-len
  )}/webp/${sizeNumber}/" ${sizeString} alt="${alt}" loading="lazy" decoding="async">`;
};
