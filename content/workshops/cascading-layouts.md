---
title: Cascading Layouts
sub: A workshop on resilient CSS layouts
feature: workshop
author: miriam
date: 2024-04-26
action:
  text: Bring this workshop to your company »
  url: '#contact-us-to-book-a-workshop'
image:
  src: talks/mia-smashing-de.jpg
  position: top
  alt: |
    Mia from behind,
    standing at a laptop -
    speaking to a conference audience
    and gesturing to one side
tags:
  - CSS
  - Cascade
  - Custom Properties
  - Container Queries
  - Layout
  - CSSWG
included:
  - title: Interactive Sessions
    text: Virtual or in-person
    icon: icons/talk
  - title: Dedicated Q&A
    text: To gain a thorough understanding
    icon: icons/messaging
  - title: Cutting Edge Techniques
    text: From a W3C Invited Expert
    icon: icons/rocket
  - title: Certificate of Completion
    text: Documenting your education
    icon: icons/ribbon
press:
  - text: |
      We were super happy with how it went.
      And you sold quite a lot of tickets too.
    name: Charis Rooda
    title: Event Organizer
    face: charis-rooda.png
    venue: Smashing Conference
    url: https://smashingconf.com/
  - text: |
      Loving the content and the interactivity.
      My favorite part is seeing how [Miriam] arranged the topics
      so that concepts smoothly flow into each other.
      Looking forward to two more days!
    name: Seth A. Roby
    title: Workshop attendee
    face: seth-roby.jpg
    url: https://mastodon.social/@TALlama/112039472807241153
    slug: workshop-flow
summary: |
  CSS Layout techniques have come a long way
  since the early days of Responsive Design,
  but many websites are still using
  decade-old approaches
  that require more fragile code
  and more ongoing maintenance.
  **Take your sites to the next level
  with this 3-day workshop
  on building more resilient and maintainable web layouts
  using modern CSS**.
---

{% import 'utility.macros.njk' as utility %}
{% import 'contact.macros.njk' as contact %}
{% import 'embed.macros.njk' as embed %}
{% import 'quotes.macros.njk' as quotes %}

## What Will Attendees Get?

{{ embed.icon_block(
  data=included,
  grid='fit'
) }}

## Contact Us to Book a Workshop

{{ contact.form(
  submit='Book Now',
  name='workshop',
  extraActions='or [schedule a call to learn more »](https://calendly.com/oddbirdllc/schedule-a-workshop)'
) }}

{{ quotes.grid(press) }}

## What Will Attendees Learn In This Workshop?

- Building **maintainable CSS layouts** with **progressive enhancement**
- The built-in power of **normal flow**
- Distributing space with **flexbox** and **alignment**
- Dynamic layouts using **grid** and **subgrid**
- More intrinsic and modular design with **container queries**

## Who Is This For?

This workshop is intended for designers & developers
with at least a basic understanding of HTML and CSS.
You don’t need to be an expert to keep up,
but even the experts are likely to learn something new.

{{ utility.main_action(
  content='Bring this workshop to your company »',
  url='#contact-us-to-book-a-workshop'
) }}

## About Miriam

{% set miriam = collections.birds | authorPage('miriam') %}
{{ miriam.data.bio | md | safe }}

## Workshop Outline

The workshop is taught in three sessions:

### 1. Declarative Layouts

{{ embed.figure([{
  img: 'pages/css-workshop/cascade.jpg',
  alt: 'Yoda reaching out to control the force, surrounded by jungle swamp'
}]) }}

#### First, Do No Harm

CSS is fundamentally different
from other languages or design tools,
built around a radical vision
for contextual style and user-control.
We’ll dig into the practical implications of that vision,
and how the ‘grain’ of the language
can guide us to more performant and resilient styles.

#### Normal Flow & Formatting Contexts

@@@

### 2. Distributing Space

{{ embed.figure([{
  img: 'pages/css-workshop/flow.jpg',
  alt: 'Earth seen through a window on the international space station'
}]) }}

#### Flowing & Flexing

Unlike the printed page,
web content and context can be unpredictable.
CSS provides tools to manage that uncertainty,
aligning & distributing objects on the page.
We’ll talk about normal flow,
intrinsic and extrinsic sizing,
logical properties,
box sizing & alignment,
and the flexible box model.

#### Flex & Alignment in Practice

Practical use-cases,
and interactive exercises related to distributing space.

### 3. Defining Structure

{{ embed.figure([{
  img: 'pages/css-workshop/grids.jpg',
  alt: 'Cat in a box, thinking OMG I have so many questions for this damn box'
}]) }}

#### Defining Structure

Sometimes we also need to impose external structure
to create consistent and reliable layouts,
even with unpredictable content.
This is a full session dedicated to grid & subgrid,
the multiple ‘stages of squishiness’,
and container queries.

#### Grids & Containers in Practice

Practical use-cases,
and interactive exercises related to defining layouts.
