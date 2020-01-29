---
title: Accoutrement
sub: Integrated design-system management in Sass
date: 2014-10-30
image:
  src: projects/accoutrement.jpg
project:
  source: https://github.com/oddbird/accoutrement
  docs: /accoutrement/docs/
  status: public
index: Accoutrement
oss: owner
author:
  - miriam
  - oddbird
accoutrement_modules:
  - title: Core
    url: /accoutrement/docs/core.html
    icon: accoutrement_core
    text: Generic syntax for managing design tokens and arbitrary patterns in a format
      that encourages maintenance and automation.
  - title: Init
    url: /accoutrement/docs/init.html
    icon: accoutrement_init
    text: Lightweight browser normalization. This is the only Accoutrement library
      with direct CSS output when imported.
  - title: 'Plugin: Animate'
    url: /accoutrement/docs/animate.html
    icon: accoutrement_animate
    text: "Manage timing, easing, transitions and animations \u2014 with built-in\
      \ shortcuts for common patterns."
  - title: 'Plugin: Color'
    url: /accoutrement/docs/color.html
    icon: accoutrement_color
    text: Manage your color palettes in one place, and access them from anywhere with
      optional accessibility guidance from the WCAG.
  - title: 'Plugin: Layout'
    url: /accoutrement/docs/layout.html
    icon: accoutrement_layout
    text: Layout utilities including named media-queries, shorthand positioning, fluid
      aspect-ratios, box-sizing, and float-clearing.
  - title: 'Plugin: Scale'
    url: /accoutrement/docs/scale.html
    icon: accoutrement_scale
    text: Manage a system of consistent sizes to use across your project for typography,
      spacing, layout, and more. Generate sizes based on modular-scale ratios, and
      access sizes in any unit you need.
  - title: 'Plugin: Type'
    url: /accoutrement/docs/type.html
    icon: accoutrement_type
    text: Manage your webfonts, import them all with a single command, and access
      font-stacks on-the-fly, with utilities for generated content and accessibility.
summary: "OddBird\u2019s Accoutrement tools (now merged into a single npm package)\
  \ are\ndesigned around the idea that design systems should be meaningful to\nboth\
  \ humans and machines \u2013 opening the door for automation, while\nimproving readability.\
  \ These tools integrate with [Herman], our\nautomated pattern-library generator.\n\
  \n  [Herman]: /herman/\n"
---

content.macros.j2\#divider

content.macros.j2\#rst

## All your patterns in one place

[!['npm package']]

[!['build status']]

By storing all our design tokens and patterns in Sass maps, we can
improve both organization and automation – making our design systems
meaningful to both developers and the Sass language.

    # npm
    npm install accoutrement

    # yarn
    yarn add accoutrement

content.macros.j2\#link\_button

Get started

content.macros.j2\#divider

content.macros.j2\#icon\_block

  ['npm package']: https://badge.fury.io/js/accoutrement.svg
  [!['npm package']]: https://www.npmjs.com/package/accoutrement
  ['build status']: https://api.travis-ci.org/oddbird/accoutrement.svg
  [!['build status']]: https://travis-ci.org/oddbird/accoutrement
