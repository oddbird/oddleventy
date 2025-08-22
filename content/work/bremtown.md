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
  - Manufacturing Sector
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

{% callout 'note', false %}
Within weeks of launch
Bremtown reported an increase
in new partnerships!
{% endcallout %}

{% call embed.media_block(
  media=embed.img(
    src='work/bremtown/marketing-spec-site-responsive.png',
    alt='Bremtown marketing site for designers to browse cabinetry products on large and small screens',
    caption='Rebranded, accessible, and responsive marketing website with imagined marketing narrative'
  ),
  name='desktop-work'
) %}

## Brand, Wireframes, and Mockups

We have been working with Bremtown
since 2023
doing a full refresh
of their brand, logo, marketing message,
and website layout design
for lead generation.
We started with brand and logo redesign
to establish the new look and feel.

Working within the structure
of the new brand
as well as some established layouts and components,
we designed a responsive website
that meets WCAG 2.1 accessibility standards
with CMS components
that are user-friendly and scalable.

Starting with wireframes,
we iterated quickly
based on user feedback.
Next, we created
mockups of the layout design,
user flows, and CTAs
for three user types
designing for responsiveness
from the beginning.
We helped craft the marketing messages
and recommend images
to support the
cabintry-reimagined narrative.

{% call embed.media_block(
  media=embed.img(
    src='work/bremtown/search-filter-user-guide.png',
    alt='Bremtown marketing site for designers to browse cabinetry products on large and small screens'
  ),
  name='desktop-work'
) %}

## Web Platform

We created a brand new web platform
based on the printed spec book
for marketing their products
to dealers, interior designers,
and design firms
with the goal of establishing
new partnerships more quickly
and streamlining existing processes
for current partners.

{% endcall %}
{% endcall %}
