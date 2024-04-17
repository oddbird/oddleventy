---
title: Workflow Builder
sub: Tools for data analytics
logo: aunalytics
client: &client Aunalytics
date: 2019-11-01
end: 2020-01-31
image:
  src: work/workflow-builder/workflow.jpg
  alt: Connected workflow processes shown within the canvas
people:
  - &greg
    name: Gregory Davis
    face: gregory-davis.jpg
    url: https://www.linkedin.com/in/gregory-davis-29bb95218/
    title: Chief Architect
    venue: *client
press:
  - text: |
      The Workflow Builder project met and exceeded expectations.
      The project was finished in budget and on time,
      and we were super excited to get the outcome we did.
    <<: *greg
    slug: excited
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

  - Project Management
  - UX & UI Design Consulting
  - Front-end Development

{% endcall %}

{% call layout.block('column') %}

### Languages & Tools

  - JavaScript with Vue and D3
  - Sass & CSS

{% endcall %}

{% endcall %}

{% endcall %}

{{ quotes.grid(press) }}
