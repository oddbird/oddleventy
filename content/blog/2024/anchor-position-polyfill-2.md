---
title: Continued updates to the Anchor Positioning Polyfill
sub: Performance, scope and fallbacks
date: 2024-11-12
image:
  src: blog/2024/anchor2.jpg
  alt: >
    A pay-to-use pair of binoculars at a scenic overlook.
author: james
sponsors: true
tags:
  - Article
  - Open Source
  - Anchor Positioning
  - CSS
  - Polyfill
summary: |
  Our sponsors are supporting the continued development of the
  CSS Anchor Positioning Polyfill.
  Here's a summary of the latest updates.
---
{% import 'embed.macros.njk' as embed %}

A lot has happened with Anchor Positioning since our [last update](/2024/07/02/anchor-position-polyfill/).

Along with changes to the spec and Chromium's continued work towards
implementing the spec, there's been a lot of interest in using anchor
positioning. In fact, the State of CSS survey identified anchor positioning as
the [most desired
feature](https://2024.stateofcss.com/en-US/usage/#css_interoperability_features)
that you can't yet use because of browser
incompatibilities.

And while it's true that anchor positioning is only implemented in Chromium
browsers, our team at OddBird has made a lot of progress in our goal of
catching up our [polyfill](https://github.com/oddbird/css-anchor-positioning) to
the spec. Based on the feedback we're hearing, people are finding it covers
enough of their needs to be able to start using anchor positioning in
production.

## Pseudo-element support

[@ayoreis](https://github.com/ayoreis) added support for using `::before` and
`::after` pseudo-elements as anchoring elements.

{% callout 'note', false %}
**What pseudo-elements can be anchors?**

The [specification](https://drafts.csswg.org/css-anchor-position-1/#target)
defining which pseudo-elements can be anchors was recently updated from
`part-like` to `fully styleable tree-abiding pseudo-element`. This means that
`::file-selector-button` and `::details-content` are not anchors.
`::-webkit-slider-thumb` is not likely to fit this criteria either, which is a
shame as it's been [extremely](https://codepen.io/jamessw/pen/KKLMJKm)
[useful](https://codepen.io/jamessw/pen/ZENpWao) for examples.

{% endcallout %}

## Support for scoping anchor names

[@mmalerba](https://github.com/mmalerba) added support for `anchor-scope`, which
is extremely useful when working with lists of elements that each have their own
anchor elements.

In this example, anchoring is applied with shared `.target` and `.anchor` rules,
meaning there are multiple elements with `anchor-name: --list-item` set. By
default, the last element with that rule will be the anchor.

But that's not what we want. We want the anchoring element within the same list
item to be our anchor. To do that, set `anchor-scope: --list-item` on
the `li` element to limit the search for an anchoring element.

{{ embed.codepen(
  id='qBeJePX',
  title='Popover with anchor-scope',
  user='jamessw'
) }}

Note that Chromium released support for `anchor-scope` in version 131, but since
the polyfill doesn't support partial polyfilling, this demo will only work in
Chromium before 125, after 131, or in a non-Chromium browser.

## Position fallbacks

What happens when an anchored element doesn't fit where it would go? We
implemented the [Overflow
Management](https://drafts.csswg.org/css-anchor-position/#fallback) portion of
the spec to handle that.

In simple cases, you could add `position-try: flip-block, flip-inline,
flip-start;` to first try flipping over the block axis, then the inline axis,
then over a diagonal axis. You can even combine the options.

{{ embed.codepen(
  id='abrZPQY',
  title='Fallbacks with `position-try`',
  user='jamessw'
) }}

## Performance improvements

[v0.3.0](https://github.com/oddbird/css-anchor-positioning/releases/tag/v0.3.0)
was a performance-focused release. It turns out that applying anchor positioning
is a fairly intensive process, which is one of the reasons why it's getting
moved from the realm of JavaScript into the native browser.

[@marchbox](https://github.com/marchbox) contributed a huge win that allows you
to apply the polyfill to just the styles that impact anchor positioning. By
default, the polyfill parses all of your CSS, which is likely more than you
need. You're now able to specify exactly which CSS stylesheets contain rules
that impact how you use anchor positioning, so not all CSS has to be parsed.

## Coming soon

What are you excited for with anchor positioning? We'd love to implement
[`position-area`](https://github.com/oddbird/css-anchor-positioning/issues/181)
and apply the polyfill to [dynamic
elements](https://github.com/oddbird/css-anchor-positioning/issues/91).

If you want to start using anchor positioning, there are a few ways you can help.
You can take a cue from the contributors listed in this article and take on a
feature or fix a bug. You can also fund our work by [becoming a
sponsor](https://opencollective.com/oddbird-open-source).

Another way to support this work is to [hire us](/services/). If your company
wants to use the Anchor Positioning Polyfill, hire us to complete a needed
feature, or to finish the polyfill. Our client work also helps fund our open
source work like this polyfill, so [get in
touch](https://www.oddbird.net/contact/) with us if you have any web development
needs.
