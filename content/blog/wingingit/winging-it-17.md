---
title: Revisiting Fluid Type
episode: 17
tags:
  - CSS
  - Fonts
  - Layout
  - Typography
author:
  - miriam
  - stacy
date: 2025-03-20
length: 57 mins
image:
  src: winging-it/winging-it-17.jpg
media:
  - youtube: py41Ys-iRvk
summary: |
  Miriam's been asking questions
  about fluid typography,
  and how a website design should plan for
  (and respond to) user preferences.
  And we're not the only ones thinking about it!
  This month we're going to
  continue the conversation,
  with the experts
  from [Clearleft](https://clearleft.com/)
  behind excellent resources
  like [Utopia.fyi](https://utopia.fyi/)
  and [WebTypography.net](https://webtypography.net/]).
---

{% callout 'note', false %}
Check out our [Winging It](/wingingit/)
conversations about design, frontend,
and backend development.

**Winging It** episode 15: [Relative Units & Typography](/2025/01/24/winging-it-15/)
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

- How do we balance author and user intents?
- Adrian Roselli’s "ultimate ideal" base font-size
- Possible solutions/ideas to achieve desired font-size (per site)
- What does an `em` represent?
- Common approach to fluid type with `vi` & `clamp()`
- Utopia helps, and catches potential issues with `vi`
- How can designers work with fluid typography in traditional design tools

## Links:

- [Reimagining Fluid Typography](/2025/02/12/fluid-type/) by Miriam Suzanne
- [In defence of fluid typography](https://clagnut.com/blog/2441/) by Richard Rutter
- [Winging It 15 with Alan Stearns](/2025/01/24/winging-it-15/)
- [The Ultimate Ideal Bestest Base Font Size That Everyone Is Keeping a Secret, Especially Chet](https://adrianroselli.com/2024/03/the-ultimate-ideal-bestest-base-font-size-that-everyone-is-keeping-a-secret-especially-chet.html) by Adrian Roselli
- [Utopia.fyi](https://utopia.fyi/)
- [Utopia Figma Plugin](https://www.figma.com/community/plugin/951884648789524000/utopia-fluid-type-space-calculator)
- [Use of ch unit considered inappropriate (in certain circumstances)](https://clagnut.com/blog/2432/) by Richard Rutter
- [Zoom, zoom, and zoom](/2024/07/09/zoomies/) by Miriam Suzanne
- [Support Logical Shorthands in CSS](/2025/03/20/logical-shorthand/) by Miriam Suzanne
