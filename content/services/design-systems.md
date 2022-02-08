---
title: Integrated Design Systems
sub: Want to reduce technical debt and scale your applications?
index: Design Systems
image:
  src: pages/stacy-design-systems-training.jpg
  alt: Stacy teaching developers at an event
action:
  text: Talk with us »
  url: /contact/
summary: |
  **We partner with clients 
  to build design systems** 
  that improve team communication, 
  speed up development, 
  and lay the foundation 
  for a scalable code base. 
  We’re experts at building systems 
  — training your team in integrated tools 
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

[See work sample »]

[See work sample »]: /work/second-measure/

## Packages

We provide two integrated design system development packages: 
1. **Goals & Audit** to assess your current designs & technology, understand your needs, and propose a strategy. 
2. **Build My Design System** to set up the tools, workflows, and components you need, and to train your team.

### Goals & Audit 
*starting at $4K*

**Goals** \
OddBird will meet (virtually) with your team. Together with your designers and developers, we will walk through your current workflow and projects, highlighting pain points and bottlenecks so that we can gain a shared understanding of your design system goals and needs.

**Audit** \
OddBird will review any existing design system components, libraries, and/or platforms/tools your company uses, how you are using them, and any related project code. 

**Deliverables**
1. **Visual Inventory**:
A compilation of existing designs. [STACY'S DESCRIPTION]

{{ embed.figure(
  data=[{
    img: 'pages/interactive-prototypes.png',
    alt: 'profile image on top of quote'
  }],
  caption='The profile image sits on top of the quote in narrow containers.'
) }}

2. **User Stories**:
A customized, itemized list of recommended next steps that could include: integrated design system setup, documentation, tooling recommendations, a component library, component development, component design, brand/graphic design, code organization, implementing Herman automated style guide, and team training sessions.

3. **Estimate**:
A set of “user stories” or tasks estimated individually, and prioritized into phases as needed — giving you control of the timeline and budget to build your design system.


### Build My Design System
*Custom Estimate*

Most Design System projects begin with the Goals & Audit package to gain a shared understanding of the technology constraints, existing designs, and team goals. Based on the results of the Goals & Audit phase, OddBird will create a proposal and estimate that could include a wide ranges of services. In the “Build” phase, we will start with agreed-upon priorities and meet with you regularly while we work together. 

{{ embed.figure(
  data=[{
    img: 'pages/interactive-prototypes.png',
    alt: 'profile image on top of quote'
  }],
  caption='The profile image sits on top of the quote in narrow containers.'
) }}

**Range of Deliverables**
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

### Training & Ongoing Development

Every project concludes with training for your team to ensure successful hand-off. We are happy to (and often do) provide continued development and ongoing project updates, as needed, at our standard hourly rate.

## Design Systems help your team:

- Improve communication between designers & developers
- Speed up development & processes
- Lay the foundation for a scalable code base
- Weave system updates in daily workflow 
- Maintain consistent designs across applications over the long-term 
- Discover and create meaningful patterns
- Find bugs before committing code
- Reduce technical debt

[Contact us »]

[Contact us »]: /contact/


?? WOULD LIKE TO INSERT ODD TOOL BANNER HERE. NOT SURE HOW. ??


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
