---
title: HTML & CSS Polyfills
sub: Popover, CSS Anchor Positioning, Cascade Layers
feature: true
date: 2022-02-11
image:
  position: center
  src: projects/polyfill.jpg
oss: owner
author: oddbird
action:
  text: Explore Polyfills »
  url: https://github.com/orgs/oddbird/repositories?q=polyfill&type=all&language=&sort=
index: Polyfill
links:
  source: https://github.com/orgs/oddbird/repositories?q=polyfill&type=all&language=&sort=
summary: |
  Along with our work for the W3C
  developing specifications
  for the CSS language,
  OddBird has started and maintains
  a number of powerful polyfills
  for new web platform features
  including the Popover attribute,
  CSS Anchor Positioning, and Cascade Layers.
---

{% import 'embed.macros.njk' as embed %}

## Popover Polyfill

[Demo](https://popover-polyfill.netlify.app/) |
[Source](https://github.com/oddbird/popover-polyfill)

{{ embed.img(
  src='projects/popover-attribute-polyfill.jpg',
  alt='Popovers take a state of “auto” or “manual”. If no state is provided, the
    popover takes on the behavior of its default state, which is “auto”. Auto
    popovers can be “light dismissed” by selecting anywhere on the page,
    clicking the popover control button, or opening another popover on the
    page.'
) }}

OddBird's Popover Attribute Polyfill --
built in collaboration with [Keith Cirkel](https://github.com/keithamus)
and used in production by GitHub --
lets developers preview the upcoming mechanism
for [displaying popover content](https://open-ui.org/components/popover.research.explainer/)
on top of other page content,
drawing the user's attention
to specific important information
or actions that need to be taken.

This polyfills the HTML `popover` attribute
and `showPopover`/`hidePopover`/`togglePopover` methods
onto `HTMLElement`, as well as the `popovertarget`
and `popovertargetaction` attributes on `<button>` elements.

## CSS Anchor Positioning Polyfill

[Demo](https://anchor-polyfill.netlify.app/) |
[Source](https://github.com/oddbird/css-anchor-positioning)

{{ embed.img(
  src='blog/2023/css-anchor-positioning.jpg',
  alt='With polyfill applied Target and Anchors right edges line up'
) }}

The [CSS anchor positioning specification](https://www.w3.org/TR/css-anchor-position-1/)
defines anchor positioning,
"where a positioned element can size and position itself
relative to one or more 'anchor elements'
elsewhere on the page."
This CSS Anchor Positioning Polyfill
supports and is based on this specification.

The proposed `anchor()` and `anchor-size()` functions
add flexibility to how absolutely positioned elements
can be placed within a layout.
Instead of being sized and positioned
based solely on the position of their containing block,
the proposed new functions allow absolutely positioned elements
to be placed relative to one or more
author-defined anchor elements.

## Cascade Layers Polyfill

[Demo](https://layers-polyfill-example.netlify.app/) |
[Source](https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-cascade-layers#readme)

{{ embed.img(
  src='projects/cascade-layers-polyfill.jpg',
  alt='Sample Content for Layers and the Polyfill - When layers are supported or
    if the polyfill is in use, you will see the default bootstrap button styles.
    In this demo, the Bootstrap CSS is imported into the lowest priority layer
    making any CSS written outside of the "framework" layer take priority. This
    means you can apply your own styles without having to worry about increased
    specificity.'
) }}

PostCSS Cascade Layers lets you use `@layer`
following the Cascade Layers Specification.
For more information on layers,
checkout [A Complete Guide to CSS Cascade Layers](https://css-tricks.com/css-cascade-layers/)
by Miriam Suzanne.
