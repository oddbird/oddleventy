---
title: Bremtown Cabinetry
sub: Spec book web app, marketing website & CMS
logo: bremtown
client: &client Bremtown
date: 2022-11-08
image:
  src: work/bremtown/bremtown-hero.jpg
  alt: marketing website and spec book on large and small screens
  position: top
people:
  - &tim
    name: Tim Johnson
    face: furman-brown.jpg
    title: Founder
    venue: *client
links:
  website: https://www.bremtown.com/
  spec book: https://spec.bremtown.com/
tags:
  - Manufacturing
sample:
  desktop:
    src: bremtown/bremtown-spec-site.png
    alt: Bremtown spec book site for designers to browse cabinetry products on large and small screens
  caption: |
     Groundbreaking for the
     custom cabinetry industry,
     this online spec book
     made ordering faster
     and more intuitive for designers,
     giving them more time
     to focus on creating great spaces.
# press:
#   - text: |
#       NEED QUOTE AND PIC FROM TIM
#     <<: *tim
#     slug: configurations
summary: |
  OddBird helped Bremtown Cabinetry
  plan, design, and develop
  a searchable product web application
  to showcase their cabinetry products
  to dealers, designers, and firms.
  We also helped redesign their
  brand and logo, and the structure
  and narrative of their marketing site
  for a more intuitive and modern user experience
  and increased lead generation.
---

{% import 'embed.macros.njk' as embed %}
{% import 'layout.macros.njk' as layout %}

Bremtown's spec book website
is a CMS powered by Wagtail.
The information managed by the CMS
is presented to end users
as an interactive, filterable,
and visual catalog
that clearly lays out
all available product options.

{{ layout.title('What We Did') }}

{% call embed.media_block(
  media=embed.img(
    src='work/bremtown/bremtown-spec-site.png',
    alt='Bremtown spec book site for designers to browse cabinetry products on large and small screens'
  ),
  name='desktop-work'
) %}

{% call layout.grid('narrow-columns') %}

{% call layout.block('column') %}

### Services

- Research & Concepting
- Brand & Logo Design
- Messaging & Narrative
- UX & UI Design
- Front-end Development
- Back-end Development
- Project Management
- Ongoing Maintenance

{% endcall %}

{% call layout.block('column') %}

### Languages & Tools

- Figma
- WordPress & PHP
- CSS & Sass
- Django & Wagtail

{% endcall %}

{% endcall %}

{% endcall %}
