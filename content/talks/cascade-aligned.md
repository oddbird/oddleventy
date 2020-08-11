---
title: Cascade Aligned Programming
sub: Understanding & improving on CSS conventions
author: miriam
date: 2020-07-15
image:
  src: talks/cascade.jpg
  width: 2500
  height: 1150
tags:
  - Cascade
  - CSS
  - Methodology
events:
  - venue: Front Range Front End
    url: https://frontrangefrontend.com/
    date: 2020-08-06
    adr: Online
    video: https://www.youtube.com/watch?v=-wlokRJRepY
    media: &frfe
      iframe: https://www.youtube.com/embed/-wlokRJRepY
media:
  - span: full
    <<: *frfe
summary: |
  How do we write code that is modular & maintainable,
  in a language designed to be systematic & contextual?
  Over the years developers have explored various programming methods,
  frameworks, and naming conventions to achieve that goal --
  from Nicole Sullivan's OOCSS and Natalie Downe's CSS Systems,
  to BEM, SMACSS, ITCSS, CUBE,
  and recent attempts at purely "functional" or "utility-based" CSS.
---

{% import "embed.macros.njk" as embed %}

We'll look at what these systems have in common,
where they differ,
and how the Cascade changes everything we know about
writing resilient code.

{{ embed.figure(
  data=media,
  caption='Conference videos...'
) }}
