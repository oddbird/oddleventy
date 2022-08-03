---
title: Not All Zeros are Equal
sub: And every 'best practice' comes with caveats
author: miriam
date: 2022-08-04
image:
  src: blog/2022/slip-hazard.jpg
  alt: |
    Black text on bright yellow sign,
    Caution, slip hazard,
    with stick figure falling backwards.
tags:
  - Article
  - CSS
summary: |
  There's a well-established 'best practice'
  that CSS authors
  (as well as linters and minifiers)
  should remove units from any `0` value.
  It's a fine rule in most cases,
  but there are a few common situations
  where it will break your code.
---

{% import 'embed.macros.njk' as embed %}

I've been working on a redesign of my personal site,
and found I was fixing the same issue over and over.
Make the change, test it, commit, and then...
why is it broken again?

## The intended behavior

When setting typography in a design,
I like to 'outdent' lists --
pulling the list markers
(bullets or numbers)
out into the margin of the document,
so that the list contents align
with the content on either side.

If you're reading this
on the OddBird website
with a wide enough browser,
you'll see that we do that here:

- On wide screens, the bullets of this list should be hanging in the margin.
- But on narrow browsers, there's not enough 'margin' available.
- For the list-markers to remain visible on small screens,
  we switch to the browser-default
  'hanging indent' --
  list markers aligned to surrounding content,
  and list contents indented.

There are various ways we could handle that indent/outdent logic
(and container queries could be useful).
For my site,
I decided to set up an `--outdent` custom property
on typesetting containers.
The `--outdent` variable conveys if/when and how much
margin is available for content:

```css
main {
  --outdent: 0;

  @media (min-width: 40em) {
    --outdent: -1em;
  }
}
```

- By default, for small screens, the `--outdent` is `0`.
- When a container has more space,
  I toggle the `--outdent` to something like `-1em`.

Some elements (like figures)
get the outdent applied directly to a margin:

```css
figure {
  margin-inline-start: var(--outdent);
}
```

But the list logic is a bit more complicated.
Since list markers hang 'outside the list' by default,
we need `0` list-padding on large screens
and additional padding on small screens
to achieve an indent.
I do that with a `calc()` function:

```css
ol, ul {
  /* (1em + 0 == 1em) and (1em + -1em == 0) */
  padding-inline-start: calc(1em + var(--outdent));
}

li {
  /* nested lists should not outdent */
  --outdent: 0;
}
```

There would be other ways to do this of course --
but it made sense to me
as a way of handling different outdent styles
with a single variable toggle.

**Sadly, the code above doesn't work.**

Why?
Everything looks right,
and my `figure` elements outdent as expected --
but the list never indents on small screens.
Looking closer,
it seems the entire `calc()` function
is considered _invalid_.
What am I doing wrong?

## CSS value types

CSS is a 'typed' language.
Every value falls into
one of several
'[data types](https://drafts.csswg.org/css-values-4/)' --
like a 'number' or 'length' or 'color'.
There are many different types in CSS,[^design-types]
many of them specific to the needs of designers --
and every property has specific 'type' requirements:

- A `margin` value must be a `<length>`
- A `background-color` must be a `<color>`
- An `animation-duration` must be a `<time>`
- A `line-height` can be a `<number>` or a `<length>`,
  but the two types are handled differently

The only difference between a `<number>`,
a `<length>`, and a `<time>` is in the units applied.
A `<number>` like `1` becomes a `<length>`
if you add length-units (`1px`, `1em`, etc)
and a `<time>` if you add time-units (`1s`, `1ms`, etc).

