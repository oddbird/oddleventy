---
title: Adobe Fonts
banner: Adobe Fonts
sub: Adobe Fonts typography superpower game
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
      This was such a fun project to work on 
      **with @TypeTasting, @OddBird & my @AdobeFonts** colleagues.
    <<: *meghan
    slug: fun
summary: |
  A meditation on typography, 
  Adobe Fonts' Game allows players to choose 
  the fonts that they feel apply best to different scenarios. 
  Players' input helps Adobe Fonts continue 
  to improve on their new browse-by-tags feature. 
  OddBird worked with Adobe's internal back-end and type teams 
  to create illustrations for each question. 
  Using Greensock and CSS, 
  we animated the illustrations and page transitions. 
  We integrated numerous fonts and images 
  while maintaining high performance standards. 
  The game is responsive 
  and accessible across screens sizes and browsers.
---

{% import 'quotes.macros.njk' as quotes %}
{{ quotes.grid(press) }}
