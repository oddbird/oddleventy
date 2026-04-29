---
title: Dos & Don’ts of Anchor Positioning
episode: 31
tags:
  - CSS
  - Anchor Positioning
author:
  - stacy
  - miriam
  - james
date: 2026-04-16
length: 41 min
image:
  src: winging-it/winging-it-31.jpg
media:
  - youtube: OEvVW4wQUII
summary: |
  CSS Anchor Positioning isn't baseline yet,
  and there's good reason for that.
  You can use it,
  but it comes with some caveats.
  James, Stacy, and Miriam
  cover new resources
  to make Anchor Positioning easier,
  and work through some demos
  to help you understand
  how anchor positioning works.
  We also look at
  what new capabilities are in the pipeline.
---

{% callout 'note', false %}
Check out our [Anchor Positioning Playlist](https://www.youtube.com/playlist?list=PL4jAKUtAhpHk7CKHosxrEILMwrncZioZY)
to learn how to use and troubleshoot Anchor Positioning today.
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

- Don't ignore the containing block.
- Do get excited about future things.
- Do try it. Many paths work.
- Don't be surprised if something doesn't work, but ask whether it's baseline.

## Links:

- [Abs value](https://codepen.io/jamessw/pen/MYeqVyL)
- [Clamping](https://codepen.io/jamessw/pen/raLeboW)
- [Select flip](https://codepen.io/jamessw/pen/QwEePzy)
- [css-contain](https://github.com/w3c/csswg-drafts/issues/6205)
- [css-anchor-position-1](https://github.com/w3c/csswg-drafts/issues/13716)
- [Anchor Positioning in Space](https://anchor-positioning-in-space.schalkneethling.com/)
- [For instance Safari 26.4 bug fixes](https://webkit.org/blog/17862/webkit-features-for-safari-26-4/)
- [Shadow DOM CSS - Anchor Positioning](https://shadow-dom-css.adobe.com/#anchor-positioning)
