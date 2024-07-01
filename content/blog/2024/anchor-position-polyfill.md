---
title: Updates to the Anchor Position Polyfill
sub: Catching up to the spec
date: 2024-07-02
image:
  src: blog/2024/anchor.jpg
  alt: >
    A rusty anchor hanging from a board.
author: james
oss: true
tags:
  - Article
  - OSS
  - Anchor Position
  - CSS
summary: |
  Support for updates to the Anchor Position Spec
  is making the Anchor Position Polyfill more useful.
---
A couple years ago, OddBird started working on a polyfill for Anchor Position,
as the spec started to take form. Now that the spec has stabilized, and Chromium
has begun implementation, we are relying on our sponsors to support development
of the polyfill. Thanks to their contributions, we're releasing [v0.0.6].

[v0.1.0]: https://github.com/oddbird/css-anchor-positioning/releases/tag/v0.1.0

## Updates in v0.1.0

1. `position-anchor`

In their full form, anchor functions can get quite verbose and repetitive.


```css
#target{
  top: anchor(--my-anchor bottom);
  width: anchor-size(--my-anchor width);
}
```

`position-anchor` allows you to specify a default anchor for an element.

```css
#target{
  position-anchor: --my-anchor;
  top: anchor(bottom);
  width: anchor-size(width);
}
```

You can also use this to share positioning rules while using different anchors.
Both Target A and Target B will be positioned to the right of their anchor, but
they will use their own anchors.

```css
.target{
  left: anchor(right);
}
.target#a{
  position-anchor: --anchor-a;
}
.target#b{
  position-anchor: --anchor-b;
}
```

`position-anchor` will also be useful for things like [`inset-area`], which
isn't yet supported by the Polyfill.

[`inset-area`]: https://drafts.csswg.org/css-anchor-position-1/#inset-area

2. Anchor validity

Thanks to a great contribution from [@ayoreis], the validity algorithm has been
updated to match the [spec]. More can be found in the [issue], but this change
makes more elements available for anchoring. The notable use case is you can now
anchor to another element that is anchored as well (as long as the anchor
element is layed out before the target element).

[@ayoreis]: https://github.com/ayoreis
[spec]: https://drafts.csswg.org/css-anchor-position-1/#target
[issue]: https://github.com/oddbird/css-anchor-positioning/issues/103

3. Support multiple names in `anchor-name`.

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

This will enable a number of use cases, for instance if you want `#target-b` to
have a different anchor on a different screen size.

```css
@media (min-width: 768px){
  .anchor#side-anchor{
    anchor-name: --b;
  }
}
```

## What's next?

While a lot of the basic functionality is already possible with the polyfill,
there's a lot left to do to bring the Polyfill up to date with the spec. Our
[v1.0.0 Milestone] is prioritized based on what we think will be the most
impactful and useful features, and some of the upcoming ones are-

[v1.0.0 Milestone]: https://github.com/oddbird/css-anchor-positioning/milestone/1

- [#91] Applying the Polyfill to dynamic elements
- [#167] Position Fallback
- [#180] Anchor Scope
- [#181] Support for `inset-area`

[#91]: https://github.com/oddbird/css-anchor-positioning/issues/91
[#167]: https://github.com/oddbird/css-anchor-positioning/issues/167
[#180]: https://github.com/oddbird/css-anchor-positioning/issues/180
[#181]: https://github.com/oddbird/css-anchor-positioning/issues/181

If you're as eager as I am to use these features, there's a few ways you can
help. First, let us know which features you're most eager to see supported by
commenting on the GitHub issues. We also welcome PRs.

And of course, [sponsoring] OddBird's Open Source work is a great way to help
make our continued work on this polyfill and other work possible. We're grateful
for our existing sponsors who have made this release possible, and you can see
them below.

[sponsoring]: https://opencollective.com/oddbird-open-source
