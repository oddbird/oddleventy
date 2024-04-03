---
title: Cascading Style Systems
sub: A workshop on resilient & maintainable CSS
feature: workshop
author: miriam
date: 2023-01-09
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
  - Cascade Layers
  - Container Queries
  - CSS Scope
  - CSS Nesting
events:
  - venue: Smashing Workshops
    date: 2024-02-26
    adr: Online
    url: https://smashingconf.com/online-workshops/workshops/modern-css-miriam-suzanne/
    note: >
      Tickets [on sale now](https://smashingconf.com/online-workshops/workshops/modern-css-miriam-suzanne/)!
  - venue: Smashing Workshops
    date: 2023-09-06
    adr: Freiburg, Germany
    url: https://smashingconf.com/freiburg-2023/workshops/miriam-suzanne/
# placeholder media
intro:
  media:
    - iframe: https://player.vimeo.com/video/691514550
      span: full
  caption: |
    Join Miriam for a deep dive
    on developing **resilient and delightful experiences**
    that hold up across browsers, languages, and device interfaces.
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
summary: |
  New CSS features are shipping at an unprecedented rate --
  cascade layers, container queries, the `:has()` selector,
  subgrid, nesting, and so much more.
  **It’s a good time to step back and understand
  how these tools fit together in a declarative system --
  a resilient cascade of styles**.
---

{% import 'contact.macros.njk' as contact %}
{% import 'embed.macros.njk' as embed %}
{% import 'quotes.macros.njk' as quotes %}

{{ embed.figure(
  data=intro.media,
  caption=intro.caption
) }}

## What Will Attendees Get?

{{ embed.icon_block(
  data=included,
  grid='fit'
) }}

## Contact Us to Book a Workshop

{{ contact.form(
  submit='Book Now',
  name='workshop',
  extraActions='or [pick a time to meet »](https://calendly.com/oddbirdllc/schedule-a-workshop)'
) }}

{{ quotes.grid(press) }}

## What Will Attendees Learn In This Workshop?

- Building maintainable CSS systems with progressive enhancement
- The entire cascade, why it exists,
  and what all is involved (much more than specificity!)
- Managing style conflicts with cascade layers, scope, and nesting
- Modern selectors like `:is()`, `:where()`, and `:has()`
- Value resolution and validation, beyond cascading and inheritance
- Using custom properties to build adaptive systems
- The advantages of logical vs physical dimensions
- The layout flow with intrinsic and extrinsic sizing
- Size comparison functions like min(), max(), and clamp()
- When to use flexbox vs grid for layout and alignment
- Fast and dynamic layouts using subgrid and container queries

## Who Is This For?

This workshop is intended for designers & developers
with at least a basic understanding in HTML and CSS.
You don’t need to be an expert to keep up,
but even the experts are likely to learn something new.

[Schedule a call »](#contact-us-to-book-a-workshop)

## Workshop Outline

The workshop is taught in five sessions:

### 1. Resilient Styles: a Declarative Cascade

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

#### Cascading & Inheritance

A deep-dive into the algorithms
that take us from simple property/value declarations
to a fully-styled web application.
Along the way, we’ll explore new features like nesting,
cascade layers, scope, and the `:has()` selector.

### 2. Dynamic Systems: Custom Properties & Value Resolution

{{ embed.figure([{
  img: 'pages/css-workshop/vars.jpg',
  alt: 'Someone out-of-frame plugging a cable into an orange guitar amp'
}]) }}

#### Custom Properties Reveal the Matrix

CSS custom properties (aka “variables”)
expose the internals of CSS value resolution and error recovery.
What does it even mean for properties
to become ‘invalid at computed value time’?
And how can we use these CSS internals to our advantage,
developing more robust and dynamic style systems?

#### CSS Variables in Practice

Practical use-cases,
and interactive exercises related to CSS variables and functions.

### 3. Intrinsic Layouts: Distributing Space

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

### 4. Intrinsic Layouts: Defining Structure

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

### 5. Resilient Styles: Organizing Conventions

{{ embed.figure([{
  img: 'pages/css-workshop/conventions.jpg',
  alt: 'A woman in a suit kneels to pet cute ducklings while the mother duck removes a bill from her purse'
}]) }}

#### Cascade Aligned Programming

There are many conventions for organizing CSS,
but the best systems all share underlying principles
based on CSS itself.
What would it mean to use _the cascade_ itself
as our guide for writing maintainable CSS?

#### Modern and Resilient

CSS is designed to adapt to context --
failing silently, and enhancing progressively.
We have tools to manage that context and support everyone,
without giving up on the latest features.
The details may vary from project to project,
but we’ll look at practical strategies
for building an expressive and robust CSS system
that works for you.
