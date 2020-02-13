---
title: Herman Style Guides
sub: An agile approach to design systems on a budget
author: miriam
date: 2018-01-03
tags:
  - _post
  - News
  - Herman
  - Herman1
  - CSS
  - Sass
  - Design Systems
  - Code
  - Style Guides
image:
  src: blog/2017/herman-intro/header.jpg
summary: |
  **Design systems streamline development, communication, and
  consistency** --but often rely on dedicated teams and extended budgets.
  We wanted a tool to create and maintain living style guides & pattern
  libraries in an agile process, and on a budget. [Herman] helps keep our
  development flow simple, and our UX consistent, as we iterate on
  patterns and scale over time.

  *Today we're launching Herman 1.0 as a free, open source project for
  anyone to use and make contributions.* Check out the [full
  documentation], or [contact us] for help [putting your design system in
  place].

  [Herman]: /herman/
  [full documentation]: /herman/docs/
  [contact us]: /contact/
  [putting your design system in place]: /services/design-systems/
---

I spent the week after Thanksgiving in San Francisco, attending (and
[accidentally speaking at]) [Clarity] --a "[Design Systems]" conference
organized by the wonderful [Jina Anne]. If you don't have experience
with design systems, I highly recommend the [Handbook][Design Systems]
which Jina co-authored --available free online.

I'm always curious how many attendees at a conference are working on
enterprise projects over a long period of time vs. those of us who do
consulting for multiple clients each year. These different contexts can
lead to very different solutions --affecting team size, budget, process,
architecture, and technical requirements.

I don't know the exact mix at Clarity, but I think that design systems
generally skew towards the enterprise projects for one reason: budget.
Creating the beautiful [Salesforce Lightning Design System] requires an
ongoing full-time dedicated team. Those of us doing agency work don't
often have that luxury, but our clients still need a system that will
work for them.

So how can we make design systems part of an agile process --growing
slowly along-side the application, the same way we write and maintain
test-coverage as part of any project? How do we make documentation and
design consistency the path of least resistance?

> **If it's not documented, it doesn't exist.** Documentation should
> become the default --an integrated part of the development process.
>
> --Miriam Suzanne (me)

Design Systems can include a wide array of features, more than just a
pattern library, and Herman does not cover the full gamut --but it
doesn't have to. With [Herman] we start small, documenting brand design
tokens --[colors], [fonts], [sizes], [ratios][sizes], and [icons]
--before expanding into [practical patterns and components], with
automation to help us scale.

  [accidentally speaking at]: https://twitter.com/jina/status/935566434700222465
  [Clarity]: https://www.clarityconf.com/2017
  [Design Systems]: https://www.designbetter.co/design-systems-handbook/
  [Jina Anne]: https://www.patreon.com/sushiandrobots
  [Salesforce Lightning Design System]: https://www.lightningdesignsystem.com/
  [Herman]: /herman/
  [colors]: /herman/docs/demo_colors.html
  [fonts]: /herman/docs/demo_fonts.html
  [sizes]: /herman/docs/demo_sizes.html
  [icons]: /herman/docs/demo_icons.html
  [practical patterns and components]: /herman/docs/demo_examples.html

## Shared Problems, Unique Constraints

The term "design system" refers generally to documenting & distributing
isolated patterns and components that can be used across one or more
applications for consistent user experience. That usually involves some
combination of "style guides" and/or "pattern libraries" --the detailed
documentation of design tokens, UI patterns, components, and overall
system guidelines.

Lightning Design and other massive projects can make this goal feel
daunting, but we've found it useful to build what we can, as we go, even
when the results are incomplete by comparison. These problems aren't
all-or-nothing. There is room for flexibility in our approaches, from
one project to the next. The important question is *where can I start*
improving design communication, clarity, and consistency?

At OddBird, our first style guide attempts failed because they required
too much maintenance and attention. So we scaled back to automating
color-palettes, and not much else. Over time we've added support for a
wide array of features integrating with our Sass tooling, and Herman has
evolved into a full-featured tool for agile design systems.

