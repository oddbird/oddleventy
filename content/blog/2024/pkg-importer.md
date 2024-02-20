---
title: Setting up Sass pkg URLs in Webpack
sub: A quick guide to using the new Node package importer
author: james
date: 2024-02-23
image:
  src: blog/2024/sass-package.jpg
  alt: >
    Stacks of a variety of cardboard and food boxes,
    some leaning precariously.
  position: top
tags:
  - Article
  - Sass
  - Package management
summary:
  Enabling `pkg:` URLs is quick and straightforward
  in projects using Vite or Webpack `sass-loader`,
  and simplifies using packages from the `node_modules` folder.
---
Over the years, there have been a variety of methods for resolving third party
libraries in Sass. I've used `includePaths`, a preceding `~`, or even
`../../../../node_modules` (and hoping I get the levels correct, and never have
to move the files).

Sass 1.71.0 introduces a new standard way, with `pkg:` URLs. More can be found
on the [official blog post](https://sass-lang.com/blog/announcing-pkg-importers/),
and this article shows how quick it is to set it up.

## Enabling `pkg:` URLs in Webpack

I am currently working on a project creating components in Storybook,
using Bootstrap as a base theme. Because of some project requirements,
we're still using Webpack with Storybook, and not the latest versions with Vite.
Luckily, this setup makes it easy to use the new `pkg:` URLs.

First, I needed to install the latest version of Sass, using `npm install sass`.

In Storybook, Webpack is setup in `.storybook/main.ts`. There, we need to import
the built-in NodePackageImporter from `sass`:

`import { NodePackageImporter } from 'sass';`

Then, I updated the rule for `sass-loader` to use the new importer.

```js
// File: .storybook/main.ts
{
	loader: require.resolve('sass-loader'),
	options: {
		implementation: require.resolve('sass'),
		sourceMap: true,
		api: 'modern',
		sassOptions: {
			importers: [new NodePackageImporter()],
		},
	},
},
```

By default, `sass-loader` uses the Legacy API, which has slightly different
syntax. This is because it only supports a single importer.

```js
// File: .storybook/main.ts
{
	loader: require.resolve('sass-loader'),
	options: {
		implementation: require.resolve('sass'),
		sourceMap: true,
		sassOptions: {
			pkgImporter: new NodePackageImporter(),
		},
	},
},
```

Then, all that is left is updating the imported URLs in your Sass files.

Before:

```css
/* File: ./src/styles/index.scss */
@import '../../node_modules/bootstrap/scss/bootstrap';
```

After:

```css
@import 'pkg:bootstrap';
```

Wait- what happened to the file path? The `pkg:` importer not only locates the
`node_modules` folder, it also enables some smart path resolution. The key in
this case is in Bootstrap's `package.json` file-

```js
// File: node_modules/bootstrap/package.json
...
"sass": "scss/bootstrap.scss",
...
```

The `pkg:` importer also understands Node's Conditional Exports, which provide
library authors a lot of control over how internal files are exposes to users.

## Enabling `pkg:` URLs in Vite

Vite-based projects can also easily use the Node package importer. Again, I
started by updating Sass using `npm install sass`.

This was a fairly simple Vite project, so I hadn't created a configuration file
at `vite.config.ts` yet. Once I created that, I made my changes to the
`css.preprocessorOptions.scss` object.

Note that changes in the `scss` object only will affect `.scss` files. If you're
using the indent-based `.sass` format instead, you'll need to add the Node
package importer to `css.preprocessorOptions.sass`.

Vite currently only supports the legacy API, so I just needed to set the
`pkgImporter` option.

```ts
// ./vite.config.ts
import * as sass from 'sass';
import { defineConfig } from 'vite'
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        pkgImporter: new sass.NodePackageImporter()
      },
    },
  },
});
```

With that in place, I can now update my Sass import.

Before:

```css
/* File: ./src/styles/main.scss */
@use 'vuetify' with (
```

After:

```css
@use 'pkg:vuetify' with (
```

But wait, that's actually more characters- why would I make that change?

Before, the location of `vuetify` was being determined by Vite. Adding `pkg:`
moves that logic into Sass. This doesn't have an immediate impact in this case,
but it does make the code more portable. My styles could be shared with someone
building with Webpack or ported to a future build tool. When more Package
importers become available, this code even be used outside a Node module.

## Taking advantage of simplified imports

Updating your Sass to use `pkg:` URLs is a fairly straightforward quality of
life improvement. I'm looking forward to seeing what can be achieved as more
tools take advantage of the standardized syntax.
