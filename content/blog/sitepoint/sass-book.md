---
title: Sass Architecture
sub: Excerpt from Jump Start Sass, chapter 11
date: 2016-03-01
canonical: https://www.sitepoint.com/architecture-in-sass/
tags:
  - Link
  - Sass
  - Book
  - Jump Start Sass
image:
  src: blog/sassbook.jpg
  alt: Jump Start Sass, by Miriam Suzanne and Hugo Giraudel
summary: |
  I'm excited to release [Jump Start Sass], a book I co-authored with
  [Hugo Giraudel]. Digital copies are available from [SitePoint], wih
  print editions sold by [O'Reilly]. Here's an excerpt from Chapter 11,
  [Sass Architecture].

  [Jump Start Sass]: https://www.sitepoint.com/premium/books/jump-start-sass
  [Hugo Giraudel]: https://hugogiraudel.com/
  [SitePoint]: https://www.sitepoint.com/
  [O'Reilly]: https://www.oreilly.com/library/view/jump-start-sass/9781457199851/
  [Sass Architecture]: https://www.sitepoint.com/architecture-in-sass/
---

## Components and Organization

Most CSS and Sass organization systems are based on some concept of user
interface “components” or discrete pieces that can be put together to
form a complete project. Components can be any size or shape, but they
should focus on doing one task independently, and in a reusable way. A
button, a drop-down, a calendar, and a search form are all examples of
components that can be reused at different places across a project.
Thinking about your project as a collection of components will help you
towards having an organized and maintainable architecture, whether
you’re using Sass or plain CSS.

Because of the way CSS works, the order of your code will also affect
its meaning: later code has priority in the cascade over the code before
it. Some of the popular branded architectures (the ones you know by
name) try to eliminate this feature of the cascade entirely, but I use
it as a guide – organizing code from the most general to the most
specific – so the priority override makes sense. Code that we want
applied generally across the site should come first, growing slowly in
specificity and detail as we move towards more unique components and
special cases.

I first learned of this approach from [Natalie Downe]’s wonderful [CSS
Systems] talk in 2008 before I’d ever used Sass. Her architecture at the
time started with elements (h2, ol, ul, and so on) grouped by “type”,
followed by classes grouped by the “effect” created, and finally IDs
grouped by the “component” they affect. These days it’s common practice
to avoid IDs altogether, and break elements into smaller pieces, but the
concept remains the same: global defaults first, followed by site-wide
patterns and broad layouts, and finally, more specific modules, themes,
and overrides.

Sass projects include another category of site-wide defaults not found
in CSS: code with no output at all – such as variables, functions, and
mixin definitions. Many people (myself included) break that code into
its own set of partials, to be imported anywhere it might be useful. I
have a complete folder just for site-wide Sass helpers and configuration
that don’t result in output. Those files act as a single, definitive,
and reusable configuration that defines the boundaries of a project. By
ensuring your configuration is output-free, you can import it anywhere
without worrying about duplicated or unwanted styles.

Here are some guidelines for thinking about architecture:

1.  Break your code into the smallest logical component partials.
2.  Organize your partials into grouped folders based on specificity.
3.  Import those partials into one master file in order of specificity.

However, many variations do exist on the specific ways people implement
those ideas.

You may also find that a lot of the branded systems developed by and for
massive companies with large-scale needs don’t always translate to
smaller teams and products. Every project has different requirements, so
you should never assume that the best solution for InstaFace or
MyPinBook is going to be the best solution for you.

[Natalie Downe]: https://twitter.com/Natbat
[CSS Systems]: https://www.slideshare.net/nataliedowne/css-systems-presentation