Now we use Herman across a range of products, from large client
applications to our own internal toolkits. While there are a number of
possible configuration options, the initial setup can be streamlined to
make sense on even the smallest projects. We've even used Herman to
[begin documenting itself] --from design language to components and API.

The project is not complete --and never will be --but that's the point.
As time goes on, we'll keep adding features that allow our systems to
become larger, more complex, and more automated --with support for
additional languages.

[begin documenting itself]: /herman/docs/

## Integrated Syntax, Built on SassDoc

Style documentation tools have existed for some time, providing a great
place to start without re-inventing the wheel. As a design-driven team
using Sass/CSS, we love keeping our style documentation directly in with
our stylesheets, using tools like [KSS] and [SassDoc]. When developers
add a pattern in the stylesheet, they can document their work right at
the source. When a pattern changes, all the edits can be made in a
single location, so documentation is more likely to stay up-to-date.

[<img src="{{ site.images }}blog/2017/herman-intro/sassdoc.jpg" class="extend-small img-border img-shadow" alt="SassDoc screenshot" />][SassDoc]

Those tools are great, but neither one is built to handle more complex
design systems, integrated with markup templates and other languages. On
the other side, many of the existing "style guide generators" are too
intrinsically tied to specific JavaScript frameworks, separating
documentation and styles. That may be a good solution for some, but it
didn't feel right for the way we work.

We decided to extend SassDoc, using their framework as a jumping-off
point for something larger. The SassDoc syntax uses a variant on Sass
line-comments to explicitly mark documentation for parsing:

```scss
// Normal Sass comments are ignored by SassDoc

/// Comments that begin with 3 slashes
/// will be parsed as SassDoc documentation.
```

In addition to allowing prose descriptions (parsed as markdown), SassDoc
includes a number of explicit annotations, using an `@annotation`
syntax. Here are just a few of their options:

```scss
/// @group buttons
/// @access public
/// @param {color} $color [green] - The background color for the button
/// @example scss
///   .button {
///     @include call-to-action(red);
///   }
```

Herman supports [all SassDoc annotations], and we've added style guide
features of our own...

[KSS]: http://warpspire.com/kss/
[SassDoc]: http://sassdoc.com/
[all SassDoc annotations]: http://sassdoc.com/annotations/

## Visualizing Design Tokens

A "design token" is an abstract bit of design language that normally
becomes visible only when applied to more explicit patterns and
components. Colors, fonts, scales, and grid-configurations act as
"sub-atomic" aspects of a design system --often stemming directly from
the brand, before any UI components have been built. This is a good
place to start defining your system, and Herman can help you visualize
these abstractions.

Herman provides display annotations for [colors] (`@colors`), [fonts]
(`@fonts`), [sizes] (`@sizes`), and [ratios][sizes] (`@ratios`):

```scss
/// @colors brand-primaries
/// @font my-font (normal, bold)
///   <any html head required for CDN font imports>
/// @sizes my-spacing
/// @ratios my-modular-scale
```

[<img src="{{ site.images }}blog/2017/herman-intro/colors.jpg" class="extend-large img-border img-shadow img-spacing" alt="Herman color palettes" />][colors]

[<img src="{{ site.images }}blog/2017/herman-intro/sizes.jpg" class="extend-small img-border img-shadow" alt="Herman size palettes" />][sizes]

In order to display that data, you will need to export all your Sass
tokens to json, using our provided [Sass export utilities]. We're
working to make this step even more simple and automatic.

We also provide an `@icons` annotation to display all the SVG icons in a
given folder:

```scss
/// @icons path-to/my-assets/svg/
```

[<img src="{{ site.images }}blog/2017/herman-intro/icons.jpg" class="extend-small img-border img-shadow" alt="Herman icon palettes" />][img]

[colors]: /herman/docs/demo_colors.html
[fonts]: /herman/docs/demo_fonts.html
[sizes]: /herman/docs/demo_sizes.html
[Sass export utilities]: /herman/docs/api_json-export.html
[img]: /herman/docs/demo_icons.html

