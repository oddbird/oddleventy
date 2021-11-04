---
title: Top Dog
sub: Bet on live sports with play money
logo: topdog
client: &client Top Dog
date: 2020-06-01
end: 2021-04-01
image:
  src: work/workflow-builder/workflow.jpg
  alt: 
people:
  - &griffin
    name: Griffin Parker
    face: james-weber.jpg
    url: https://www.linkedin.com/in/jamessw/
    title: UI/UX Design & Development Director
    venue: *client
  - &kevin
    name: Kevin Guy
    face: gregory-davis.jpg
    url: https://www.linkedin.com/in/gregory-davis-7546a419/
    title: Chief Architect
    venue: *client
press:
  - text: |
      T
    <<: *griffin
    slug: excited
  - text: |
      W
    <<: *kevin
    slug: configurations
tags:
  - Analytics Sector
  - Management Technology Sector
summary: |
  Aunalytics provides a full suite of data-analytics
  and management tools.
  The "workflow builder" is an embedded Vue application
  allowing data scientists to visually create and navigate
  through dataflows of various kinds.
  The interface is an integration between standard HTML
  and an interactive SVG canvas, built with D3.
---

{% import 'embed.macros.njk' as embed %}
{% import 'layout.macros.njk' as layout %}
{% import 'quotes.macros.njk' as quotes %}


{{ layout.title('What We Did') }}

{% call embed.media_block(
  media=embed.img(
    src='work/workflow-builder/wb-example.jpg',
    alt='canvas with color coded workflow cards'
  ),
  name='desktop-work'
) %}

{% call layout.grid('narrow-columns') %}

{% call layout.block('column') %}

### Services

  - Research & Concepting
  - Project Management
  - UX & UI Design
  - Front-end Development
  - Back-end Development
  - Ongoing Maintenance
  - Design System
  - Usability Testing


{% endcall %}

{% call layout.block('column') %}

### Languages & Tools

  - Adobe XD
  - Django & Python
  - Herman
  - JavaScript with Vue.js
  - Sass & CSS


{% endcall %}

{% endcall %}

{% endcall %}

{{ quotes.grid(press) }}
