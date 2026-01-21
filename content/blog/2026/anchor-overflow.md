---
title: Handling overflow with anchor positioning
sub: What is safer than safe?
date: 2026-01-21
image:
  src: blog/2026/anchor-overflow.jpg
  alt: >
    A small blue house
    perched precariously,
    overhanging the edge of a concrete base.
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
  inline-demo {
    border: medium solid var(--text);
    position: relative;
    margin-block: var(--gutter);
    --code-stripe-1: oklch(from var(--highlight) .99 .1 h);
    --code-stripe-2: oklch(from var(--highlight) .97 .1 h);

    &::part(editable-style) {
      display: block;
      white-space: pre;
      font-family: monospace;
      font-size: var(--code);
      padding: var(--shim);
      color: black;
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
  inline-demo {
    &::part(slider) {
      width: 100%;
      margin-block-start: 3em;
    }

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
variety of situations. Unfortunately, Firefox doesn't yet support using the
thumb as an anchor, and there is an [open
bug](https://bugzilla.mozilla.org/show_bug.cgi?id=1993699).

Also, the CSS shown with each demo is editable, so play around to see what's
going on!

{% endcallout %}

Anchor positioning handles this by applying self alignment values to position
the element close to the anchor. You likely are familiar with these values from
using them in grid layouts.

<inline-demo>
  <template shadowrootmode="open">
    <style>
      #root {
        block-size: 5em;
        display: grid;
      }
    </style>
    <style part="editable-style" contenteditable>[part="label"] {
  align-self: start;
  justify-self: end;
}</style>
    <div id="root">
      <div part="label">Move me by changing the *-self values</div>
    </div>
  </template>
</inline-demo>

There are many possible values for `position-area`, but they are essentially
different ways of specifying which areas you want to pick within a 3x3 grid. On
each axis, you have a start, center, and end area. You can pick any combination
except for start and end without the center, as it has to be contiguous.

For an in-depth look at `position-area`, check out my [article on
`position-area`](/2025/02/25/anchor-position-area/).

## Alignment rules

There are just 3 rules that determine what alignment is used, based on the value
of the `position-area` that you specified.

### Rule #1: center

For each axis, if `position-area` only specifies the `center` track, then the
alignment is `center`.

<inline-demo>
  <template shadowrootmode="open">
    <style>
      ::-webkit-slider-thumb {
        anchor-name: --thumb;
      }
      [part="label"] {
        position-anchor: --thumb;
        pointer-events: none;
        opacity: 0.8;
      }
    </style>
    <style part="editable-style" contenteditable>div {
  position-area: center center;
}</style>
    <input type="range" part="slider" />
    <div part="label">place-self: center</div>
  </template>
</inline-demo>

### Rule #2: anchor-center

If `position-area` specifies all three sections in the axis, then the alignment
is `anchor-center`.

<inline-demo>
  <template shadowrootmode="open">
    <style>
      ::-webkit-slider-thumb {
        anchor-name: --thumb;
      }
      [part="label"] {
        position-anchor: --thumb;
      }
    </style>
    <style part="editable-style" contenteditable>div {
  position-area: block-start;
}</style>
    <input type="range" part="slider" />
    <div part="label">justify-self: anchor-center</div>
  </template>
</inline-demo>

Wait -- what is `anchor-center`? It's a new value for the self alignment
properties that aligns to the center of the anchor element. This differs from
`center`, which aligns to the center of the new containing block created by
`position-area`.

### Rule #3: everything else

The final case for `position-area` is that it specifies just two of the sections
on the axis. In other words, it selects one edge, and perhaps the center, but
not the other edge. In this situation, the alignment is whatever puts it closest
to the anchor.

<inline-demo>
  <template shadowrootmode="open">
    <style>
      ::-webkit-slider-thumb {
        anchor-name: --thumb;
      }
      [part="label"] {
        position-anchor: --thumb;
      }
    </style>
    <style part="editable-style" contenteditable>div {
  position-area: start;
}</style>
    <input type="range" part="slider" />
    <div part="label">place-self: end</div>
  </template>
</inline-demo>

{% callout 'note', false %}

Of course, the spec isn't just "whatever puts it closest". The spec says that
the alignment is "toward the non-specified side track". So if you specify
"start" or "start and center", then the alignment will be `end`, and if you
specify "end" or "end and center", then the alignment will be `start`.

While I find this to be technically useful, it doesn't really help my mental
model of how this works, so I just think of it as "whatever is closest".

{% endcallout %}

## Overriding the defaults

But these are just the default values, and you can choose to override them. I
haven't seen compelling use cases for this, but I'm guessing someone will come
up with one. Probably `stretch` will be the most useful override.

<inline-demo>
  <template shadowrootmode="open">
    <style>
      ::-webkit-slider-thumb {
        anchor-name: --thumb;
      }
      [part="label"] {
        position-anchor: --thumb;
        position-area: block-start;
      }
    </style>
    <style part="editable-style" contenteditable>div {
  align-self: stretch;
}</style>
    <input type="range" part="slider" />
    <div part="label">Fascinating info but longer</div>
  </template>
</inline-demo>

## Overflowing the containing block

A common use case for anchor positioning is adding a popover to a word in text.
In these situations, you don't have a way to know where on the screen the word
will appear, or by extension where the anchored element will appear. While you
could use `position-try-options` to specify what happens when the anchored
element overflows, there's a good chance you won't have to.

<inline-demo>
  <template shadowrootmode="open">
    <style>
      span {
        anchor-name: --span;
        outline: var(--accent) medium solid;
      }
      div {
        position: absolute;
        position-anchor: --span;
        position-area: bottom;
      }
    </style>
    <p contenteditable>
      Feel free to edit this text, which has a single <span>span</span> element
      that is the anchor element. I think it's pretty neat that the anchor
      positioning still works while you type!
    </p>
    <div part="label">Positioned element</div>
  </template>
</inline-demo>

You may have noticed that the label stays within its containing block, even if
that means that it is no longer positioned right at the anchor's center. This is
the default behavior for absolutely positioned elements.

<inline-demo>
  <template shadowrootmode="open">
    <style>
      ::-webkit-slider-thumb {
        anchor-name: --thumb;
      }
      [part="label"] {
        position-anchor: --thumb;
        position-area: block-start;
      }
    </style>
    <input type="range" part="slider" />
    <div part="label">CSS is awesome</div>
  </template>
</inline-demo>

In some cases, there isn't a compelling reason that the label can't overflow its
containing block. On this page, the label is small, and the containing block has
healthy margins (except on small screens). In this case, we could specify that
we want `unsafe` alignment.

<inline-demo>
  <template shadowrootmode="open">
    <style>
      ::-webkit-slider-thumb {
        anchor-name: --thumb;
      }
      [part="label"] {
        position-anchor: --thumb;
        position-area: block-start;
      }
    </style>
    <style part="editable-style" contenteditable>div {
  justify-self: unsafe anchor-center;
}</style>
    <input type="range" part="slider" />
    <div part="label">CSS is awesome</div>
  </template>
</inline-demo>

You may think that `safe` is the opposite of `unsafe`, but that's not quite the
case. `safe` alignment is only safe on the start-side, meaning this demo
overflows on the right side, but doesn't on the left side.

<inline-demo>
  <template shadowrootmode="open">
    <style>
      ::-webkit-slider-thumb {
        anchor-name: --thumb;
      }
      [part="label"] {
        position-anchor: --thumb;
        position-area: block-start;
      }
    </style>
    <style part="editable-style" contenteditable>div {
  justify-self: safe anchor-center;
}</style>
    <input type="range" part="slider" />
    <div part="label">CSS is awesome</div>
  </template>
</inline-demo>

So:
- unspecified stops overflow on both sides
- `safe` stops overflow only on the start side
- `unsafe` allows overflow on both sides

I initially found this confusing, as specifying `safe` may make it less safe
depending on the situation. In this example, the area specified by `position-area`
includes the `block-end`, so the implicit `justify-self` value is `start`. By
specifying `safe start` instead, the label overflows on the end side. Remove
`safe` to see the difference.

<inline-demo>
  <template shadowrootmode="open">
    <style>
      ::-webkit-slider-thumb {
        anchor-name: --thumb;
      }
      [part="label"] {
        position-anchor: --thumb;
      }
    </style>
    <style part="editable-style" contenteditable>div {
  position-area: block-start inline-end;
  justify-self: safe start;
  inline-size: max-content;
}</style>
    <input type="range" part="slider" />
    <div part="label">CSS is awesome and is totally a language</div>
  </template>
</inline-demo>

In the context of anchor positioned elements, where overflow can easily happen
on either side, the `safe` keyword doesn't quite make sense. However, when we
think of it for normal text, this is the behavior that we often expect. For
instance, in the "CSS is awesome" meme, we want text to overflow on the end, but
not at the start.

<inline-demo>
  <template shadowrootmode="open">
    <style>
      :host {
        container-type: inline-size;
        inline-size: 50cqi;
        place-self: center;
      }
      p {
        font-size: 40cqi;
        margin: 2cqi;
        line-height: 0.8em;
      }
    </style>
    <p>CSS is awesome</p>
  </template>
</inline-demo>

## Future improvements

While `safe` and `unsafe` behavior has been part of grid and flex layouts for
quite some time, I'm guessing many authors (including me) will encounter it for
the first time (or in new situations) while using anchor positioning. I expect
with more use cases, CSS will make improvements to the capabilities of overflow
alignment.

Currently, you can't specify an overflow alignment keyword without also
specifying the alignment, but there's a [CSSWG
issue](https://github.com/w3c/csswg-drafts/issues/12920) to allow that. I also
think it would be useful to add a keyword for the default behavior, so it could
be set like `safe` and `unsafe`, and potentially add a keyword like `safe-end`
that would overflow on the start, but not the end.
