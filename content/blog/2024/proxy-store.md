---
title: Proxy Is What's in Store
sub: You may not need anything more
author: james
date: 2024-01-12
image:
  src: blog/2024/proxy-store.jpg
  alt: >
    A dark vintage accessory store lit by lamps and bare bulbs,
    with bags, jewelry, sunglasses and a bowler hat
    on the wooden shelves and carved table.
  position: top
tags:
  - Article
  - JavaScript
  - Proxy
  - State Management
summary:
  When adding interactivity to a web app,
  it can be tempting to reach for a
  framework to manage state.
  But sometimes, all you need is a Proxy.
---

{% import 'embed.macros.njk' as embed %}

Recently, I was building the Playground feature on the [Sass
website](https://sass-lang.com/playground/). It's an interactive feature built
into a static Eleventy site, so we didn't have a UI Framework already
integrated.

{{ embed.img(
  src='blog/2024/sass-playground.png',
  alt='A screenshot of the Sass playground web app.'
) }}

Let's take a look at the interactive parts of the tool. Users have three inputs:

- Input format radio (SCSS or Sass)
- Output format radio (Expanded or Compressed)
- Input text value (the input styles)

From this, there are several side effects. Any time one of these changes, we
need to recompile the Sass. We also need to update the hash in the URL, which
allows users to share the state of the page.

If compilation succeeds, we can simply update the output value. If it fails, we
need to display the error.

While this isn't an extremely complex set of interactions, it's enough that we
want to be mindful of how we set this up. Essentially, we have three inputs and
three outputs.

## Defining what we need

So, what is it that we actually need here?

1. We need a central place to hold our data, or our "state."
2. When our data changes, we need a way to trigger the appropriate side effects.

## Finding a solution that fits

At this point, there are a few options. A UI Framework like
[Svelte](https://svelte.dev/) would provide an easy, centralized interface for
reactivity, but comes with the long term update and maintenance costs of an
extra dependency.

We could also add our logic directly in click handlers of our inputs. This is
perhaps the most straightforward approach, but also is decentralized, and would
come with a lot of code duplication.

A third solution is using a
[Proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy).
We can store our data in a proxied object, and then intercept -- or "trap" --
the setters to trigger the reactivity.

## A simple Proxy state

```js
const initialState = { input: '' };

const state = new Proxy(initialState, {
  set(state, prop, value) {
    const set = Reflect.set(...arguments);
    console.log(`Setting ${prop} to ${value}`);
    return set;
  },
});

state.input = 'Hello!';
// "Setting input to Hello!"
```

Every time we set the value of `state.input`, we log the prop and value. Note
that we use the proxied object `state`, and not the `initialState` object.
Because we are trapping `set`, we need to set the value with `Reflect.set()`. We
also need to return a Boolean specifying whether the `set` was successful.

## A more complex Proxy state

```js
const initialState = {
  inputFormat: 'scss',
  outputFormat: 'expanded',
  inputValue: '',
  compilerHasError: false,
};

const playgroundState = new Proxy(initialState, {
  set(state, prop, value) {
    // Set state first so called functions have access
    const set = Reflect.set(...arguments);
    if (['inputFormat', 'outputFormat', 'inputValue'].includes(prop)) {
      updateCSS();
      updateURL();
    } else if (prop === 'compilerHasError') {
      updateErrorState();
    }
    return set;
  },
});
```

{% callout %}
This is a bit simplified from the [full source code](https://github.com/sass/sass-site/blob/main/source/assets/js/playground.ts).
{% endcallout %}

With this, we've achieved a few things. First, we have a central location for
the data we need to access. Second, we have a central place to declare what
happens when a value changes.

When a user changes the input format, we simply need to update the state with
`playgroundState.inputFormat = 'sass';` and `updateCSS` and `updateURL` are
automatically called. We no longer need to remember to trigger the side effects
in each place where state is updated.

## Getting ahead of ourselves

For this particular project, I only needed to trigger side effects, so I only
needed to use the `set` trap. One thing I'm interested in trying out in a future
project is using a `get` trap to set up a computed value based on other values
in the state.

```js
const initialState = { input: '' };

const state = new Proxy(initialState, {
  get(target, prop, receiver) {
    if (prop === 'isEmpty') {
      return target.input.length === 0;
    }
    return Reflect.get(...arguments);
  },
});

console.log(state.isEmpty); // true
state.input = 'has a value';
console.log(state.isEmpty); // false
```

This pattern would be useful when you need to access a value derived from other
pieces of the state at a different point than when you set the state.

## When we would not want to use a Proxy store

This isn't a universal solution. If you have an existing library, use it. If you
find yourself abstracting out things like `watch` or `computed` for your proxy
state, you are starting down the road to developing your own framework, and it
might be a good time to pause and see if your application has grown complex
enough to bring in something more robust.

This pattern does work well if other files want to update or access the state in
the store. However, you'll likely want to contain side effect logic to the file
where the state is defined. If you're wanting to define side effects across
files, you'd need to do that with callbacks, and ideally start looking for ways
to abstract that out. At that point you'll probably be happier reaching for
another solution.
