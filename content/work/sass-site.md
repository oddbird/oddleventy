---
title: Sass Language Playground & Website
sub: Discover and learn the Sass language
logo: salesforce
image:
  src: work/metecho/metecho.jpg
  alt: A task with assigned developer and tester
client: &client Google
date: 2022-11-09
end: 2023-07-06
tags:
  - Technology Sector
people:
  - &natalie
    name: Natalie Weizenbaum
    title: Lead designer and developer of Sass
    face: natalie-weizenbaum.webp
    url: https://github.com/nex3
    venue: *client
tasks:
  - User Experience Design
  - Project Architecture
  - Front Development
  - Technology Sector
press:
  - text: |
      OddBird rewrote [sass-lang.com](https://sass-lang.com/)
      from the ground up
      to make it easier to work on, update, and deploy.
      Not only that, they added a new
      [online playground](https://sass-lang.com/playground/)
      and got Sass running in the browser to power it.
      They're a fantastic team that we were lucky to work with.
    <<: *natalie
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
