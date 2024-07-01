---
title: Beyond CSS Variables
sub: Pushing past global design tokens
author: miriam
date: 2021-01-04
image:
  src: talks/vars-cascade.jpg
tags:
  - Cascade
  - CSS
  - Custom Properties
slides: https://slides.oddbird.net/variables/
events:
  - venue: An Event Apart Spring Summit
    date: 2021-04-19
    end: 2021-04-21
    adr: Online
    slides: https://slides.oddbird.net/variables/aea2104/
    video: https://vimeo.com/691514550
    media: &aea
      iframe: https://player.vimeo.com/video/691514550
summary: |
  CSS Custom Properties (aka Cascading Variables)
  have gained broad browser support since 2015 --
  but what are they good for,
  and why do we need them?
media:
  - <<: *aea
    span: full
---
{% import 'embed.macros.njk' as embed %}

Most tutorials follow the same pattern,
defining color & size “design tokens” on a `:root` pseudo-class,
and then using them globally.
The problem is, we could already do that in pre-processors --
and do so with much more powerful math and color manipulation at the ready.

But that’s not the full picture,
and it’s time for us to examine
what makes custom properties unique in CSS
and explore their unexpected power.
I'll start with some simple experiments
to demonstrate how CSS variables work,
explore a wide range of practical use-cases,
and then push them to the limit... and beyond.

------

{{ embed.figure(
  data=media,
  caption='Conference video...'
) }}
