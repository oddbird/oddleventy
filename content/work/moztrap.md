---
title: MozTrap
sub: Distributed quality assurance tools
image:
  src: work/moztrap/moztrap.jpg
  alt: Tabular data showing recent software test results
logo: mozilla
client: Mozilla
date: 2011-01-01
end: 2012-03-15
links:
  source: https://github.com/mozilla/moztrap
tags:
  - Technology Sector
tasks:
  - Product Branding
  - User Experience Design
  - Project Architecture
  - Responsive Styles
press:
  - text: |
      I consider **Mozilla's MozTrap** to be one of the best
      open source test case management systems out there.
    name: Frank O'Hara
    title: User
    slug: moztrap
summary: |
  Mozilla's next-generation test case management system, MozTrap manages
  extensive test suites for all of Mozilla's software products (including
  Firefox, Thunderbird, Firefox OS, and others), and allows community
  testers from around the world to run tests on their system and report
  results back to Mozilla, which MozTrap aggregates into reports for
  product managers. MozTrap also includes a RESTful JSON API to allow
  automated tools to run tests and report results.
---

{% import 'embed.macros.njk' as embed %}
{% import 'layout.macros.njk' as layout %}
{% import 'quotes.macros.njk' as quotes %}


{{ layout.title('What We Did') }}

{% call embed.media_block(
  media=embed.img(
    src='work/moztrap/moztrap-sample.jpg',
    alt='list of tests run and their results'
  ),
    name='desktop-work'
) %}

{% call layout.grid('narrow-columns') %}

{% call layout.block('column') %}

### Services

  - Project Management
  - UX & UI Design
  - Front-end Development
  - Back-end Development



{% endcall %}

{% call layout.block('column') %}

### Languages & Tools

  - Django & Python
  - JavaScript
  - Sass & CSS
  - Susy



{% endcall %}

{% endcall %}

{% endcall %}

{{ quotes.grid(press) }}
