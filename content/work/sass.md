---
title: Sass Language Playground & Website
sub: Discover and learn the Sass language
logo: salesforce
image:
  src: work/metecho/metecho.jpg
  alt: A task with assigned developer and tester
client: &client Sass
date: 2022-11-09
end: 2023-07-06
tags:
  - Technology Sector
people:
  - &natalie
    name: Natalie Weizenbaum
    title: Lead designer and developer of Sass
    face: jason-lantz.jpg
    url: https://github.com/nex3
    venue: *client
tasks:
  - User Experience Design
  - Project Architecture
  - Front Development
press:
  - text: |
      NEED A QUOTE AND PICTURE FROM NATALIE
    <<: *natalie
    slug: outsourcing
summary: |
  OddBird did SOMETHING
---

{% import 'embed.macros.njk' as embed %}
{% import 'layout.macros.njk' as layout %}
{% import 'quotes.macros.njk' as quotes %}

{{ layout.title('What We Did') }}

{% call embed.media_block(
  media=embed.img(
    src='work/metecho/metecho-example.jpg',
    alt='an epic with one task in progress
      and one collaborator'
  ),
  name='desktop-work'
) %}

{% call layout.grid('narrow-columns') %}

{% call layout.block('column') %}

### Services

  - UX & UI Design
  - Front-end Development
  - Ongoing Maintenance

{% endcall %}

{% call layout.block('column') %}

### Languages & Tools

  - Figma
  - JavaScript with React & Redux
  - Sass & CSS

{% endcall %}

{% endcall %}

{% endcall %}

{{ quotes.grid(press) }}
