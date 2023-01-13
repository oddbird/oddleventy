---
title: User Unfriendly
sub: designing software for humans, with other humans
author: miriam
date: 2015-11-11
slides: https://slides.oddbird.net/unfriendly/
image:
  src: talks/user-unfriendly.png
  alt: Rethinking user experience design across media
tags:
  - Art
  - Design
  - Process
  - Agile
events:
  - venue: General Assembly, Ethics in Design
    url: https://generalassemb.ly/education/ethics-in-design-what-2020-taught-us
    adr: Online
    date: 2021-01-21
    slides: https://slides.oddbird.net/unfriendly/ethics2101/
    video: https://bit.ly/GAEthicsAccess
  - venue: Agnes Scott College
    url: https://calendar.agnesscott.edu/event/user_unfriendlynotes_toward_a_queer_web
    adr: Atlanta, GA
    date: 2019-09-17
    slides: https://talks.oddbird.net/user-unfriendly/agnesscott19/
  - venue: Design 4 Drupal [keynote]
    url: https://design4drupal.org/
    adr: Boston, MA
    date: 2019-06-26
    slides: https://talks.oddbird.net/user-unfriendly/design4drupal19/
    video: https://drupal.tv/external-video/2019-06-28/user-unfriendly-practical-guide-losing-control
    media: &drupal
      iframe: https://www.youtube.com/embed/2MkQBQb43gE
  - venue: Open Source Conference
    url: https://www.comcastlabsconnect.com/open-source-2019
    adr: Denver, CO
    date: 2019-06-20
    slides: https://talks.oddbird.net/user-unfriendly/opensource19/
  - venue: Agile Denver
    url: https://www.meetup.com/Agile-Denver2/events/258957862/
    adr: Denver, CO
    date: 2019-03-18
    slides: https://talks.oddbird.net/user-unfriendly/agiledenver19/
  - venue: AIGA Colorado
    adr: Denver, CO
    date: 2018-04-26
    # slides: https://oddbooksapp.com/release/e5bd52de-a9db-4e59-a2af-ffa8a68f9100
  - venue: Creative Connections
    url: https://www.meetup.com/Creative-Connections/events/dcwhhpyxgbjb/
    adr: Denver, CO
    date: 2018-04-16
    # slides: https://oddbooksapp.com/release/650ad542-a9c9-4036-8f91-af34ae449d3c
  - venue: Metro State Mobile Prototyping
    adr: Denver, CO
    date: 2018-04-05
  - venue: SassConf 2015
    url: https://twitter.com/sassconf
    adr: Austin, TX
    date: 2015-11-11
    # slides: https://oddbooksapp.com/book/user-unfriendly
press:
  - text: |
      Thought provoking talk on rethinking who the user is
      and who we are writing for as developers.
      Wow! Made me think.
    name: Nithya Ruff
    title: Head of Open Source Office
    venue: Comcast
    url: https://twitter.com/nithyaruff/status/1141803102376550402
    face: nithya-ruff.jpg
summary: |
  A project-manager’s reflections on human-centered problem-solving,
  client communication,
  and user feedback in agile web development.
media:
  - span: full
    <<: *drupal
---

{% import "quotes.macros.njk" as quotes %}
{% import "embed.macros.njk" as embed %}

The web is more than a technology platform,
it was created with a mission statement.
Design, code, and process trends also come with attached philosophies --
and they aren’t always friendly to the user.
We’ll talk about our human-centered approach to product-design,
transparent client communication,
learning to understand user-feedback,
and designing for edge-cases with integrated teams.

- An overview of the philosophy behind the web
- How the medium influences what we make, and how we work
- Understanding “open” and “opinionated” philosophies
- Understanding (and seeking-out) user-feedback, without sacrificing vision
- How we integrate developers and designers in tight feedback cycles
- How we talk to clients about design choices

------

{{ quotes.grid(press) }}

------

{{ embed.figure(
  data=media,
  caption='Conference videos...'
) }}
