---
title: Code Patterns & Style Guides
author: miriam
tags:
  - Article
  - Color
  - Typography
  - Fonts
  - Design Systems
  - Style Guides
  - Component Libraries
  - Accoutrement
  - Herman
  - OddTools
  - OddSite
  - Open Design
  - Documentation
image:
  src: blog/2017/pattern-making/NYC-sign.jpg
  alt: Blueprint for NYC signage
summary: |
  Living Style Guide documentation on the web is a difficult problem,
  gaining a lot of attention in the last few years. Let's take an in-depth
  look at one way to store patterns directly in Sass, and generate
  documentation automatically.
date: 2017-03-07
---

I've often been asked how we sell style guides to our clients. The short
answer is: *we don't*. Our clients want to put usable features in front
of real users on a tight schedule. Style guides aren't the product,
they're part of the process.

Style guides are necessary, but keeping them alive can be difficult and
time-consuming. We have to find ways to integrate documentation into the
daily workflow, or it will get lost in the scramble for bigger and
better features.

As [Carl] likes to say: *un-tested code is legacy code – even if you
wrote it an hour ago*.

As I like to say: *if you don't document something, it doesn't exist*.

We've been struggling with these problems for a long time, and slowly
developing a set of tools to help us manage our patterns in code, and
document the results as we go. We're not done, but we've learned a lot,
and I'd like to show you what we have so far.

[Carl]: /authors/carl/

## Starting Abstract

The first style patterns we add to any new project (including this
[OddSite design]) are color palettes, fonts, and a typographic scale.
These are what I call "abstract" patterns – conceptual rules that exist
before any element is ever styled on the page.

My first goal is to make these patterns tangible in our code, so they
"exist" somehow outside our own imaginations. Our living style guide
(which will include colors, fonts, and sizes) must be based on real and
meaningful code, or it's nothing but theory.

[OddSite design]: /tags/open-design/

## Grouping Variables into Maps

Lucky for us, CSS pre-processors like Sass and Less were invented to
solve this problem. It’s common to store abstract patterns in Sass
variables. Here are some example variables from [Bootstrap-Sass], where
they define nearly [400 variables in a single file][]:

```scss
// brand colors:
$brand-primary:         darken(#428bca, 6.5%) !default; // #337ab7
$brand-success:         #5cb85c !default;
$brand-info:            #5bc0de !default;
$brand-warning:         #f0ad4e !default;
$brand-danger:          #d9534f !default;

// applied colors:
$link-color:            $brand-primary !default;
$link-hover-color:      darken($link-color, 15%) !default;

// font stacks:
$font-family-sans-serif:  "Helvetica Neue", Helvetica, Arial, sans-serif !default;
$font-family-serif:       Georgia, "Times New Roman", Times, serif !default;

// font sizes:
$font-size-base:          14px !default;
$font-size-large:         ceil(($font-size-base * 1.25)) !default; // ~18px
$font-size-small:         ceil(($font-size-base * 0.85)) !default; // ~12px

// spacing sizes:
$padding-base-vertical:     6px !default;
$padding-base-horizontal:   12px !default;
```

There’s nothing wrong about that approach, and it's certainly not unique
to Bootstrap. This is what variables are designed for, and patterns
defined this way are easy to access without any help from a toolkit.

What’s missing is an explicit sense of the patterns developing here:
brand-colors, link-colors, fonts, etc. Variables are only related in
implicit ways, by giving them similar names. We assume that
`$brand-primary`, `$brand-success`, and `$brand-info` are part of the
same pattern because they look similar – but that implicit relationship
relies on naming conventions, code proximity, and human interpretation.
Sass has no way of understanding these relationships, or automating
style guides from them.

To address those issues, we group all our common settings into a few map
variables. If you haven’t used Sass Maps, they are a variable type
similar to arrays, dictionaries, or objects in other languages – a set
of `key: value` pairs contained in a single variable.

Converting the brand-colors above might look something like this:

```scss
$brand-colors: (
  'primary':  darken(#428bca, 6.5%),
  'success':  #5cb85c,
  'info':     #5bc0de,
  'warning':  #f0ad4e,
  'danger':   #d9534f,
) !default;
```

