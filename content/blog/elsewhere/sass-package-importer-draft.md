---
title: Sass Package Importer (Request for Comments)
sub: A new proposal for importing from NPM packages in Sass
venue: Sass Blog
url: https://sass-lang.com/blog/rfc-package-importer/
date: 2023-09-26
author: james
image:
  src: blog/elsewhere/package-importer.jpeg
  alt: |
    A close up of the hands of a person handing a package
    to another person.
tags:
  - Link
  - CSS
  - Sass
  - Build Tools
action:
  text: Read the summary & proposal »
  url: https://sass-lang.com/blog/rfc-package-importer/
summary: |
  UI libraries like Vuetify and Bootstrap
  make it easy to extend their themes by providing
  Sass source files with their NPM packages.
  Now, Sass is requesting feedback on
  a simpler way to import those libraries
  into your Sass styles with e.g. `@use "pkg:bootstrap"`.

---

Many UI libraries provide Sass source code
alongside JavaScript in a Node.js package,
so that users can customize package styles or themes.
There hasn't been an easy way to specify that
a file to be imported is from an installed package,
so build tools have provided a variety of ways to
import from a package and define where packages are installed.

This has meant that switching build tools
might result in unexpected gotchas, or that many more
potential paths need to be checked to see if a file exists
at that location.

The Node Package Importer will allow users
to specify with a `pkg:` URL
that an import is in a Node.js package
installed alongside their source code.

```sass
@use "pkg:vuetify";
```

When a Node Package Importer is added to the importers for a compilation,
this directs Sass to find a Node.js module called `vuetify`,
and import the default Sass file defined by the `vuetify` package.

I'm excited by what this provides library authors –
this makes it much more straightforward to expose
Sass source files, and to expect that users can
import those files, regardless of their setup.

It also allows library authors to take advantage
of [package entry points][], so they can specify
exactly which files are exposed, and at what paths.

[package entry points]: https://nodejs.org/api/packages.html#package-entry-points

For instance, an author could expose the file at
`./src/sass/themes/_dark.scss` in a way that would allow
someone using the package to simply write `@use "pkg:my_package/dark"`.

This also uses [conditional exports][], so package authors
can specify a Sass default entry point that is different
from their JavaScript entry point.

[conditional exports]: https://nodejs.org/api/packages.html#conditional-exports

I look forward to this feature shipping, and making integration easier for both
package authors and users.
