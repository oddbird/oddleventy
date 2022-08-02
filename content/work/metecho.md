---
title: Metecho
sub: Collaboration for Salesforce projects
logo: salesforce
image:
  src: work/metecho/metecho.jpg
  alt: A task with assigned developer and tester
client: &client Salesforce.org
date: 2019-03-21
tags:
  - Technology Sector
people:
  - &jason
    name: Jason Lantz
    title: Sr. Director of Release Engineering
    face: jason-lantz.jpg
    url: https://www.linkedin.com/in/jasonlantz/
    venue: *client
  - &david
    name: David Reed
    title: Principal Member of Technical Staff
    face: david-reed.jpg
    url: https://www.linkedin.com/in/davidreed-salesforce/
    venue: *client
  - &brandon
    name: Brandon Parker
    title: Senior Member of Technical Staff
    face: brandon-parker.jpg
    url: https://www.linkedin.com/in/brandon-parker-53748235/
    venue: *client
tasks:
  - User Experience Design
  - Project Architecture
  - Front & Back-End Development
  - Lightning Design System React Implementation
press:
  - text: |
      Working with OddBird was
      **the best outsourcing experience I've ever had.**
      It didn't feel like outsourcing at all.
    <<: *jason
    slug: outsourcing
  - text: |
      The OddBird team’s support of our engineers…
      has been exemplary. OddBird is the polar opposite
      of consultancies that deliver “exact words”
      solutions. They **understand our objectives as well
      as we do, if not better,** and deeply engage to
      deliver those objectives.
    <<: *david
    slug: exemplary
  - text: |
      OddBird’s ability to take feedback and iterate
      on features made it a pleasure to work with
      you all. **The code that was delivered at the
      end of the day was always very clean!**
    <<: *brandon
    slug: cadence
summary: |
  OddBird collaborated with Salesforce
  to develop a responsive web application
  designed with Lightning Design System
  and its React implementation.
  Metecho makes it easier for people to
  view, test, and contribute to Salesforce Projects
  without learning GitHub.
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
