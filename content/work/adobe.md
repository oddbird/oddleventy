---
title: Typographic Superpower Game
sub: A meditation on typography
logo: adobe
links:
  site: https://game.fonts.adobe.com/
image:
  src: projects/adobegame.jpg
  alt: Illustrated game question about which font is most calligraphic
client: &client Adobe Fonts
date: 2020-10-20
people:
  - &meghan
    name: Meghan Arnold
    title: Sr. Product Marketing Manager
    face: meghan-arnold.jpg
    url: https://twitter.com/MeghanCArnold/status/1318671589618061312
    venue: *client
tasks:
  - User Experience Design
  - Graphic Design
  - Illustration
  - Animation
  - Front-End Development
press:
  - text: |
      **This was such a fun project to work on** with 
      @TypeTasting, @OddBird & my @AdobeFonts
      colleagues.
    <<: *meghan
    slug: fun
summary: |
  A meditation on typography, Adobe Fonts' Game allows players to choose the fonts that they feel apply best to different scenarios. Players' input helps Adobe Fonts continue to improve on their new browse-by-tags feature. We worked closely with Adobe to create animated & interactive illustrations using Greensock, Nuxt, and CSS -- while maintaining high performance standards, and responsive, accessible design.
  
---

{% import 'quotes.macros.njk' as quotes %}
{{ quotes.grid(press) }}