In some cases, `1` can even be a `<string>`.
While [CSS counters](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Counter_Styles/Using_CSS_counters)
are clearly counting with numbers,
the output from `counter()` and `counters()`
will always be a `<string>` representation of that count.
For now, the same is true for output of the `attr()` function.
That's part of why we can't (currently)
use counters & attributes to do much outside generated content.
(The other reason is that these functions only work in the `content` property,
but the logic of that is a bit recursive --
if the only output is a `<string>`,
and only `content` accepts `<string>` values,
there's no reason to allow counters anywhere else.)

And CSS doesn't generally allow _coercing_ values
from one type to another.
There's no way to take a string and turn it into a number,
or vice versa.
We can convert a number into a length (or time) --
`calc(<number> * <length>)` will return a `<length>` value --
but we can't (yet) go the other way:[^unit-division]

```css
.example {
  --number: 3;
  /* converts the number 3 to the length of 3em */
  margin-block: calc(var(--number) * 1em);
}
```

[^design-types]: This is one reason
  I strongly prefer using [Sass](https://sass-lang.com/)
  to manage 'tokens' in a design system,
  rather than a language like YAML or JSON.
  Sass is entirely organized around the CSS type system
  and 'design-relevant' types --
  lengths, colors, etc.
  Languages that are not intended for 'design' specifically
  tend to have very different value types.

[^unit-division]: The spec allows for removing units through division,
  but no browsers have implemented that feature yet.

## Zero is (often) special

In most cases, zero is an exception to the type rules --
we can use it in many places as either a `<number>` or a `<length>`
without adding any units!
That's because `0` is the same length (no length!),
no matter what units you apply to it.
Zero `em` is the same as zero `px` and zero `%` and so on.
You can't set `margin` to `5` (a `<number>`),
but you _can_ set it to `0` (also a `<number>`).

For _zero and only zero_,
we can use a `<number>` when CSS expects a `<length>`.

And over time,
that has become a 'best practice' --
often enforced by CSS linters & minifiers.
The usual reasoning is performance.
Removing all the units from zeros
will save you a couple bytes
for every occurrence.
You could also consider it better for readability --
if all zero values are equal,
units only distract from the meaning.

## Zero is (not always) special

That 'best practice' works great
for raw zero values,
directly applied to properties like
`margin` or `padding` --
but there are other places
where this 'best practice' will break your CSS.

In general:
_when zero is inside a function, the type of zero matters_.
(At least,
that's where I've always encountered the issue.)

While the `rgb()` function
accepts either `<number>` (0-255)
or `<percentage>` (0%-100%) values,
you are not allowed to combine both types:

```css
html {
  /* valid colors */
  color: rgb(0 60 80);
  color: rgb(0% 60% 80%);

  /* invalid colors */
  color: rgb(0% 60 80);
  color: rgb(0 60% 80%);
}
```

Other color functions have more strict requirements.
In `hsl()` only the hue value can be a `<number>` or `<angle>`,
but the lightness and saturation must be percentages:

```css
html {
  /* valid colors */
  color: hsl(0 60% 80%);
  color: hsl(0deg 60% 80%);

  /* invalid colors */
  color: hsl(60 0 80);
  color: hsl(60deg 0 80%);
}
```

The same is true inside the `calc()` function.
Numbers can be added or subtracted with other numbers,
and lengths can be added or subtracted with other lengths.
_It is invalid to add or subtract a number with a length_.
And that is true _even if the number or length is zero_:

{{ embed.codepen(
  id='RwMQRpa',
  title='some zeros need units',
  user='miriamsuzanne',
  height=500
) }}


It turns out this is also documented
[in the specification](https://drafts.csswg.org/css-values-4/#typedef-calc-sum)
for the `calc()` function:

> Note: Because `<number-token>`s
> are always interpreted as `<number>`s or `<integer>`s,
> "unitless 0" `<length>`s aren’t supported in math functions.
> That is, `width: calc(0 + 5px);` is invalid,
> because it’s trying to add a `<number>` to a `<length>`,
> even though both `width: 0;` and `width: 5px;` are valid.

## Fixing the outdent use-case

This is the issue with my `--outdent` code above:

```css
ol, ul {
  /* (1em + 0 == 1em) and (1em + -1em == 0) */
  padding-inline-start: calc(1em + var(--outdent));
}

li {
  /* nested lists should not outdent */
  --outdent: 0;
}
```

When `--outdent` is zero (without any units),
the `calc()` function becomes `calc(0 + 1em)` --
a `<number>` being added to a `<length>` --
which is invalid.
The entire declaration is ignored,
and no `padding` is applied.

The fix is simple:
add units to the `--outdent`,
even when the value is zero:

```css
li {
  /* any length units will work here */
  --outdent: 0px;
}
```

And the reason that I keep fixing this same issue
over and over
is because I use a linter that doesn't understand the issue.
That linter runs every time I commit my code,
and wipes out the units that I've supplied.

## Be cautious with linting & minification

Depending on the linter,
I can likely turn off that particular 'optimization' --
and then also file an issue for them to fix.
That's fine.
I understand
that it is not easy to account for every edge case.
There will always be issues that come up.

But these problems are exacerbated
by tools like linters & minifiers
which apply opinionated transformations
to already-valid code.

I had a similar issue last week,
with a CSS minifier
_removing all Cascade Layers from my CSS_.
In one case,
the transformation is an over-eager 'best practice'.
In the other it's an over-eager attempt
to remove 'unknown syntax'.
In both cases,
_I wish linters and minifiers
would be less eager to transform my code_.

I think we (as an industry)
tend to adopt rules and 'best practices' very quickly,
without communicating the caveats clearly,
and then we fail to update our understanding as things change.
Tools based on these 'best practice' trends
need to be _written_ and also _used_ with caution.
They should generally not transform _unknown syntax_,
which includes _values inside custom properties_ --
where nearly any value is allowed,
and the purpose of the property is unknown.
