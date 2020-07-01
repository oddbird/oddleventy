---
title: CSS is Rad
sub: Resilient design on an infinite canvas
author: miriam
date: 2019-10-15
image:
  src: talks/mia-smashing19-rad.jpg
  alt: Miriam speaking at Smashing Conf NY
  position: top
  width: 2240
  height: 1493
slides: https://sliiides.netlify.app/css-is-rad/
tags:
  - Design
  - CSS
events:
  - venue: Smashing Conf Austin
    url: https://smashingconf.com/austin-2020/
    date: 2020-10-13
    end: 2020-10-14
    adr: Austin, TX
  - venue: Front Range Front End
    url: https://www.meetup.com/front-range-front-end/events/bxrfwqyzpbkb/
    date: 2019-11-07
    adr: Denver, CO
    video: https://youtu.be/bSITeqDKkb8
    media: &frfe
      iframe: https://www.youtube.com/embed/bSITeqDKkb8
      width: 560
      height: 315
  - venue: Smashing Conf NY
    url: https://smashingconf.com/ny-2019/
    date: 2019-10-15
    end: 2019-10-16
    adr: New York, NY
    video: https://vimeo.com/367890815
    media: &smashNY
      iframe: https://player.vimeo.com/video/367890815
      width: 640
      height: 360
summary: |
  Depending who you ask,
  CSS is either awesome or broken.
  CSS is not a programming language, unless it is.
  CSS is too simple and entirely too difficult.
  CSS is weird -- not like other languages,
  and not like print design either --
  but trapped in a strange middle ground
  with unique rules and constraints.
media:
  - <<: *smashNY
  - <<: *frfe
---

{% import 'utility.macros.njk' as utility %}
{% import 'embed.macros.njk' as embed %}

The web is designed to work across platforms,
devices, languages, and interfaces --
but how can we possibly design for that
unknown and always-changing canvas?

CSS is designed to be resilient, declarative, accessible, and contextual --
with progressive enhancement and graceful degradation built in.
We’ll look at practical ways to leverage those aspects of the language
in our everyday work.
We don’t have to wait years for support in every browser
before we use the new features,
and we don’t have to duplicate our work for every browser we support.
From layouts to variables, support queries, and duplicated properties --
we can write resilient and modern CSS
that works across the entire web,
now and into the future.

- Use new features before they are universally supported
- Support more browsers with less work
- Use different fallback methods depending on the circumstances
- Understanding caniuse.com as a guide, rather than a gatekeeper
- Understand the radical vision that makes design on the web so unique...
  and weird

------

{{ embed.figure(
  data=media,
  caption='Conference videos...'
) }}
