---
title: Web Design & Development
sub: Custom web applications & refactors
index: Custom Application
image:
  src: pages/design-dev.jpg
  alt: wireframe sketch and final design in mobile phone
  position: left center
action:
  text: See work samples »
  url: /work/
summary: |
  **We integrate design and development in an agile process**, so you only need
  to hire one team – completely focused on achieving your goals with smooth and
  efficient progress from concept to launch and beyond. Starting from user
  needs, we collaborate with you to deliver usable features quickly and
  efficiently.

  We provide expertise across a range of technologies, including
  **Python/Django**, accessible **HTML**, modern **Sass/CSS**, **React**,
  **Vue**, **Node**, and more.
---

{% import 'embed.macros.njk' as embed %}
{% import 'quotes.macros.njk' as quotes %}
{% import 'layout.macros.njk' as layout %}

{{ quotes.find(
  collections.all,
  slugs=['realistic', 'curious']
) }}

{{ layout.title('Services') }}

{% call embed.media_block(
  media=embed.screen(
    notch='0',
    content=embed.img(
      src='work/quarqrace/trig-phone.jpg',
      alt='trig race screen',
      sizes='media'
    )
  )
) %}

{% call layout.grid('narrow-columns') %}

{% call layout.block('column') %}

### Design

- User Experience (UX) - OOUX Certified
- User Interface (UI) & Interaction
- Logos & Branding
- Integrated Design Systems
- Usability Testing
- Information Architecture

{% endcall %}

{% call layout.block('column') %}

### Development

- Full-stack Frontend & Backend
- 100% Test Coverage
- Full Documentation
- Automated Pattern Libraries
- WCAG Accessibility
- Refactors & Performance

{% endcall %}

{% endcall %}

{% endcall %}

{{ quotes.find(
  collections.all,
  slugs=['iterate', 'handoff']
) }}

{{ layout.title('Experience') }}

{% call embed.media_block(
  media=embed.screen(
    fill='hsl(202.5, 7.5%, 42%)',
    content=embed.img(
      src='work/medcurbside/medcurbside-phone.jpg',
      alt='medcurbside welcome screen',
      sizes='media'
    )
  )
) %}

{% call layout.grid('narrow-columns') %}

{% call layout.block('column') %}

### Languages & Tools

- Python **with** Django (*core contributor*)
- HTML/CSS **with** Sass (*core contributor*)
- JavaScript **with** Vue & React
- Node
- WordPress

{% endcall %}

{% call layout.block('column') %}

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

{% endcall %}

{% endcall %}


{% call layout.block(
  name='full',
  attrs={'class': 'has-angles'}
) %}

## Our Process Is ...

{% call layout.grid('inner') %}

{% call layout.block('column') %}

### Lean & Agile

We use a lean and agile process to deploy & integrate new functionality
frequently, aiming to deliver usable product launches as early and often as
possible.

{% endcall %}

{% call layout.block('column') %}

### Transparent & Interactive

We encourage clients to stay closely connected with the daily progress, offering
frequent feedback and re-prioritization via Trello or other Project Management
tools.

{% endcall %}

{% call layout.block('column') %}

### Accessible & Responsive

We use the accessible open web stack: semantic HTML5, unobtrusive JavaScript,
and advanced CSS – backed by Python & Django on the server.

{% endcall %}

{% endcall %}

{% endcall %}

{% call layout.block('fancy-list') %}

## We Promise to Be ...

- **Accessible** \
  *The world is diverse, and no person is an edge case.*
- **Approachable** \
  *Your friend in digital design, development, and performance.*
- **Human** \
  *Great software requires a personal touch.*
- **Nimble** \
  *Our tightly-integrated team can adapt quickly to your needs.*
- **Queer** \
  *Moving past assumptions of “normal” to explore new possibilities.*
- **Robust** \
  *100% test coverage and documentation keep maintenance costs low.*
- **Thoughtful** \
  *We don’t have all the answers, but we know how to get there.*
- **Top-shelf** \
  *From CSS/Sass & Django to Susy & Herman, we build the tools that millions
  of developers rely on.*
- **Transparent** \
  *Daily communication keeps you in control of budget & priorities from start
  to finish.*

{% endcall %}
