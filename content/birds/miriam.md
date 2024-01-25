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
  mastodon:
    user: mia
    server: front-end.social
  github: MiriSuzanne
  codepen: MiriamSuzanne
events:
  - venue: CSS Day
    adr: Amsterdam, NL
    url: https://cssday.nl/2024
    date: 2024-06-06
    end: 2024-06-07
  - venue: Beyond Tellerand
    adr: Berlin, DE
    url: https://beyondtellerrand.com/events/berlin-2024
    date: 2024-11-07
    end: 2024-11-08
summary: |
  Miriam (she/her) is a co-founder and front-end architect --
  overseeing the user-experience
  & overall cohesion of a project.
---

**Miriam is a teacher, open-source contributor,
and pioneer of modern CSS** --
a core contributor to the
[Sass](https://sass-lang.com) language,
and Invited Expert on the
[W3C CSS Working Group](/csswg/).
She's a writer for [CSS-Tricks][tricks] &
[Smashing Magazine][smashing],
co-founder of the [Mozilla Developer Channel][mozdev],
co-author of SitePoint’s [Jump Start Sass][jss].
and international [conference speaker][speaking].
Miriam is also a multimedia artist
with extensive experience in theatre,
writing, music, and visual art.

[tricks]: /tags/css-tricks/
[smashing]: /tags/smashing-magazine/
[mozdev]: /work/mozdev/
[jss]: https://www.sitepoint.com/premium/books/jump-start-sass/
[speaking]: /talks/

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
