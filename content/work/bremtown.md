---
title: Bremtown Cabinetry
sub: Spec Book web app, Marketing website & CMS
logo: tegy
client: &client Bremtown
date: 2022-11-08
end:
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
tags:
  - _post
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
press:
  - text: |
      GET QUOTE FROM TIM
    <<: *tim
    slug: innovative
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

{% import 'quotes.macros.njk' as quotes %}
{% import 'embed.macros.njk' as embed %}
{% import 'layout.macros.njk' as layout %}

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
