---
title: Emmy's Workshop
sub: Individualized algebra tutor
image:
  src: work/emmys-workshop/emmys.jpg
client: &client Carleton College
date: 2016-08-01
end: 2018-06-30
links:
  site: https://turing.mathcs.carleton.edu/production/AlgebraSolving.html
tasks:
  - Branding
  - Responsive front-end architecture
people:
  - &anna
    name: Anna Rafferty
    title: Assistant Professor of Computer Science
    # face: anna-rafferty.jpg
    url: https://emmysworkshop.com/
    venue: *client
tags:
  - Education Sector
press:
  - text: |
      The first meeting I had with Miriam helped me decide.
      **She was excited about the project but also realistic**
      about potential issues with the codebase.
    <<: *anna
    slug: realistic
  - text: |
      The OddBird team did a great job
      developing the brand for my algebra website
      and revamping the site to reflect both new aesthetics
      and better practices for making it look wonderful
      on a variety of devices.
    <<: *anna
    slug: great
  - text: |
      I appreciated how professional the team was --
      keeping me informed about the process
      and offering me excellent choices about what direction
      to go at key points.
    <<: *anna
    slug: informed
summary: |
  Emmy's Workshop is part of a research project to improve
  computer-based educational systems.
  Learners can work through an entire problem before receiving feedback.
  Mathematical algorithms analyze how the problem was solved,
  and estimate how well the learner understands
  a variety of mathematical skills.
  Students and faculty built the application
  using Google Web Toolkit --
  then brought us on to help design & implement
  a responsive interface.
---

{% import 'embed.macros.njk' as embed %}
{% import 'layout.macros.njk' as layout %}
{% import 'quotes.macros.njk' as quotes %}

{{ layout.title('What We Did') }}

{% call embed.media_block(
  media=embed.screen(
    notch='0',
    content=embed.img(
      src='work/emmys-workshop/emmy-phone.jpg',
      alt='mobile view of algebra equation to solve in steps
        and submit for analysis',
      sizes='media'
    )
  )
) %}

{% call layout.grid('narrow-columns') %}

{% call layout.block('column') %}

### Services

- Research & Concepting
- Project Management
- UX & UI Design
- Front-end Development
- Back-end Development

{% endcall %}

{% call layout.block('column') %}

### Languages & Tools

- Adobe Xd
- Herman
- Google Web Toolkit
- Java
- PHP
- Sass & CSS

{% endcall %}

{% endcall %}

{% endcall %}

{{ quotes.grid(press) }}
