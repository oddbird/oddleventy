---
title: Your Own Damn Susy System
sub: an introduction to the Susy layout toolkit
author: miriam
date: 2014-04-16
slides: http://mirisuzanne.github.io/pres/susy2/
tags:
  - Talks
  - Code
  - Susy
  - Layout
events:
  - venue: Bmore Sass
    url: http://bmore-sass.com/
    adr: Baltimore, MD
    date: 2014-04-24
    video: http://vimeo.com/miriamsuzanne/susy-2-system
  - venue: The Mixin
    url: https://themixin.eventbrite.com/
    adr: San Francisco, CA
    date: 2014-04-16
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
