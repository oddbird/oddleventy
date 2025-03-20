---
title: CSS Cascade Layers
issue: 21
url: http://eepurl.com/i_NTYw
date: 2025-03-13
tags:
  - CSS
  - Anchor Positioning
  - Typography
length: 3 mins
image:
  src: winging-it/winging-it-1.jpg
summary: |
  Here’s what we’re up to:
  - Revisiting Fluid Type on Winging It with Richard Rutter | March 20, 2025
  - New features for OddContrast
  - CSS Layout Workshop coming in April 2025
  - Custom CSS Functions in the Browser article by Miriam Suzanne
---

{% import "utility.macros.njk" as utility %}

{{ utility.main_action(
  'Subscribe to OddNews »',
  subscribe_url
) }}

## Upcoming Winging It LIVE

[Revisiting Fluid Type](https://www.youtube.com/watch?v=py41Ys-iRvk) with
[Stacy Kvernmo](/authors/stacy), [Miriam Suzanne](/authors/miriam), and
guest Richard Rutter on March 20, 2025.

[Save the date](https://www.youtube.com/watch?v=py41Ys-iRvk)

## OSS Updates

### New Features for OddContrast

If you haven’t checked it out, [OddContrast](/oddcontrast/) is OddBird’s color
format converter, with newer color formats like Oklch, Oklab, and the Display P3
color space. It’s also a color contrast checker to help designers meet WCAG 2
accessibility standards.

- Swap background and foreground colors. Either drag-and-drop or use the button
  located between the two colors.
- A new Show Gamut dropdown menu allows displaying color gamut ranges on the
  color sliders. And we’ve made it more obvious when a color is outside the
  specified gamut.
- Contrast ratios now incorporate foreground color alpha values. Ratios
  displayed are an estimation of contrast when the foreground color is not
  opaque.

### from [James Stuckey Weber](/author/james/)

I reviewed feature changes for the Web Features project and contributed to the
Web DX Community Group. I also contributed a bug fix to the Firefox Dev Tools to
show the offsetParent of fixed position elements if it’s not the viewport. It
should be included in the Firefox 137 release.

{% callout 'note' %}
**CSS Layout Workshop in April**

This April, Miriam will be teaching a workshop about building more resilient and
maintainable web layouts using modern CSS.

Watch for special editions of OddNews this month with free lessons and early
bird tickets.
{% endcallout %}

## Custom CSS Functions in the Browser

by [Miriam Suzanne](/authors/miriam)

There’s been a lot of progress in the CSS Working Group lately, but I want to
draw your attention to a prototype that landed in Chromium ‘Canary’ (v136+)
browsers with the [experimental platform features flag
enabled](https://css-irl.info/how-to-enable-experimental-web-platform-features/).
Author-defined Functions are coming to CSS, and you can start to experiment with
them now!

Back in 2009 I was using Natalie Downe's responsive layout technique. This was
before media queries, or Responsive Web Design(TM), or `calc()`, or modern
layout methods like flexbox and grid. The process involved a lot of math. It
wasn’t complicated math – a single division problem – but it was repeated for
every element in the layout. At its simplest (not accounting for gutters), if we
want to span 3 out of 10 columns using percentages, we need to divide those
numbers and multiply by 100%. Tired of doing that over and over, then
copy-pasting the results into my CSS, I installed Sass.

Soon, we'll be able to solve these problems directly in CSS, without any
third-party tools or preprocessing. Writing our own functions will allow us to
take some repetitive bit of logic, give it a meaningful name, and reuse it
anywhere we need. The simplest possible CSS function is something like this:

```css
/* define the function */
@function --always-blue() { result: blue; }

button {
  /* call the function */
  background: --always-blue();
}
```

That’s not the most useful function (unless you need a longer way to write
`blue`) but it demonstrates the syntax. Like custom properties, a function name
has to start with two dashes. But there are also a few differences:

- The function isn’t defined on elements (like `:root`) but exists globally
- The function is called directly, without wrapping it in `var()`

To make it more useful, let’s add some logic. I think one of the most exciting
things we can do is return conditional results that would otherwise require
nested at-rules:

```css
@function --media-scheme() {
  result: light;
  @media (prefers-color-scheme: dark) { result: dark; }
}

:root {
  --color-scheme: --media-scheme();
}
```

Notice that we have two `result` descriptors, but we will still get a single
result from the function. In many languages, like JavaScript, we might expect to
get the first valid result every time – but this is CSS, where the last valid
result takes precedence. If the user has a dark-mode preference set, this
function will return `dark` – otherwise it will return the default `light`
scheme value.

We can also add call-time parameters that act like local custom properties, only
available inside the function:

```css
@function --transparent(--color, --alpha) {
  result: oklch(from var(--color) l c h / var(--alpha);
}
```

We can define `--color` and `--alpha` each time the function is called, and
those values will get slotted into a ‘relative color syntax’ to change the alpha
opacity of our color:

```css
button {
  background: --transparent(blue, 0.5); /* blue at half opacity */
}
```

We can also provide a default value for a parameter, if we want to make it
optional. Let’s choose a default `--alpha` that is still mostly-opaque, but a
little bit see-through:

```css
@function --transparent(--color, --alpha: 0.8) {
  result: oklch(from var(--color) l c h / var(--alpha);
}

dialog {
  background: --transparent(black); /* black at default 0.8 opacity */
}
```

Ideally we’re able to solve two problems when we create these functions: one is
making our code less repetitive, but the other is making it more meaningful. In
this case we can avoid writing the full relative color syntax when we only want
to change the opacity of a color. The result is a syntax that’s more targeted to
our goals, and highlights the most important information.

There’s a lot more we can do with CSS functions, and Bramus has [a couple
articles](https://www.bram.us/2025/02/18/css-at-function-and-css-if/) that go
into more detail. I’ve also been playing in CodePen with more
[color-manipulation](https://codepen.io/miriamsuzanne/pen/dPyzLEJ) and
[fluid-type functions](https://codepen.io/miriamsuzanne/pen/ogNobGx).

What functions would be most useful to you? Let us know what you come up with on
[Mastodon](https://front-end.social/@OddBird) or
[BlueSky](https://bsky.app/profile/oddbird.dev), we’d love to see your demos.

{% callout 'note' %}
**We need support.**

For years, OddBird has been contributing to open web tools & standards, with a
focus on CSS and related platform features at the W3C. But that work takes
resources, making it hard for independent contributors like us to stay involved.

If you appreciate what we’re doing, you (or your company) can sponsor our work
directly or hire us to develop something you need.

- [Sponsor us.](https://opencollective.com/oddbird-open-source) We display
  sponsor logos and avatars on our website.
- [Hire us](/contact/) to develop the Anchor Positioning polyfill or a
  language/tool you rely on.
{% endcallout %}
