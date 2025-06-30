---
title: Speeding Up Your Sass Compilation in Vite and Webpack
sub: A quick guide to adopting the modern Sass API
author: james
date: 2024-08-14
updated: 2025-06-30
image:
  src: blog/2024/sass-compiler.jpeg
  alt: >
    Three roller bladers in racing gear competing, with a blurred background.
  position: top
tags:
  - Article
  - Sass
  - Build Tools
related_tag: Sass
summary:
  Sass compilation can be a speed bottleneck in your build,
  but it doesn't have to be anymore.
---

{% import 'utility.macros.njk' as utility %}

Vite comes with built in support for Sass, as well as other CSS preprocessors.
Just `npm install sass`, import a `.scss` file, and it works.

However, this came with a catch. For every Sass import, a new instance of Sass
would spin up, compile, and spin down. If you have a single imported Sass entry
point file that imports other Sass files, this isn't a big deal. But if you're
using Vue's [Single File
Components](https://vuejs.org/guide/scaling-up/sfc.html) (SFCs) with
`lang="scss"`, you were spinning
up a new Sass instance for every single SFC.

That can add up.

Earlier this year, OddBird helped Sass add a new [`Compiler` API] that allows you
to reuse a single instance of Sass for multiple compilations. While you can
adopt the new API in your own bespoke Sass compilation setup, we were excited to
see the Vite team add support in version 5.4.0.

[`Compiler` API]: https://sass-lang.com/documentation/js-api/classes/compiler/

## How to enable the Sass Compiler API in Vite

{% set update = ['Update', utility.datetime(updated)] | join(' ') %}
{% callout 'note', update %}

[Vite 7.0](https://vite.dev/blog/announcing-vite7) changed the available options
for compiling Sass, simplifying the process even more.

{% endcallout %}

1. Update to Vite version 5.4.0 or above, and ideally 7.0 or above.
2. Switch from `sass` to `sass-embedded` by running `npm uninstall sass; npm
   install -D sass-embedded`.

{% callout 'note', false %}
**Wait -- what's `sass-embedded`?**

Sass is written in Dart. The `sass` package is transpiled to pure-Javascript,
and `sass-embedded` exposes the same API, but around a native Dart executable.
In many situations, `sass-embedded` is faster.
{% endcallout %}

3. Vite 7.0 made the Sass Compiler API the default (and removed support for the
   non-compiler API), so you don't need to opt in to the API. For Vite 5.4.0
   through < 7.0, you will need to opt in. In your `vite.config.js` file, set
   `css.preprocessorOptions.scss.api` to `modern-compiler`.

```js
...
css: {
  preprocessorOptions: {
    // Set `sass` if using the indented syntax
    scss: {
      // Only needed on versions < 7.0.0
      api: 'modern-compiler',
    }
  }
}
...
```

4. Vite 7.0 also removed support for the legacy API, which doesn't support the
   Compiler API anyways. Adjust any options from the [`legacy`] API options to
   the [`modern`] API options. In my case, I needed to update `pkgImporter` to
  `importers: [new NodePackageImporter()]` and change the import of
  `NodePackageImporter` from `sass` to `sass-embedded`.

[`legacy`]: https://sass-lang.com/documentation/js-api/interfaces/legacystringoptions/
[`modern`]: https://sass-lang.com/documentation/js-api/interfaces/stringoptions/

And you're done. Now your Vite compilation time should be even faster!

## How to enable the Sass Compiler API in Webpack

Webpack's `sass-loader` also has support for the Compiler API.

1. Update to sass-loader version 14.2.0 or above.
2. Switch from `sass` to `sass-embedded` by running `npm uninstall sass; npm
   install -D sass-embedded`.
3. In your `webpack.config.js`, set the `options.api` to `modern-compiler` for
   the `sass-loader` rule.

```js
...
{
  loader: "sass-loader",
  options: {
    api: "modern-compiler",
  },
}
...
```

## Benefits

The benefit here is going to be very project-dependent. In our codebases,
we saw `vite build` times improving from ~4.7s to ~3.9s in a smaller project,
and from ~5.9s to ~3.8s in a larger project.
[Others](https://github.com/vitejs/vite/pull/17728#issuecomment-2247572134) have
seen up to an 8x speed improvement. Incremental dev builds should also be
faster.

Let us know what kind of speed improvements you see in your projects!
