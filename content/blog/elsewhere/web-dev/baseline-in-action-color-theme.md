---
title: >
  Color Themes with Baseline CSS Features
date: 2026-05-14
venue: web.dev
canonical: https://web.dev/articles/baseline-in-action-color-theme
author: davidh
image:
  src: blog/elsewhere/color-theme-demo.jpg
  alt: >
    Baseline Radio the color theme color-mix playlist
tags:
  - Link
  - CSS
  - Color
related_tag: CSS
summary:
  So, you have a site
  that you want to build or redesign.
  Maybe you have a few core colors in mind,
  and you're thinking about how
  to quickly implement
  a theme based on those colors.
  Baseline features can help!

---

{% import 'embed.macros.njk' as embed %}

You'll need your primary color,
but also colors for actions,
hover states, errors, and colors
for other user interface needs.
Then what about light and dark mode options?
Suddenly there's lots of colors you'll need,
and it can feel overwhelming.

The good news is that when it comes
to building a palette relative to the color tokens
that define your site
and switching between color modes,
Baseline features can do a lot
of the heavy lifting for you.
You can explore some of these techniques
in the featured demo,
a color themed playlist
on the fictional Baseline Radio site.

## Article contents

- Build a base with relative colors
- Mix colors with `color-mix()`
- Opt in to light and dark modes
- Give users control with built-in theme switcher
- Register custom properties with `@property`

## The demo where we put it all together

{{ embed.codepen(
  id="OPNdOeY",
  title="Color theme demo",
  user="web-dot-dev"
)}}

[Read full article »](https://web.dev/articles/baseline-in-action-color-theme)
