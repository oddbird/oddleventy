---
title: Scroll Snap in CSS
sub: Without any JavaScript or "scrolljacking"
author: miriam
date: 2019-10-31
tags:
  - AboutWeb Video
  - CSS
  - JavaScript
image:
  src: mozdev/scroll-snap.png
  alt: CSS code snippet of scroll-snap type and align
summary: |
  When we're scrolling down a page,
  or through a gallery of images,
  snap-targets can help guide us from one section or image to the next.
  In the past, developers have used JavaScript to hijack scrolling,
  but now we can manage scroll alignment directly in CSS
  with only a few lines of code.
media:
  - iframe: https://www.youtube.com/embed/pohyK8iz-SQ
---

{% import "embed.macros.njk" as embed %}

{{ embed.figure(
  data=media,
  caption="The fallback even works well in old browsers!"
) }}

- [Image Gallery Demo](https://codepen.io/miriamsuzanne/pen/bXRebo?editors=0100)
- [Page Sections Demo](https://codepen.io/miriamsuzanne/pen/vomNBg?editors=0100)
- [More on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Scroll_Snap/Basic_concepts)
