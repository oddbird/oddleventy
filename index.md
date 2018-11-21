---
title: Oddly Accessible Development
layout: 'layouts/base'
nav:
  order: 0
  title: Home
---

{% import 'utility.macros.njk' as utility %}

# This is a test…

<!-- more -->

<a {{ utility.attr_if('href', site.email) }}>{{ site.url }}</a>

```js
const {URL} = require('url')
const {DateTime} = require('luxon')
const pluginSyntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight')
const pluginTOC = require('eleventy-plugin-toc')
```
