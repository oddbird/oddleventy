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

## Intuitive & Scalable Website with WordPress

### Refreshed Logo & Brand

A redesign to reflect
Bremtown's reimagination
of the custom cabinetry industry,
focused on relationships
and a streamlined process.

### User-Focused Message

Marketing narrative
that speaks to
three types of website visitors
with different priorities.

### Responsive & Accessible Experience

A responsive website
that meets WCAG 2.1 accessibility standards
with WordPress CMS components
that are user-friendly and scalable.

{% call embed.media_block(
  media=embed.img(
    src='work/bremtown/marketing-spec-site-responsive.png',
    alt='Bremtown marketing site for designers to browse cabinetry products on large and small screens',
    caption='Rebranded, accessible, and responsive marketing website with imagined marketing narrative'
  ),
  name='desktop-work'
) %}
{% endcall %}

## Lead Generating Product Platform with Wagtail & htmx

### Groundbreaking Spec Site

An online, searchable product catalog
allows partners
to search and select products
more quickly than the print version.

 ### Increased Lead Generation

Highly-visual spec book
makes ordering more intuitive for designers,
leading to an immediate increase
in lead generation.

### Self-guided Onboarding

Interactive User’s Guide
teaches new partners
how to use the spec site
in a self-guided process.

{% call embed.media_block(
  media=embed.img(
    src='work/bremtown/search-filter-user-guide.png',
    alt='Bremtown spec site for designers to browse cabinetry products on large and small screens',
    caption='Powered by Wagtail CMS, information is presented to end users as an interactive, filterable, and visual catalog that lays out all available product options'
  ),
  name='desktop-work'
) %}

{% endcall %}

## Ongoing Partnership

### Daily Collaboration

We continue to work with Bremtown,
responding to their feedback
on new feature development daily.

### Minimal Maintenance

Because the code is resilient
and built with best practices,
maintenance is minimal, allowing us
to spend the majority of our time
on new feature development.

One stylesheet for both sites means
they share the same design tokens,
making them consistent
and much easier to maintain
over time.
