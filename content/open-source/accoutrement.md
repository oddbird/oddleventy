---
title: Accoutrement
sub: Integrated design-system management in Sass
date: 2014-10-30
end: ongoing
logo: accoutrement
image:
  src: projects/accoutrement.jpg
project:
  source: https://github.com/oddbird/accoutrement
  docs: /accoutrement/docs/
  status: public
index: Accoutrement
oss: owner
tags:
  - _post
  - Open Source
  - OddTools
  - Sass
  - Design Systems
  - Documentation
author:
  - miriam
  - oddbird
accoutrement_modules:
  - title: Core
    url: /accoutrement/docs/core.html
    icon: logos/accoutrement_core
    text: |
      Generic syntax for managing design tokens and arbitrary patterns
      in a format that encourages maintenance and automation.
  - title: Init
    url: /accoutrement/docs/init.html
    icon: logos/accoutrement_init
    text: |
      Lightweight browser normalization.
      This is the only Accoutrement library
      with direct CSS output when imported.
  - title: Animate Plugin
    url: /accoutrement/docs/animate.html
    icon: logos/accoutrement_animate
    text: |
      Manage timing, easing, transitions and animations --
      with built-in shortcuts for common patterns.
  - title: Color Plugin
    url: /accoutrement/docs/color.html
    icon: logos/accoutrement_color
    text: |
      Manage your color palettes in one place,
      and access them from anywhere with
      optional accessibility guidance from the WCAG.
  - title: Layout Plugin
    url: /accoutrement/docs/layout.html
    icon: logos/accoutrement_layout
    text: |
      Layout utilities including named media-queries,
      shorthand positioning, fluid aspect-ratios,
      box-sizing, and float-clearing.
  - title: Scale Plugin
    url: /accoutrement/docs/scale.html
    icon: logos/accoutrement_scale
    text: |
      Manage a system of consistent sizes to use across your project
      for typography, spacing, layout, and more.
      Generate sizes based on modular-scale ratios,
      and access sizes in any unit you need.
  - title: Type Plugin
    url: /accoutrement/docs/type.html
    icon: logos/accoutrement_type
    text: |
      Manage your webfonts,
      import them all with a single command,
      and access font-stacks on-the-fly,
      with utilities for generated content and accessibility.
badges:
  - name: npm
    src: https://badge.fury.io/js/accoutrement.svg
    url: https://www.npmjs.com/package/accoutrement
  - name: build
    src: https://travis-ci.org/oddbird/accoutrement.svg
    url: https://travis-ci.org/oddbird/accoutrement
summary: |
  OddBird's Accoutrement tools (now a single package)
  help keep design tokens meaningful to both humans and machines --
  opening the door for automation, while improving readability.
  These tools also integrate with [Herman](/herman/),
  our automated pattern-library generator.
---

{% import 'embed.macros.njk' as embed %}

## All your patterns in one place

By storing all our design tokens and patterns in Sass maps, we can
improve both organization and automation – making our design systems
meaningful to both developers and the Sass language.

```bash
# npm
npm install accoutrement

# yarn
yarn add accoutrement
```

------

{{ embed.icon_block(accoutrement_modules, 'Modules') }}
