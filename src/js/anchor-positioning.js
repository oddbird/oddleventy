export default async function checkPolyfill() {
  if (!('anchorName' in document.documentElement.style)) {
    const { default: polyfill } = await import(
      '@oddbird/css-anchor-positioning/fn'
    );
    polyfill({
      elements: [
        ...document.querySelectorAll(
          'link[href="/assets/css/nav-dropdown.css"]',
        ),
      ],
      excludeInlineStyles: true,
    });
  }
}
