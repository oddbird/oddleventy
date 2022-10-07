---
title: Your Own Damn Susy System
sub: an introduction to the Susy layout toolkit
author: miriam
date: 2014-04-16
image:
  src: blog/susy-grid-system.jpg
  alt: Susy is not a grid system
slides: https://mirisuzanne.github.io/pres/susy2/
tags:
  - Susy
  - OddTools
  - Layout
events:
  - venue: Bmore Sass
    url: https://twitter.com/bmoresass
    adr: Baltimore, MD
    date: 2014-04-24
    video: https://vimeo.com/93045089
  - venue: The Mixin
    url: https://themixin.eventbrite.com/
    adr: San Francisco, CA
    date: 2014-04-16
    video: https://vimeo.com/93045089
    media: &mixin
      iframe: https://player.vimeo.com/video/93045089
      width: 853
      height: 533
media:
  - <<: *mixin
summary: |
  **Susy isn't a grid-system like most others**,
  providing out-of-the box layouts.
  Instead, we've abstracted grid-calculations
  to build a meta-grid system --
  allowing you to create the perfect grids for your project,
  without us getting in the way.
  You can use Susy with floats,
  flexbox, tables, or any other CSS technique.
  You’re the expert, we’re just here to make your job easier.
---

{% import 'embed.macros.njk' as embed %}

{{ embed.figure(media) }}
