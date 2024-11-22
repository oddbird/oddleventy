---
title: Baseline and Web Features
episode: 13
tags:
  - CSS
author:
  - miriam
  - james
date: 2024-11-19
length: 57 mins
image:
  src: winging-it/winging-it-13.jpg
media:
  - youtube: 3dLbTHKZHlI
summary: |
  What happens when you set out
  to categorize every API
  and property of the web?
  OddBird has been documenting CSS
  for the Web Features project.
  Join us as we explore some fascinating rabbit trails, edge cases, and insights
  into the web platform
  that we've encountered along the way.
---
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
- What is Web Features?
  - [Web Features on GitHub](https://github.com/web-platform-dx/web-features)
  - [Patrick Brosset answers questions and provides context](https://bsky.app/profile/patrickbrosset.com/post/3lbensuvnx22z)
- What is Baseline?
- How are they used?
  - [Web Features Explorer](https://web-platform-dx.github.io/web-features-explorer/release-notes/)
  - [Caniuse](https://caniuse.com/?search=relative-colors)
  - MDN: [radial-gradient()](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/radial-gradient), [attr()](https://developer.mozilla.org/en-US/docs/Web/CSS/attr)
  - [&lt;baseline-status&gt; web component](https://github.com/web-platform-dx/baseline-status)
    - Example usage: [The Lowdown on Dropdowns in HTML & CSS](https://zeroheight.com/blog/the-lowdown-on-dropdowns-in-html-css/) by David Darnes
  - [Keeping an eye on changes to MDN’s Browser Compatibility Data](https://bcd-watch.igalia.com/)
- What is OddBird doing?
- What challenges have we encountered?
  - [a11y Support](https://a11ysupport.io/)
- Fun things that have surfaced
  - [CSS Speech](https://drafts.csswg.org/css-speech-1/)
  - [Why We Need CSS Speech](https://tink.uk/why-we-need-css-speech/)
- What’s next in Web Features?
  - [bl2bl](https://github.com/tonypconway/bl2bl): A module for turning Baseline thresholds into browserslist configurations.
