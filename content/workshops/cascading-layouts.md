---
title: Cascading Layouts
sub: A workshop on resilient CSS layouts
author: miriam
action:
  text: Register now for April 2025 »
  url: 'https://ti.to/pland/css-layout'
date: 2025-04-28
image:
  src: talks/cascading-workshop-cat.jpg
  position: center
  alt: |
    A cat sitting in a box
    thinking OMG.
    I have so many questions
    for this damn box.
og:
  img: talks/cascading-layouts-workshop-og.jpg
tags:
  - CSS
  - Cascade
  - Custom Properties
  - Container Queries
  - Layout
  - CSSWG
included:
  - title: Interactive Sessions
    text: Online, wherever you are
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
  - title: Immediate Access
    text: To recordings and shared notes
    icon: icons/video
events:
  - venue: OddBird Workshops
    adr: Online
    date: 2025-04-28
    end: 2025-04-30
press:
  - text: |
      Miriam is one of the very few people I trust enough to point my own
      students toward. She gets the “why” as much as the “how,” and makes
      learning CSS feel genuinely empowering.
    name: Christine Vallaure
    title: Founder
    venue: moonlearning
    face: christine-vallaure.jpeg
    url: https://www.moonlearning.io/
  - text: |
      There are few, if any, who are more qualified to cover the ins and outs
      of CSS layout, and I can tell you that Miriam's work really helped
      inspire and inform the content in my course.
    name: Geoff Graham
    title: Author
    venue: CSS-Tricks
    face: geoff-graham.jpeg
    url: https://css-tricks.com/cascading-layouts-a-workshop-on-resilient-css-layouts/
  - text: |
      I'm not sure I know anyone
      who understands CSS layouts better than Miriam,
      but her real skill is being able to explain it all
      in easy to understand ways.
    name: Kevin Powell
    title: Educator and CSS Evangelist
    venue: Kevin Powell YouTube
    face: kevin-powell.jpg
    url: https://www.youtube.com/kevinpowell
  - text: |
      She doesn’t just teach how things work,
      she explains why they work that way,
      and how everything fits together.
      It was a treat to learn
      from someone involved in writing the specs.
    name: Charis Rooda
    title: Front-end Developer
    venue: CharisMagic
    face: charis-rooda.png
    url: http://charismagic.studio/
  - text: |
      Miriam has a unique talent
      of being extremely technical
      with CSS but communicates
      that so seamlessly
      and so inclusively that regardless
      of what level you’re at now,
      you’ll be so far beyond
      that when you learn from her.
      A true super talent.
    name: Andy Bell
    title: Founder
    venue: Set Studio and Piccalilli
    face: andy-bell.jpg
    url: https://piccalil.li/
  - text: |
      Miriam is your favorite developer’s
      favorite developer.
      She’s been the driving force
      behind a ton of modern CSS features,
      and is better positioned
      than anyone else
      to help you understand them!
    name: Josh W. Comeau
    title: Indie Developer and Educator
    venue: joshwcomeau.com
    face: josh-comeau.jpg
    url: https://www.joshwcomeau.com/
callout_content: |
  9am - 11:30am PT

  For workshop updates and demos of workshop content,
  subscribe to [OddNews](/oddnews/).
summary: |
  CSS layout techniques have come a long way
  since the early days of responsive design,
  but many websites are still using
  decade-old approaches
  that require more fragile code
  and more ongoing maintenance.
  **Take your sites to the next level
  with this 3-session workshop
  on building more resilient and maintainable web layouts
  using modern CSS**.
media:
  - span: full
    youtube: 8k6m87woEpQ
    id: workshop-video
  - youtube: De6QMQA2aio
    id: workshop-video-2
  - youtube: ccL4JP4f_R4
    id: workshop-video-3
---

{% import 'utility.macros.njk' as utility %}
{% import 'contact.macros.njk' as contact %}
{% import 'embed.macros.njk' as embed %}
{% import "quotes.macros.njk" as quotes %}

{{ embed.figure(media) }}

## What Will Attendees Get?

{{ embed.icon_block(
  data=included,
  grid='fit'
) }}

## Register Now for April 2025

<script src="https://js.tito.io/v2" async></script>
<script>
  window.tito = window.tito ||
    function() {
      (tito.q = tito.q || []).push(arguments);
    };
  tito('on:widget:loaded',function(){
     document.getElementById('tito-registration-fallback').setAttribute('hidden', 'hidden');
  });
</script>

<a href="https://ti.to/pland/css-layout" id="tito-registration-fallback">Register</a>
<tito-widget event="pland/css-layout"></tito-widget>

## Discounts & Scholarships

Freelancer and other
need-based scholarships available.
For discounts,
please [contact us].

[contact us]: /contact/

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
  content='Register now »',
  url='https://ti.to/pland/css-layout'
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

#### Cascading Styles

CSS is fundamentally different
from other languages or design tools,
built around a radical vision
for contextual style and user-control.
We’ll dig into the practical implications of that vision,
and how the ‘grain’ of the language
can guide us to more performant and resilient styles.

#### Layout Modes & Formatting Contexts

Many CSS properties are _modal_,
behaving differently in different layout contexts.
We'll start from the default layout mode
called 'normal flow' --
a powerful default
that often feels _natural_,
but hides a lot of complexity just below the surface.
We'll look at how the DOM is rendered
as a tree of inline and block boxes,
each generating a new 'formatting context'
for the elements nested inside.

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

## Contact Us to Book a Workshop

If your full team can't join us for
the April workshop, consider bringing
us in to talk with your team directly:

{{ contact.form(
  submit='Book Now',
  name='workshop',
  extraActions='or [subscribe to OddNews for updates »](/oddnews/)'
) }}
