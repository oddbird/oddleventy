const removeAnchorClickedClass = function () {
  const anchorLinks = document.querySelectorAll(
    '.header-anchor.anchor-clicked',
  );
  anchorLinks.forEach((anchorLink) =>
    anchorLink.classList.remove('anchor-clicked'),
  );
};

export const copyAnchorLink = function (anchorLink) {
  try {
    navigator.clipboard.writeText(anchorLink.href).then(() => {
      removeAnchorClickedClass();
      anchorLink.classList.add('anchor-clicked');

      setTimeout(() => {
        anchorLink.classList.remove('anchor-clicked');
      }, 3000);
    });
    // eslint-disable-next-line no-unused-vars
  } catch (error) {
    throw new Error('An error occurred with copying the anchor link.');
  }
};

export const clickToCopy = function () {
  const anchorLinks = document.querySelectorAll('.header-anchor');

  anchorLinks.forEach((anchorLink) =>
    anchorLink.addEventListener('click', (e) => {
      copyAnchorLink(anchorLink);
      e.preventDefault();
    }),
  );
};
