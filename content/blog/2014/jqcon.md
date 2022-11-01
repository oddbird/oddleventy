---
title: jQuery Chicago 2014
author: jonny
tags:
  - Article
  - JavaScript
  - Conferences
  - jQuery
image:
  src: blog/2014/jqueryconf.jpg
summary: |
  Five practical JavaScript coding takeaways from jQuery Conference
  Chicago 2014.
date: 2014-09-17
---

After attending conferences, I find it helpful to synthesize a few
practical takeaways that I can immediately begin working into my code.
Some of them are new, while others are common techniques that I'm just
not in the habit of doing.

So what got my attention at jQuery Conference Chicago 2014? In no
particular order:

## Web Workers

[Web Workers] are here and ready for primetime (or at least [close
enough to ready]). It would be nice to get some abstractions to make
them easier to work with (and it'll be great when [SharedWorkers] and
[ServiceWorkers] get to the same level of [support]), but I'm not
waiting around.

Basically, Workers provide the ability to run computationally intensive
tasks in a background thread, without blocking the UI or other scripts.
Workers don't have access to the `window` object or the DOM, but they
can pass data back and forth from the main client script.

Keep the UI responsive, and let Workers do difficult tasks in the
background. (Aside: This is awesome. Why isn't everyone using it
already?)

```js
// main script
var worker = new Worker('my_worker.js');
worker.addEventListener('message', function (e) {
  console.log('The worker said: ' + e.data);
}, false);
worker.postMessage('Hello Worker!');

// worker script ('my_worker.js')
self.addEventListener('message', function (e) {
  console.log('The client said: ' + e.data);
  self.postMessage('Hello Client!');
}, false);
```

Check out [another (contrived) example] to see it in action. Notice that
the timer (and the entire UI) locks up while running the task without
Workers, but continues smoothly when Workers are used. (I'm also using
the [Blob() constructor] to allow for inline Worker scripts, instead of
importing from another file.)

So when might I actually use Workers? From this helpful [web.dev article][]:

> - Prefetching and/or caching data for later use
> - Code syntax highlighting or other real-time text formatting
> - Spell checker
> - Analyzing video or audio data
> - Background I/O or polling of webservices
> - Processing large arrays or humungous JSON responses
> - Image filtering in <canvas>
> - Updating many rows of a local web database

Do you already use Web Workers, or have additional suggestions or
warnings?

HT: [@potch] for the [talk] that got me started.

[web workers]: https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers
[close enough to ready]: https://caniuse.com/webworkers
[sharedworkers]: https://developer.mozilla.org/en-US/docs/Web/API/SharedWorker
[serviceworkers]: https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API
[support]: https://caniuse.com/sharedworkers
[another (contrived) example]: https://codepen.io/jgerigmeyer/pen/vKixI
[blob() constructor]: https://developer.mozilla.org/en-US/docs/Web/API/Blob/Blob
[web.dev article]: https://web.dev/workers-basics/
[@potch]: https://twitter.com/potch
[talk]: https://potch.github.io/workers-talk/

## ECMAScript 6

You know what else is here, and (mostly) ready for primetime?
[ECMAScript 6]. Some of the new features I'm most excited about:

- `String.prototype.contains()` instead of `indexOf()`
- native promises
- `Object.assign()` for merging objects
- `Map()` and `Set()`
- blocked scope variables using `let`
- template strings(!):

```js
var name = 'Jonny';
var company = 'OddBird';
console.log(`I'm ${name}, and I work at ${company}.`);
```

- default function parameters
- modules, exports, and a system loader
- expanded `class` syntax

This just scratches the surface. Check out a [helpful summary], and keep
a close eye on the [browser support chart].

So how can I use these features without waiting for full browser
implementation?

A subset of ES6 can be used by simply adding Paul Miller's [ES6 Shim].
To use the more substantive features (e.g. template strings, default
parameters, modules), compile ES6 code into ES5 using Google's [Traceur]
(probably with [gulp-traceur] or [grunt-traceur]).

HT: [John K. Paul] for his [talk][1] encouraging devs to use ES6 now.

[ecmascript 6]: https://262.ecma-international.org/6.0/
[helpful summary]: https://github.com/lukehoban/es6features#readme
[browser support chart]: https://kangax.github.io/compat-table/es6/
[es6 shim]: https://github.com/paulmillr/es6-shim/
[traceur]: https://github.com/google/traceur-compiler
[gulp-traceur]: https://github.com/sindresorhus/gulp-traceur
[grunt-traceur]: https://github.com/aaronfrost/grunt-traceur
[john k. paul]: https://twitter.com/johnkpaul
[1]: https://twitter.com/johnkpaul

## Throw More Errors

[Error objects] have been around forever, and aren't difficult to use:

```js
if (user.id) {
  // do the thing
} else {
  throw new Error('User ID not found.')
}
```

But I'm not very good at actually doing this. When I'm writing code, I
usually default to the "fail silently" approach:

```js
if (user.id) {
  // do the thing
}
```

There are times when failing silently is exactly what I want: when the
code will continue to work correctly regardless. But often it'd be
better (especially in development, and maybe even in production) to
throw an error with a descriptive message stating what went wrong. Not
only does this speed debugging, but it also lets me know that something
went wrong in the first place.

To make this simpler, I've started using runtime assertions:

```js
var assert = function (message, test) {
  if (!test) {
    throw new Error('Assertion failed: ' + message);
  }
};

assert('User has an ID', user.id);
```

When to consider throwing Errors?

- When a function requires a specific argument type
- When a function requires a specific number of arguments
- For unexpected code paths (i.e. code that should never be executed)
- When using promises (every promise should have an error handler
  using `.catch()` or `.then()`)

HT: [Ralph Holzmann] for his helpful talk.

[error objects]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
[ralph holzmann]: https://twitter.com/ralphholzmann

## Debugging by Proxy

[Brian Arnold][] demoed how to use proxy tools for development and
debugging.

[Charles] is a really powerful tool for anything from Ajax debugging and
bandwidth throttling to DNS spoofing and local/remote resource mapping.
I can view or modify outgoing requests or incoming responses (even from
another device on the same network connected through Charles),
essentially turn my computer into a dev environment for any website with
resource mapping, throttle my bandwidth to mimic 3G or LTE, or disable
caching or cookies entirely.

[brian arnold]: https://twitter.com/brianarn
[charles]: https://www.charlesproxy.com/

## JS Testing With Intern

I've been using [Karma] as a test-runner, and I'm mostly satisfied with
what it can do (notably: run tests quickly using [PhantomJS] to mimic a
browser environment, and generate [istanbul] coverage reports).

But I'm intrigued by some of the features that [Intern] offers (notably:
integration with [Selenium], support for true browser events and running
tests in standalone browsers, and built-in [Travis CI] integration).

Have you used either of these tools, or have further pros/cons to offer?

[karma]: https://karma-runner.github.io/
[phantomjs]: https://phantomjs.org/
[istanbul]: https://istanbul.js.org/
[intern]: https://theintern.io/
[selenium]: https://www.selenium.dev/
[travis ci]: https://www.travis-ci.com/
