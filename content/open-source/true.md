---
title: 'True'
sub: Unit-testing for Sass developers
date: 2013-06-06
image:
  src: projects/true.jpg
author:
  - miriam
  - carl
  - jonny
  - oddbird
oss: owner
project:
  logo: 'true'
  source: https://github.com/oddbird/true
  docs: /true/docs/
  status: public
summary: |
  **True is a full-featured unit-testing library for Sass**. The core
  functionality is written in pure SassScript, so it can be used anywhere
  Sass is compiled. Advanced features are available with our test-runner
  integration and Mocha.
---

content.macros.j2\#rst

## For Sass developers, by Sass developers

[!['npm package']]

[!['build status']]

We designed True as one of the first testing frameworks for the [Sass]
language, in order to provide tests for [Susy], our Sass layout toolkit.
Since then, True has become the only full-featured unit-testing software
that allows you to write and compile your tests with plain Sass mixins.

Write your tests in Sass, compile them with Sass, and then (optionally)
pass the results to a Javascript test-runner for command-line control
and reporting.

content.macros.j2\#rst

content.macros.j2\#divider

content.macros.j2\#rst

  ['npm package']: https://badge.fury.io/js/true.svg
  [!['npm package']]: https://www.npmjs.com/package/true
  ['build status']: https://api.travis-ci.org/oddbird/true.svg
  [!['build status']]: https://travis-ci.org/oddbird/true
  [Sass]: http://sass-lang.com/
  [Susy]: /susy/

## Getting Started

Install the `sass-true` module using yarn or npm:

    yarn add sass-true --dev
    npm install sass-true --save-dev

Then import the library, along with the code you are testing in Sass:

    @import "<path/to/node_modules>/sass-true/sass/true";

**Define tests in Sass** with a BDD (`describe`/`it`) or TDD
(`test-module`/`test`) syntax:

    @include describe('multiply() function') {
      @include it('Returns the result of multiplication') {
        // …
      }
    }

    @include test-module('multiply() function') {
      @include test('Returns the result of multiplication') {
        // …
      }
    }

**Compare internal Sass values** (variables and functions) by asserting
`is-equal`, `is-unequal`, `is-true`, or `is-false`:

    // Testing Functions
    @include assert-equal(
      multiply(12, 2),
      24
    );

**Test CSS output** (mixins) with the `assert`, `output`, and `expect`
mixins:

    // Testing Mixins
    @include assert {
      @include output {
        @include font-size('large');
      }

      @include expect {
        font-size: 2rem;
        line-height: 3rem;
      }
    }

**Optionally show a summary report** in the CSS output and/or the
command line:

    @include report;

**Or use our Javascript integration** to run and report tests directly
in the command line. [Read the docs] for more!

content.macros.j2\#rst

  [Read the docs]: /true/docs/
