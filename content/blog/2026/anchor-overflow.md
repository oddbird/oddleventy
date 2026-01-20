---
title: Better Anchor Positioning with position-area
sub: It's not just a shorthand for anchor()
date: 2026-01-09
image:
  src: blog/2025/anchor-grid.jpg
  alt: >
    A hand with painted nails
    placing a white square of paper
    into a 9 by 9 grid.
author: james
sponsors: true
tags:
  - Article
  - Anchor Positioning
  - CSS
related_tag: Anchor Positioning
summary: |
  When you use `position-area`, the most obvious impact is that you are setting an
  area in which to place the anchored element. But what happens when the area
  isn't the exact size as the element you're trying to place?
---

<style>
  /* inline-demo styles */
  inline-demo{
    border: medium solid black;
    position: relative;
    margin-block: var(--gutter);
    --code-stripe-1: light-dark(
      oklch(from var(--highlight) .99 .1 h),
      oklch(from var(--highlight) .01 .1 h));
    --code-stripe-2: light-dark(
      oklch(from var(--highlight) .97 .1 h),
      oklch(from var(--highlight) .1 .1 h));

    &::part(editable-style){
      display: block;
      white-space: pre;
      font-family: monospace;
      font-size: var(--code);
      padding: var(--shim);
      background: repeating-linear-gradient(
        45deg,
        var(--code-stripe-1),
        var(--code-stripe-1) 10px,
        var(--code-stripe-2) 10px,
        var(--code-stripe-2) 20px
      );
    }
  }
</style>
<style>
  /* Styles for demos in this article */
  inline-demo{
    &::part(slider){
      width: 100%;
      margin-block-start: 3em;
    }
    &::part(slider)::-webkit-slider-thumb {anchor-name: --thumb;}
    &::part(label){
      position: absolute;

      background: var(--accent);
      color: var(--bg);
      padding: var(--half-shim);
    }
  }
</style>

{% callout 'note', false %}

**A note on the demos**

These demos use a range input as an easy movable element. While movement isn't
required for anchor positioning, it's useful for demos to show how it works in a
variety of situations. Unfortunately, Firefox doesn't support yet using the
thumb as an anchor, and there is an [open
bug](https://bugzilla.mozilla.org/show_bug.cgi?id=1993699).

Also, the CSS shown with each demo is editable, so play around to see what's going on!
{% endcallout %}

Anchor positioning handles this by applying self alignment values to position
the element close to the anchor. You likely are familiar with these values from
using them in grid layouts.

<inline-demo>
 <template shadowrootmode="open">
 <style>
  #root{
    block-size: 5em;
    display: grid;
  }
  </style>
  <style part="editable-style" contenteditable>[part="label"]{
  align-self: start;
  justify-self: end;
}</style></code>
  <div id="root">
 <div part="label">Move me by changing the *-self values</div>
 </div>
 </template>
</inline-demo>

There are many possible values for `position-area`, but they are essentially
different ways of specifying which areas you want to pick within a 3x3 grid. On
each axis, you have a start, center, and end area. You can pick any combination
except for start and end without the center, as it has to be contiguous.

For an in-depth look at `position-area`, my [article on
`position-area`](/2025/02/25/anchor-position-area/).

There are just 3 rules that determine what alignment is used. For each axis, if
`position-area` only specifies the `center` track, then the alignment is
`center`.

<inline-demo>
  <template shadowrootmode="open">
    <style>
    ::-webkit-slider-thumb {anchor-name: --thumb;}
    [part="label"]{ position-anchor: --thumb; }
  </style>
    <style part="editable-style" contenteditable>[part="label"]{
  position-area: center center;
}</style>
    <input type="range" part="slider"></input>
    <div part="label">place-self: center</div>
  </template>
</inline-demo>

If `position-area` specifies all three sections in the axis, then the alignment
is `anchor-center`.

<inline-demo>
  <template shadowrootmode="open">
  <style>
    ::-webkit-slider-thumb { anchor-name: --thumb; }
    [part="label"]{ position-anchor: --thumb; }
  </style>
  <style part="editable-style" contenteditable>[part="label"]{
  position-area: block-start;
}</style>
    <input type="range" part="slider"></input>
    <div part="label">justify-self: anchor-center;</div>
  </template>
</inline-demo>

Wait- what is `anchor-center`? It's a new value for the self alignment
properties that aligns to the center of the anchor element. This differs from
`center`, which aligns to the center of the new containing block created by
`position-area`.

The final case for `position-area` is that it specifies just 2 of the sections
on the axis. In other words, it selects one edge, and perhaps the center, but
not the other edge. In this situation, the alignment is whatever puts it closest
to the anchor.

