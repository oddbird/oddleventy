---
title: Anchor Positioning Updates for Fall 2025
sub: Overflowing content, browser support, and polyfill updates
date: 2025-10-13
updated: 2025-10-16
image:
  src: blog/2025/anchor-fall-cb-overflow1.jpg
  alt: >
    A hand holding a coffee mug.
    Coffee is pouring into the mug and overflowing.
author: james
sponsors: true
tags:
  - Article
  - Anchor Positioning
  - CSS
related_tag: Anchor Positioning
summary: |
  Anchor positioning is close to Baseline.
  As more people try it out,
  they are finding areas where it could be improved,
  and differences between browsers.
  Let's take a look at the current state of anchor positioning.
---

{% import 'embed.macros.njk' as embed %}
{% import 'utility.macros.njk' as utility %}

In September, Safari 26 was released with anchor positioning! This means 2 out
of 3 major browsers support anchor positioning, with Firefox support on the way.
I've tested it out on Firefox Nightly, and am impressed with the progress --
hopefully it arrives soon.

That said, there are a few things to consider and look forward to.

## Shifting into the containing block

{{ embed.codepen(
  id="zxrwXZy",
  title="Shifting content",
  user="jamessw",
  height=300
)}}

The CodePen above will be different depending on which browser you use.

In Safari, the orange positioned element is shifted into the dotted containing
block, which means the blue anchor is partially covered.

{{ embed.img(
  src='blog/2025/anchor-fall-cb-safari.png',
  alt='Screenshot in Safari of an orange block partially covering a blue block.',
  attrs={
    'class': 'align-center'
  }
)}}

In Chrome, the orange positioned element is shifted on the block axis to be
inside the containing block, but is not shifted on the inline axis. This means
the blue anchor is fully visible, but the orange positioned element is mostly
cut off, outside of the containing block.

{{ embed.img(
  src='blog/2025/anchor-fall-cb-chrome.jpg',
  alt='Screenshot in Chrome of an orange block with text that gets cut off where it overflows its container.',
  attrs={
    'class': 'align-center'
  }
)}}

Which is right? Great question. There are cases where you might want one
behavior over the other, and my hope is that CSS makes this configurable. For
now, if you're wanting to align it to the start side, you can use the
[safe](https://developer.mozilla.org/en-US/docs/Web/CSS/align-self#safe)
keyword, but there isn't a way to align it to the end side.

{% set update = ['Update', utility.datetime(updated)] | join(' ') %}
{% callout 'note', update %}

There actually *is* a right answer here. Safari's behavior is correct, and there
is an [open Chromium bug](https://issues.chromium.org/issues/438334710).

One suggested workaround for the bug is adding `place-self: anchor-center` on
the positioned element. I've found this isn't always the behavior I want, but
it can be useful.

I still think it would be useful to be able to declare which behavior I wanted.

{% endcallout %}

## Position fallback stability

In pre-release versions of Safari, users picked up on a difference in how Chrome
and Safari handled `position-try-fallback`. In Chrome, if a positioned element
goes to a fallback position, it stays in that position until that position
overflows. In pre-release versions of Safari, it would flip back to the initial
position as soon as it could.

Which is right? Again, this is a case where it really depends on the use case.
In the meantime, Safari adopted Chrome's behavior before releasing, and the
[CSSWG is looking into](https://github.com/w3c/csswg-drafts/issues/12682)
whether this should be configurable.

## Simpler popover positioning

One of my favorite tips has been to remove the user agent's default margin from
a popover if you are using anchor positioning.

`[popover]{ margin: unset }`

That isn't all that's happening. Looking further down the road, there will also
not even work on popovers until you add this rule. And good news — you won't need
to do this forever!

The CSSWG is [working on a
solution](https://github.com/w3c/csswg-drafts/issues/10258) that adjusts the UA
styles for a popover, replacing the problematic `margin: auto` with a new
`dialog` value for `align-self` and `justify-self`. There are ongoing questions
about how to make sure this doesn't break existing popover styles, but what this
means for you is that at some point in the future, you will likely not need to
add `margin: unset`, and popovers will be positioned correctly without extra
rules.

{% callout 'note', update %}

After some initial work on the `dialog` value, the CSSWG [revisited the
topic](https://github.com/w3c/csswg-drafts/issues/10258#issuecomment-3407215102).
Instead of a `dialog` value, `margins: auto` will be disabled when a `position-area` is set. This is effectively adding `margin: unset` for you.

While I'm fine with any solution that fixes positioned popovers, I do think that
this behavior is a bit simpler to understand than a new `dialog` keyword, so I'm
happy this change was made.

{% endcallout %}

## Other changes

That isn't all that's happening. Looking further down the road, there will also
be changes to where the `self` prefix goes in `position-area`, and support for
transforms. There will be an `anchored` container query that will match
depending on which fallback position is active. These will all be useful in
improving the user experiences that are possible with Anchor Positioning.

## Polyfill update

We also released v0.7.0 of the [CSS Anchor Positioning
Polyfill](https://anchor-positioning.oddbird.net/), which adds the ability to
polyfill elements inside of the same shadow DOM. We would love to support more
shadow DOM use cases, and more use cases in general. Try out the polyfill, and
we welcome code or financial contributions to make that happen!
