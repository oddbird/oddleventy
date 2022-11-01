---
title: Code Patterns
banner: Code Patterns for Pattern Making
author: miriam
date: 2016-03-31
image:
  src: talks/code-patterns.jpg
  alt: the text color(kevin bacon) on a pink background
# slides: https://oddbooksapp.com/book/pattern-making
tags:
  - CSS
  - Sass
  - Design Systems
  - Style Guides
  - Component Libraries
  - Accoutrement
  - Herman
  - OddTools
  - Documentation
events:
  - venue: Refresh Denver
    url: https://www.meetup.com/refreshdenver/events/241230495/
    adr: Denver, CO
    date: 2017-09-13
    # slides: https://oddbooksapp.com/release/7564d481-b132-4636-be3b-0907452955c7
  - venue: Front Range Front End
    adr: Denver, CO
    date: 2017-06-01
    # slides: https://oddbooksapp.com/release/06f61771-0205-4cbc-a478-050ac52cfe92
  - venue: Gotham Sass
    adr: New York, NY
    date: 2017-01-12
    # slides: https://oddbooksapp.com/release/e063d143-df07-4392-a6f3-3ae53e7fa2ca
  - venue: CSSDay.io
    adr: Chandler, AZ
    date: 2016-12-03
    # slides: https://oddbooksapp.com/release/1f08a0cb-198f-4c5f-ac85-93e55daa471d
    media: &cssday
      iframe: https://www.youtube.com/embed/lK_akjzOUY0
  - venue: CascadiaFest
    url: https://2016.cascadiajs.com/
    date: 2016-08-03
    # slides: https://oddbooksapp.com/release/3964dd55-982a-4171-a46b-6dd0354eac27
    media: &cascadia
      iframe: https://www.youtube.com/embed/cVZreFHgLFw
  - venue: CSS Summit
    date: 2016-07-26
    # slides: https://oddbooksapp.com/release/1f76aa54-df02-4f83-8a7b-c54e1c745fbf
  - venue: DublinCSS
    url: https://www.meetup.com/DublinCSS/events/230011902/
    date: 2016-05-19
    # slides: https://oddbooksapp.com/book/sass-patterns
  - venue: Clarity
    url: https://www.clarityconf.com/
    adr: San Francisco, CA
    date: 2016-03-31
    # slides: https://oddbooksapp.com/release/ab1987b6-7d5f-42e4-b0ff-e7312cb345f6
    media: &clarity
      iframe: https://www.youtube.com/embed/b4vSy1e1ai8
summary: |
  **Style Guides & Pattern Libraries are great tools**
  for documenting the relationships between code and design,
  but beautiful docs are only half the battle.
media:
  - span: full
    <<: *cssday
  - <<: *cascadia
  - <<: *clarity
---

{% import "embed.macros.njk" as embed %}

Behind the scenes those patterns have to live in our code,
and make life easier for developers.
Let's talk about how we build patterns in code,
and how we can use them to automate our documentation
keeping everything up-to-date
without extensive maintenance.

- Using pre-processors for pattern-making in CSS and HTML.
- Designing and integrating toolkits that force pattern-making.
- Examples of what we've done, where we've failed, and where we're headed.

------

{{ embed.figure(
  data=media,
  caption='Conference videos...'
) }}
