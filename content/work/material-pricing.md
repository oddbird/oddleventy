---
title: Material Pricing
sub: DESCRIPTION
image:
  src: work/material-pricing/material-pricing.jpg
  alt: manufacturing reprice details
  position: top
client: &client General Stamping & Metalworks
date: 2024-01-31
tags:
  - Manufacturing Sector
people:
  - &ryan
    name: Ryan Hochstetler
    face: james-weber.jpg
    url: https://www.linkedin.com/in/ryanhochstetler/
    title: Analytics Manager
    venue: *client
# press:
#   - text: |
#       NEED QUOTE AND PIC FROM RYAN
#     <<: *ryan
#     slug: configurations
summary: |
  OddBird helped General Stamping & Metalworks
  plan, design, and develop Material Pricing,
  a responsive web application.
  Material Pricing

  MORE SUMMARY HIGHLIGHTING OUR WORK.
---

{% import 'embed.macros.njk' as embed %}
{% import 'layout.macros.njk' as layout %}
{% import 'quotes.macros.njk' as quotes %}

General Stamping and Metalworks'
tool for internal staff
requires the Django application
to keep track of complex relationships
between thousands of materials, parts, and operations.

{{ layout.title('What We Did') }}

{% call embed.media_block(
  media=embed.img(
    src='work/material-pricing/mp-responsive-example.png',
    alt='details of a part for manufacturing reprice shown in large and small screen sizes'
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
- Design System

{% endcall %}

{% call layout.block('column') %}

### Languages & Tools

- Adobe XD
- Django & Python
- Herman
- JavaScript with Vue
- Sass & CSS

{% endcall %}

{% endcall %}

{% endcall %}

{{ quotes.grid(press) }}
