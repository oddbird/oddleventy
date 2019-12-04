---
title: 'Susy Next: Alpha 4'
tags:
  - _post
  - Susy
  - Susy2
  - Layout
  - Grids
author: miriam
image:
  src: blog/susy.jpg
summary: |
  [Susy Next alpha 4] is now available.

    [Susy Next alpha 4]: http://rubygems.org/gems/susy/versions/2.0.0.alpha.4
date: 2013-09-05
---

I don't have a lot of time to delve, but let me run through some of the
changes and new features in [Susy Next alpha 4] – as well as alpha 3,
which never got a blog post. You can see the full list of changes in the
[Susy Next Changelog], and we'll work on examples as we start writing
docs.

If you haven't already started using a Susy Next alpha, read the [alpha
2] introduction first to get a sense of the new syntax and approach.

In addition to the new features, we've added comprehensive unit test
tests using [True], which we built for the occasion. We also have a set
of complex nesting tests that show how things work in practice. Right
now, the [test folder] provides the best documentation – with
`index.html` showing the True results and `ag.html` showing several
standard grid-types. Explore, download, and play!

[susy next alpha 4]: http://rubygems.org/gems/susy/versions/2.0.0.alpha.4
[susy next changelog]: https://github.com/oddbird/susy/blob/susy-next/CHANGELOG-NEXT.md
[alpha 2]: /2013/05/03/susy-next-alpha-2/
[true]: /true/
[test folder]: https://github.com/oddbird/susy/blob/susy-next/test/

## Alpha 3

**New Features:**

- Added `gutters` mixin to apply gutters as margin or padding on an
  element.
- Added `outer` keyword to include gutters in any returned width. This
  replaces the Susy 1 `space` mixin.
- Added `container` function to return a given container's width.
- Added `auto` keyword to any grid argument as a setting for
  `$container-width`. This will use `$column-width` settings to
  calculate a container, or fallback to 100%.
- Added `show-columns` and `show-baseline` keywords for controlling
  background-grids. The `show` keyword will display both.
- The `gutter` function now returns half-widths when using split or
  inside gutters.
- Added margin/padding mixins from Susy 1: `prefix`, `suffix`, `pad`,
  `pre`, `post`, `push`, `pull`, and `squish`. They work pretty much
  the way you expect them to, although there's a [small issue] we'll
  be fixing in the next release (alpha 5).

**Backwards Incompatible Changes:**

- Renamed `$isolate` setting to `$layout-method`, which no longer
  accepts a boolean, only the `isolate` and `float` keywords.
- Renamed `$static` setting to `$layout-math`, which no longer accepts
  a boolean, only the `static` and `fluid` keywords. Fluid is used for
  both Susy 1 `fluid` and `magic` styles, depending on the presence of
  a `$column-width` setting.

[small issue]: https://github.com/oddbird/susy/issues/204

## Alpha 4

**New Features:**

- Added a `bleed` mixin. This works similar to bleed in Susy 1, but
  accounts for gutters as well (unless you pass the `no-gutters`
  keyword). Currently only inside gutters are being incorporated, but
  that will be fixed along with the issue linked above.
- Added a `$last-flow` setting to control the flow direction of
  row-ending elements. It accepts either `to` of `from`. This is
  similar to `$omega-float` in Susy 1.
- The `span` mixin now accepts nested `@content`, so you can nest
  styles directly in a new context.
- Added `inside-static` option for static gutters in otherwise fluid
  grids.
- `gutters` mixin uses span syntax, accepts explicit gutter spans.

**Backwards Incompatible Changes:**

- `grid-background`, `grid-overlay`, `grid-background-output`, &
  `$grid-background-color` have been renamed to remiain consistent and
  avoid conflicts with Compass:
  - `grid-background` =&gt; `background-grid`
  - `grid-overlay` =&gt; `overlay-grid`
  - `grid-background-output` =&gt; `background-grid-output`
  - `$grid-background-color` =&gt; `$grid-color`
