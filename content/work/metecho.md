---
draft: true
title: Metecho (preview)
sub: Collaboration for Salesforce projects
logo: salesforce
client: &client Salesforce.org
date: 2020-05-15
people:
  - &jason
    name: Jason Lantz
    title: Sr. Director of Release Engineering
    face: jason-lantz.jpg
    url: https://www.linkedin.com/in/jasonlantz/
    venue: *client
tasks:
  - User Experience Design
  - Project Architecture
  - Front & Back-End Development
  - Lightning Design System React Implementation
summary: |
  A custom web application...
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
  - Usability Testing


{% endcall %}

{% call layout.block('column') %}

### Languages & Tools

  - Adobe XD
  - Django & Python
  - JavaScript with React & Redux
  - Sass & CSS
  - Storybook


{% endcall %}

{% endcall %}

{% endcall %}

{{ quotes.grid(press) }}
