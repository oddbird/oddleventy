---
eleventyExcludeFromCollections: true
title: Redirecting
sub: This page has moved
redirects:
  - from: /open-source/accoutrement/
    to: /accoutrement/
  - from: /accoutrement-color/
    to: /accoutrement/
  - from: /accoutrement-init/
    to: /accoutrement/
  - from: /accoutrement-layout/
    to: /accoutrement/
  - from: /accoutrement-scale/
    to: /accoutrement/
  - from: /accoutrement-type/
    to: /accoutrement/
  - from: /services/design-systems-training/
    to: /workshops/resilient-systems/
  - from: /talks/resilient-systems/
    to: /workshops/resilient-systems/
  - from: /talks/advanced-css-workshop/
    to: /workshops/advanced-css/
  - from: /speaking/
    to: /services/speaking/
  - from: /work/services/
    to: /services/
pagination:
  data: redirects
  size: 1
  alias: redirect
permalink: /{{ redirect.from }}
---

{% set to = collections.all | getPage(redirect.to) %}
{% set name = to | render('banner') or to | render('title') %}

Redirecting you to [{{ name | mdInline }}]({{ to.url }}).
If you are not redirected shortly, please click the link.
