---
title: Support (Not) Unknown
sub: Adding Container Query tests to CSS `@support`
author: miriam
date: 2021-05-13
tags:
  - CSS
  - CSSWG
  - Article
  - Container Queries
extra_styles:
  - page/support-unknown.css
summary: |
  Working on a new CSS feature like Container Queries,
  one of the most important considerations is
  to ensure a "migration path" --
  a way for developers to start integrating the new code,
  without breaking their sites on legacy browsers.
  That looks different depending on the feature,
  but can often include new tests
  for the `@supports` conditional rule.
---

## Understanding `@supports`

The `@supports` rule-block in CSS allows us
to "test" a bit of CSS,
to find out if the browser understands it.
If the test condition is supported (`true`),
the browser will continue to parse any CSS
inside the rule-block.
If the condition is not supported (`false`),
the entire block is ignored.

The basic syntax only allows us to test
isolated property-value pairs:

```css
/* subgrid support */
@supports (grid-template-columns: subgrid) {
  /* only used if the browser understands */
  /* "grid-template-columns: subgrid" */
  .grid-item { margin: 0; }
}

/* variable support (any valid variable) */
@supports (--css: vars) {
  /* only used if the browser understands "--css: vars" */
  button { background: var(--button); }
}
```

Since CSS is already resilient,
allowing browsers to ignore code they don't understand,
we can often use new features without any explicit test.
The `@supports` rule is only necessary
when we need support for one property
to impact how we use other properties --
like changing a margin based on support for subgrid.

It can also be useful to test for _lack of support_,
by adding a "negation" (`not`) to our test:

```css
/* NO variable support */
@supports not (--css: vars) {
  /* only used if the browser DOES NOT understand "--css: vars" */
  button { background: rebeccapurple; }
}
```

## Adding new support tests

When new properties and values are added to CSS,
browsers don't need to update anything --
the new tests can be written in the existing syntax,
and even legacy browsers give us the proper answer
(as long as they understand the basics of `@supports`).

But sometimes we need to test CSS features
that are not based on a property/values pair.
Over the last couple years,
browsers have mostly implemented a syntax
for testing support on selectors:

```css
/* can we style list markers? */
@supports selector(::marker) {
  /* applied if `::marker` IS supported */
}

@supports not selector(::marker) {
  /* applied if `::marker` IS NOT supported */
}
```

I covered that in more detail
with a [video about selector support queries][mozdev]
back in 2019.

[mozdev]: https://www.oddbird.net/2019/11/20/supports-selector/

Now we're also planning to add
a new syntax for testing
if [container queries][cq] are supported:

[cq]: https://www.oddbird.net/2021/04/05/containerqueries/

```css
/* can we use this container query? */
@supports container(min-width: 1em) {
  /* applied if min-width container queries ARE supported */
}

@supports not container(min-width: 1em) {
  /* applied if min-width container queries ARE NOT supported */
}
```

This will also allow us to test
[potential new queries][query-features]
as they get added to the specification.

[query-features]: https://github.com/w3c/csswg-drafts/issues/5989

Over time,
I imagine CSS will continue to add
even more features that need testing,
and some of those will require new testing syntax.
We should be planning ahead to make sure those new features,
and new feature-tests,
work as-expected in our current browsers.

## Unknown feature or unknown test?

Maybe you've already noticed the problem.
In order to signal support,
the browser has to understand both
the feature being tested,
and the syntax of the test.
When we use new syntax to test for support of a new feature,
we're actually testing for support of both at once.

Because of the resilience mentioned above,
browsers that don't understand the new test syntax
will also give us a negative result (no support)
and skip the code-block in question,
even if they do support the new feature.

For some time now,
WebKit browsers (like Safari) have had support
for the `::marker` pseudo-element selector,
but do not yet support the `@supports selector()` syntax.
Several versions of Safari
would give us a false negative
when we test for support of the `::marker` selector,
even though they understand it just fine.
The problem isn't lack of support for the selector,
but lack of support for the new `@supports` syntax.

(The [relevant bug has been closed][webkit-bug],
and the `selector()` syntax now works in
[Safari Technology Preview][stp],
so I expect this will be out-of-date soon.)

[webkit-bug]: https://bugs.webkit.org/show_bug.cgi?id=199237
[stp]: https://developer.apple.com/safari/technology-preview/

While there's some potential for false-negatives,
at least browsers all agree
on how to handle this situation...
at least on the surface.
Behind the scenes
they are doing something slightly different,
which we'll see in a minute.

## Negating the unknown

With both `selector()` and `container()`,
we're testing for support of "wrapping" features:
Selectors wrap around any number of declarations,
and the `@container` query rule wraps around
any number of selector rule-blocks.

