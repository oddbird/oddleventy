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
  `position-area` might be my favorite part of the CSS Anchor Positioning spec,
  with a ton of features packed in to make things just... work.
  But there's no magic here, just a few key parts that work well.
---


<style>
  inline-demo{
    border: medium solid black;
    position: relative;
    margin-block: var(--gutter);
    &::part(label){
      background: var(--accent);
      color: var(--bg);
    }
    &::part(editable-style){
      display: block;
      white-space: pre;
      font-family: monospace;
    }
    &::part(slider){
      width: 100%;
      margin-block-start: 3em;
      &::-webkit-slider-thumb {anchor-name: --thumb;}
    }
    &::part(label){
      position: absolute;
      position-area: top;
    }
  }
</style>

When you use `position-area`, the most obvious impact is that you are setting an area in which to place the anchored element. It's easy to forget that the area will likely not be the exact size as the element you're trying to place.

Anchor positioning handles this by applying self alignment values to position the element close to the anchor. You likely are familiar with these values from using them in grid.

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
  justify-self: center;
}</style>
  <div id="root">
 <div part="label">Move me by changing the *-self values</div>

 </div>
 </template>
</inline-demo>

The rules are simple. For each axis, if `position-area` only specifies the `center` track, then the alignment is `center`.

<inline-demo>
  <template shadowrootmode="open">
  <style>
    ::-webkit-slider-thumb {anchor-name: --thumb;}
  [part="label"]{position-anchor: --thumb;}
  </style>
    <style part="editable-style" contenteditable>[part="label"]{
  position-area: center center!important;
  // Implicit:
  // justify-self: center;
  // align-self: center;
}</style>
    <input type="range" part="slider"></input>
    <div part="label">Fascinating info but longer</div>
  </template>
</inline-demo>

If `position-area` specifies all three sections in the axis, then the alignment is `anchor-center`.

<inline-demo>
  <template shadowrootmode="open">
  <style>
    ::-webkit-slider-thumb {anchor-name: --thumb;}
  [part="label"]{position-anchor: --thumb;}
  </style>
    <style part="editable-style" contenteditable>[part="label"]{
  justify-self: anchor-center;
}</style>
    <input type="range" part="slider"></input>
    <div part="label">Fascinating info but longer</div>
  </template>
</inline-demo>

todo: note about how anchor-center is different and why it's needed.

## Overriding the defaults

But these are just the default values, and you can choose to override them. I haven't seen compelling use cases for this, but I'm guessing someone will come up with a use case. I'm guessing `stretch` will be the most useful override.

todo: overriding defaults demo.

## Overflowing

In this specific case, there isn't a compelling reason that the label can't overflow its containing block. The label is small, and the containing block has healthy margins. In this case, we can specify that we want `unsafe` alignment.

<inline-demo>
  <template shadowrootmode="open">
  <style>
    ::-webkit-slider-thumb {anchor-name: --thumb;}
  [part="label"]{position-anchor: --thumb;}
  </style>
    <style part="editable-style" contenteditable>[part="label"]{
  justify-self: unsafe anchor-center;
}</style>
    <input type="range" part="slider"></input>
    <div part="label">Fascinating info but longer</div>
  </template>
</inline-demo>

You may think that `safe` is the opposite of `unsafe`, but that's not quite the case. `safe` alignment is only safe on the start-side, meaning this demo overflows on the right side, but doesn't on the left side.

<inline-demo>
  <template shadowrootmode="open">
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

(perhaps a second part?)
You may want an arrow that points from the label to the thumb, and we can use anchor positioning for that.

[demo]

But what if we want to prevent the label from going all the way to the edges? We can do that with a `margin-inline`, but the arrow keeps on going, which isn't what we want.

[demo]

So what we want is the arrow to be ideally on the thumb's center, but with a lower bound of the label's left side, and an upper bound of the label's right side.

That sounds like a clamp function, so let's try it.

[demo]

Why does this work? Well, the anhored element is `position: fixed`, meaning it's positioned relative to the viewport. Anchor functions resolve to a length, and in this case, it's the length from the edge of the viewport to the various edges we specify.

[graphic]
