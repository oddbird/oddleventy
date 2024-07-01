---
title: Updates to the Anchor Position Polyfill
sub: Catching up to the spec
date: 2024-07-02
image:
  src: blog/2024/anchor1.jpg
  alt: >
    A rusty anchor hanging with the sea in the background.
author: james
sponsors: true
tags:
  - Article
  - OSS
  - Anchor Position
  - CSS
  - Polyfill
summary: |
  Sponsor support for continued development of the
  CSS Anchor Positioning Spec is making the Anchor Position Polyfill more useful.
  Here's a summary of the latest updates.
---

A few years ago, OddBird started working on a polyfill for [CSS Anchor
Positioning] as the spec started to take form. Now that the spec has stabilized
and Chromium has begun implementation, we are relying on our sponsors to support
development of the polyfill. Thanks to their contributions, we're releasing
[v0.1.0].

[CSS Anchor Positioning]: https://drafts.csswg.org/css-anchor-position/
[v0.1.0]: https://github.com/oddbird/css-anchor-positioning/releases/tag/v0.1.0

## Updates in v0.1.0

1. `position-anchor`

In their full form, anchor functions can be quite verbose and repetitive.

```css
#target {
  top: anchor(--my-anchor bottom);
  width: anchor-size(--my-anchor width);
}
```

[`position-anchor`] allows you to specify a default anchor for an element.

[`position-anchor`]: https://drafts.csswg.org/css-anchor-position/#position-anchor

```css
#target {
  position-anchor: --my-anchor;
  top: anchor(bottom);
  width: anchor-size(width);
}
```

You can also use this to share positioning rules while using different anchors.
Both Target A and Target B will be positioned to the right of their anchor, but
they will use different respective anchors.

```css
.target {
  left: anchor(right);
}
.target#a {
  position-anchor: --anchor-a;
}
.target#b {
  position-anchor: --anchor-b;
}
```

`position-anchor` will also be useful for things like [`inset-area`], which
isn't yet supported by the polyfill.

[`inset-area`]: https://drafts.csswg.org/css-anchor-position/#inset-area

2. Anchor validity

Thanks to a great contribution from [@ayoreis], the validity algorithm has been
updated to match the [spec]. More can be found in the [issue], but this change
makes more elements available for anchoring. Notably, you can now anchor to
another element that is anchored as well (as long as the anchor element is layed
out before the target element).

[@ayoreis]: https://github.com/ayoreis
[spec]: https://drafts.csswg.org/css-anchor-position/#target
[issue]: https://github.com/oddbird/css-anchor-positioning/issues/103

3. Support multiple names in [`anchor-name`].

[`anchor-name`]: https://drafts.csswg.org/css-anchor-position/#name

In this example, both `#target-a` and `#target-b` are referring to the same
element, but with different names.

```css
.anchor {
  anchor-name: --a, --b;
}
#target-a {
  position-anchor: --a;
}
#target-b {
  position-anchor: --b;
}
```

This enables a number of uses, for instance if you want `#target-b` to have a
different anchor on a different screen size.

```css
@media (min-width: 768px){
  .anchor#side-anchor{
    anchor-name: --b;
  }
}
```

## What's next?

While a lot of the basic functionality is already possible with the polyfill,
there's a lot left to do to bring the polyfill up to date with the spec. Our
[v1.0.0 Milestone] is prioritized based on what we think will be the most
impactful and useful features, and some of the upcoming ones are:

[v1.0.0 Milestone]: https://github.com/oddbird/css-anchor-positioning/milestone/1

- [#91] Applying the polyfill to dynamic elements
- [#167] Position Fallback
- [#180] `anchor-scope`
- [#181] Support for `inset-area`

[#91]: https://github.com/oddbird/css-anchor-positioning/issues/91
[#167]: https://github.com/oddbird/css-anchor-positioning/issues/167
[#180]: https://github.com/oddbird/css-anchor-positioning/issues/180
[#181]: https://github.com/oddbird/css-anchor-positioning/issues/181

If you're as excited as I am to use these features, there are a few ways you can
help. First, let us know which features you're most eager to see supported by
commenting on the GitHub issues. We also welcome PRs.

And of course, [sponsoring] OddBird's Open Source work is a great way to help
make our continued work on this polyfill (and others) possible. We're grateful
for our existing sponsors who have made this release possible, and you can see
them [below].

[sponsoring]: https://opencollective.com/oddbird-open-source
[below]: #open-source-sponsors
