---
title: Updates to Popover and CSS Anchor Positioning Polyfills
sub: <code>hint</code> popovers, <code>position-area</code> and more
date: 2025-05-06
image:
  src: blog/2025/stack.jpg
  alt: >
    A hand with an orange bracelet
    extends from a baggy gray sweatshirt
    and places a large green block
    on top of a colorful and precarious
    stack of Jenga-like blocks.
author: james
sponsors: true
tags:
  - Article
  - Anchor Positioning
  - Polyfill
  - CSS
related_tag: Anchor Positioning
summary: |
  We have been busy updating the Popover and
  CSS Anchor Positioning Polyfills,
  but there is still more we can do
  with your help.
---

We have been busy updating the Popover and CSS Anchor Positioning Polyfills,
adding support for hint popovers, `position-area`, and more. A huge thank
you to our sponsors and contributors! If you or your company would like to
support these projects, there is much more we could do to improve polyfills for
users.

## Popover updates

In early May, we released
[v0.6.0](https://github.com/oddbird/popover-polyfill/releases/tag/v0.6.0) of
[@oddbird/popover-polyfill](https://github.com/oddbird/popover-polyfill/tree/v0.6.0).

### hint=popover

The major update to the Popover polyfill was support for `hint` popovers. This
addition to the Popover API adds an extra stack of popovers that act similar to
`auto` popovers, but are more ephemeral.

As an example, an `auto` popover might be used for a dropdown. Opening a tooltip
shouldn't close the dropdown, but it should close other tooltips. You can use
`hint` popovers to declaratively author this functionality.

Read more about [`popover=hint`](https://developer.chrome.com/blog/popover-hint)
on the Chrome for Developers blog, or the original [Open UI
proposal](https://open-ui.org/components/popover-hint.research.explainer/).

### Updates to JavaScript methods

We also updated `showPopover()` and `togglePopover()` to accept an object as an
argument. Initially, `togglePopover()` only accepted a boolean `force`, to
either open or close the popover. However, the spec was updated to add a
`source` parameter to `showPopover()` and `togglePopover()`, so we updated the
polyfill to allow that format.

{% callout 'note', false %}
**Why use `togglePopover({force: true})` instead of `showPopover()`?**

If you call `showPopover()` on a popover that is already shown, the native
browser implementation will throw an error. If you aren't sure if the popover is
already shown, you may instead want to call `togglePopover({force: true})`,
which will show it if it isn't already shown, but will not throw an error if it
is.

{% endcallout %}

In addition, `togglePopover()` now returns a boolean value indicating whether
the popover is shown after the method executes.

### What's next for the Popover polyfill?

The Popover API has 4 to 18 months of support in all major browsers, but hint
popovers have only been available in Chromium browsers for a few months.

<browser-support data-feature="popover"></browser-support>

This means that many users are on a browser that supports the Popover API, but
not hint popovers. This is a problem for the polyfill, as it only can polyfill
from no support to full support -- partial polyfilling is not supported.

<browser-support data-feature="popover-hint"></browser-support>

We would love to selectively polyfill `popover=hint` in browsers that have
support for the Popover API, but we anticipate that this will take a fair amount
of investigation and effort. You can track our progress on the Github
[issue](https://github.com/oddbird/popover-polyfill/issues/242).

Read more or try out the Popover polyfill at <https://popover.oddbird.net/>.

{% import 'embed.macros.njk' as embed %}

## CSS Anchor Positioning updates

In April, we released
[v0.5.0](https://github.com/oddbird/css-anchor-positioning/releases/tag/v0.5.0)
of
[@oddbird/css-anchor-positioning](https://github.com/oddbird/css-anchor-positioning),
followed by
[v0.6.0](https://github.com/oddbird/css-anchor-positioning/releases/tag/v0.6.0)
in May. This was the result of a lot of useful feedback and bug reports from our
users.

### `position-area` support

While the polyfill has supported `anchor()` functions since the initial release,
I expect that `position-area` will be the more common method for placing items.
All 50 keywords for `position-area` are now supported, respecting writing mode
and text direction.

You can see some demos [here](https://anchor-positioning.oddbird.net/position-area.html).

### Working towards spec parity

We also added support for [`inside` and `outside` keywords](https://anchor-positioning.oddbird.net/#inside-outside) on physical insets --
for instance with `left: anchor(inside)`, which is equivalent to `left:
anchor(left)`.

`anchor-size` is now supported on [`margin` and inset
properties](https://anchor-positioning.oddbird.net/#anchor-size-extended), in
addition to the sizing properties that were already supported.

### Internal improvements

* We reduced the built size of the polyfill by half by curating the external
  dependencies required at run time.
* We added support for previewing the built polyfill from a pull request, which
  allows us to quickly get feedback from users or test a change on CodePen.
* We discovered our approach of replacing polyfilled stylesheets from `<link>`
  elements with `<link>` elements loading from generated `blob:` URLs was
  breaking relative paths for assets like images, fonts, or stylesheets included
  with `@import`. Our approach of replacing these with `<style>` elements has
  fixed a number of these problems.

{% callout 'note', false %}

Bramus's recent proposal for [CSS Parser
Extensions](https://www.bram.us/2025/05/04/css-parser-extensions-pitch/) does a
great job naming one of the main challenges of writing a CSS polyfill. His
estimate is that we could reduce the size of the CSS Anchor Positioning polyfill
by 85% if we didn't have to parse the CSS ourselves.

{% endcallout %}

### What's next

One of the frustrating caveats for our users has been that the polyfill can only
affect elements and styles that are present when the polyfill is run. This
creates issues for users with dynamic content, or who are using frameworks like
React. While we have collaborated with users to find ways to work around the
issue, we would love to solve the issue of dynamic elements.

This is not a small task, but I think it would make it possible for a lot of
users to adopt the polyfill in their project, and by extension, start using
Anchor Positioning. You can follow [that
issue](https://github.com/oddbird/css-anchor-positioning/issues/91) to find out
more.

{% callout 'note', false %}
Interested in learning more about anchor positioning?
Sign up for our free weekly
[CSS anchor positioning email course](/learn/courses/anchor-positioning).
{% endcallout %}

## Can you help?

Over the last few months, we've enjoyed the chance to make a lot of updates to
meet users' needs. Unfortunately, this rate of progress isn’t sustainable
without additional support.

If your company is using our polyfills, or if one of the issues above is
blocking you from using our polyfills, support us on [Open
Collective](https://opencollective.com/oddbird-open-source) or [get in
touch](/contact/) about supporting a specific feature.

We would also welcome any code contributions if you’d like to help out that way
instead!
