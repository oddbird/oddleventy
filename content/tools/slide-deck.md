---
title: Slide-Deck
sub: Customizable web presentations
feature: true
author: oddbird
oss: creator
date: 2023-12-22
index: Slide-Deck
image:
  src: talks/mia-smashing19-rad.jpg
  alt: >
    Miriam speaking at Smashing Conf NY
    in a mustard yellow leather jacket
    and lightning-bolt pink-blue-white earrings
  position: top
links:
  site: https://slide-deck.netlify.app/
  source: https://github.com/oddbird/slide-deck/
  docs: https://github.com/oddbird/slide-deck?tab=readme-ov-file#slide-deck
summary: |
  A light-weight, stand-alone web component
  for converting semantic HTML
  into fully customizable
  and responsive web presentations.
  It shouldn't be a struggle
  to highlight code, embed live demos,
  share slides on the web,
  or adapt to different room conditions on the fly.
---

This is the tool that Miriam
and other OddBirds use
for talks and workshops around the world --
designed for flexibility and customization --
and we're constantly making improvements.

```html
<script type="module" src="slide-deck.js"></script>

<slide-deck>
  <header><h1>This is a slide show</h1></header>
  <section>
    <h2>Each child is a slide</h2>
  </section>
  <section>
    <h2>Remote Control</h2>
    <ul>
      <li>Works with common remotes</li>
      <li>Familiar keyboard shortcuts</li>
      <li>Position syncs across multiple tabs</li>
    </ul>
  </section>
</slide-deck>
```

- Slides can be
  [generated from static-site data](https://github.com/oddbird/eleventy-plugin-slide-deck)
  or built by hand
- Accessible HTML output can be published to the open web
- Embed live code and demos, with syntax highlighting
- Responsive to different contexts and aspect ratios
- Zoom in or out based on presentation context
- Use the built-in slideshow, speaker, and grid views…
  or design your own!
- Control presentations with a remote, or a keyboard
- Follow along in a second tab, as a confidence monitor
- Use our theme, or design your own

Our [Eleventy Plugin](https://github.com/oddbird/eleventy-plugin-slide-deck)
provides a number of pre-built slide types --
for titles, images, screenshots, code samples, live demos,
and embeds from Codepen, Caniuse, or Caseline.

In the future, we also plan to support:

- Multiple internal 'steps' for each slide
- Internal linking between slides
- Auto-play videos
