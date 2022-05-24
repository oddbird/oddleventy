---
title: What's the impact of aiming for 100% test coverage?
author: olu
date: 2022-05-24
tags:
  - tests
  - Article
  - test coverage
summary: |
  100% test coverage is a contentious metric! In this piece, Olu explores the impact of pursuing it.
---

Test coverage is a way of measuring how much of the codebase is covered by tests. It usually refers to unit tests or integration tests. There are automated ways of measuring it, and these usually present your coverage as a percentage. 100% test coverage is a contentious issue. At Oddbird we often aim for this level of test coverage, and after working on a few different projects I thought it would be good to assess how I find it and the pros and cons of testing in this way.

## **The dimensions of testing**

Through working on this blog post I’ve thought a lot about “dimensions” of testing: coverage, ‘manualness’, reliability, maintainability and area. ‘Maunualness’ refers to the degree you can make the tests automated. Reliability refers to whether your tests are ‘flaky’, or unstable, between runs, and can’t be trusted on a single run. Maintainability is how easy it is to keep your tests consistent with the codebase during its lifetime and many changes. Area refers to what part of your codebase is covered by the testing method you are using.

These dimensions mean that 100% unit test coverage is rarely actually covering every aspect that it could in a codebase. If there was a visual regression in one of our codebases with 100% test coverage, for example, our tests wouldn’t record this. Visual regression tests don’t have a coverage metric, and can be unwieldy when used on large codebases due to the number of screenshots that have to be reviewed, but cover a part of the codebase not easily tested by other means.

Recently I’ve been working on polyfills for bleeding edge CSS features, and they need a very different method of testing compared to what I am used to. Web platform tests, which test that browsers are all implementing features in the same way, do not have a coverage metric and are integration tests for the most part. CSS is the main thing compared using JS, and there are visual regression and manual tests in the mix. Using PostCSS also exposed me to their test runner, tape, which compares CSS files with an expectation file, and also does not have coverage. For this project, coverage isn’t the most important dimension to cover. Being able to automate the majority of the browser tests using WPT’s test runner is more important than coverage. I’d say that for the area needing to be tested, which is mostly CSS presentation and browser compatibility, there’s little that can be expressed using coverage as a metric. I’ll be focusing on coverage in this article of course, but you need to decide which dimensions are important to your codebase on an individual basis.

## **Pros and Cons to 100% code coverage**

There are pros to code coverage:

The people who implement the unit tests will have a more intimate knowledge of the codebase and its quirks. This can cut both ways, with people who implemented the tests being relied on when they don’t work as intended, or to explain obscure areas of the code when a test fails.

You have more confidence that your code won't fall over at the slightest change, and that if a bug is introduced into the codebase it will be caught at development time rather than in production.

Writing unit tests can make it clear when aspects of the codebase are too tightly coupled, badly written or unclear, removing unnecessary fragility. They can also enable you to write more detailed error messages when you make a mistake, acting as an error library.

In some cases, tests can prove that big refactors actually work, It all depends on how they are structured. Very mock heavy, small unit tests tend to require rewriting if the implementation changes. On the other hand a good integration test shouldn't need changing unless the requirements have changed.

Finally, having robust test coverage can help you understand features of a codebase or library before writing a line of code. Tests can be a great guide to the ways certain features work under the hood.

There are also cons to 100% test coverage:

One thing that 100% test coverage can lead to is an unwillingness to make big refactors that you know will impact your test suite. There’s also the issue of it affecting how you write your code in the first place, to make it less arduous to test in the first place.

With unit tests, mocking leads to fragile tests that may not accurately represent your codebase. I personally hate the process of mocking a complicated piece of code, which I doubt is a unique experience, and it is often difficult to find documentation and examples for your exact esoteric piece of code. You’ll often need to mock to cover all aspects of the codebase, so it’s a big problem for higher test coverage.

Relatedly, having 100% test coverage can lead to misplaced confidence in your test suite. If you are relying on unit tests and implementation tests solely to check your codebase things can easily be missed. Changes to the visual presentation that could be caught by regression tests are often missed in big refactors when relying solely on unit tests, for example. Implementation tests can give false confidence about things that they cover; end to end tests may pick up broken UI or edge cases that wouldn’t come up in a partial test of the system.

Getting to 100% test coverage adds extra time to development processes, as it takes time to implement and change tests, and chasing the last few percentage points - slows down creation of features when chasing the last percentage points of coverage. They can also be an impediment to big refactors when APIs and tests are too tightly coupled. More tests also make for a slower test suite, which can slow the development process.

Another issue is overcoming inertia to start writing them, especially when the tests are left to the end. It’s often easier to use a test driven approach without a code coverage target; writing tests that are embedded in the code writing process means they cannot be skipped, and not having a target means that there is less infilling to do at the end of writing code.

## Conclusion

Test coverage is one tool in our toolbox, and having a metric to measure it gives some reassurance that we have looked at the code from many angles. The other testing dimensions are covered in our testing processes, we often test manually for edge cases, but lean towards automation where possible; using mainly unit tests that aren’t tightly coupled with the code, and not being shy of refactors that will make testing or writing code easier means that our tests are reliable; they are all relatively easy to maintain given one knows the codebase or is willing to learn; and the different areas of our codebases are covered by manual visual regression testing, unit and integration tests, and unit tests on the back end. We also take steps to mitigate the impact of relying on 100% test coverage; we always do our best to ensure we have good documentation, take the code review processes we have in place very seriously, and do manual testing on staging before deploying to live. I think this mix gives us a holistic approach to testing that works, though of course there is always room for improvement!
