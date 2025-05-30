---
title: Miriam Suzanne
sub: Co-founder & product lead
bird: miriam
date: 2008-04-01
image:
  src: birds/mia.jpg
  alt: |
    Miriam on stage talking and gesturing
    in front of a projection screen
    wearing a yellow leather jacket
    and white-blue-pink lightning-bolt earrings
  position: top
social:
  - mastodon:
      user: mia
      server: front-end.social
  - bluesky: miriam.codes
  - github: MiriSuzanne
  - codepen: MiriamSuzanne
events:
  - venue: Smashing Conference
    adr: New York
    url: https://smashingconf.com/ny-2025
    date: 2025-10-06
    end: 2025-10-09
  - venue: CSS Day
    adr: Amsterdam, NL
    url: https://cssday.nl/
    date: 2025-06-05
    end: 2025-06-06
  - venue: CSS Day
    adr: Amsterdam, NL
    url: https://cssday.nl/2024
    date: 2024-06-06
    end: 2024-06-07
summary: |
  Miriam (she/her) is a co-founder and front-end architect --
  overseeing the user-experience
  & overall cohesion of a project.
bio: |
  **Miriam is a developer, teacher,
  and pioneer of modern CSS** --
  an Invited Expert on the
  [W3C CSS Working Group](/csswg/)
  and core contributor to the
  [Sass](/sass/) language.
  She created [Susy](/susy/) for responsive layouts back in 2009,
  and recently co-wrote the CSS specifications for
  [Container Queries][cq], [Cascade Layers][layers], and [Scope][scope].

  In addition to [presenting talks & workshops][speaking]
  at conferences around the world,
  Miriam is a former staff writer for [CSS-Tricks][tricks],
  co-founder of the [Mozilla Developer Channel][mozdev],
  and co-author of SitePoint’s [Jump Start Sass][jss].
  She's also a cross-media artist
  with extensive experience in theatre,
  writing, music, and visual art.

  [tricks]: /tags/css-tricks/
  [smashing]: /tags/smashing-magazine/
  [mozdev]: /work/mozdev/
  [jss]: https://www.sitepoint.com/premium/books/jump-start-sass/
  [speaking]: /talks/
  [cq]: /tags/container-queries/
  [layers]: /tags/cascade-layers/
  [scope]: /tags/css-scope/
---

{{ bio | md | safe }}

{% import "embed.macros.njk" as embed %}
{% set mia_pages = collections.all | byBird('miriam') %}
{% set weird = mia_pages | findPage('url', '/2019/10/03/css-is-weird/') %}
{% set media_events = mia_pages | getData('data.events') | withData('media') %}

{{ embed.figure(
  data=[
    media_events | withData('venue', 'An Event Apart Fall Summit') | findData('media'),
    media_events | withData('venue', 'An Event Apart Spring Summit') | findData('media'),
    media_events | withData('venue', 'Smashing Conf NY') | findData('media'),
    weird.data.media | first
  ],
  caption='Featured talks by Miriam'
) }}
