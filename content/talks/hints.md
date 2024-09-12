---
title: Hints and Suggestions
sub: The design of web design
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
  - venue: Beyond Tellerand
    adr: Berlin, DE
    url: https://beyondtellerrand.com/events/berlin-2024
    date: 2024-11-07
    end: 2024-11-08
  - venue: 11ty International Symposium on Making Websites Real Good
    url: https://conf.11ty.dev
    adr: Online
    date: 2024-05-09
    slides: https://slides.oddbird.net/hints/eleventy/
    video: https://www.youtube.com/watch?v=uaN9kY8lKPU
    media: &11ty
      youtube: uaN9kY8lKPU
media:
  - <<: *11ty
summary: |
  The web is fundamentally different from other platforms,
  built around a radical political vision for resilience,
  adaptability, and user control.
---

{% import 'embed.macros.njk' as embed %}

With that vision under threat,
the Cascade takes on an almost absurd task --
styling unknown content,
with unknown collaborators,
on an infinite and unknowable canvas,
across browsers,
languages, writing modes, and device interfaces.

This is a dive into the origins of the web,
and CSS in particular --
the design constraints,
the range of strange proposals,
and how we got where we are.
By the end,
we have a better understanding of the cascade,
and see the _'CSS is Awesome'_ meme in a new light.

------

{{ embed.figure(
  data=media,
  caption='Conference videos...'
) }}
