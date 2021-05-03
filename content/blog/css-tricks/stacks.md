---
title: Using Custom Property “Stacks” to Tame the Cascade
canonical: https://css-tricks.com/using-custom-property-stacks-to-tame-the-cascade/
date: 2020-06-22
author: miriam
card: large
tags:
  - Link
  - CSS
  - Sass
  - Custom Properties
image:
  src: blog/2020/stack.jpg
  position: bottom
summary: |
  Since the inception of CSS in 1994, the cascade and inheritance have defined
  how we design on the web. Both are powerful features, but as authors we’ve had
  very little control over how they interact. Selector specificity and source
  order provide some minimal “layering” control, without a lot of nuance – and
  inheritance requires an *unbroken lineage*. **Now, CSS Custom Properties allow
  us to manage and control both cascade and inheritance in new ways.**
---

{% import 'embed.macros.njk' as embed %}

{{ embed.codepen(
  id='GRpmOjr',
  title='Custom Property Cascades (sass function)',
  user='miriamsuzanne'
) }}
