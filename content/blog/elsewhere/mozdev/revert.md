---
title: What does do in CSS?
sub: And how is it different from `unset` or `initial`?
author: miriam
date: 2019-10-09
tags:
  - _post
  - CSS
  - Mozilla Developer
  - AboutWeb
  - Code
  - Video
image:
  src: mozdev/revert.png
summary: |
  I've often used `initial` and `unset` in my CSS --
  global keywords that can be applied to any property.
  The difference is small, but important:
  `unset` allows inheritance,
  while `initial` does not.
  But then Firefox implemented `revert` and I was confused --
  how is this one different from the others?!
media:
  - iframe: https://www.youtube.com/embed/GAjoVRmipcU
---

{% import "embed.macros.njk" as embed %}

{{ embed.figure(
  data=media,
  caption='Revert takes user and user-agent styles into consideration'
) }}

It turns out `revert` is the one I wanted all along.
It rolls back styles to the expected browser default for each element,
rather than using the specification default for each property.

- MDN [documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/revert)
- CodePen [demo](https://codepen.io/mirisuzanne/pen/WVjNZP)
