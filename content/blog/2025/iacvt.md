---
draft: true
title: CSS Validation in Variables and Functions
sub: Understanding _invalid at computed value time_ behavior
author: miriam
summary: >
  CSS is a resilient language
  designed to recover quickly and silently
  when something goes wrong.
---

From: https://codepen.io/miriamsuzanne/pen/WbNXbVP?editors=1100

Most CSS declarations can be validated
when initially parsing the file.
If a value is not valid for the property,
then the entire declaration is discarded.
This is mostly done through type checking.
The [`color` property](https://www.w3.org/TR/css-color/#the-color-property)
expects a `<color>` value.
If we provide a `<length>` instead,
the browser knows to throw it away.

But browsers don't just throw away
the invalid value,
and reset the color property
to its initial value.
Instead they discard the entire declaration --
the property and value pair --
allowing previous declarations
to step in and fill the gap:

```css
a:any-link {
  color: teal; /* this declaration will be applied */
  color: 3em; /* this declaration will get discarded */
}
```

This all happens before the cascade.
We can use this to our advantage,
when trying out a new feature.
Did you see that [custom functions]()
are now available for testing in Chromium browsers?
Very exciting!

@@@

Browsers that don't recognize
our custom function as valid syntax,
will fall back to the previous (valid) declaration.

But the `var()` function
can't be validated until after the cascade is complete,
and we're able to substitute in
the value of the referenced variable.
This means that declarations using `var()`
can become <em>invalid at computed value time</em>
(<abbr>IACVT</abbr>).

That normally becomes an issue
when the variable itself is invalid.
But it can also cause problems
when <em>something else in the declaration</em>
is invalid.
The entire declaration validation process
is put on hold
until the variable can be resolved.

As an added twist,
in browsers that <em>do</em> support custom functions,
they will also cause <abbr>IACVT</abbr> behavior.
If we're returning unreliable values,
we will need to explicitly test for support
of those values.
