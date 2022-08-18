---
title: Cascade Layers – There's a Polyfill for That!
author: sana
date: 2022-06-21
tags:
  - Article
  - CSS
  - Cascade Layers
  - CSSWG
image:
  src: blog/2022/postcss-cascade-layers-polyfill.png
  alt: |
    An image of the PostCSS Cascade Layers Plugin NPM package README
    including the version number, installation command, and a description of the
    package.
summary: |
  Cascade layers are an exciting new addition to the CSS specification. A newly
  released polyfill now provides even greater browser support for the feature.
---

{% import 'embed.macros.njk' as embed %}

{{ embed.img(
  src='blog/2022/cascade-layers-polyfill-tweet.jpg',
  alt='A tweet of a photo of a talk given at the CSS Day conference by
    Bramus Van Damme where he is standing in front of a slide
    that shows how the cascade layers polyfill transforms CSS.'
) }}

## What are cascade layers and why is everyone so excited about them?

This year, a number of new additions to the CSS specification have been
announced. Cascade layers are one of the most anticipated – and rightfully so.

If you have ever struggled with conflicting CSS selectors, tried making sense of
CSS from various sources, or used `!important` one too many times, you are
either really excited about layers or you are about to be.

In a nutshell, layers allow us to define explicit containers of specificity so
that we have precise control over CSS styles and their priority without relying
on confusing and conflicting hacks.

