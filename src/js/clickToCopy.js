const anchorLinkIconString =
  '<svg data-icon="link" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" viewBox="0 0 20 20"> <path d="M10.682 12.998c-0.943 0-1.886-0.359-2.604-1.077-0.195-0.195-0.195-0.512 0-0.707s0.512-0.195 0.707 0c1.046 1.046 2.747 1.046 3.793 0l3.636-3.636c1.046-1.046 1.046-2.747 0-3.793s-2.747-1.046-3.793 0l-3.068 3.068c-0.195 0.195-0.512 0.195-0.707 0s-0.195-0.512 0-0.707l3.068-3.068c1.436-1.436 3.772-1.436 5.207 0s1.436 3.772 0 5.207l-3.636 3.636c-0.718 0.718-1.661 1.077-2.604 1.077z"></path><path d="M4.682 18.998c-0.943 0-1.886-0.359-2.604-1.077-1.436-1.436-1.436-3.772 0-5.207l3.636-3.636c1.436-1.436 3.772-1.436 5.207 0 0.195 0.195 0.195 0.512 0 0.707s-0.512 0.195-0.707 0c-1.046-1.046-2.747-1.046-3.793 0l-3.636 3.636c-1.046 1.046-1.046 2.747 0 3.793s2.747 1.046 3.793 0l3.068-3.068c0.195-0.195 0.512-0.195 0.707 0s0.195 0.512 0 0.707l-3.068 3.068c-0.718 0.718-1.661 1.077-2.604 1.077z"></path></svg>';

const removeAnchorClickedClass = function () {
  const anchorLinks = document.querySelectorAll(
    '.header-anchor.anchor-clicked',
  );
  anchorLinks.forEach((anchorLink) =>
    anchorLink.classList.remove('anchor-clicked'),
  );
};

const copyAnchorLink = function (anchorLink) {
  try {
    navigator.clipboard.writeText(anchorLink.href).then(() => {
      removeAnchorClickedClass();
      anchorLink.classList.add('anchor-clicked');

      setTimeout(() => {
        anchorLink.classList.remove('anchor-clicked');
      }, 3000);
    });
  } catch (error) {
    throw new Error('An error occurred with copying the anchor link.');
  }
};

const clickToCopy = function () {
  const anchorLinks = document.querySelectorAll('.header-anchor');

  anchorLinks.forEach((anchorLink) =>
    anchorLink.addEventListener('click', (e) => {
      copyAnchorLink(anchorLink);
      e.preventDefault();
    }),
  );
};

module.exports = { clickToCopy, anchorLinkIconString, copyAnchorLink };
