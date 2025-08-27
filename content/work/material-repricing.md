---
title: Material Repricing
sub: Track manufacturing costs as material prices change
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
    url: https://www.linkedin.com/in/ryanhochstetler/
    title: Digital Director
    venue: *client
# press:
#   - text: |
#       NEED QUOTE AND PIC FROM RYAN
#     <<: *ryan
#     slug: configurations
summary: |
  OddBird helped General Stamping & Metalworks
  plan, design, and develop Material Repricing,
  a responsive web application.
  Material Repricing allows GSM
  to quickly track changing material prices,
  ensuring their customers have accurate
  and up-to-date prices for thousands of complex parts.
---

{% import 'embed.macros.njk' as embed %}
{% import 'layout.macros.njk' as layout %}
{% import 'quotes.macros.njk' as quotes %}

General Stamping & Metalworks' tool
allows internal staff to efficiently keep track
of material prices as they change.
The application supports importing and exporting
Excel spreadsheets as well as generating
PDF reports with one click.

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

- Figma
- Python/Django & Django Ninja
- JavaScript with Vue
- Sass & CSS
- Herman

{% endcall %}

{% endcall %}

{% endcall %}

## Responsive Web App

The staff at GSM
use this application
on a variety of devices
from desktops to tablets.
Because users don't need
to see notes all the time,
we created an expandable sidebar,
allowing users to focus
on the most imporant information
that is most imporant to them
at any given time.

{% call embed.media_block(
  media=embed.img(
    src='work/material-pricing/material-reprice-responsive-devices.png',
    alt=''
  ),
  name='desktop-work'
) %}
{% endcall %}

## Visual Component Library

As we created mockups,
we documented the styles and components
in a component library
using Figma
to streamline iteration
and keep the design consistent.

{% call embed.media_block(
  media=embed.img(
    src='work/material-pricing/component-library.png',
    alt=''
  ),
  name='desktop-work'
) %}
{% endcall %}

## Ongoing Partnership

### Multi-Project Relationship

This is the second
business operations platform
we have created with GSM
to streamline their
internal processes
and respond to customers
with accurate repricing information
more quickly.

### Minimal Maintenance

Because the code is resilient
and built with best practices,
maintenance is minimal,
allowing GSM to spend time
testing and honing their operations
instead of reporting technical issues.

{{ quotes.grid(press) }}
