---
title: Test post will be deleted, but I need to test on deploy preview
sub: A guide to using new color spaces & formats with OddContrast
author: oddbird
date: 2025-07-08
tags:
  - Article
  - Accessibility
  - Color
  - Design
  - OddContrast
  - OddTools
related_tag: OddContrast
summary: |
  OddBird's color tool not only checks contrast ratios,
  but supports the new CSS color formats and spaces.
og:
  img: /blog/2025/oddcontrast-named-colors-cropped.jpg
---

{% import 'embed.macros.njk' as embed %}

For years designers and developers were limited to colors in the sRGB colors
space, using formats like hexadecimal, RGB, and HSL. As display technology
progressed, so too has CSS, and we have access to additional color spaces and
wider gamuts. These advances led us to build OddContrast, a color editing and
testing tool that handles our new world of modern color formats.

{{ embed.figure(
  data=[{
    img: 'blog/2025/oddcontrast-named-colors-cropped.jpg',
    alt: 'honeydew named colors is used as the foreground color'
  }]
) }}
