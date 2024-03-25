---
title: CSS Cascade Layers
episode: 1
author:
  - miriam
  - ed
  - stacy
date: 2023-07-20
tags:
  - CSS
  - Cascade Layers
length: 40 mins
image:
  src: winging-it/winging-it-1.jpg
media:
  - youtube: FwICaSE8iuY
summary: |
  If you've ever found yourself in a specificity war, you'll understand how
  important having control over style priority can be. During our conversation,
  we discussed what CSS Layers are and how you can use them in your project.
---

{% import "embed.macros.njk" as embed %}
{% import "utility.macros.njk" as utility %}

{{ embed.figure(
  data=media
) }}

{{ utility.main_action(
  'Subscribe to Channel »',
  subscribe_url
) }}

## What we cover:

- What is the cascade, and why is it important in CSS?
- How we historically dealt with cascade/specificity problems (before layers)
- What CSS Layers are and how they work
- Why unlayered styles are prioritized
- How to start using Layers within a project
- Additional best practices when using Layers

We also chat about what's new in CSS, including new color tools, `:has`, scope,
nesting, and more.

## Links:

- [A Complete Guide to CSS Cascade Layers](https://css-tricks.com/css-cascade-layers/)
- [Cascade Layers – There's a Polyfill for That!](/2022/06/21/cascade-layers-polyfill/)
- [CSS Cascade Layers Polyfill Demo](https://layers-polyfill-example.netlify.app/)
- [PostCSS Cascade Layers](https://www.npmjs.com/package/@csstools/postcss-cascade-layers)