## Rendered Output & Examples

At the pattern level, we include more robust tools for rendering code
examples and live patterns. While SassDoc only documents Sass
abstractions, Herman allows [documentation of CSS selectors and markup
patterns].

We've extended SassDoc's `@example` annotation for languages like [Sass]
and [Nunjucks] (we're working on support for Vue components). Herman
will display both input and compiled code, along with the rendered
output when necessary:

```scss
/// Add default button styles to an element.
/// @group buttons
/// @example html - submit button
///   {​% import 'content.macros.j2' as content %}
///   {​{ content.button('Submit', attrs={'type': 'submit'}) }}
[data-btn] {
  border: 1px solid currentColor;
  border-radius: 3em;
  color: pink;
  display: inline-block;
  padding: 0.25em 1em;
}
```

[<img src="{{ site.images }}blog/2017/herman-intro/examples.jpg" class="extend-small img-border img-shadow" alt="Herman rendered example" />][documentation of CSS selectors and markup patterns]

[documentation of CSS selectors and markup patterns]: /herman/docs/demo_examples.html
[Sass]: http://sass-lang.com
[Nunjucks]: https://mozilla.github.io/nunjucks/

## Prose, Pages, and Third-Party Links

In building documentation --from basic reference docs to extensive
design systems --we often find it useful to include additional prose and
links to third-party docs for dependencies. There are several ways to do
this in Herman:

### Free-floating Prose

Any SassDoc comments (`///`) that are not attached to a specific
Sass/CSS objects will appear as free-floating prose, and can be given
generic annotations --such as `@group`, `@example`, `@link`, etc.
--including the Herman design-token annotations.

### Additional Markdown Pages

You can add any number of [markdown documents] to your style guide
navigation, by defining `extraDocs` in your [Herman configuration]. We
use this to create an introduction to our design systems, provide quick
access to a changelog, or document patterns that are not directly
attached to Sass code.

[markdown documents]: /herman/docs/CONFIGURATION.html#extradocs
[Herman configuration]: /herman/docs/CONFIGURATION.html

### Third-party Links

You can also add [external links] to third-party dependencies -so all
relevant documentation is accessible in one place. Define `extraLinks`
in your Herman configuration, and we'll add links to the bottom of the
sidebar.

[external links]: /herman/docs/CONFIGURATION.html#extralinks

## Open Source & Actively Developed

We're using Herman on many of our production projects, and we have big
plans for Herman's future. We'll keep adding features, and we invite you
to do the same. The Herman code is [available on GitHub], and we'd love
to hear your thoughts. File issues for bug-reports, feature requests, or
help getting started --or send us your pull requests.

We'll keep providing our own tutorials and demos based on the questions
we hear most, but we'd also love to list any style guides or pattern
libraries you build with Herman, or any [tutorials] you've written.

We're always excited to collaborate, and we've provided some
["contributing" documentation] to help you get involved.

[available on GitHub]: https://github.com/oddbird/sassdoc-theme-herman
[tutorials]: /herman/articles/
["contributing" documentation]: /herman/docs/CONTRIBUTING.html

## Need help with your design system?

At OddBird, we care deeply about test-coverage and documentation,
accessibility, performance, and UX clarity. Herman is one part of our
solution, but no tool can provide the magic bullet.

**If you need help with a refactor** to improve design systems,
performance, testing, documentation, or accessibility --eliminate
technical debt, and put better processes in place --we're here for you.
Our [team of experts] can provide [a range of support, training, and
consulting] across the full stack of product design & development
--helping find *the solution that best fits your team*. Don't hesitate
to reach out.

You can use our handy [contact form], talk to [@OddBird] on Twitter, or
join our [public Slack] (with a dedicated `#herman` channel). We're
excited to hear from you!

[team of experts]: /birds/
[a range of support, training, and consulting]: /services/design-systems/
[contact form]: /contact/
[@OddBird]: https://twitter.com/oddbird
[public Slack]: http://friends.oddbird.net
