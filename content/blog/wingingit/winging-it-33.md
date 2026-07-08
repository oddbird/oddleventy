---
title: Grid Lanes -- The Future of Masonry Layout
episode: 33
tags:
  - CSS
  - Grids
author:
  - stacy
  - miriam
date: 2026-06-18
length: 48 min
image:
  src: winging-it/winging-it-33.jpg
media:
  - youtube: siSCSaqH8hU
summary: |
  This long-debated solution
  for masonry layout
  is now available
  and it's time
  to figure out
  how to use it.
  Join us for a deep dive
  into the workings of Grid Lanes.
---

{% callout 'note', false %}
Check out our [CSS Tips & Tricks Playlist](https://www.youtube.com/playlist?list=PL4jAKUtAhpHlOm3Lfv83ZHpfdJ4zHCDyv)
to learn more CSS.
{% endcallout %}

{% import "embed.macros.njk" as embed %}
{% import "utility.macros.njk" as utility %}

{{ embed.figure(
  data=media
) }}

{{ utility.main_action(
  'Subscribe to Channel »',
  subscribe_url
) }}

## What We Cover:

- `grid-lanes` is a new CSS display property that allows you to create a
  masonry-like layout
- `flow-tolerance` is a new property for `grid-lanes` that accepts a length
  value
- Defining the `grid-lanes` with `grid-template-columns` creates a vertical
  "waterfall" layout. `grid-template-rows` creates a "brick" layout
- Other grid features like gap, subgrid, and spanning a cell multiple tracks
  works with `grid-lanes`
- What alignment options do we have?
- Can we fill in gaps that are created after spanning cells?

## Links:

- [The Field Guide to Grid Lanes](https://gridlanes.webkit.org/)
- [Poetic CSS Course](https://courses.oddbird.net/poetic-css)
- [CodePen demo](https://codepen.io/stacy/pen/jEyyKgb)
- [Alignment is CSS Grid Lanes](https://patrickbrosset.com/articles/2026-06-19-alignment-in-css-grid-lanes/)
- [Browser Compatibility](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/display#browser_compatibility)
