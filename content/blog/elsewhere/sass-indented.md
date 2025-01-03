---
title: Sass Indented Syntax Improvements
sub: Bringing SCSS flexibility to .sass files
date: 2024-12-03
venue: Sass Blog
url: https://sass-lang.com/blog/rfc-indented-syntax/
author: james
image:
  src: blog/elsewhere/sass-brackets.jpg
  alt: |
    Indoor plants in pots on a floating shelf
    held up by brackets.
tags:
  - Link
  - CSS
  - Sass
action:
  text: Read the full article »
  url: https://sass-lang.com/blog/rfc-indented-syntax/
summary:
  The Sass indented format is getting more flexible with the ability to have
  multiline statements, semicolons, and more.
---

OddBird is proposing the introduction of parts of SCSS syntax into the
indented format. Some highlights:

- Multiline statements for long values, improving readability of properties
  like `grid-template`
- Linebreaks now treated as whitespace anywhere you can't end a statement
- A "SCSS-in-Sass" syntax to opt in to SCSS formatting inline
- Optional semicolons
