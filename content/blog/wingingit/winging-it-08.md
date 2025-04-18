---
title: CSS Anchor Positioning in Practice
episode: 8
sponsors: true
tags:
  - Anchor Positioning
  - CSS
  - Polyfill
author:
  - james
  - miriam
date: 2024-05-30
length: 53 mins
image:
  src: winging-it/winging-it-8.jpg
media:
  - youtube: 76hIB2L_vs4&t=1s
summary: |
  What is Anchor Positioning?
  Why is it exciting?
  What can you use it for?
  How does the polyfill work?
  Join James Stuckey Weber and Miriam Suzanne
  as they talk through these questions
  and answer yours in our monthly live stream.
---

{% callout 'note', false %}
Check out our [Winging It](/wingingit/)
conversations about design, frontend,
and backend development.

**Winging It** episode 16: [Debugging CSS Anchor Positioning](/2025/02/20/winging-it-16/)
{% endcallout %}

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

- What is Anchor Positioning?
- Sizing based on the anchor element
- Anchoring Popovers to their trigger
- Scoping an anchor
- Setting up fallback positions when your element overflows
- Fun demos of what is now possible

## Links:

- [Inset Area](https://chrome.dev/anchor-tool/)
- [Polyfill](https://github.com/oddbird/css-anchor-positioning)

## Demos:

- [Anchor Size CodePen 1](https://codepen.io/jamessw/pen/dyENqQz)
- [Anchor Size CodePen 2](https://codepen.io/jamessw/pen/OJYWorB)
- [Popover](https://codepen.io/jamessw/pen/MWdjjQj)
- [Anchor Scope](https://codepen.io/jamessw/pen/dyEXKeP)
- [Fallback options with `position-try`](https://codepen.io/jamessw/pen/abrZPQY)
- [More fallbacks](https://codepen.io/jamessw/pen/OJYbjyE)
- [Textarea box with direction](https://codepen.io/jamessw/pen/qBGNgdL)
- [Side note](https://codepen.io/jamessw/pen/gOJMyjN)
- [Anchor on slide thumb](https://codepen.io/jamessw/pen/KKLMJKm)
- [Multiple anchors](https://codepen.io/jamessw/pen/ZENpWao)
