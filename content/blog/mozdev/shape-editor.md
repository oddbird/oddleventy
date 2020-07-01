---
title: Edit CSS Shapes in the Browser
sub: For quick visual adjustments directly on the page
author: miriam
date: 2019-11-25
tags:
  - Firefox DevTools
image:
  src: mozdev/shape_path.png
  alt: Firefox Developer Tools
summary: |
  Have you ever wanted to create more interesting shapes on the web, or
  flow text around the details of an image? Shape paths can be hard to
  code without a visual reference, but Firefox provides a shape editor to
  make it quick and clear.
media:
  - iframe: https://www.youtube.com/embed/u9bDe3Bw0sA
---

{% import "embed.macros.njk" as embed %}

CSS provides a number of built-in shapes we can use -- from inset boxes
to circles, ellipses, and polygons. I'll show you how to use the tool to
inspect, edit, and create shapes directly in the browser.

{{ embed.figure(
  data=media,
  caption='Use the shape path editor to create and adjust shapes on the fly!'
) }}

Resources:

- [MDN Article]
- [Clippy]

Shape Demos shown:

- [widehive.com]
- [miriamsuzanne.com]
- [Stacy ellipse pen]
- [Stacy starfish pen]
- [Scrolling Alice in Wonderland]
- [Jen Simmons Labs]
- [Stacy yoga pen]

[MDN Article]: https://developer.mozilla.org/en-US/docs/Tools/Page_Inspector/How_to/Edit_CSS_shapes
[Clippy]: https://bennettfeely.com/clippy/
[widehive.com]: https://www.widehive.com/artists
[miriamsuzanne.com]: https://www.miriamsuzanne.com/2019/10/03/css-is-weird/
[Stacy ellipse pen]: https://codepen.io/stacy/full/449546ec58c27981aa764fe6a8d0d02b
[Stacy starfish pen]: https://codepen.io/stacy/full/zjOeWa
[Scrolling Alice in Wonderland]: https://adobe-webplatform.github.io/Demo-for-Alice-s-Adventures-in-Wonderland/
[Jen Simmons Labs]: https://labs.jensimmons.com/#shapes
[Stacy yoga pen]: https://codepen.io/stacy/full/aWKerN
