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
  We partner with clients
  to build design systems
  that improve team communication,
  speed up development,
  and lay the foundation
  for a scalable codebase.
  An integrated design system
  can help your team
  maintain consistent designs
  across digital products
  over the long-term --
  finding bugs faster,
  and weaving system updates
  into the daily workflow.
---

{% import 'quotes.macros.njk' as quotes %}
{% import 'embed.macros.njk' as embed %}
{% import 'layout.macros.njk' as layout %}

{{ quotes.find(
  collections.all,
  slugs=['best', 'systems'],
  action='See work sample',
  url='/work/second-measure/'
) }}

## Packages

We provide two integrated
design system development packages.
Purchase the Goals & Audit package on its own
and build your system in house,
or hire us to build your design system too.

------

### Goals & Audit
*Starting at $4K*

Let's assess your current designs & technology,
understand your needs,
and create a strategy together.

{{ embed.figure(
  data=[{
    img: 'pages/inventory.jpg',
    alt: 'A collection of button screenshots from one project'
  }],
  caption='Taking a visual inventory is a great way to start identifying design patterns.'
) }}

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

------

### Build My Design System
*Custom estimates*

Let's set up the tools, workflows,
and components you need,
and train your team to use and maintain the system
over the long-term.

{{ embed.figure(
  data=[{
    img: 'pages/design-system-storybook.jpg',
    alt: 'profile image on top of quote'
  }],
  caption='Storybook component library built for Metecho project'
) }}

Most design system projects begin with the Goals & Audit package to gain
a shared understanding of the technology constraints, existing designs,
and team goals. Based on the results of the Goals & Audit phase,
OddBird will create a proposal and estimate that could include
a wide ranges of services. In the “Build” phase, we will start with
agreed-upon priorities and meet with you regularly while we work together.

#### Range of Deliverables

- Integrated design system setup
- Documentation
- Component library setup
- Component design & development
- Tooling & language suggestions
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

------

{{ embed.figure(
  data=[{
    img: 'herman/herman-hero.jpg',
    alt: 'color palette'
  }],
  caption='OddBird Theme Colors documented using Herman automated style guide'
) }}

## Design Systems help your team:

- Improve communication between designers & developers
- Speed up development & processes
- Lay the foundation for a scalable codebase
- Weave system updates into the daily workflow
- Maintain consistent designs across applications over the long-term
- Discover and create meaningful patterns
- Find bugs before committing code
- Reduce technical debt
- Meet and maintain WCAG accessibility standards

[Contact us] if you're interested in talking
about auditing or building your design system,
or if you want to chat
about design system best practices.

[Contact us]: /contact/

{{ layout.title('OddTools') }}

## Herman Automated Style Guide

[Herman] is a free tool made by OddBird which creates a living pattern
library from the code in your CSS files. It saves time by standardizing
designer/developer communication, on-boarding, and hand-off, helping to
make your life a little easier.

Depending on your needs, Herman may be included in a design systems
training and implementation project. We work with you to determine the
best tools for your company.

[Herman]: /herman/

{{ embed.figure(
  data=[{
    img: 'herman/herman-color-palette.jpg',
    alt: 'Herman color palettes'
  }],
  class='extend-large img-shadow'
) }}
