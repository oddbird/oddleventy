---
title: Container Queries & The Future of CSS
sub: Modernizing the cascade for responsive design systems
author: miriam
date: 2021-04-23
image:
  src: talks/container-query.jpg
  position: top
tags:
  - Cascade
  - CSS
  - Container Queries
  - CSS Scope
  - Cascade Layers
  - CSSWG
press:
  - text: |
      Had a phenomenal discussion last night with @TerribleMia
      on her role in shaping CSS as we know it today,
      and some exciting things on the way in the world of CSS.
    name: Schalk Venter
    title: Organizer
    venue: Front-end Development South Africa
    url: https://twitter.com/schalkventerdev/status/1390205495110246400
    slug: shaping-css
slides: https://slides.oddbird.net/css-next/
events:
  - venue: Smashing Meets CSSummer
    url: https://smashingconf.com/meets-css/
    date: 2021-07-08
    adr: Online
    slides: https://slides.oddbird.net/css-next/smashing/
    video: https://vimeo.com/showcase/8659526
  - venue: CSS Café
    url: https://www.meetup.com/CSS-Cafe/events/278822813/
    date: 2021-06-24
    adr: Online
    slides: https://slides.oddbird.net/css-next/css-cafe/
    video: https://youtu.be/ilR9KlsHMGk
    media: &csscafe
      youtube: ilR9KlsHMGk
  - venue: Front Range Front-End
    date: 2021-06-03
    adr: Online
    slides: https://slides.oddbird.net/css-next/front-range/
    video: https://youtu.be/GuMvZuUrJaY
    media: &frfe
      youtube: GuMvZuUrJaY
  - venue: Front-end Development South Africa
    url: https://www.meetup.com/fedsa-community/events/276328093/
    date: 2021-05-05
    adr: Online
    slides: https://slides.oddbird.net/css-next/fedsa/
    video: https://youtu.be/lh1_zKk1qAk
    media: &fedsa
      youtube: lh1_zKk1qAk
  - venue: Web Directions, Hover
    url: https://webdirections.org/hover/
    date: 2021-04-23
    end: 2021-04-30
    adr: Online
    slides: https://slides.oddbird.net/css-next/hover/
media:
  - <<: *csscafe
    span: full
  - <<: *frfe
  - <<: *fedsa
summary: |
  New CSS proposals like Container Queries,
  Cascade Layers, Scoped Styles, and Nesting
  are all aimed at improving the way we write
  responsive components and design systems.
---

{% import 'embed.macros.njk' as embed %}

Over the last decade
Object-Oriented & Responsive design
have become the norm --
with tools like Flexbox, Grid,
intrinsic sizing, and `aspect-ratio`
giving us even more layout control.
CSS has always been designed for a responsive web,
but that goalpost can shift over time.
Join Miriam to explore how these new features
help us write more modern, encapsulated,
and responsive CSS.

------

{{ embed.figure(
  data=media,
  caption='Conference videos...'
) }}
