---
eleventyExcludeFromCollections: true
title: Redirecting
sub: This page has moved
pagination:
  data: redirects
  size: 1
  alias: redirect
permalink: /{{ redirect.from }}
---

{% import 'post.macros.njk' as post %}

{% set to = collections.all | getPage(redirect.to) %}

Redirecting you to [{{ post.name(to) }}]({{ redirect.to }}).
If you are not redirected shortly, please click the link.