<inline-demo>
  <template shadowrootmode="open">
    <style>
      ::-webkit-slider-thumb { anchor-name: --thumb; }
      [part="label"]{ position-anchor: --thumb; }
    </style>
    <style part="editable-style" contenteditable>[part="label"]{
  position-area: start;
}</style>
    <input type="range" part="slider"></input>
    <div part="label">place-self: end</div>
  </template>
</inline-demo>

{% callout 'note', false %}

Of course, the spec isn't just "whatever puts it closest". The spec says that
the alignment is "toward the non-specified side track". So if you specify "start
 or "start and center", then the alignment will be `end`, and if you specify
 "end" or "end and center", then the alignment will be `start`.

While I find this to be technically useful, it doesn't really help my mental
model of how this works, so I just think of it as "whatever is closest".

{% endcallout %}

## Overriding the defaults

But these are just the default values, and you can choose to override them. I haven't seen compelling use cases for this, but I'm guessing someone will come up with a use case. I'm guessing `stretch` will be the most useful override.

<inline-demo>
  <template shadowrootmode="open">
   <style>
    ::-webkit-slider-thumb { anchor-name: --thumb; }
    [part="label"]{ position-anchor: --thumb; }
  </style>
  <style part="editable-style" contenteditable>[part="label"]{
  align-self: stretch;
}</style>
    <input type="range" part="slider"></input>
    <div part="label">Fascinating info but longer</div>
  </template>
</inline-demo>

## Overflowing the containing block

You may have noticed that by default, the label stays within its containing
block, even if that means that it no longer positioned right at the anchor's
center.

<inline-demo>
  <template shadowrootmode="open">
   <style>
    ::-webkit-slider-thumb { anchor-name: --thumb; }
    [part="label"]{ position-anchor: --thumb; }
  </style>
  <style part="editable-style" contenteditable>[part="label"]{
}</style>
    <input type="range" part="slider"></input>
    <div part="label">Fascinating info but longer</div>
  </template>
</inline-demo>

In some cases, there isn't a compelling reason that the label can't overflow its
containing block. On this page, the label is small, and the containing block has
healthy margins (except on small screens). In this case, we can specify that we
want `unsafe` alignment.

<inline-demo>
  <template shadowrootmode="open">
   <style>
    ::-webkit-slider-thumb { anchor-name: --thumb; }
    [part="label"]{ position-anchor: --thumb; }
  </style>
  <style part="editable-style" contenteditable>[part="label"]{
  justify-self: unsafe anchor-center;
}</style>
    <input type="range" part="slider"></input>
    <div part="label">Fascinating info but longer</div>
  </template>
</inline-demo>

You may think that `safe` is the opposite of `unsafe`, but that's not quite the
case. `safe` alignment is only safe on the start-side, meaning this demo
overflows on the right side, but doesn't on the left side.

<inline-demo>
  <template shadowrootmode="open">
   <style>
    ::-webkit-slider-thumb { anchor-name: --thumb; }
    [part="label"]{ position-anchor: --thumb; }
  </style>
  <style>
    ::-webkit-slider-thumb {anchor-name: --thumb;}
  [part="label"]{position-anchor: --thumb;}
  </style>
    <style part="editable-style" contenteditable>[part="label"]{
  justify-self: safe anchor-center;
}</style>
    <input type="range" part="slider"></input>
    <div part="label">Fascinating info but longer</div>
  </template>
</inline-demo>

So:
- unspecified/normal stops overflow on both sides
- `safe` stops overflow only on the start side
- `unsafe` allows overflow on both sides

I find this confusing, because specifying `safe` may make it less safe,
depending on the situation. In this case, the area specified by `position-area`
includes the `block-end`, so the implicit `justify-self` value is `start`. By
specifying `safe start` instead, the label overflows on the end side. Remove
`safe` to see the difference.

<inline-demo>
  <template shadowrootmode="open">
   <style>
    ::-webkit-slider-thumb { anchor-name: --thumb; }
    [part="label"]{ position-anchor: --thumb; }
  </style>
  <style part="editable-style" contenteditable>[part="label"]{
  position-area: block-start inline-end;
  justify-self: safe start;
  inline-size: max-content;
}</style>
    <input type="range" part="slider"></input>
    <div part="label">Fascinating info but long enough to overflow</div>
  </template>
</inline-demo>

TODO: Improve wrap-up
The [CSS spec](https://drafts.csswg.org/css-align/#auto-safety) says that `the
default behavior lies somewhere between safe and unsafe, and also varies by
layout mode.`

While `safe` and `unsafe` behavior has been part of grid and flex layouts for
quite some time, I'm guessing many authors (including me) will encounter it for
the first time while using anchor positioning.
