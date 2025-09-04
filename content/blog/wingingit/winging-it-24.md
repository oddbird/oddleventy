---
title: Mixins & Functions to Streamline CSS
episode: 24
tags:
  - CSS
  - CSS Mixins & Functions
  - CSSWG
author:
  - miriam
  - stacy
date: 2025-08-27
length: 59 min
image:
  src: winging-it/winging-it-24.jpg
media:
  - youtube: ER4APBNgV88
summary: |
  The CSS Working Group
  got together in August
  to discuss a range of old and new issues.
  The following week,
  Miriam Suzanne and Stacy Kvernmo
  chatted with CSS expert
  [Roma Komarov](https://kizu.dev/)
  about how to create
  reusable and more flexible CSS
  using mixins and functions,
  what happened in the CSSWG meetings,
  and what is coming in CSS!
---

{% callout 'note', false %}
Check out our [Winging It](/wingingit/)
conversations about design, frontend,
and backend development.
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

## What We Cover:

### CSS Mixins
- What are they?
- How do CSS mixins differ from Sass mixins?
- How to use CSS mixins
- Which browsers currently support CSS mixins?

### CSS Functions
- What are they?
- How to use CSS functions
- Available in Chromium with the experimental features flag

### CSSWG meeting
- Masonry Display
- Color (gamut-mapping proposal agreement)
- How mixins interact with layers (mixin in a conditional)

## Links:

- [Functional Capturing](https://blog.kizu.dev/functional-capturing/)
- [Indirect Cyclic Conditions](https://kizu.dev/indirect-cyclic-conditions/)
- [Mixins & Functions](https://css.oddbird.net/sasslike/mixins-functions/)
- [W3C CSS Functions and Mixins Module](https://www.w3.org/TR/css-mixins-1/)
- [Mixins Browser Support: Chrome](https://www.chromium.org/developers/how-tos/run-chromium-with-flags/) (CSSMixins flag)
- [Functions Browser Support Chrome with Experimental Web Platform Features Flag](https://slides.oddbird.net/mixins/cssday/#slide-30)
