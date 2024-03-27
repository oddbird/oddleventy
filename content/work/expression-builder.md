---
title: Expression Builder
sub: Tools for data analytics
logo: aunalytics
client: &client Aunalytics
date: 2018-11-19
end: 2019-05-31
image:
  src: work/expression-builder/exbldr.jpg
  alt: Tools for data analytics
  position: top
people:
  - &greg
    name: Gregory Davis
    face: gregory-davis.jpg
    url: https://www.linkedin.com/in/gregory-davis-29bb95218/
    title: Chief Architect
    venue: *client
press:
  - text: |
      We feel grateful for having found our relationship with OddBird
      and excited to continue with future projects.
    <<: *greg
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

{% endcall %}

{% call layout.block('column') %}

### Languages & Tools

  - Adobe XD
  - JavaScript with Vue
  - Sass & CSS

{% endcall %}

{% endcall %}

{% endcall %}

{{ quotes.grid(press) }}
