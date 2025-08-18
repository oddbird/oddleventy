---
title: Avoid this mistake when anchor positioning a popover!
episode: 22
tags:
  - CSS
  - Tips
author:
  - james
date: 2025-08-12
length: 1 min
image:
  src: winging-it/winging-it-22.jpg
media:
  - youtube: n0djH78gQ-Q
summary: |
  Are you positioning a popover
  with CSS anchor positioning
  and position-area?
  Make sure to override
  the default margins on the popover.
---

{% callout 'note', false %}
Check out our [CSS Tips & Tricks](https://www.youtube.com/playlist?list=PL4jAKUtAhpHlOm3Lfv83ZHpfdJ4zHCDyv)
for quick videos
that explain one CSS concept
or useful pattern.
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

In my CodePen example (linked below),
I use `margin: unset`,
but you can also use `margin: initial`
or give it an actual value.
Otherwise, it would use `margin: auto`
which is great for centering the popover,
but that's not what you want to do here.

## Links:
- [CodePen demo](https://codepen.io/jamessw/pen/azvLgqx)
- Sign up for my [free email course](/learn/courses/anchor-positioning/) for 9
  weeks of anchor positioning knowledge.