Now the brand-colors are grouped explicitly, clear to both humans and
compilers, with less clutter in the global namespace.

[Bootstrap-Sass]: https://github.com/twbs/bootstrap-sass
[400 variables in a single file]: https://github.com/twbs/bootstrap-sass/blob/master/assets/stylesheets/bootstrap/_variables.scss

## Other Map Advantages

Maps provide other advantages over variables, especially when you want
to make programmatic adjustments. In fact, maps were added to Sass to
replace *variable-name interpolation*. New variables can’t be generated
in Sass, but new map keys can. The following code attempts to create and
save lighter and darker versions of our primary brand color. This won’t
work, using variables:

```scss
@for each $adjustment in ('lighten', 'darken') {
  $new-color: call($adjustment, $brand-primary, 10%);

  // There is no Sass syntax for this...
  $brand-primary-#{$adjustment}: $new-color;
}
```

But it does work, using map keys:

```scss
@for each $adjustment in ('lighten', 'darken') {
  $new-color: call($adjustment, $brand-primary, 10%);
  $new-color-map: ('primary-#{$adjustment}': $new-color);

  $brand-colors: map-merge($brand-colors, $new-color-map);
}
```

The same is true with accessing variable names and map keys
programmatically. Using variables, it fails:

```scss
@for each $header in ('h1', 'h2', 'h3') {
  #{$header} {
    @if variable-exists('font-size-#{$header}') {
      // There is no Sass syntax for this...
      font-size: $font-size-#{$header};
    }
  }
}
```

Again, it works great with a map key:

```scss
@for each $header in ('h1', 'h2', 'h3') {
  #{$header} {
    @if map-has-key($text-sizes, $header) {
      font-size: map-get($text-sizes, $header);
    }
  }
}
```

That may not be a common use-case, but it can come in handy for
automating repetitive patterns. More important to OddBird’s daily use,
we can also automate some basic style guides with very little effort –
looping through the maps to get all the data we need. We’ll get to that
later.

## The Map Problem

Of course, no solution is perfect, and maps come with their own
problems. Some are simple text-editor issues, like the ability for most
language-helpers to autocomplete variable names, but not map keys.
That's a minor frustration, but there’s another map issue that can
really ruin your entire day:

Sass variables can easily reference other variables – e.g
`$blue-gray: desaturate($blue, 20%);` – but **map values cannot
reference other values in the same map**.

```scss
$colors: (
  'blue': #339,
  'blue-gray': desaturate(map-get($colors, blue), 20%),
);

// SASS ERROR: Undefined variable: "$colors".
```

That's ugly, and it doesn't work. At the point where we are calling the
map, it hasn't yet been defined. Technically, we could only reference
values from previously-defined maps, and build our patterns that way –
but that gets even uglier:

```scss
$colors: (
  'blue': #339,
);

$colors: map-merge($colors, (
  'blue-gray': desaturate(map-get($colors, blue), 20%),
));
```

What’s the point of grouping all your values in a single variable, if
you have to define it over and over, one small piece at a time?

Lucky for you, there’s nothing I love more than over-engineering Sass
tools...

## A Functional Solution

Clearly we have to make some changes to our map. Instead of referencing
and manipulating values directly, we use an invented syntax to define
what references and manipulations *should* happen:

```scss
// Define first...
$colors: (
  'blue': #339,
  'blue-gray': 'blue' ('desaturate': 20%),
);
```

Our syntax has two parts: a base color – which can be any color-value,
or another key in the map – and an optional map of adjustments,
including function names, and additional arguments:

```scss
$color: (
  // <name>: <base-color> (<function>: <arguments...>, ...),
  'blue-gray': 'blue' ('desaturate': 20%, 'lighten': 15%),
);
```

That's hopefully human-readable, and loosely based on functional
programming standards, but it will require processing in order to work.
We need some functions that know how to parse our syntax, and return
CSS-ready results.

At OddBird we have three abstract "Sass [Accoutrement]" toolkits
([color], [scale], and [type]) each containing a core function to
compile our maps. In the color module, that function is simply called
`color()`, and works like this:

```scss
// Calculate on-the-fly...
$result: color('blue-gray');
```

