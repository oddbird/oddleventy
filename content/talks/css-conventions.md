---
title: Dissecting the ‘Name-Brand’ CSS Conventions
sub: To understand how they work with the language
author: miriam
date: 2020-10-26
image:
  src: talks/conventions.jpg
tags:
  - Cascade
  - CSS
slides: https://slides.oddbird.net/conventions/
events:
  - venue: An Event Apart Fall Summit
    date: 2020-10-26
    end: 2020-10-28
    adr: Online
    slides: https://slides.oddbird.net/conventions/aea1020/
    video: https://vimeo.com/657632307
    media: &aea
      iframe: https://player.vimeo.com/video/657632307
summary: |
  How do we write code that is modular & maintainable,
  in a language designed to be systematic & contextual?
  Over the years developers have explored a range of techniques,
  frameworks, and naming conventions to achieve that goal --
  from Nicole Sullivan's OOCSS and Natalie Downe's CSS Systems,
  to BEM, SMACSS, ITCSS, CUBE,
  and recent attempts at purely "utility-based" CSS.
media:
  - <<: *aea
    span: full
---
{% import 'embed.macros.njk' as embed %}

We’ll look at what these systems have in common,
where they differ, and how they are informed by CSS itself.
By understanding the trade-offs involved,
we can make more informed decisions
about how to mix, match, adjust,
or re-write these conventions to meet our needs.

[More resources »](https://slides.oddbird.net/conventions/resources/)

------

{{ embed.figure(
  data=media,
  caption='Conference video...'
) }}
