---
title: Sass Color Spaces & Wide Gamut Colors
sub: Inspect and manipulate the new CSS color formats in Sass!
date: 2024-09-19
venue: Sass Blog
url: https://sass-lang.com/blog/wide-gamut-colors-in-sass/
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
  text: Read the full article »
  url: https://sass-lang.com/blog/wide-gamut-colors-in-sass/
summary:
  CSS has a range of new color functions
  that support wider color gamuts (like `display-p3`)
  and perceptually uniform color adjustments (like `oklch`).
  Sass now provides additional tools for
  working with these new color formats,
  and converting between them.
---

If you want to learn more about CSS color spaces
and the tradeoff they provide,
or if you're just interested in the new Sass functionality,
I've written about it
[on the Sass Blog](https://sass-lang.com/blog/wide-gamut-colors-in-sass/).

Some of the highlights:

- Sass colors have a 'space' that they are defined in.
  We can inspect that using `color.space()`.
- A color's space doesn't change unless we explicitly convert between spaces
  using `color.to-space()`.
- Out-of-gamut channels are also preserved
  unless we explicitly adjust a color into a specific gamut
  using `color.to-gamut()`.
- Color manipulation and inspection functions
  like `color.adjust()` or `color.channel()`
  accept a `$space` parameter for making adjustments or inspecting
  in an arbitrary color space.
