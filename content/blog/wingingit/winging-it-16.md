---
title: Debugging CSS Anchor Positioning
episode: 16
tags:
  - CSS
  - Anchor Positioning
author:
  - miriam
  - james
date: 2025-02-20
length: 65 mins
image:
  src: winging-it/winging-it-16.jpg
media:
  - youtube: 3vwruYb9du4
summary: |
  It is frustrating
  to track down
  why an anchor isn’t being found.
  James and Miriam talk
  with [Tab Atkins-Bittner](https://github.com/tabatkins)
  about ways to troubleshoot
  CSS Anchor Positioning issues,
  and dive into the details
  to get a better understanding
  of how Anchor Positioning works.
---

{% callout 'note', false %}
Check out our [Winging It](/wingingit/)
conversations about design, frontend,
and backend development.

**Winging It** episode 8: [CSS Anchor Positioning in Practice](/2024/05/30/winging-it-08/)
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
- What are containing blocks?
- Pseudo elements that can be anchors
- DOM order matters for absolute positioned anchors
- Anchoring dialogs and popovers
- Anchors in the Shadow DOM
- Inline styles in browsers that don't support a declaration
- `anchor-scope`
- Recommendation for success
- Ways to improve users' understanding of containing blocks rules
- Coming soon for Anchor Positioning

## Links:

- [Here’s Why Your Anchor Positioning Isn’t Working](/2025/01/29/anchor-position-validity/)
- [Anchor Positioning presentation - Tab Atkins-Bittner](https://xanthir.com/talks/2024-06-07/)

## Demos:

- [Codepen Collection](https://codepen.io/collection/MWWZQe)
