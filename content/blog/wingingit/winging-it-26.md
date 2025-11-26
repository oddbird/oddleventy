---
title: Cross-Browser Anchor Positioning
sub: Anchor Positioning is available in all browsers. What's next, with Eric Meyer.
episode: 26
tags:
  - CSS
  - CSSWG
  - Anchor Positioning
author:
  - james
  - miriam
date: 2025-11-20
length: 60 min
image:
  src: winging-it/winging-it-26.jpg
media:
  - youtube: qOXY8UYSgAc
summary: |
  It's finally here!
  With the release of Firefox 145,
  CSS anchor positioning is available
  in all browsers.
  It’s still behind a flag in Firefox,
  so it isn’t Baseline Newly available
  quite yet.
  Join James Stuckey Weber,
  Miriam Suzanne,
  and Eric Meyer of Igalia
  as they talk about
  the emerging patterns,
  the rough edges and changes to the spec,
  and what the future holds
  for anchor positioning.
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

### The state of Anchor Positioning now
- Everywhere but Firefox, and Firefox is behind a flag
  - Go to `about:config` and enable `layout.css.anchor-positioning.enabled`
- Perhaps will be released December 9, with Firefox 146

### What rough edges are being ironed out?
- Position fallback: when should it fallback?
- Containing block shift overflow difference
- Popover default margin styles

### What are the emerging patterns?
- Follower pattern by anchoring on a pseudo class
- Floating focus (but is it accessible, or good UX?)
- `--is`, `--for` pattern

### Known issues
- Anchor containers (like position containers) are not always where you assume they’ll be
- Scrolling can only respond to default anchor element scrolling
- Position area not working as expected, and the syntax is complex.
- Bugs (but they’re being fixed pretty quickly)

### Will Anchor Positioning be baseline?
- What would it mean to be baseline?
- Could some parts of anchor positioning be baseline?

### What is coming next for Anchor Positioning?
- Container queries for detecting fallback
- Transforms


## Links:

- [Firefox release calendar](https://whattrainisitnow.com/calendar/)
- [Anchor fallback behavior by Eric Meyer](https://codepen.io/meyerweb/pen/jEbpgEj)
- [CSSWG Drafts - Fallback-position behavior: spec vs. expectation](https://github.com/w3c/csswg-drafts/issues/12682)
- [Shifting into the containing block](https://oddbird.dev/2025/10/13/anchor-position-area-update/#shifting-into-the-containing-block)
- [Menu hover effect with Anchor Positioning by Temani Afif](https://codepen.io/t_afif/pen/ExzEjoQ)
- [CSS-only floating focus with anchor positioning](https://polypane.app/blog/css-only-floating-focus-with-anchor-positioning/)
- [Inline Custom Identifiers](https://blog.kizu.dev/inline-custom-identifiers/)
- [WhatWG - Add anchor attribute](https://github.com/whatwg/html/pull/9144)
- [Web Platform DX - Web Features Anchor Positioning](https://github.com/web-platform-dx/web-features/blob/main/features/anchor-positioning.yml.dist)
- [Detect fallback positions with anchored container queries from Chrome 143](https://developer.chrome.com/blog/anchored-container-queries)
