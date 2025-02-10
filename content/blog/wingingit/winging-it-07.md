---
title: CSS Container Queries in Practice
episode: 7
tags:
  - Container Queries
  - CSS
author:
  - miriam
  - stacy
date: 2024-05-16
length: 45 mins
image:
  src: winging-it/winging-it-7.jpg
media:
  - youtube: Ci2DLDQYup0&t=1714s
summary: |
  Miriam Suzanne and Stacy Kvernmo
  talk about CSS Container Queries and the
  unexpected things that happen
  when you add containment.
  Some elements completely collapse!
  What's going on there?
  We had questions and thought you might too.
  So we talk through the issue
  in our monthly live stream.
---

{% import "embed.macros.njk" as embed %}
{% import "utility.macros.njk" as utility %}

{{ embed.figure(
  data=media
) }}

{{ utility.main_action(
  'Subscribe to Channel »',
  subscribe_url
) }}

## What we cover:

- What are container queries and why you should use them
- How container queries differ from media queries
- Why some layouts collapse when you add containment
- Size containment with `contain-intrinsic-size`
- Why should we avoid adding containment on root
- Why a container can't query itself
- An opt-out strategy to remove containment

## Links:

- [Can We Query the Root Container?](https://www.oddbird.net/2023/07/05/contain-root/)
- [Ahmad Shadeed's Interactive Guide to CSS Container Queries](https://ishadeed.com/article/css-container-query-guide/)
- [Cascading Layouts Workshop](https://www.oddbird.net/workshops/cascading-layouts/)

## Demos:

- [Container Queries and Birds](https://codepen.io/stacy/pen/abrvZNL?editors=1100)
- [Reduced Test Case](https://codepen.io/miriamsuzanne/pen/YzbyeEx)
