---
title: Take Command with Invokers
episode: 18
tags:
  - CSS
  - HTML
  - Invokers
  - Web Components
author:
  - miriam
  - james
date: 2025-04-17
length: 64 mins
image:
  src: winging-it/winging-it-18.jpg
media:
  - youtube: waip3s52BEA
summary: |
  Learn how to declaratively add behavior
  to buttons with the Invoker Commands API.
  Join James Stuckey Weber and Miriam Suzanne
  for a live conversation
  with special guest Luke Warlow,
  Web Platform Engineer at Igalia.
---

{% callout 'note', false %}
Check out our [Winging It](/wingingit/)
conversations about design, frontend,
and backend development.

**Winging It** episode 11: [Web Components](/2024/08/27/winging-it-11/)
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

- Invokers, and why they are needed
- Controlling popovers with invokers
- Controlling dialog elements with invokers
- Controlling anything with custom invoker events
- Potential future built-in events
- Polyfilling the Invokers API
- What is OpenUI?

## Demos:

- Examples on popover and dialog
  - [Popover](https://codepen.io/jamessw/pen/raaBqrw) -- Porting existing
    popover attributes to `command` and `commandfor`
  - [Dialog](https://codepen.io/jamessw/pen/dPPbgLQ)
  - [Returning a value from a dialog](https://codepen.io/jamessw/pen/qEEWQqL)
- [Custom events](https://codepen.io/jamessw/pen/wBBwQmg)

## Links:

- [Future Invokers Explainer](https://open-ui.org/components/future-invokers.explainer/)
- [Current support](https://developer.mozilla.org/en-US/docs/Web/API/Invoker_Commands_API#browser_compatibility)
- [Invokers polyfill](https://github.com/keithamus/invokers-polyfill)
