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
  - Case Study
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

## Brand & Logo

We started with brand and logo redesign
to establish the new look and feel
that would reflect
Bremtown's reimagination
of the custom cabinetry industry.

## Responsive & Accessible Website

Working within the structure
of the new brand
as well as some established layouts and components,
we designed a responsive website
that meets WCAG 2.1 accessibility standards
with CMS components
that are user-friendly and scalable.

<p style="font-size: 1.5rem;">
Bremtown's website is responsive
and meets WCAG accessibility standards.
<p>

We helped craft the marketing messages
and recommended images
to support the
cabintry-reimagined narrative
and to reach
three different types
of website visitors
with different priorities.

{% call embed.media_block(
  media=embed.img(
    src='work/bremtown/marketing-spec-site-responsive.png',
    alt='Bremtown marketing site for designers to browse cabinetry products on large and small screens',
    caption='Rebranded, accessible, and responsive marketing website with imagined marketing narrative'
  ),
  name='desktop-work'
) %}
{% endcall %}

## Web Platform

We created a brand new web platform
based on Bremtown's printed spec book
for marketing their products
to dealers, interior designers,
and design firms
with the goal of establishing
new partnerships more quickly
and streamlining existing processes
for current partners.
The interactive User's Guide
teaches new customers
how to use the spec site
with an intuitive, self-guided process.

<p style="font-size: 1.5rem;">
Within weeks of launch,
Bremtown reported an increase
in the rate of new partnerships!
<p>

Starting with wireframes,
we iterated quickly
based on end-user feedback.
Next we created
interactive mockups
showing user flow
and component interaction,
creating a visual style guide
of components along the way
to streamline the iteration process.

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

We continue to work with Bremtown,
responding to their needs daily.
Because the code is resilient
and built with best practices,
maintenance is minimal.
This allows us
to spend the majority of our time
on new feature development.
