---
title: Accoutrement
sub: Integrated design-system management in Sass
feature: true
date: 2014-10-30
logo: accoutrement
image:
  src: projects/accoutrement.jpg
links:
  source: https://github.com/oddbird/accoutrement
  docs: /accoutrement/docs/
oss: creator
index: Accoutrement
author: oddbird
accoutrement_modules:
  - title: Utilities
    url: /accoutrement/docs/utils.html
    icon: logos/accoutrement_utilities
    text: |
      Various Sass utilities to help manage strings, maps,
      and lists. As more functions are added to the Sass core,
      we hope to be able to remove some or all of these over time.
  - title: Tokens
    url: /accoutrement/docs/tokens.html
    icon: logos/accoutrement_tokens
    text: |
      Custom syntax for managing design tokens and arbitrary patterns
      in a format that encourages maintenance and automation.
  - title: Ratios
    url: /accoutrement/docs/ratios.html
    icon: logos/accoutrement_ratios
    text: |
      Define and access ratios using the Accoutrement
      token syntax. Several common ratios are provided.
  - title: Animate
    url: /accoutrement/docs/animate.html
    icon: logos/accoutrement_animate
    text: |
      Manage timing, easing, transitions, and animations --
      with built-in shortcuts for common patterns.
  - title: Color
    url: /accoutrement/docs/color.html
    icon: logos/accoutrement_color
    text: |
      Manage your color palettes in one place,
      and access them from anywhere with
      optional accessibility guidance from the WCAG.
  - title: Layout
    url: /accoutrement/docs/layout.html
    icon: logos/accoutrement_layout
    text: |
      Layout utilities including named media-queries, breakpoint
      map management, and organized named z-index layers.
  - title: Scale
    url: /accoutrement/docs/scale.html
    icon: logos/accoutrement_scale
    text: |
      Manage a system of consistent sizes to use across your project
      for typography, spacing, layout, and more.
      Generate sizes based on modular-scale ratios,
      and access sizes in any unit you need.
  - title: Type
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
  - name: Build Status
    src: https://github.com/oddbird/accoutrement/actions/workflows/test.yml/badge.svg
    url: https://github.com/oddbird/accoutrement/actions/workflows/test.yml
summary: |
  OddBird's Accoutrement tools
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

{{ embed.icon_block(accoutrement_modules, 'Modules') }}
