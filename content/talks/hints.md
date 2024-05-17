---
title: Hints and Suggestions
sub: First, Do No Harm
date: 2024-05-15
author: miriam
image:
  src: talks/hints.jpg
  alt: |
    Two websites loaded on
    the WWW Hypermedia Browser,
    using the emulator hosted by Remy Sharp --
    our workshop page, and the 11ty symposium site --
    both rendered as plain text
tags:
  - Cascade
  - CSS
  - Cascade Layers
  - CSSWG
slides: https://slides.oddbird.net/layers/
events:
  - venue: 11ty International Symposium on Making Websites Real Good
    url: https://conf.11ty.dev
    adr: Online
    date: 2024-05-09
    slides: https://slides.oddbird.net/hints/eleventy/
    video: https://www.youtube.com/watch?v=iLxJ6PtuF9M&t=4190s
    media: &11ty
      youtube: iLxJ6PtuF9M&t=4190s
media:
  - <<: *11ty
summary: |
  The web is fundamentally different
  from other platforms,
  built around a radically political vision
  for resilience and user-control.
  CSS takes that to another level,
  attempting the almost absurd task
  of collaborative styling
  across devices and interfaces and languages.
---

{% import 'embed.macros.njk' as embed %}

This is a dive into the origins of the web,
and CSS in particular --
the design constraints,
the range of strange proposals,
and how we got where we are.
By the end, we see the _CSS is Awesome_ meme
in a whole new light.

------

{{ embed.figure(
  data=media,
  caption='Conference videos...'
) }}
