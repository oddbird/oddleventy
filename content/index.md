---
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
og:
  img: default
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
  - /work/coachhub/
  - /work/moztrap/
  - /work/quarqrace/
  - /work/metadeploy/
  - /work/timedesigner/
  - /work/phamaly/
  - /work/workflow-builder/
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
    alt='Jump Start Sass, by Miriam Suzanne and Hugo Giraudel'
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

- Strategy, branding, and design
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

Since then OddBird has become an industry leaders --
from our work on Django, Sass, and Susy,
to the **Mozilla Developer Channel**,
and in-depth **trainings on front-end architecture, workflow,
component libraries, testing, and documentation**.

We'd love to help you
take your app to the next level.

{{ quotes.signature() }}
{% endcall %}
