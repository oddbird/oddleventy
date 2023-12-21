---
title: Sass Package Importer (Request for Comments)
sub: A new proposal for importing from NPM packages in Sass
venue: Sass Blog
url: https://sass-lang.com/blog/rfc-package-importer/
date: 2023-09-26
author: james
image:
  src: blog/2022/sass-color.jpg
  alt: |
    Sass logo in black
    on top of bright oklch color gradient
tags:
  - Link
  - CSS
  - Sass
  - Build Tools
action:
  text: Read the summary & proposal »
  url: https://sass-lang.com/blog/rfc-package-importer/
summary: |
  UI Libraries like Vuetify and Bootstrap
  make it easy to extend their themes by providing
  Sass source files with their NPM Packages.
  Now, Sass is requesting feedback on
  a simpler way to import those libraries
  into your Sass styles with `@use "pkg:bootstrap"`.

---

Many UI libraries provide Sass source code
alongside the Javascript in a Node.js Package,
so that authors can easily customize the theme.
There hasn't been an easy way to specify that
a file is in an installed package,
so build tools have provided a variety of ways to specify
an import is a package and where packages might be found.

This has meant that switching build tools
might come with unexpected gotchas, or that many more
potential paths need to be checked to see if a file exists
at that location.

The Node Package Importer will allow users to specify
that an import is in a Node.js package installed
alongside their source code with a `pkg:` URL.

```sass
@use "pkg:vuetify";
```

When a Node Package Importer is added to the importers for a compilation,
this directs Sass to find a Node.js Module called `vuetify`,
and import the default Sass file defined by the `vuetify` package.

I'm excited by what this provides library authors-
this makes it much more straightforward to expose
Sass source files, and to expect that users can
import those files, regardless of their setup.

It also allows library authors to take advantage
of [Package Entry Points][], so they can specify
exactly which files are exposed, and at what paths.

[Package Entry Points]: https://nodejs.org/api/packages.html#package-entry-points

For instance, an author could expose the file at
`./src/sass/themes/_dark.scss` in a way that would allow
someone using the package to simply write `@use "pkg:package/dark"`.

This also uses [Conditional exports][], so package authors
can specify a Sass default entry point that is different
than their JavaScript entry point.

[Conditional exports]: https://nodejs.org/api/packages.html#conditional-exports

I look forward to this feature shipping, and making integration easier for both
package authors and users.
