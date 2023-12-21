---
title: Generating Frontend API Clients from OpenAPI
author: james
date: 2023-11-01
tags:
  - Article
  - Front End Nerdery
  - OpenAPI
image:
  src: blog/2023/fast.jpg
summary: |
   API changes can be a headache in the frontend, but some initial setup can
   help you develop and adapt to API changes as they come. In this article, we
   look at one method of using OpenAPI to generate a typesafe and up-to-date
   frontend API client.
---

## What we are solving

In iniital prototypes, it's easy for frontend devs to place fetch calls directly
into a component. As app complexity grows, frontend developers often find it
helpful to adopt a client pattern. This centralizes logic about authentication
and API endpoints, and allows the developer to define reusable patterns for
accessing and loading data. Often devs use something like [Tanstack Query] or
[RTK Query] to define the patterns.

[Tanstack Query]: https://tanstack.com/query
[RTK Query]: https://redux-toolkit.js.org/rtk-query/overview

But problems can arise as changes get made to the API. Let's walk through how
this plays out.

1. The backend adds a new field to the API representing a user's full name, and
   removes the first and last name fields.

2. The API consumers (frontend devs) are notified of this change- hopefully.

3. The frontend dev adjusts the client to account for the changes.

4. The frontend dev manually checks and updates all places where the fields are
   used, and catches everything - hopefully.

While centralizing logic in a client pattern can simplify the process of
frontend changes, it still is error prone and takes time. These manually
generated clients are incredibly helpful patterns, but contain a lot of
boilerplate that is shared between each endpoint.

## Codegen saves the day




## "Confidence nothing is broken"

As an example, we recently needed to rename a field in a database from `tag` to
`title` to provide more clarity. Of course, we already had frontend UIs and
tests that referred to the `tag` field. I was preparing for a Find and Replace
marathon with lots of manual checks after the backend changes to the API were
completed. But when Ed, our backend developer on the project pushed his changes,
he posted this in Slack-

> "Whoah, renaming Version.tag was so easy. Quick find and replace, run tests
> and linters, fix a few stragglers, and boom! Done with both frontend and
> backend in ~20 minutes and with confidence nothing is broken. Really proud of
> our CI today."

"Confidence nothing is broken". I like the sound of that.

## Version control

One challenge we encountered was considering what we should put into version
control. In general, you want to keep compiled or derived code out of your git
repo, as it can cause gnarly merge conflicts and cause your CI to screech to a
halt.

On the other hand, as we switch between branches for review and bugfixes, it can
be a real pain to remember to regenerate the client when you switch branches.

After trying several iterations, we found a process that works-

1. When a change is made to the API, the developer generates a `openapi.json`
   file with the changes, and commits it.

2. Our CI test suite verifies that the `openapi.json` file in source code is in
   sync with the code.

3. The frontend client is generated from the `openapi.json` file as part of the
   build step in CI and locally, and is not committed.

> It's important that these patterns are enforced by tests and CI, and
> integrated into our build steps. In addition, we have well-documented commands
> that run the necessary scripts.

As an added bonus, I've found it quite helpful in code review to be able to look
at the `openapi.json` diff in order to quickly understand what changes are
included.

It would also be possible to not commit `openapi.json` to source control by
generating the frontend client directly from a running server. However, this
requires us to actually start up the server, which we don't always want to do,
especially for tests in the CI.

## A partial solution for the unhappy paths

As we have this set up, we have simplified the "happy path" for API calls, that
is, the calls that end in success. While OpenAPI includes the expected errors
the API may return, I haven't found a good way to surface that, or use types to
confirm that I'm handling all cases.

For instance, take the unhappy path of a user who tries to verify their email
for a second time. The API correctly reports an error, but this is a case where
the user failed successfully, and it would be preferable to pretend it succeeded
and direct the user to the login page.

The best solution I've found is to check that the error is an instance of the
generated `APIError` class, and then check against a string copied from the
`openapi.json` error example.

```ts
try {
  await AuthService.verifyEmail({
    requestBody: {token},
  });
  confirmSucceeded();
} catch (error) {
  if (
    error instanceof ApiError &&
    error.body.detail === 'VERIFY_USER_ALREADY_VERIFIED'
  ) {
    confirmSucceeded();
    return;
  }
  showError("Uh oh! We weren't able to confirm your email.");
}
```

In my dream scenario, I would be to get some error details from Intellisense,
and even be able to use a switch case to ensure I'm handling all expected errors
that are enumerated in `openapi.json`.

## Conclusion

Creating your frontend client automatically from OpenAPI can make a lot of
sense, especially when your frontend and backend are in the same repo.
