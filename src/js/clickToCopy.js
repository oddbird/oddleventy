const removeAnchorClickedClass = function () {
  const anchorLinks = document.querySelectorAll(
    '.header-anchor.anchor-clicked',
  );
  anchorLinks.forEach((anchorLink) =>
    anchorLink.classList.remove('anchor-clicked'),
  );
};

const copyAnchorLink = function (anchorLink) {
  navigator.clipboard.writeText(anchorLink.href).then(() => {
    removeAnchorClickedClass();
    anchorLink.classList.add('anchor-clicked');
  });
};

const clickToCopy = function () {
  const anchorLinks = document.querySelectorAll('.header-anchor');

  anchorLinks.forEach((anchorLink) =>
    anchorLink.addEventListener('click', () => copyAnchorLink(anchorLink)),
  );
};
module.exports = clickToCopy;
