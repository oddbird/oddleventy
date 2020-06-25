---
title: Web Design & Development
sub: Custom web applications & refactors
index: Custom Application
image:
  src: pages/design-dev.jpg
  alt: wireframe sketch and final design in mobile phone
action:
  text: See work samples »
  url: /work/
promise:
  - title: Accessible
    icon: icons/big-circle
    text: |
      *The world is diverse, and no person is an edge case.*
  - title: Approachable
    icon: icons/big-circle
    text: |
      *Your friend in digital design, development, and performance*
  - title: Human
    icon: icons/big-circle
    text: |
      *Great software requires a personal touch.*
  - title: Nimble
    icon: icons/big-circle
    text: |
      *Our tightly-integrated team can adapt quickly to your needs*
  - title: Queer
    icon: icons/big-circle
    text: |
      *Moving past assumptions of “normal” to explore new possibilities.*
  - title: Robust
    icon: icons/big-circle
    text: |
      *100% test coverage and documentation keep maintenance costs low*
  - title: Thoughtful
    icon: icons/big-circle
    text: |
      *We don’t have all the answers, but we know how to get there.*
  - title: Top-shelf
    icon: icons/big-circle
    text: |
      *From CSS/Sass & Django to Susy & Herman, we build the tools that millions of developers rely on.*
  - title: Transparent
    icon: icons/big-circle
    text: |
      *Daily communication keeps you in control of budget & priorities from start to finish.*
process:
  - title: Lean & Agile
    text: |
      We use a lean and agile process to deploy & integrate new functionality frequently, aiming to deliver usable product launches as early and often as possible.
  - title: Transparent & Interactive
    text: |
      We encourage clients to stay closely connected with the daily progress, offering frequent feedback and re-prioritization via Trello or Pivotal Tracker.
  - title: Accessible & Responsive
    text: |
      We use the accessible open web stack: semantic HTML5, unobtrusive JavaScript, and advanced CSS – backed by Python & Django on the server.
summary: |
  **We integrate design and development in an agile process**, so you only need to hire one team – completely focused on achieving your goals with smooth and efficient progress from concept to launch and beyond. Starting from user needs, we collaborate with you to deliver usable features quickly and efficiently.

  We provide expertise across a range of technologies, including Python/Django, accessible HTML, modern Sass/CSS, Vue, Node, Backbone/Marionette, and more.
---

{% import 'embed.macros.njk' as embed %}
{% import 'quotes.macros.njk' as quotes %}
{% import 'layout.macros.njk' as layout %}

{{ quotes.find(
  collections.all,
  slugs=['investment', 'curious']
) }}

{{ layout.title('Services') }}

{% call embed.media_block(
  media=embed.screen(
    content=embed.img(
      src='pages/trig-phone.jpg',
      alt='trig race screen',
      width=744 ,
      height=1611,
      sizes='media'
    )
  )
) %}

### Design

- User Experience (UX) - OOUX Certified
- User Interface (UI) & Interaction
- Logos & Branding
- Integrated Design Systems
- Usability Testing
- Information Architecture

### Development

- Full-stack Frontend & Backend
- 100% Test Coverage
- Full Documentation
- Automated Pattern Libraries
- WCAG Accessibility
- Refactors & Performance

{% endcall %}

{{ quotes.find(
  collections.all,
  slugs=['investment', 'curious']
) }}

{{ layout.title('Experience') }}

{% call embed.media_block(
  media=embed.screen(
    content=embed.img(
      src='pages/medcurbside-phone.jpg',
      alt='medcurbside welcome screen',
      width=758 ,
      height=1640,
      sizes='media'
    )
  )
) %}

### Languages & Platforms

- Python **with** Django (*core contributor*)
- HTML/CSS **with** Sass (*core contributor*)
- JavaScript **with** Vue & React
- Backbone/Marionette
- Node
- WordPress

### Client Industries

- Educators
- HIPAA-compliant wellness providers
- Non-profits
- Community organizations
- Professional gear manufacturers
- Startups & enterprise companies
- Urban planners
- Data analysts
- Software companies
- Theaters, writers, & other artists

{% endcall %}

## Our Process Is ...


{{ layout.grid(
  name='special-bg',
  content=process
) }}

{{ embed.icon_block(promise, 'We Promise to Be') }}
