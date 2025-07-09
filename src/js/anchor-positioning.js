export default async function checkPolyfill() {
  if (!('anchorName' in document.documentElement.style)) {
    const { default: polyfill } = await import(
      'https://unpkg.com/@oddbird/css-anchor-positioning/dist/css-anchor-positioning-fn.js'
    );
    polyfill({
      elements: [...document.querySelectorAll('link[rel="stylesheet"]')],
      excludeInlineStyles: true,
    });
  }
}
