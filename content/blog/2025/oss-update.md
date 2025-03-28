---
title: New Features for OddContrast
sub:
author: oddbird
date: 2025-03-13
tags:
  - Article
  - Accessibility
  - Color
  - Design
  - OddTools
image:
  src: blog/2025/oddcontrast-gamut-sliders.png
  alt: >
    OddContrast displays sRGB gamut range
    in P3 color format and an estimate
    of foreground alpha value ratio.
summary: |
  OddContrast gets new features
  including the ability
  to swap background and foreground colors
  and display color gamut ranges
  on the color sliders.
  Contrast ratios now incorporate
  foreground color alpha values.
---

{% import "quotes.macros.njk" as quotes %}
{% import 'embed.macros.njk' as embed %}

{% callout '' %}
This OddContrast update
was originally published
in OddNews,
our newsletter for designers and developers
who want the latest
in front-end web development
and design.

[Subscribe to OddNews](https://www.oddbird.net/oddnews/)
to stay up-to-date
on our OddTools
and OSS contributions.
{% endcallout %}

## New Features for OddContrast
If you haven’t checked it out,
[OddContrast](https://www.oddcontrast.com/)
is OddBird’s color format converter,
with newer color formats
like Oklch, Oklab, and the Display P3 color space.
It’s also a color contrast checker
to help designers
meet WCAG 2 accessibility standards.

In March,
we released several new features:

- Swap background and foreground colors. Either drag-and-drop or use the button located between the two colors.
- A new Show Gamut dropdown menu allows displaying color gamut ranges on the color sliders. And we’ve made it more obvious when a color is outside the specified gamut.
- Contrast ratios now incorporate foreground color alpha values. Ratios displayed are an estimation of contrast when the foreground color is not opaque.
