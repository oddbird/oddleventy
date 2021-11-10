---
title: Estimating Engine
sub: Tools for data analytics
logo: aunalytics
client: &client General Stamping & Metalworks
date: 2018-05-14
end: 2019-05-14
image:
  src: work/expression-builder/exbldr.jpg
  alt: 
  position: top
people:
  - &ryan
    name: Ryan Hochstetler
    face: james-weber.jpg
    url: https://www.linkedin.com/in/jamessw/
    title: UI/UX Design & Development Director
    venue: *client
  - &jeff
    name: Jeff Jamrose
    face: gregory-davis.jpg
    url: https://www.linkedin.com/in/gregory-davis-7546a419/
    title: Chief Architect
    venue: *client
press:
  - text: |
      Some of our developers are junior,
      and we appreciated the opportunity to work
      with senior developers at OddBird.
      We all learned from that experience.
    <<: *ryan
    slug: learned
  - text: |
      We feel grateful for having found our relationship with OddBird
      and excited to continue with future projects.
    <<: *jeff
    slug: future
tags:
  - Analysis Sector
  - Management Technology Sector
summary: |
  Aunalytics provides a full suite of data-analytics
  and management tools,
  including the Aunsight Dataflow service.
  The "expression builder" is an embedded Vue application
  allowing users to create and update dataflows
  using a visual UI that describes data transformation
  without having to write code.
  Advanced users can also edit flows directly in JSON,
  or move seamlessly between the two modes.
---

{% import 'embed.macros.njk' as embed %}
{% import 'layout.macros.njk' as layout %}
{% import 'quotes.macros.njk' as quotes %}


{{ layout.title('What We Did') }}

{% call embed.media_block(
  media=embed.img(
    src='work/expression-builder/expression-sample.jpg',
    alt='modal showing visual builder tool with list of expressions'
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



{% endcall %}

{% call layout.block('column') %}

### Languages

  - Adobe XD
  - Django & Python
  - Herman
  - JavaScript with Vue.js
  - Sass & CSS



{% endcall %}

{% endcall %}

{% endcall %}

{{ quotes.grid(press) }}
