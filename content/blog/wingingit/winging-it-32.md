---
title: Surprising Effects of CSS Shorthands
episode: 32
tags:
  - CSS
author:
  - stacy
  - miriam
date: 2026-05-28
length: 45 min
image:
  src: winging-it/winging-it-32.jpg
media:
  - youtube: NX7Es1FYoBg
summary: |
  CSS properties come
  in two excellent flavors
  – longhand properties
  have a direct impact
  on the element,
  while shorthand properties
  take a much more convoluted path.
  There’s a lot going on
  when we use a shorthand property,
  with hidden surprises,
  and reasons we might
  use one or the other.
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

- Shorthands are not properties of elements
- They expand in place to describe actual properties
 - Always expanding to describe all sub-properties
 - Sometimes even reset properties that can’t be set directly in the shorthand
- Give us a **clean start**
- This happens before the cascade
- Will conflict with the longhands
- Useful to combine them (put the shorthand first)
- Otherwise: shorthand is designed for *starting over*

## Links:

- CodePen: [When to go long(hand)](https://codepen.io/editor/miriamsuzanne/pen/019d6931-858c-702e-885c-22710b656852)
- CodePen: [Combining short & longhand](https://codepen.io/editor/miriamsuzanne/pen/019d3068-20c1-78d2-9b91-d037767f3a8e)
- CodePen: [Long or shorthand?](https://codepen.io/editor/miriamsuzanne/pen/019d8cec-6c44-79be-9486-373a96f704b7)
- [Maybe don't use custom properties in shorthand properties](https://www.matuzo.at/blog/2025/invalid-custom-properties-in-shorthands) by Manuel Matuzovic
- Sign up for [Poetic CSS course updates](https://www.oddbird.net/courses/poetic-css/)
