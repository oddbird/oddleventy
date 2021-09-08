---
title: Custom Web App Design & Development For Humans
banner: |
  Custom Web App
  *[Design](/services/design-systems/),
  [Development](/services/development/), &
  [Training](/services/speaking/)*
image:
  src: work/coachhub/coachhub-home-iphone.jpg
  alt: CoachHub App on iPhone
  device: iphone
  fill: white
  width: 1190
  height: 2575
og:
  img: default
summary: |
  **As experts in digital product creation,**
  we’ll help to clarify your goals & priorities
  as we work towards them together.
  Our focus on accessibility, performance, and architecture --
  resilient design systems & well-tested code --
  will keep your maintenance costs low for years.
action:
  text: Start a conversation »
  url: /contact/
work:
  - /work/adobe/
  - /work/mozdev/
  - /work/shopify/
  - /work/workflow-builder/
  - /work/metadeploy/
  - /work/quarqnet/
  - /work/timedesigner/
  - /work/phamaly/
tools:
  - /django/
  - /csswg/
  - /sass/
  - /css-remedy/
  - /susy/
  - /accoutrement/
  - /herman/
  - /true/
---

{% import 'quotes.macros.njk' as quotes %}
{% import 'embed.macros.njk' as embed %}
{% import 'layout.macros.njk' as layout %}

{{ layout.title('Featured Clients') }}

{{ embed.logos(work, collections.all) }}

{{ quotes.find(
  collections.all,
  slugs=['extension', 'goals']
) }}

{{ layout.title('Developer Tools') }}

{{ embed.logos(tools, collections.all) }}

{% call embed.media_block(
  media=embed.img(
    src='writing/jssass.png',
    alt='Jump Start Sass, by Miriam Suzanne and Kitty Giraudel',
    sizes='media'
  )
) %}

**As core contributors to Sass & Django**,
we write the books,
contribute to the languages,
and build the tools millions of other developers rely on.
Then **we bring that expertise to your custom web projects**.
Our clients have gained traction,
been acquired,
and reported easy maintenance for years.
Our specialties include:

- Branding & Design
- Object-Oriented UX & Strategy
- Python & Django (*core contributors*)
- CSS & Sass (*core contributors*)
- JavaScript with Vue, React, Node, etc...
- WordPress
- Accessible HTML & Nunjucks

{% endcall %}

{{ quotes.find(
  collections.all,
  slugs=['investment', 'handoff']
) }}

{% call embed.media_block(
  media=embed.svg('faces/miriam'),
  attrs={'data-block': 'rotate'}
) %}

## Hi, I'm Miriam

I co-founded OddBird with my brothers in 2008
to provide **custom web application design and development**,
along with refactors for **integrated design systems,
accessibility, performance,
and long-term sustainability**.

Since then OddBird has become an industry leader --
from our work on Django, Sass, and Susy,
to the Mozilla Developer Channel,
**CSS Working Group**,
and in-depth **trainings on front-end architecture, workflow,
component libraries, testing, and documentation**.

We'd love to help you
take your app to the next level.

{{ quotes.signature() }}
{% endcall %}
