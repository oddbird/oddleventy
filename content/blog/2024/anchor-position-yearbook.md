---
title: Anchor Positioning Is Disruptive
sub: New layouts will be possible
date: 2024-11-18
image:
  src: blog/2024/boatknot.jpg
  alt: >
    A symmetrical knot with thick rope lying on weathered wood.
author: james
sponsors: true
tags:
  - Article
  - Open Source
  - Anchor Positioning
  - CSS
  - Polyfill
summary: |
  The more I play with it, the more convinced I am that anchor positioning is
  going to unlock some surprising new layouts.
---

{% import 'embed.macros.njk' as embed %}

Many of the initial examples and use cases for anchor positioning are
simplifying existing possibilities, and -- don't misunderstand me -- anchor
positioning will simplify how dropdown menus are implemented significantly.

But that's just the start.

I first got a glimpse at the possibilities while watching the [Anchor
Positioning session](https://www.youtube.com/watch?v=p18LhnYNkDQ) at CSS Day
2024 from Tab Atkins-Bittner, an editor of the [CSS
spec](https://drafts.csswg.org/css-anchor-position-1/). Hidden in Tab's
presentation on anchor positioning was the concept of using an
anchored item as an anchor to ensure that anchored elements don't overlap.

It's a simple but powerful trick -- in the demo, they are building side notes,
with words in a paragraph of text that are anchors for some additional content
displayed inline to the side. `top: max(anchor(--word top), anchor(--note
bottom))` will set the `top` of the note to the higher value of the top of the
anchoring word OR the bottom of the note above it.

{{ embed.figure(
  data=[{
    img: 'blog/2024/anchor-comments.png',
    alt: 'screenshot of text with comments on side, aligned with related words'
  }],
  caption="A demo from Tab Atkins-Bittner's [slides](https://tabatkins.com/talks/2024-06-07/) from CSS Day 2024"
) }}

This concept unlocks a lot of possibilities that I don't think were easy to
achieve before.

## Yearbook Photo Page
Imagine a high school yearbook's photo spread. There are rows of headshots, and
to the side of each row, there is a column with the names of each person in that
row. It's not a terribly difficult layout for print, but there are a few
challenges to implement it in HTML.

{{ embed.img(
  src='blog/2024/anchor-position-yearbook-layout.png',
  alt='A rough wireframe of photos and aligned names'
)}}

First, it would be a challenge to have the name and the photo of each person
together in the HTML. Also, if it needed to be responsive, with different
numbers of photos per row, I'd likely have to have multiple layouts defined in
CSS, and potentially duplicate the items in the HTML, and conditionally show
them based on some magic number.

When working with anchor positioning, I've found it helpful to borrow the
concept of constraints from mobile development, where you describe your layout
in terms of relationships between elements. So, let's start by defining our
constraints:

1. The left side of the names should be `1em` to the right of the photos.
2. Each name should be in the same row as its photo, starting at the top.
3. Each name should be below the name preceding it.

This is all possible with anchor positioning, and we can even have the image and
name inside of the same `<li>`.

```html
<ul>
  <li>
    <img src="photo1.jpg" />
    <h2>Name 1</h2>
  </li>
  <li>
    <img src="photo2.jpg" />
    <h2>Name 2</h2>
  </li>
  ...
</ul>
```

We'll make the `<ul>` the main photo area, use `flex-wrap: wrap` to fit as many
photos in a row as possible, and make it an anchor by giving it `anchor-name:
--photos`.

Then we can place the `<h2>` titles to meet the first constraint.

```css
h2 {
  position: absolute;
  left: calc(anchor(--photos right) + 1em);
}
```

That's right -- we don't need to first figure out how many pixels from the left
viewport edge the photos are, we can just declaratively describe what we want.
"Place the left edge at the sum of photos' right side and `1em`".

We can then satisfy the second constraint, that each name should be in the same
row as its photo.

```css
li {
  anchor-scope: --photo;
}
h2 {
  top: anchor(--photo top);
}
```

The `top` rule simply aligns the top of the name with the top of the photo. The
`anchor-scope` is important here. By default, if there are multiple elements
that have the same `anchor-name`, the last element in the DOM will be selected.
Setting `anchor-scope` on a parent element means that the anchored element won't
look outside of the parent element for an anchor. This means the `<h2>` will be
aligned with the top of its photo.

But wait -- we have one more constraint. At this point, all the names in a row are
layered on top of each other. We want them to vertically stack instead.

```css
h2 {
  anchor-name: --title;
  top: max(anchor(--photo top), anchor(--title bottom, 0));
}
```

Now, the top of the name will be either the top of the photo OR the bottom of
the title above it, whichever is greater (or further down the page). That's
because the anchoring element has to come **before** the anchored element, which
means the reference to `anchor(--title)` will be the name above it.

I'd recommend [viewing this on Codepen](https://codepen.io/jamessw/pen/BaXqgWd)
so you can resize the demo. I've added a short transition to the `top` property
so you can see how the names adjust as the names above them move.

{{ embed.codepen(
  id='BaXqgWd',
  title='CSS Anchor Positioning - Yearbook layout',
  user='jamessw'
) }}

As an added bonus, because the photo and name are in the same `<li>`, we can add
hover effects so that if one is hovered, both parts are hovered. If the item is
a link they can be inside the same `<a>`.

## Wrap-up

What new possibilities for anchor positioning are you excited about? Let us know
by sending us a message on [Mastodon](https://front-end.social/@oddbird) or
[BlueSky](https://bsky.app/profile/oddbird.dev).

And if you're excited to use anchor positioning before it becomes baseline,
check out our [polyfill](https://github.com/oddbird/css-anchor-positioning). It
supports enough of the anchor positioning spec to do most things.

There are two ways to help us keep this work sustainable and centered on your
needs as a developer!

1. [Sponsor us](https://opencollective.com/oddbird-open-source). We display
   sponsor logos and avatars here on our [website](#open-source-sponsors) and
   offer [other fun perks](https://github.com/sponsors/oddbird).
2. [Hire us](/contact/) to develop the Anchor Positioning polyfill or another
   OSS language/tool you rely on. Our client work also helps fund our open
   source work like this polyfill, so get in touch with us if you have any web
   development needs.
