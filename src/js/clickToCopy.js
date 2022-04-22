function removeAnchorClickedClass() {
  const anchorLinks = document.querySelectorAll(
    '.header-anchor.anchor-clicked',
  );
  anchorLinks.forEach((anchorLink) =>
    anchorLink.classList.remove('anchor-clicked'),
  );
}

function copyAnchorLink(anchorLink) {
  navigator.clipboard.writeText(anchorLink.href).then(() => {
    removeAnchorClickedClass();
    anchorLink.classList.add('anchor-clicked');
  });
}

function clickToCopy() {
  const anchorLinks = document.querySelectorAll('.header-anchor');

  anchorLinks.forEach((anchorLink) =>
    anchorLink.addEventListener('click', () => copyAnchorLink(anchorLink)),
  );
}
module.exports = clickToCopy;
