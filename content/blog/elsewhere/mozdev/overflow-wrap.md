---
title: How do you wrap long words in CSS?
sub: None of the solutions are perfect, but we have some options
author: miriam
date: 2019-11-06
tags:
  - AboutWeb Video
  - CSS
image:
  src: mozdev/overflow_wrap.png
  alt: CSS code snippet with overflow wrap options
summary: |
  Horizontal text overflow has always been difficult to manage on the web.
  The default visible overflow
  is designed to make sure content remains accessible
  no matter the size of a containing box,
  but it's not our only option.
media:
  - iframe: https://www.youtube.com/embed/UOKQ6gw21NA
---

{% import "embed.macros.njk" as embed %}

We can now use overflow-wrap to control how words break --
and combine that with hyphens to make wrapped text more readable.
The solutions aren't perfect yet,
but I'll walk you through the options we have,
and how to use them.

{{ embed.figure(
  data=media,
  caption='Overflow-Wrap is the proper way to break words in CSS'
) }}

- [MDN Overflow-Wrap](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-wrap)
- [MDN Hyphens](https://developer.mozilla.org/en-US/docs/Web/CSS/hyphens)
- [CodePen Demo](https://codepen.io/miriamsuzanne/pen/GRKoxXY)
