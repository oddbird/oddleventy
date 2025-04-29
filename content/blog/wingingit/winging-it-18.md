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

- What are invokers?
- Why are they needed?
- Source
- What are the implications for accessibility?
- How are you verifying accessibility?
- What’s the plan for existing popover commands?
- What are potential future built-in events?
- Is it possible to scope the targets, rather than having unique IDs?
- Can you send a command to multiple targets with a single click?
- What is OpenUI? What is Igalia?


## Demos:
- Examples on popover and Dialog
  - [Popover](https://codepen.io/jamessw/pen/raaBqrw) Using existing popover* commands, port over to command*
  - [Dialog](https://codepen.io/jamessw/pen/dPPbgLQ) Add in the command* attributes
  - [Return value](https://codepen.io/jamessw/pen/qEEWQqL)

- Custom events
  - [Final](https://codepen.io/jamessw/pen/wBBwQmg)
  - [Live](https://codepen.io/jamessw/pen/JooooPV)


## Links:
- [Future Invokers Explainer](https://open-ui.org/components/future-invokers.explainer/)
- [Current support](https://developer.mozilla.org/en-US/docs/Web/API/Invoker_Commands_API#browser_compatibility)
- [Invokers Polyfill](https://github.com/keithamus/invokers-polyfill)
