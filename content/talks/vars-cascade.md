---
title: When Variables Cascade
sub: An exploration of CSS custom properties
author: miriam
date: 2020-10-13
image:
  src: talks/vars-cascade.jpg
tags:
  - Cascade
  - CSS
  - Custom Properties
slides: https://slides.oddbird.net/variables/
events:
  - venue: SmashingConf
    url: https://smashingconf.com/ny-2025/
    date: 2025-10-06
    end: 2025-10-09
    adr: New York
    slides: https://slides.oddbird.net/variables/smashing25/
    video: https://youtu.be/F-vopd4wMvI
    media: &ny25
      youtube: F-vopd4wMvI
  - venue: SmashingConf Austin/NY
    url: https://smashingconf.com/austin-2020/
    date: 2020-10-13
    end: 2020-10-14
    adr: Online
    slides: https://slides.oddbird.net/variables/smashing1020/
media:
  - <<: *ny25
    span: full
summary: |
  The Cascade makes CSS unique as a language –
  forcing us to revisit
  even the most common programming feature: the variable.
---

{% import 'embed.macros.njk' as embed %}

We might think that CSS variables (custom properties)
simply replace Sass or other pre-processors,
but the reality is much more interesting.
Cascading variables open up a range of new possibilities,
and can even be turned back on the cascade itself!
We’ll look at how cascading variables work,
and a full range of practical use-cases that are totally unique to CSS.

------

{{ embed.figure(
  data=media,
  caption='Conference videos...'
) }}
