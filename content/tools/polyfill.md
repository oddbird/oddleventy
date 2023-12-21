---
title: HTML & CSS Polyfills
sub: Cascade Layers, CSS Anchor Positioning, Popover
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
  including Cascade Layers, CSS Anchor Positioning,
  and the Popover attribute.
---

{% import 'embed.macros.njk' as embed %}

## Cascade Layers Polyfill

[Demo](https://layers-polyfill-example.netlify.app/) |
[Source](https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-cascade-layers#readme)

PostCSS Cascade Layers lets you use `@layer`
following the Cascade Layers Specification.
For more information on layers,
checkout [A Complete Guide to CSS Cascade Layers](https://css-tricks.com/css-cascade-layers/)
by Miriam Suzanne.

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

## Popover Polyfill

[Source](https://github.com/oddbird/popover-polyfill)

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