Since browsers ignore blocks of code
that they don't understand,
these wrapping features often act as their own
`@supports` conditional test:

```css
/* only applied if the selector has support */
.cat-item::marker {
  content: '😻';
}

/* only applied if container queries have support */
@container (min-width: 60ch) {
  main { display: grid; }
}
```

In these cases,
it is much more useful to test
for _lack of support_,
and provide a fallback value.
We want to use the negation syntax:

```css
@supports not selector(::marker) {
  .cat-item { list-style: none; }
  .cat-item::before { content: '😻';}
}

@supports not container(min-width: 60ch) {
  @media (min-width: 50em) {
    main { display: grid; }
  }
}
```

And this is where browsers disagree.
We can see the result
of their internal differences
when interacting with unknown syntax.

- Some browsers consider unknown syntax
  to mean _lack of support_, a value of `false`
- Other browsers consider unknown syntax to be... unknown.
  They return a value of `unknown`

Those two values,
`false` and `unknown`,
act the same when we're testing basic support --
both of them act like `false`.
But these values behave very differently
when we negate them:

- `not false` is the same as `true`
- `not unknown` is... still just `unknown` (acts like `false` again)

You can't negate the unknown.

## The path forward

When it comes to testing support for new features,
like Container Queries,
we really want the ability to add new syntax,
and then write negative tests of that syntax,
and get the `not false` (`true`) result in old browsers.

I know this is a lot of double-negatives,
so let's look at it in context:

```css
@supports not container(min-width: 1em) {
  /* we want old browsers to parse this code, */
  /* so we need the negated test to be "true" */
  /* "yes, we do not support container queries" */
}
```

I opened an issue
with the CSS Working Group,
where Oriol Brufau pointed out
that the answer depends on
[exactly how we ask the question][table].
Specifically, we can get different results
by adding/removing function arguments,
or wrapping our query in parenthesis.

[table]: https://github.com/w3c/csswg-drafts/issues/6175#issuecomment-826822088

I've expanded on his table here
to show the different results across browsers.
You can see the live result from your current browser,
along with known results from the other major browsers.
I'm using `value` and `fn()` as placeholders
for "unknown tests" --
since neither of these are supported anywhere:

<table id="unknown-support">
  <thead>
    <th><code>@supports</code>…</th>
    <th>Live Result</th>
    <th>Firefox</th>
    <th>Chromium</th>
    <th>WebKit</th>
  </thead>
  <tbody>
    <tr class="value-wrap">
      <th><code>not (value)</code></th>
      <td class="live">
        <span data-live="true">true</span>
        <span data-live="false">false</span>
      </td>
      <td class="true">true</td>
      <td class="true">true</td>
      <td class="true">true</td>
    </tr>
    <tr class="empty-fn">
      <th><code>not fn()</code></th>
      <td class="live">
        <span data-live="true">true</span>
        <span data-live="false">false</span>
      </td>
      <td class="true">true</td>
      <td class="false">false</td>
      <td class="false">false</td>
    </tr>
    <tr class="fn">
      <th><code>not fn(value)</code></th>
      <td class="live">
        <span data-live="true">true</span>
        <span data-live="false">false</span>
      </td>
      <td class="true">true</td>
      <td class="true">true</td>
      <td class="false">false</td>
    </tr>
    <tr class="empty-wrap">
      <th><code>not (fn())</code></th>
      <td class="live">
        <span data-live="true">true</span>
        <span data-live="false">false</span>
      </td>
      <td class="true">true</td>
      <td class="false">false</td>
      <td class="true">true</td>
    </tr>
    <tr class="wrap-fn">
      <th><code>not (fn(value))</code></th>
      <td class="live">
        <span data-live="true">true</span>
        <span data-live="false">false</span>
      </td>
      <td class="true">true</td>
      <td class="true">true</td>
      <td class="true">true</td>
    </tr>
  </tbody>
</table>

Again,
what we want to see is `true` across the board.
That would mean we can add future support for
unknown features (e.g. `value` and `fn()`),
and have old browsers acknowledge their lack of support.

Earlier this week,
the CSS Working Group resolved that
[unknown `@supports` expressions
should evaluate to false
for all `@supports` rules][resolution] --
which is good news moving forward.
But the table above
suggests that we also have a temporary solution
we can use right away.

[resolution]: https://github.com/w3c/csswg-drafts/issues/6175#issuecomment-839937577

## The conclusion

While we wait for browsers to standardize
how they handle _negation of unknown support_,
developers should wrap any new test syntax in parenthesis:

```css
@supports not (container(min-width: 1em)) {
  /* true, across the board! */
}
```
