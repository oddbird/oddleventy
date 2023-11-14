---
title: CSS Containers, What Do They Know?
sub: A deep-dive introduction to CSS container queries
author: miriam
date: 2023-01-24
image:
  src: talks/mudturtles.jpg
  alt: |
    Three mud turtles
    end-to-end on a small branch
    floating in the water
tags:
  - CSS
  - Container Queries
  - CSSWG
events:
  - venue: Front Conference
    date: 2023-08-31
    end: 2023-09-01
    adr: Zurich, Switzerland
    url: https://frontconference.com/
    slides: https://slides.oddbird.net/cq/front/
  - venue: Smashing Conf
    date: 2023-09-04
    end: 2023-09-06
    adr: Freiburg, Germany
    url: https://smashingconf.com/freiburg-2023
    slides: https://slides.oddbird.net/cq/smashingde/
    video: https://www.youtube.com/video/TxtTXDXcRp8
    media: &smashde
      iframe: https://www.youtube.com/embed/TxtTXDXcRp8
  - venue: CSS Day
    url: https://cssday.nl/2023
    adr: Amsterdam, Netherlands
    date: 2023-06-08
    end: 2023-06-09
    slides: https://slides.oddbird.net/cq/cssday/
    video: https://www.youtube.com/live/-Fw8GSksUIo
    media: &cssday
      iframe: https://www.youtube.com/embed/-Fw8GSksUIo
  - venue: Smashing Conf
    url: https://smashingconf.com/sf-2023/
    adr: San Francisco
    date: 2023-05-24
    end: 2023-05-25
    slides: https://slides.oddbird.net/cq/smashingsf/
    video: https://www.youtube.com/video/IPyBr289pHY
    media: &smashsf
      iframe: https://www.youtube.com/embed/IPyBr289pHY
summary: |
  How did container queries go
  from ‘impossible’ to ‘shipping’ after so many years?
  How do we use them, and what hidden powers do they have?
  What are CSS containers,
  and what queries can they respond to?
  Let’s find out!
media:
  - <<: *smashde
    span: full
  - <<: *cssday
  - <<: *smashsf
---

{% import 'embed.macros.njk' as embed %}

{{ embed.figure(
  data=media
) }}

While the basics look a lot like media queries --
and can work as a drop-in replacement
for many existing `@media` rules --
there are some key differences to understand,
and a lot more power than you might expect.
Along the way we’ll encounter CSS fundamentals like normal flow,
intrinsic and extrinsic sizing,
value resolution, and more.
Join me to learn all you need to know
about using container queries in your web projects.