While `'blue' ('desaturate': 20%)` doesn’t mean anything special to
Sass, the `color()` function understands how to parse that syntax, and
make the necessary conversions. First it has to look up the reference
color (`#339` above), and then call the adjustment function mentioned
(`desaturate`), passing in the base color and the given argument
(`20%`).

You can play with it yourself in this CodePen demo:

<p data-height="420" data-theme-id="0" data-slug-hash="xqOwxe" data-default-tab="css,result" data-user="miriamsuzanne" data-embed-version="2" data-pen-title="Accoutrement Color Example" data-editable="true" class="codepen">See the Pen <a href="https://codepen.io/miriamsuzanne/pen/xqOwxe/">Accoutrement Color Example</a> by Miriam Suzanne (<a href="https://codepen.io/miriamsuzanne">@miriamsuzanne</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

As you can see, that demo also generates a rough style guide on-the-fly,
with nothing but Sass and empty `div` elements – a pretty good
proof-of-concept for the more robust style guide generator we'll develop
later.

[Accoutrement]: /accoutrement/
[color]: /accoutrement/docs/color.html
[scale]: /accoutrement/docs/scale.html
[type]: /accoutrement/docs/type.html

### The Theming Option

There’s an interesting side effect of our solution that I’ve never
really dug into before now. While variable relationships are static,
calculated at the point they are defined, our relationships remain
dynamic until they are called.

Let’s start with a few colors defined as variables, with one color based
on the other color:

```scss
$brand: #339;
$brand-light: lighten($brand, 10%); // #4040bf
```

If I override the value of `$brand` later in the document, that will
have no effect on the value of `$brand-light`:

```scss
$brand: #339;
$brand-light: lighten($brand, 10%); // #4040bf

$brand: #933;

.static-variables {
  background: $brand-light; // #4040bf – still the same...
}
```

The lighten-10% relationship is lost, unless we re-define both colors at
once. If we do the same thing using Sass maps, we get a different
result:

```scss
$colors: (
  'brand': #339,
  'brand-light': 'brand' ('lighten': 10%), // #4040bf
);

$colors: map-merge($colors, ('brand': #933));

.dynamic-values {
  background: color('brand-light'); // #bf4040 – it changed!
}
```

Keeping that relationship dynamic could allow us to handle theming in
new ways. Change the base color on-the-fly, and watch the results
trickle down.

## Trade-Offs

We use the same approach for colors, sizes, and fonts – with additional
helpers to manage contrast-ratios, modular-scales (when needed), robust
webfont importing, and (most importantly) automated style guides.

Since the abstract site configuration is stored in a meaningful way, we
can [export all that data to JSON] and pass it along to a tool like
[SassDoc] for display. We're working on a SassDoc theme of our own,
called [Herman], which knows how to display color-palettes, type scales,
and font specimens.

You can look at our [OddSite config] files on Github, and [see the
generated docs] live. Herman is far from complete, but it's already been
useful in generating docs as we go – with little extra effort. Any time
a new color is added to the map, it is automatically available to our
`color()` function, and simultaneously appears in the style guide. The
pattern is documented directly in the code.

That meaningful structure provides a lot of power, but comes with
trade-offs. We have to invent our own syntax, which raises the learning
curve for new developers, and eliminates some text-editor autocomplete
gains. We've added dependencies to the project, making it also more
difficult to test ideas in sandbox systems like [Codepen] and
[Sassmeister].

Are those trade-offs worth it? That depends on your needs, and the needs
of the project. No solution is one-size fits all. We hope some of these
issues can be resolved in our toolkit – like adding a hosted sandbox to
our style guides – but your milage will almost certainly vary.

How have you handled site configuration and documentation in your projects? How
would you improve on our map solution? We'd love to hear your thoughts on
[Twitter], or through our [handy contact form]. Happy coding!

[export all that data to JSON]: https://github.com/oddbird/sass-json-export
[SassDoc]: http://sassdoc.com
[Herman]: https://github.com/oddbird/sassdoc-theme-herman
[OddSite config]: https://github.com/oddbird/oddsite/tree/master/static/sass/config
[see the generated docs]: /styleguide/
[Codepen]: https://codepen.io/
[Sassmeister]: https://www.sassmeister.com/
[Twitter]: https://twitter.com/oddbird
[handy contact form]: /contact/
