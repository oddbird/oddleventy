---
title: Estimating Engine
sub: Create & manage custom manufacturing quotes
image:
  src: work/estimating-engine/estimating-engine.jpg
  alt: manufacturing quote details
  position: top
client: &client General Stamping & Metalworks
date: 2020-01-31
end: 2023-04-30
tags:
  - Manufacturing Sector
people:
  - &ryan
    name: Ryan Hochstetler
    face: james-weber.jpg
    url: https://www.linkedin.com/in/ryanhochstetler/
    title: Information Systems Administrator
    venue: *client
press:
  - text: |
      NEED QUOTE AND PIC FROM RYAN
    <<: *ryan
    slug: configurations
summary: |
  OddBird helped General Stamping & Metalworks
  plan, design, and develop Estimating Engine,
  a responsive web application.
  Estimating Engine enables estimators at GSM
  to efficiently
  create and manage custom quotes
  to manufacture parts
  for their customers.
---

{% import 'embed.macros.njk' as embed %}
{% import 'layout.macros.njk' as layout %}
{% import 'quotes.macros.njk' as quotes %}

{{ layout.title('What We Did') }}

{% call embed.media_block(
  media=embed.img(
    src='work/estimating-engine/ee-example.jpg',
    alt='details of part for manufacturing quote'
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

### Languages & Tools

  - Adobe XD
  - Django & Python
  - Herman
  - JavaScript with Vue
  - Sass & CSS

{% endcall %}

{% endcall %}

{% endcall %}

{{ quotes.grid(press) }}
