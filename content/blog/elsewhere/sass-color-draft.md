---
title: Sass Color Spaces (Request for Comments)
sub: A new proposal for color management in Sass
venue: Sass Blog
url: https://sass-lang.com/blog/request-for-comments-color-spaces
date: 2022-09-22
author: miriam
image:
  src: blog/2022/sass-color.jpg
  alt: |
    Sass logo in black
    on top of bright oklch color gradient
tags:
  - Link
  - CSS
  - Sass
  - Color
action:
  text: Read the summary & proposal »
  url: https://sass-lang.com/blog/request-for-comments-color-spaces
summary: |
  There’s been a lot of exciting work
  in the CSS color specifications lately,
  and since the new features are already starting to land in browsers,
  we’ve been preparing to add support in Sass as well.
  My proposal for that
  is published and ready for public feedback!
---

I'm very excited
about the new color features
starting to roll out in CSS --
and similarly excited to make them available
(with some extra tooling)
in Sass as well.
This will allow us to:

- Define colors in new color spaces like `oklch` & `display-p3`
- Convert colors between spaces
- Mix & manipulate colors in any space
- Gamut-map colors for a target space as needed

I hope to write more about color spaces here
at some point,
but for now
check out the [request for comments][request],
or dive straight into the [full proposal][].
If you want to learn more about color spaces in CSS,
Bramus Van Damme has a great [collection of resources][],
Chris Lilley & Lea Verou released the handy [Color.js][] library,
and all of this is based on
[CSS Color Level 4][] and [Level 5][].

[full proposal]: https://github.com/sass/sass/blob/main/proposal/color-4-new-spaces.md
[request]: https://sass-lang.com/blog/request-for-comments-color-spaces
[collection of resources]: https://www.bram.us/2022/02/08/color-spaces-and-colors-in-css/
[Color.js]: https://colorjs.io/
[CSS Color Level 4]: https://www.w3.org/TR/css-color-4/
[Level 5]: https://www.w3.org/TR/css-color-5/

Safari is the farthest along
in terms of [browser support for the new color spaces][browser support],
but this is all part of
[Interop 2022][] --
which means every browser is
[trying to get it done this year][].
I recommend installing the latest
[Safari Technology Preview][]
and playing around with it!

[browser support]: https://caniuse.com/css-color-function,css-lch-lab,mdn-css_types_color_oklch,mdn-css_types_color_oklab,mdn-css_types_color_color-mix
[Safari Technology Preview]: https://developer.apple.com/safari/technology-preview/
[trying to get it done this year]: https://wpt.fyi/results/css/css-color?label=master&label=experimental&product=chrome&product=firefox&product=safari&aligned&view=interop&q=label%3Ainterop-2022-color
[Interop 2022]: https://web.dev/interop-2022/#color-spaces-and-css-color-functions

I put a lot of work into this proposal,
and I'm excited to get feedback.
Along the way,
I also went down a few rabbit holes.
If you're interested,
check out
[The Gray Areas of HWB Color][hwb],
or my Codepen experiments
with [Sass color inversion][]
and [interpolation of missing channels][].

[hwb]: https://www.miriamsuzanne.com/2022/06/29/hwb-clamping/
[Sass color inversion]: https://codepen.io/miriamsuzanne/pen/xxWeEPG
[interpolation of missing channels]: https://codepen.io/miriamsuzanne/pen/ZEoEGGr
