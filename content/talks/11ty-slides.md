---
title: 11ty Sliiides in 11ty Sliiides
sub: Building a presentation tool in Eleventy
slides: https://slides.oddbird.net/11ties/jam/
date: 2021-11-11
image:
  src: talks/11ties.webp
  alt: |
    A possum in overalls running with a baseball bat,
    and the title
    11ties,
    the one day event
    featuring 11ty projects
    11/11 @ 1:11 EDT
events:
  - venue: Jamstack Toronto, 11ties
    url: https://www.meetup.com/jamstack-toronto/events/281278073/
    date: 2021-11-11
    media: &jstack
      iframe: https://www.youtube.com/embed/JKdF8iqEFbg
summary: |
  An event featuring works based around the Eleventy framework is back.
  I show how I used Eleventy
  to build the slide deck and presentation tool
  called 'sliiides' --
  which I'm using to present the talk.
media:
  - <<: *jstack
---

The presentations included:

- Ben Myers: "Build a Color Contrast Checker with Eleventy Serverless"
- Lucie Haberer: "Integrating 11ty with a CMS and making it cool to use!"
- Miriam Suzanne: "11ty Sliiides in 11ty Sliiides"
- Ben Holmes: "Stay partially hydrated: unlock component frameworks in 11ty with Slinkity"
- Bryon Tjanaka: "Building a Modern Business Card with Eleventy"
- Stephanie Eckles: "Creating Collections"
- Kellen Mace: "Jamstack-ify WordPress with 11ty!"

See the [full playlist for all the videos](https://www.youtube.com/playlist?list=PLc_KoiGi3sLeC9HQaEs-qy1ztwk4Qcxwn).

{% import "embed.macros.njk" as embed %}

{{ embed.figure(
  data=media,
  caption='Video of my talk...'
) }}
