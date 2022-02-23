---
title: Integrated Design Systems
sub: Want to reduce technical debt and scale your applications?
index: Design Systems
image:
  src: pages/design-system-hero.jpg
  alt: font sizes and previews for OddBird.net
action:
  text: Talk with us »
  url: /contact/
summary: |
  **We partner with clients
  to build design systems**
  that improve team communication,
  speed up development,
  and lay the foundation
  for a scalable codebase.
  We’re experts at building systems --
  helping your team in integrated tools
  & daily workflows
  to maintain consistent designs
  across digital products over the long-term.
---

{% import 'quotes.macros.njk' as quotes %}
{% import 'embed.macros.njk' as embed %}

{{ quotes.find(
  collections.all,
  slugs=['best', 'systems']
) }}

[See work sample »](/work/second-measure/)

## Packages

We provide two integrated design system development packages.
Purchase just the Goals & Audit package and build your system in house,
or hire us for both packages.

1. **Goals & Audit** to assess your current designs & technology,
understand your needs, and propose an improvement plan.
2. **Build My Design System** to set up the tools, workflows,
and components you need, and to train your team to use and maintain the system.

### Goals & Audit
*starting at $4K*

#### Goals

OddBird will meet (virtually) with your team. Together with your designers
and developers, we will walk through your current workflow and projects,
highlighting pain points and bottlenecks so that we can gain a shared
understanding of your design system goals and needs.

#### Audit

OddBird will review any existing design system components, libraries,
and/or platforms/tools your company uses, how you are using them,
and any related project code.

#### Deliverables

1. **Visual Inventory**:
A compilation of existing components within your project,
documenting commonly used UI elements and their variations.
We will identify and prioritize design patterns
to be condensed, expanded, improved,
and documented in a pattern library.

{{ embed.figure(
  data=[{
    img: 'pages/inventory.jpg',
    alt: 'A collection of button screenshots from one project'
  }],
  caption='Taking inventory is a great way to find design patterns.'
) }}

2. **User Stories**:
A list of recommended next steps that could include:
documentation,
tooling recommendations,
a component library,
component development,
component design,
brand/graphic design,
code organization,
and team training sessions
for hand-off.

3. **Estimate**:
A set of “User Stories” or tasks estimated individually,
and prioritized into phases as needed —
giving you control of the timeline and budget to build your design system.

### Build My Design System
*Custom Estimate*

Most design system projects begin with the Goals & Audit package to gain
a shared understanding of the technology constraints, existing designs,
and team goals. Based on the results of the Goals & Audit phase,
OddBird will create a proposal and estimate that could include
a wide ranges of services. In the “Build” phase, we will start with
agreed-upon priorities and meet with you regularly while we work together.

{{ embed.figure(
  data=[{
    img: 'pages/design-system-storybook.jpg',
    alt: 'profile image on top of quote'
  }],
  caption='Storybook component library built for Metecho project'
) }}

#### Range of Deliverables

- Integrated design system setup
- Documentation
- Component library setup
- Component design & development
- Tooling & language suggestions (Fractal, Storybook, React, Vue)
- Brand & graphic design
- Workflow strategies
- Code organization
- Implementing Herman automated style guide
- And more!

#### Training & Ongoing Development

The Build My Design System package
concludes with training for your team
to ensure successful hand-off.
We are happy to (and often do)
provide continued development
and ongoing project updates, as needed,
at our standard hourly rate.

## Design Systems help your team:

- Improve communication between designers & developers
- Speed up development & processes
- Lay the foundation for a scalable codebase
- Weave system updates into the daily workflow
- Maintain consistent designs across applications over the long-term
- Discover and create meaningful patterns
- Find bugs before committing code
- Reduce technical debt

[Contact us »](/contact/)

## Herman Automated Style Guide

[Herman] is a free tool made by OddBird which creates a living pattern
library from the code in your CSS files. It saves time by standardizing
designer/developer communication, on-boarding, and hand-off, helping to
make your life a little easier.

Depending on your needs, Herman may be included in a design systems
training and implementation project. We work with you to determine the
best tools for your company.

[Herman]: /herman/

{{ embed.img(
  src='herman/herman-color-palette.jpg',
  alt='Herman color palettes',
  attrs={'class': 'extend-large img-border img-shadow img-spacing'}
) }}
