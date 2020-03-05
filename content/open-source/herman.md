---
title: Herman
sub: Automated style guides
logo: herman
image:
  src: herman/herman-hero.jpg
  alt: Sample organized color swatches with hex and hsl values
date: 2015-11-08
index: Herman
tags:
  - OddTools
  - Sass
  - Design Systems
  - Accoutrement
  - Documentation
screenshots:
  - img: herman/screenshots/sq-colors.jpg
    alt: Color Palettes
  - img: herman/screenshots/sq-icons.jpg
    alt: Icons
  - img: herman/screenshots/sq-ratios.jpg
    alt: Ratio Previews
  - img: herman/screenshots/sq-sizes.jpg
    alt: Size Previews
  - img: herman/screenshots/sq-fonts.jpg
    alt: Typefaces
  - img: herman/screenshots/sq-example.jpg
    alt: Example Code Blocks
links:
  source: https://github.com/oddbird/sassdoc-theme-herman
  docs: /herman/docs/
quotes:
  - text: |
      Herman is my documentation dream come true,
      especially when it comes to systems design.
    name: Claudina Sarahe
    role: Frontend Architect
    slug: dream
summary: |
  **Design systems streamline development, communication, and
  consistency** --but often rely on dedicated teams and extended budgets.
  We wanted a tool that helps create and maintain living style guides &
  pattern libraries in an agile process, and on a budget. Herman helps you
  keep your development process simple --and your UX consistent --as you
  iterate on patterns and scale over time.

  Start [using Herman] or [hire us] for design systems training.

  [using Herman]: /herman/docs/
  [hire us]: /contact/
---

{% import 'embed.macros.njk' as embed %}

## Give Your Design System a Home

Documentation should be the default option --the path of least
resistance for developers. Herman combines documentation of design
tokens and system guidelines, with code patterns, components, and
rendered visual examples -- all driven by Sass and CSS. By automating as
much of the documentation as possible, you can help ensure that
everything stays up-to-date for long-term maintainability.

Help improve communication across stakeholders, with consistency in UX,
performance, and accessibility --while reducing technical debt and
minimizing long-term maintenance. Herman is designed to grow with you,
and keep everything in one place.

### Herman's Current Features

- Supports all [SassDoc] annotations and configuration settings
- Integrated with Sass/CSS for better automation
- Visualize design tokens like fonts, colors, sizes, ratios, and icons
- Display Sass mixins and [Nunjucks] macros with expected input and
  rendered examples
- Include additional prose, pages, and links to third-party docs
- Encourage self-documenting patterns, without locking yourself in
- Optionally integrate with OddBird's [Sass Accoutrement] libraries

[SassDoc]: http://sassdoc.com/
[Nunjucks]: https://mozilla.github.io/nunjucks/
[Sass Accoutrement]: /accoutrement/


{{ embed.figure(
  screenshots,
  'Document colors, icons, ratios, sizes, fonts, and components'
) }}

{{ embed.icon_block(
  collections.all | getData('data.accoutrement_modules'),
  title='Integrate with Accoutrement'
) }}
