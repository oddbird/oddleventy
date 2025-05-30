---
title: Designing With Code
sub: CSS video course waitlist signup
summary: |
  If you've ever struggled
  to understand why CSS works the way it does,
  and how to build more reliable designs,
  this is the course for you.
  We'll cover all the essentials
  like flexbox, grid, custom properties,
  and container queries --
  making sure we also understand
  the fundamentals behind
  each technology.
author: miriam
permalink: learn/courses/design-with-code/
---

{% import 'layout.macros.njk' as layout %}
{% import 'oddnews.macros.njk' as oddnews %}
{% import "quotes.macros.njk" as quotes %}

{% call layout.block(
  name='full',
  attrs={'class': 'has-angles'}
) %}

{% call layout.block(
  name='center',
  attrs={
    'style':
      '--block-max: var(--min-page-column);
      --block-spacer: 0;
      --oddnews-bg: transparent;'
  }
) %}

{{ oddnews.oddnews_signup(
  heading='Join the CSS video course waitlist',
  subheading='Miriam will share mini video lessons, and
  you’ll get to register for the course at a reduced price.',
  tag='advanced-css-video',
  class='headerless',
  buttonText='Join Waitlist'
) }}

{% endcall %}

{% endcall %}

## Why this course?

At some point, every web project requires CSS for styling. But most of us learn
the language in bits and pieces -- through conference talks, blog posts,
Tailwind documentation, or direct on-the-job experience. The result can be a
mixed bag of practical tips, brand-new features, and decades-old 'best practice'
that wasn't always 'best' to begin with. But it's rare to learn the language as
a cohesive system -- a developer tool with consistent rules, and built-in
methodologies.

I (Miriam) want to change that. More and more of the modern features we use --
from container queries and custom properties, to cascade layers and functions --
rely on understanding previously-obscure language internals. It's become
essential to understand not just selector specificity, but the entire rendering
process: parsing, filtering (which includes the cascade), defaulting (which
includes inheritance), and resolving values.

Understanding CSS is not an abstract or academic exercise. I've been writing CSS
professionally since the early 2000s – the height of IE6, and the web standards
project -- working with clients of all sizes to create resilient and
maintainable designs. At every stage of my career, my biggest breakthroughs have
come from learning not just how a feature is used, but the mental model behind
it.

{{ quotes.find(
  collections.all,
  slugs=['unique-talent', 'fits-together']
) }}
