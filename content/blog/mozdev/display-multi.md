---
title: Inner & Outer Values of the Display Property
sub: Allow us to be more explicit & expressive about layouts
author: miriam
date: 2019-10-28
tags:
  - AboutWeb
  - Code
  - Videos
image:
  src: mozdev/multi-display.png
summary: |
  The `display` property has been in CSS from the beginning,
  handling everything from `block` and `inline` boxes
  to `list-items` and full layout systems like `flexbox` or `grid`.
  Now the `display` syntax is getting an upgrade
  to match it's multiple uses.
media:
  - iframe: https://www.youtube.com/embed/4Clyc38U-MA
---
{% import "embed.macros.njk" as embed %}

{{ embed.figure(
  data=media,
  caption="Learn what's new in the CSS `display` property"
) }}

The new `display` spec adds flow and flow-root values,
and allows for setting inner layout (`grid`, `flex`, etc)
as well as outer box type (`inline`, `block`), and more.

It might not be something we use much right away --
but it still helps me understand all the power inside this one property.
