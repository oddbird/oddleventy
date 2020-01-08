---
layout: base
title: Software For Humans
banner: |
  Custom Web App
  *[Design](services/),
  [Development](services/), &
  [Training](services/)*
image:
  src: projects/orcas/home-iphone.jpg
  alt: CoachHub App on iPhone
  device: iphone
  fill: white
summary: |
  **We help companies create better web applications**
  with resilient design systems & well-tested code.
  As experts in digital product design and development,
  we focus on performance, accessibility, and architecture --
  for low maintenance costs over the long term.
action:
  text: Start a conversation »
  url: /contact/
work:
  ch: /work/coachhub/
  mc: /work/medcurbside/
  td: /work/timedesigner/
  md: /work/metadeploy/
---

{% import 'quotes.macros.njk' as quotes %}
{% import 'media.macros.njk' as media %}

## Featured Clients

@@@ client logos

{{ quotes.grid([
  collections.all | pageData(work.md, 'press', {'slug': 'extension'}),
  collections.all | pageData(work.mc, 'press', {'slug': 'goals'})
]) }}

## Core Development

@@@ oss logos

{% call media.grid(
  image=media.img(
    src='writing/jssass.png',
    alt='Jump Start Sass, by Miriam Suzanne and Hugo Giraudel'
  ),
  attrs={'data-block': 'center media-page'}
) %}

As core contributors to Sass & Django,
we write the books,
contribute to the languages,
and build the tools millions of other developers rely on.
Then we bring that expertise to your custom web projects.
Our clients have gained traction,
been acquired,
and reported easy maintenance for years.

- Python & Django (*core contributor*)
- CSS & Sass (*core contributor*)
- JavaScript & Vue, React, Node, etc.
- WordPress
- Accessible HTML & Nunjucks

{% endcall %}


{{ quotes.grid([
  collections.all | pageData(work.td, 'press', {'slug': 'investment'}),
  collections.all | pageData(work.ch, 'press', {'slug': 'handoff'})
]) }}


{% call media.grid(
  image=media.svg('faces/miriam'),
  attrs={'data-block': 'center media-page rotate'}
) %}

## Hi, I'm Miriam

I cofounded OddBird with my brothers in 2008
to provide custom web application design, development, and training.
Since then OddBird has become an industry leader
in open-source tooling and training,
while providing top shelf services for our clients.

--[Miriam Suzanne](/authors/miriam/)

{{ media.svg('icons/miriam-sig') | svgo }}

{% endcall %}