If you are new to cascade layers, “A Complete Guide to CSS Cascade Layers” by
Miriam Suzanne on
[CSS-Tricks](https://css-tricks.com/css-cascade-layers/#introduction-what-are-cascade-layers)
is a must-read.

This description from [W3](https://www.w3.org/TR/css-cascade-5/) also sums up
the power of layers especially well:

> “Authors can create layers to
> represent element defaults,
> third-party libraries, themes,
> components, overrides, and other
> styling concerns – and are able to
> re-order the cascade of layers in an explicit way, without altering
> selectors or specificity within each
> layer, or relying on source-order to
> resolve conflicts across layers.”

If you want to play around with layers and see how exactly they work, check out
this [CodePen](https://codepen.io/web-dot-dev/pen/LYzqPEp) to see the at-rule in
action.

## Which browsers currently support `@layer`?

If you’re excited to get started but are wondering which browsers actually
support `@layer`, we have some good news.

The latest versions of Chrome, Firefox, and Safari now all support cascade
layers. If you are looking for specific browsers or versions, you can see the
complete browser support breakdown below from
[CanIUse](https://caniuse.com/css-cascade-layers).

<script src="https://cdn.jsdelivr.net/gh/ireade/caniuse-embed/public/caniuse-embed.min.js"></script>
<p class="ciu_embed" data-feature="css-cascade-layers" data-periods="future_1,current,past_1,past_2,past_3" data-accessible-colours="true">
  <picture>
    <source type="image/webp" srcset="https://caniuse.bitsofco.de/image/css-cascade-layers.webp">
    <source type="image/png" srcset="https://caniuse.bitsofco.de/image/css-cascade-layers.png">
    <img src="https://caniuse.bitsofco.de/image/css-cascade-layers.jpg" alt="Data on support for the css-cascade-layers feature across the major browsers from caniuse.com">
  </picture>
</p>

[Miriam Suzanne](/authors/miriam/) – the author of the CSS layers specification
and the CSS Tricks guide shared above – also created a CodePen to quickly check
if your current browser supports cascade layers:

{{ embed.codepen(
  id='poweapY',
  title='Does This Browser Support @layer?',
  user='miriamsuzanne',
  height=600
) }}

### And for the browsers that don’t yet support layers?

The recent retirement of IE 11 made for some great jokes and celebration, but
even if you or your users aren’t using IE 11, you might still be hesitant to
incorporate `@layer` into your CSS in case your users aren’t using the latest
browser versions.

There is some more good news here as well. We at OddBird worked with the fine
folks at PostCSS to build a plugin that provides a polyfill for layers. The
[PostCSS Cascade Layers
polyfill](https://www.npmjs.com/package/@csstools/postcss-cascade-layers) is
live now and available as an NPM package! 🚀 🎉

## How does the polyfill work?

If you are curious about how the polyfill works exactly, let’s dive into the
details.

The plugin starts by parsing a stylesheet, looking for any layer at-rules (i.e.
`@layer`) and recording the order in which the layer was defined.

In this step, the most specific selector is also recorded and with these two
elements, the plugin determines the specificity adjustment for each layer. This
specificity adjustment represents the importance of the layer in relation to
other layers and unlayered styles.

Next, the plugin begins the transformation of the CSS. The plugin removes the
layer at-rules and gives the styles encompassed in that particular layer the
appropriate specificity that was determined in the first step.

During this transformation, the plugin also applies the highest specificity to
unlayered styles, i.e. styles outside of a layer since they have the highest
priority.

What that looks like in practice is something like this:

```css
target {
  color: purple;
}

@layer {
  target {
    color: green;
  }
}

/* becomes */

target:not(#\#) {
  color: purple;
}

target {
  color: green;
}
```

The [key
principle](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity#increasing_specificity_by_duplicating_selector)
behind the polyfill is that increasing the number of selectors is a
browser-compatible way to increase specificity and importance in CSS.

The example above is fairly simple, but if your stylesheet has a number of
layers and highly specific selectors, you can expect the transformation to
leverage a greater number of selectors to accommodate the complexity.

The README in the
[GitHub](https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-cascade-layers#how-it-works)
repository for the polyfill illustrates this with a table:

<table data-table>
  <thead>
    <tr>
        <th>layer</th>
        <th>specificity adjustment</th>
        <th>selector</th>
    </tr>
  </thead>
  <tbody>
    <tr>
        <td><code>A</code></td>
        <td>0</td>
        <td>N/A</td>
    </tr>
    <tr>
        <td><code>B</code></td>
        <td>3</td>
        <td><code>:not(#/#):not(#/#):not(#/#)</code></td>
    </tr>
    <tr>
        <td><code>C</code></td>
        <td>6</td>
        <td><code>:not(#/#):not(#/#):not(#/#):not(#/#):not(#/#):not(#/#)</code></td>
    </tr>
  </tbody>
</table>

The polyfill handles both named and anonymous layers as well as layers that are
nested within each other.

One of the highlights of cascade layers is how this at-rule can be used in
conjunction with `@import` to create a new layer from an input source like so:

```css
 @import 'theme.css' layer(utilities);
```

The plugin also supports this feature since there is an existing PostCSS plugin
for `@import` that you can leverage. That was an advantage of working within the
PostCSS ecosystem.

### So…what does the polyfill not do?

There are some expected limitations of the plugin since it is parsing a
stylesheet and not running in the browser.

The two main things that the plugin does not currently handle are:

- Layers within media queries: When `@layer` is inside `@media`, the layers are
  conditionally rendered if the media query is true. It is not possible for this
  plugin polyfill to know if that is true when the stylesheet is being parsed so
  this is not currently supported.

- `revert-layer`: This keyword, as
  [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/revert-layer#revert-layer_vs_revert)
  explains, is to “rollback styles to the ones specified in previous cascade
  layers”. The plugin cannot support this feature since it is not possible in
  the build step to know which selectors will apply to any given element.

On the bright side, the plugin does look for these elements when parsing the
stylesheet, and will inform authors that they are not currently supported or
handled by the plugin.

These elements are best handled by polyfills in the browser, so keep your eyes
on the [OddBird blog](/blog/) to find out when a browser polyfill becomes
available as well.

## How to use the polyfill

The PostCSS Cascade Layers plugin will run in all Node environments, and special
instructions are available for: [Node][node], [PostCSS CLI][postcss-cli],
[Webpack][webpack], [Create React App][cra], [Gulp][gulp], and [Grunt][grunt].

[node]: https://github.com/csstools/postcss-plugins/blob/main/plugins/postcss-cascade-layers/INSTALL.md#node
[postcss-cli]: https://github.com/csstools/postcss-plugins/blob/main/plugins/postcss-cascade-layers/INSTALL.md#postcss-cli
[webpack]: https://github.com/csstools/postcss-plugins/blob/main/plugins/postcss-cascade-layers/INSTALL.md#webpack
[cra]: https://github.com/csstools/postcss-plugins/blob/main/plugins/postcss-cascade-layers/INSTALL.md#create-react-app
[gulp]: https://github.com/csstools/postcss-plugins/blob/main/plugins/postcss-cascade-layers/INSTALL.md#gulp
[grunt]: https://github.com/csstools/postcss-plugins/blob/main/plugins/postcss-cascade-layers/INSTALL.md#grunt

If you’re ready to get started, here are the first steps to get going.

Begin by installing the PostCSS Cascade Layers plugin into your project:

```bash
npm install postcss @csstools/postcss-cascade-layers --save-dev
```

Next, use it as a PostCSS plugin:

```js
const postcss = require('postcss');
const postcssCascadeLayers = require('@csstools/postcss-cascade-layers');

postcss([
  postcssCascadeLayers(/* pluginOptions */)
]).process(YOUR_CSS /*, processOptions */);
```

## Let the layering begin! 🥳

Cascade layers are a game changer, and we hope that with this new polyfill
you're excited and ready to start using them in your CSS.

Have you already started using cascade layers and/or the new polyfill? Tweet
[@OddBird](https://twitter.com/oddbird) and tell us all about it, especially if
you have feedback, questions, or suggestions!
