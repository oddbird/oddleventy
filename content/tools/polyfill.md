---
title: Polyfills
sub: Cascade Layers, CSS Anchor Positioning, CSS Toggles, Popover
feature: true
date: 2023-10-31
image:
  position: top
  src: projects/polyfill-demo.jpg
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
  a number of powerful CSS polyfills
  including Cascade Layers, CSS Anchor Positioning,
  CSS Toggles, and Popover Attribute.
---

{% import 'embed.macros.njk' as embed %}

## Cascade Layers Polyfill

[Demo](https://www.npmjs.com/package/@csstools/postcss-cascade-layers) |
[Source](https://github.com/oddbird/cascade-layers-polyfill-demo)

PostCSS Cascade Layers lets you use @layer
following the Cascade Layers Specification.
For more information on layers,
checkout A Complete Guide to CSS Cascade Layers
by Miriam Suzanne.

## CSS Anchor Positioning Polyfill

[Demo](https://anchor-polyfill.netlify.app/) |
[Source](https://github.com/oddbird/css-anchor-positioning)

The CSS anchor positioning specification
defines anchor positioning,
"where a positioned element can size and position itself
relative to one or more 'anchor elements'
elsewhere on the page."
This CSS Anchor Positioning Polyfill
supports and is based on this specification.

The proposed anchor() and anchor-size() functions
add flexibility to how absolutely positioned elements
can be placed within a layout.
Instead of being sized and positioned
based solely on the position of their containing block,
the proposed new functions allow absolutely positioned elements
to be placed relative to one or more
author-defined anchor elements.

## CSS Toggles
*(deprecated for now)*

[Demo](https://toggles.oddbird.net/) |
[Source](https://github.com/oddbird/css-toggles)

The goal of this (work in progress) feature
is to make it possible for CSS
to manage presentational state
for patterns such as tabs/accordions,
carousels, color modes, etc.
There are still many questions
to be answered around the scope,
syntax, and (most importantly)
accessibility of a feature like this in CSS.

This polyfill is designed
to help us explore those questions.
It implements the draft spec syntax
as currently written, where possible --
in addition to some of the extensions proposed
in our explainer.

## Popover Polyfill

[Demo](https://popover-polyfill.netlify.app/) |
[Source](https://github.com/oddbird/popover-polyfill)

OddBird’s Popover Attribute Polyfill
lets developers preview the upcoming mechanism
for displaying popover content 
on top of other page content,
drawing the user’s attention
to specific important information
or actions that need to be taken.

This polyfills the HTML `popover` attribute
and `showPopover`/`hidePopover`/`togglePopover` methods
onto HTMLElement, as well as the `popovertarget`
and `popovertargetaction` attributes on Button elements.
