---
title: Estimating Engine
sub: Tools for data analytics
logo: aunalytics
client: &client General Stamping & Metalworks
date: 2020-01-20
end: 2021-12-31
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
      Need quote
    <<: *ryan
    slug: learned
  - text: |
      Need quote
    <<: *jeff
    slug: future
tags:
  - Manufacturing Sector
summary: |
  Estimating Engine is a web application
  enabling estimators at GSM to efficiently 
  create and track custom quotes to manufacture parts
  for their customers.
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
