---
title: Sass Core Language
sub: Implementing new language features
date: 2023-05-22
end: 2024-02-20
image:
  svg: logos/sass
client: &client Google
list_tag: Sass
people:
  - &natalie
    name: Natalie Weizenbaum
    title: Lead designer and developer of Sass
    face: natalie-weizenbaum.webp
    url: https://github.com/nex3
    venue: *client
press:
  - text: |
      OddBird's team helped power out
      several new Sass features
      that would have taken the core team alone
      years longer.
      **They dropped in like a task force**,
      learned the ropes of programming language
      design and development,
      and made substantial improvements to the product.
      We'd love to work with them again!
    <<: *natalie
tags:
  - Technology Sector
summary: |
  OddBird worked to add high priority features to the Sass language.
  We started with detailed specifications for each feature,
  digging into Node.js and CSS Color specs,
  considering potential impacts on a wide ecosystem of users.
---

{% import 'layout.macros.njk' as layout %}

{{ layout.title('What We Did') }}

Sass has a small core team ([including Miriam](/sass/))
supporting a widely-used language.
OddBird came in to help the core team
define and implement several new language features:

- **Color Spaces**: OddBird relied on our deep understanding of CSS
  as we implemented new color spaces and functionality
  into Sass's JavaScript API.
  We also added support for Sass Functions to the JavaScript API.

- **Package Importer**: We were also able to solve a long-time user pain point
  by introducing a Node.js importer for `pkg:` urls in Sass files.
  This enables authors to easily refer to third party Sass files.

- **Improved Compiler**: Another win for Sass users
  is the ability to compile multiple times using the
  same compiler instance. We ran benchmarks and found our Compiler API had
  significant improvements for users who are running multiple compilations.

Because of Sass's widespread use and integration into web developer tooling,
these changes required extensive investigation to ensure that they would not
break existing functionality, and provide the intended benefits.

OddBird also contributed supporting blog posts, specifications, and
documentation for the new features.

{% call layout.grid('narrow-columns') %}

{% call layout.block('column') %}

### Services

- Research & Specifications
- Developer Community Impact Analysis
- Software Engineering
- Language Engineering
- Documentation
- Testing

{% endcall %}

{% call layout.block('column') %}

### Languages & Tools

- Dart
- Node.js
- Jasmine
- Embedded Protocol

{% endcall %}

{% endcall %}
