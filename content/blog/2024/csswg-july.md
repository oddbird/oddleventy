---
title: CSS Working Group Updates for June & July
sub: What I've been working on as an Invited Expert
author: miriam
date: 2024-07-23
image:
  src: blog/2024/csswg-june.jpg
  alt: >
    A stepped gradient of a pink hue
    in 2% lightness increments
    from 100% to 58%,
    labeled 'spec'
tags:
  - CSS
  - CSSWG
  - Cascade Layers
  - CSS Scope
  - CSS Nesting
  - CSS Mixins & Functions
  - Color
  - Container Queries
  - Open Source
summary: >
  The CSS Working Group has regular face-to-face meetings
  (hybrid online/in-person) throughout the year,
  and they always result in a flurry of activity!
  Here's a rundown of some highlights
  from the last few months,
  with a focus on the features I maintain.
---

{% import 'embed.macros.njk' as embed %}

{% callout %}
This is hopefully the first post in a series,
providing updates around my work
on the CSS Working Group.

These contributions take a lot of time and effort.
If you're interested in supporting
our open-source work around CSS,
consider becoming a [GitHub sponsor](https://github.com/sponsors/oddbird),
or contributing to our
[Open Collective](https://opencollective.com/oddbird-open-source).
{% endcallout %}

## Container Queries & Units

spec:
~~[Containment, Level 3](https://www.w3.org/TR/css-contain-3/)~~
[Conditional Rules, Level 5](https://www.w3.org/TR/css-conditional-5/)

### Moving to a new specification

Issue:
[Reorganizing the Containment specs (#10433)](https://github.com/w3c/csswg-drafts/issues/10433)

While Container Queries rely heavily
on the idea of 'containment',
the two features are not tightly intertwined.
We're working to
[loosen the containment restrictions](https://github.com/w3c/csswg-drafts/issues/10544)
even more if we can.

To help clarify that relationship,
and simplify maintenance of these distinct features,
Container Queries are moving
from the [Containment module (level 3)](https://www.w3.org/TR/css-contain-3/)
into the [Conditional Rules module (level 5)](https://www.w3.org/TR/css-conditional-5/).

During this transition,
Container Queries disappeared from any public spec --
basically moving back into Editor's Draft status,
after already shipping across browsers.
Maybe it was all a dream!
But [a new Working Draft](https://www.w3.org/TR/2024/WD-css-conditional-5-20240723/#container-queries)
was published this week.
Container Queries are back!

### Querying the shadow DOM

- [CQ vs shadow boundaries (#5984)](https://github.com/w3c/csswg-drafts/issues/5984)
- [Should not cq units be interpreted in the flatDom context? (#7947)](https://github.com/w3c/csswg-drafts/issues/7947)

After many issues were raised (thanks for making noise!),
we were able to revert the limitation on
[querying containers across shadow-DOM boundaries](https://github.com/w3c/csswg-drafts/issues/5984#issuecomment-2112977366).
Moving forward, slotted elements should be able to query
containers that are defined by a parent shadow-DOM.
Container units will also
get their sizing from
[relevant shadow-DOM containers](https://github.com/w3c/csswg-drafts/issues/7947).

### Viewport units and scrollbars

- [Use of 100vw is causing pointless horizontal scrollbars on some websites (#6026)](https://github.com/w3c/csswg-drafts/issues/6026)
- [Can we account for scrollbars on containers when sizing 100cq*? (#10043)](https://github.com/w3c/csswg-drafts/issues/10043)

For years, the viewport units (`vi`/`vw` etc)
have been based on the full dimensions of the viewport,
ignoring any possible scrollbars.
That can lead to accidental overflow
if you size something to `100vw`,
and there's a vertical scrollbar present.

While sometimes frustrating,
that behavior is designed to avoid loop conditions.
Elements sized with viewport units _can cause scrollbars_,
which would change the size of the unit,
potentially removing the need for scrollbars.
But we don't have that issue when scrollbar spacing is stable --
using `overflow: scroll` or
[`scrollbar-gutter: stable`](https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-gutter) --
so the working group resolved to loosen the restriction.

Moving forward, [*stable* scrollbars](https://github.com/w3c/csswg-drafts/issues/6026)
will be removed from the viewport measurements.
I [requested we do the same](https://github.com/w3c/csswg-drafts/issues/10043)
for container-relative `cq*` units,
so that will also be fixed.

{{ embed.codepen(
  id='wvLMoNa',
  title='Stable scroll bars & CQ units',
  user='miriamsuzanne'
) }}

Note that container units
(and container queries generally)
are relative to the
`content-box`
of a container.
So adding/removing padding
from the container
_also/already_
changes the size of our `cq*` units.

### Variables in container (size) queries

Issue: [Can we allow custom properties in dimensional container queries?
(#8088)](https://github.com/w3c/csswg-drafts/issues/8088)

A bit farther back, but still exciting:
we agreed that
[variables should be allowed in container size queries](https://github.com/w3c/csswg-drafts/issues/8088#issuecomment-1371590352).
In the future,
you'll be able to write:

```css
@container (width > var(--small)) {
  /* styles inside larger containers */
}
```

The variable will resolve _on the container_.
So you won't be able to make the variable different
for each element inside the query,
but it can be different for each container
being queried:

```css
.container-1 { --small: 20em; }
.container-2 { --small: 600px; }
```

### Zoom and container queries

Issue: [Zoom and container queries (#10268)](https://github.com/w3c/csswg-drafts/issues/10268)

We clarified the
[impact of `zoom` on resolving container queries](https://github.com/w3c/csswg-drafts/issues/10268).
Zoom
[increases the size of a CSS pixel](/2024/07/09/zoomies/)
in relation to the surrounding layout --
so things _appear larger_,
but maintain their internal dimensions.
A `50px` box is still `50px`,
we've just changed the size of our `px` unit.

To keep things simple and consistent,
we determined that containers
should report their own size _as they see it_.
So a `50px` container at `200%` zoom
will continue to report `50px`
in a container query.
This is similar to how relative units
and custom properties resolve
in a container query.

{{ embed.codepen(
  id='xxobvgd',
  title='Container Queries and Zoom',
  user='miriamsuzanne'
) }}

If you want to learn more about
all the variations of
[browser and CSS magnification](/2024/07/09/zoomies/),
I've got you covered.

### Is container query adoption 'too low'?

I've seen a wide range of people worried that
"people aren't using container queries" --
but we don't actually have a way of tracking that!
I was curious where this concern comes from,
what we're comparing to,
and what expectations we _should_ have
about new features showing up in production.

I wrote up my thoughts,
summarized by the title of the article:
[Learn Grid Now, Container Queries Can Wait](/2024/06/13/css-layout/).
We'll be doing a [live stream](https://www.youtube.com/watch?v=aDMWD_CYpEI)
with [Stephanie Eckles](https://thinkdobecreate.com)
([ModernCSS.dev](https://moderncss.dev/) and [SmolCSS](https://smolcss.dev/))
about the reasons to use grid,
and some of the quick ways to get started.

## Cascade Layers

Spec: [Cascading and Inheritance, Level 5](https://www.w3.org/TR/css-cascade-5/)

### Imposing layers on linked styles in HTML

- WHATWG: [Allow authors to apply new css features (like cascade layers) while linking stylesheets (#7540)](https://github.com/whatwg/html/issues/7540)
- TAG: [A layer attribute for layering of linked CSS style sheets in HTML (#970)](https://github.com/w3ctag/design-reviews/issues/970)
- Explainer: [Cascade Layering of HTML Linked Style Sheets](https://css.oddbird.net/layers/link-layer/)

We need
[a `layer` attribute for the html `<link>` element](https://github.com/whatwg/html/issues/7540).
We've known this for years,
but the issue has been stalled in the WHATWG,
as we try to sort out feature-testing new attributes
(also important!).
While I'd love to have feature queries
in html links as well,
I hope that
[separating these two features](https://github.com/w3ctag/design-reviews/issues/970)
might unblock the essential progress on Cascade Layers.
I wrote [an explainer](https://css.oddbird.net/layers/link-layer/),
and asked the w3c
Technical Architecture Group
for review,
as a step towards getting more formal
implementor feedback.

When I have time,
I will follow-up with a similar explainer
on the need for HTML feature queries.

### Explicit placement of unlayered styles in the cascade

- [Allow authors to explicitly place unlayered styles in the cascade layer order (#6323)](https://github.com/w3c/csswg-drafts/issues/6323)
- [Reconsider placement of unlayered styles, for better progressive enhancement? (#6284)](https://github.com/w3c/csswg-drafts/issues/6284)

There's been a very active discussion
around [handling unlayered styles in the cascade](https://github.com/w3c/csswg-drafts/issues/6323#issuecomment-2207341923).
By default,
unlayered styles have priority over layered styles.
[This is an essential default](https://github.com/w3c/csswg-drafts/issues/6284#issuecomment-2207379170) in my mind,
but there are many use-cases
where we would want override the default.

The mega-thread discussion
is now eating it's own tail,
but it seems like we have three basic approaches
to choose from
(and then small variations on each).
I have a clear favorite there,
but feel free to leave your thoughts as well.

If possible,
try not to get lost in alternative naming details --
and focus first on the overall behavior of the feature!

## Scope

Spec: [Cascading and Inheritance, Level 6](https://www.w3.org/TR/css-cascade-6/)

### Scope specificity when nesting

- [Allow declarations directly in @scope? (#10389)](https://github.com/w3c/csswg-drafts/issues/10389)
- [@scope as a nested grouping rule and CSSNestedDeclarations (#10431)](https://github.com/w3c/csswg-drafts/issues/10431)
- [Always serialize the implicit :scope ? (#9621)](https://github.com/w3c/csswg-drafts/issues/9621)

We recently resolved
[a series of issues](https://github.com/w3c/csswg-drafts/issues/10431#issuecomment-2189648413)
related to scope specificity and nesting.
In the future,
you'll be able to put style declarations
directly into an `@scope` rule,
and they will apply to the scope root with no added specificity:

```css
@scope (main) {
  /* these styles apply to the :scope (main) */
  /* but have no specificity */
  color: teal;
  border: thick solid;
}
```

This is equivalent to using `:where(:scope)`:

```css
@scope (main) {
  /* these styles apply to the :scope (main) */
  /* but have no specificity */
  :where(:scope) {
    color: teal;
    border: thick solid;
  }
}
```

The number of option here --
and the interactions between features --
can be a bit confusing,
since each has different implications.
While the options and interactions are complex,
this resolution keeps the rules consistent for each feature:

- The `@scope` rule itself
  does not add specificity to nested styles.
  We can think of `@scope (<selector>)`
  as similar to `:where(<selector>)`,
  which also hides the specificity selectors inside.
- The `@scope` rule can have directly-nested styles,
  and they apply to the scoping root.
  That doesn't change anything about the selector specificity.
- Like `:root`, the `:scope` selector is a pseudo-class,
  and always has the same specificity as any other class
  (`0,1,0`).
- We can always think of the `&` selector
  as being replaced by `:is(<parent-selector>)`.
  In this case, the parent selector is the scope root selector (`main`),
  with a specificity of `[0,0,1]`.

### Scope roots are no longer forgiving

'[Forgiving selector lists](https://developer.mozilla.org/en-US/docs/Web/CSS/:is#forgiving_selector_parsing)'
are handy in many situations,
[but are now limited to `:is()` and `:where()`](https://github.com/w3c/csswg-drafts/issues/7676#issuecomment-1341347244).
I don't love that limitation,
but it seems like we're stuck with it.
For that reason,
scope-start and scope-end selectors
[also need to be un-forgiving](https://github.com/w3c/csswg-drafts/issues/10042).

Of course,
we can use `:is()` and `:where()`
_inside_ the scope start/end selectors --
so this is an inconvenience,
but not a change in functionality.

### Implicit scopes in a nested context

Issue: [Can we support implicit scopes in nested settings? (#10497)](https://github.com/w3c/csswg-drafts/issues/10497)

Scope and nesting
obviously need to work together,
since they overlap in some major ways.
The basic rules for that interaction are:

1. When a selector is directly inside a scope rule
  (that's the whole point!),
  those selectors are 'nested' relative
  to the scope root element,
  as defined by the scope-start selector.
1. When a scope rule is directly inside another selector,
  the scope-start and scope-end selectors
  act as 'nested' selectors relative to the parent.

```css
header {
  @scope (main > &) {
    /* the '&' above refers to 'header' */

    & h2 { /* this '&' refers to 'main > header' */ }
  }
}
```

I've opened a new issue to discuss
[implicit scopes when nesting](https://github.com/w3c/csswg-drafts/issues/10497).
If we leave off the scope-start,
can we treat it like `(&)`?

```css
header {
  @scope { /* should we get an implied 'header' scope? */ }
}
```

That's potentially a nice shortcut to have?

## Mixins & Functions

Spec: [Mixins & Functions, Level 1 (Editor's Draft)](https://drafts.csswg.org/css-mixins/)

### A draft spec for functions

The [Editor's Draft](https://drafts.csswg.org/css-mixins/) is underway!
It isn't complete (mixins are missing),
but it lays out our current plan for custom CSS functions.

### Thinking about mixins

I wrote an article about
[how mixins should interact with the cascade](/2024/06/11/removing-mixins/).
I'd be happy for your thoughts!

I've heard some browsers
expressing doubt about the need for mixins.
I plan to start documenting use-cases
where CSS mixins would have a large impact.
If you have examples,
please [reach out](/contact/)!

## Wide-gamut colors

Issue: [Channel clipping breaks author expectations, especially when using 'perceptually uniform' spaces (#9449)](https://github.com/w3c/csswg-drafts/issues/9449)

I'm not an editor on the Color spec,
but [I have some opinions anyway](https://github.com/w3c/csswg-drafts/issues/9449).
Browsers currently use 'channel clipping'
to render out-of-gamut colors,
and [the results can be wild](https://codepen.io/miriamsuzanne/pen/BavZLNG).
I made a [comparison pen, to see the difference](https://codepen.io/miriamsuzanne/pen/rNRoBXO) between browser rendering and what the spec calls for:

{{ embed.codepen(
  id='rNRoBXO',
  title='Color Clipping v Mapping',
  user='miriamsuzanne'
) }}

Good news!
We now have
[a tentative compromise solution](https://github.com/w3c/csswg-drafts/issues/9449#issuecomment-2162711081)
that all browsers agree on.
It's not perfect,
but it's a big improvement
over the current state of things.

You can test how it impacts the linked pen
by turning on the `css gamut mapping` feature flag
in some Chromium browser versions (go to `chrome://flags`).

We talked about this issue
(and the potential solution)
on our [Winging It Live stream](https://www.youtube.com/watch?v=Lq4saw4Rqe0)
last month --
along with details of our
[OddContrast](https://contrast.oddbird.net)
tool for wide-gamut contrast checking.
