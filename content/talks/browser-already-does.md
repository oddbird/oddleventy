---
title: But Did You Know the Browser Already Does That?
author: james
date: 2026-08-26
image:
  src: talks/djangocon2026.jpg
  alt: Grid view of slides from the "But Did You Know the Browser Already Does That?" talk
tags:
  - Anchor Positioning
  - Color
  - Front End Nerdery
  - HTML
events:
  - venue: DjangoCon US
    url: https://2026.djangocon.us/
    date: 2026-08-26
    adr: Chicago, IL
    slides: https://talks.jamessw.com/talks/2026-djangocon/
    video: https://www.youtube.com/watch?v=qxogejENz84&list=PLFQg7E3if2as&index=34
summary: |
  There are new features in HTML and CSS
  that improve dev experience and user experience.
  But are the features too new to use?
---

{% import 'embed.macros.njk' as embed %}

In this talk, you'll get a glimpse at some of the newer features of the web
platform. Once you're excited to use them in your project, we'll take a look at
browser support, and how to use Baseline to evaluate whether it's ready to use
in your project.

We will cover:
  - Popovers: native tooltips
  - Anchor positioning: placing tooltips and dropdowns
  - Invokers: interactivity without needing JavaScript
  - Container queries: styles based on context, not the screen
  - View transitions: Animating between pages
  - Custom selects: Native select options that match your UI

{{ embed.figure(data=[{ youtube: 'qxogejENz84' }]) }}

## Transcript

Good afternoon.
First of all, thank you to all the speakers and organizers who have made this a great DjangoCon!

I'm a birder, meaning I enjoy finding, tracking, and learning about birds.
Before I started learning about birds, I vaguely knew they existed.

I even was convinced that they were real... still am.

Once I learned a bit more about birds,
it opened up a whole new world.
I could stand in my backyard,
and where before there was just noise,

suddenly there were sandhill cranes
or a ruby throated hummingbird
flying overhead.

Just knowing to pay attention changed what I noticed,
and turned background noise into signal.

And then I would go on a walk, and see this,
and have no idea what I was looking at,
but know enough to know that it was out of place.
But I had developed the tools and resources
to figure out this was an American Avocet-

which is rare enough for my area that
birders flocked to see it.

And that's my hope for this talk.
I want to introduce you
to just enough of the features,
so that when you encounter a use case for them in the wild,
even if you view HTML and CSS with suspicion,
you'll know
- that the features exist (and are real)
- why you should use them
- and the tools to use to evaluate whether they are ready to be used.

You can follow along and see the demos and links at talks.jamessw.com.

Besides being a birder,
I'm also a developer with OddBird.
At OddBird, we wear two hats -
one is working on improving the web platform,
by defining new CSS language features,
and creating documentation and tools for developers,
like polyfills and contrast checkers.
Our other hat is using the web platform
(usually backed by Django)
to solve business problems,
for cabinet makers, metal foundries, nonprofits and more.
This puts us in a great position to know
all about the latest, fanciest things on the web platform,
while also keeping us rooted in the reality
of what users need, and how technologies actually work.

### The Web Platform is Getting Better

We love working with the web platform, and it's just getting better.
Browsers have been on a roll, adding more and more features.
Here are some newer additions, more than I can talk about today.
Many of these are simply looking at what people are needing third party libraries for,
and seeing if they can be done by the browser,
with more security, performance or developer ease.

For instance, lots of Lodash methods are just available in JavaScript now.

And native CSS can do much of what Sass can do.
This is valid CSS, with no compile step.
You have variables, nesting, custom functions and more.

Maybe you've noticed that
I'm not talking about novel functionality.
I'm not talking about adding scratch and sniff smells to your website,
or converting your gifs into holograms when printed.

These are authoring conveniences that allow you to deliver faster,
and user experiences that your users (and designers) expect.
They allow you to make better websites
that load and work faster,
are more secure,
and have fewer dependencies to manage.

Perhaps a more honest title for this talk would have been
"But did you know your **user's browser** maybe does that?"
With all these new features constantly being released,
how do you keep track of whether you can use a new feature?

Remember that this is front end,
that the code you're writing isn't run on your computer.

It's not like Django, where it's running
on a server you provision and control

By making content available on the internet,
you are giving up a ton of control.
Or to frame it differently-
you have the opportunity to collaborate
with each of your users,
to provide them with the content and tools they want
with their unique preferences on how it is presented.

To quote my fellow OddBird, web development is essentially
Graphic design of unknown content
with unknown collaborators,
on an infinite and unknowable canvas,
across operating systems, interfaces, languages,
and writing modes...

### Making an Informed Decision with Baseline

So how can you make an informed decision?
Maybe you check out Caniuse, but what is this telling you?

Maybe you've come across a table like this on MDN.
This is powered by a project called Browser Compat Data, or BCD,
which tracks individual parts of the web platform.

BCD tracks browser support for 15k different items.
For instance, it can tell you when support was added for
the `minmax()` function on `grid-template-columns`.
But that's too granular, and not how devs talk about things.

There's a need for a more general way of talking about features.
That's where the Web Features project comes in.

I was part of an effort to distill those 15000 web api parts into something
closer to how developers think. It's currently at 1100+ different features.
For instance, when was all of the grid functionality supported?
When was `subgrid` added as a new feature?

So the Web Features project groups parts of
the web platform into manageable chunks.
But how do you know if things are ready to use?

#### How Baseline Can Help

Enter Baseline. I'm curious, by show of hands,
how many of you have heard of Baseline?

Baseline asks if a feature is ready to use
in Chrome, Edge, Safari and Firefox.
By ready to use, it's more than just base support.
It's asking a group of experts
if the feature as a whole is bug-free and
works consistently across browsers.
In other words, can a developer just expect it to work?

The second part is if it's been available for 30 months,
which is enough time to get most people updated.
It isn't 100%, but it's (probably) close enough,
depending on your audience.

If it fully meets these criteria,
it is considered Baseline Widely Available.

If it is in all browsers, but for less than 30 months,
than it's considered Baseline Newly Available.

And if it's not available in all browsers,
it has Limited Availability.
You can then use these classifications
to inform your decisions.

But it isn't useful if you have to remember to go looking for it.

If you use VS Code, it's available in the tooltip.

It's also available on MDN.

And you can integrate it with your lint tools.
For CSS, it's available as a Stylelint plugin.

And it's available as a rule for ESLint.

Or usable wherever you use Browserslist.
Let's see how this plays out with one feature, the CSS `light-dark()` function.
Yesterday, we heard a great talk from Sarah Abderemane
on the thought and care that went into implementing light and dark mode
on the Django site. Thanks, by the way- both for the talk, and for the feature!
Inspired by the talk, I figured we'd start with
the CSS `light-dark()` function.

This is the general pattern used by the Django site,
where you first write your light styles,
and then write your dark styles separately,
wrapped in a media query.

With `light-dark()`,
you can set the colors for light and dark mode, in one line,
without a prefers-color-scheme media query.

So why do I agree with the decision to not use this on the Django website?
As you can see, this is in all the major browsers, since May 2024.
This means it is "Newly Supported", with "Wide support" coming in November.
If the Baseline definition works for the Django website audience, give it a little time,
but you could start learning about this,
and get ready to use it.

And support for setting light and dark versions of images is coming as well.
Are you seeing how Baseline can inform your decisions?

### New Ways of Interacting with Colors

CSS has also progressed well beyond the hexadecimal RGB colors you know and love.

RGB colors are limited to just a subset of what many modern monitors can show.
The CSS `color()` function allows you to specify wide gamut colors,
in new color spaces like Display P3 and Rec2020.

This is widely available.
And you can specify the color space to create your gradients in.
And even which direction to interpolate in for hues.

This is especially nice with 2 new color functions, `oklab` and `oklch`,
which are calculated to be perceptually uniform.
This means if you are just trying to change the hue,
there are fewer shifts to colors with different saturations and lightnesses.

Gradient interpolation is newly available, but close.

The Oklab and OkLCh spaces are widely available.
You do need to be somewhat cautious, as it is possible to quickly create
imaginary colors,
and browsers do not yet properly map that to the screen's gamut.

With relative color syntax,
you can dynamically generate new colors from a base color,
calculating individual channel values.
Here we start with blue,
make the lightness channel a bit lighter,
keep the chroma the same,
and shift the hue by 30 degrees.

And that will be widely available next year.

### Siblings in CSS

Another exciting feature is the ability
to use the index of an element in a list
and the count of its siblings in CSS.

For instance, you can delay an animation by a multiplier of the sibling-index,
creating a staggered effect.

You can rotate an element based on how many siblings it has.

Or offset a color's hue by its relative position amongst its siblings.

As we change the number of elements, the styles dynamically update.
And that is available as of last week.

### Making a Modern Dropdown Menu

Next, let's look at a deceptively simple pattern,
the dropdown menu. It always ends up being more complicated to implement correctly than I expect,
and there are a lot of new features that together make it much easier.

A dropdown menu is initially closed,
until you click on a button.
Then it needs to open on top of everything else
and be positioned somewhere relative to the trigger.

This is the HTML for a simple dropdown menu.
Just this, with no JavaScript, gets us 3/4ths of the way.
The command attribute on the button
declares the click behavior.
In this case, it will toggle the popover.
The `commandfor` attribute declares what the behavior applies to.
The popover attribute hides the Menu by default.
So when the button is clicked, `my-popover` is opened.
And because of the popover attribute,
it is added to the top layer, above all your other content.

That leaves us with the 4th part- positioned relative to the trigger.
The button could be anywhere on the page, but the menu should open somewhere near it.
For this we'll use anchor positioning.
Anchor positioning is a new alternative to absolute or relative positioning,
where you can tether one element to another, where ever it may be.
The `position-area` property places the menu at the bottom of the button,
and spans the button's width and to its right.

Let's see this in action.

Let's look at support. Popover is supported since last year.
We do have a polyfill if you want to use it today.
Anchor positioning is currently in all browsers,
but remember how I said that Baseline looks at more than just
if something is there?
In this case, the experts are looking at anchor positioning,
and while the happy path works,
there are a lot of edge cases and browser differences.
While you can certainly play around with anchor positioning,
and perhaps even use it,
you do need to be aware that "there be dragons".

And you can use anchor positioning for more than popovers.
You can do all sorts of fun and creative things.
This is an example of an emerging pattern called the Follower Pattern,
where a selection indicator is anchored on the hovered item,
and is animated as you move to hover a different item.

If you're wanting to learn more about anchor positioning,
I have a free 9-week email course that walks you through the basics.

And we also maintain a polyfill if you want to use it while supporting older browsers.
Based on Natalia's talk this afternoon, I gather there might be interest
in avoiding JavaScript.

Invoker commands are how we declaratively
toggled the popover, the `command` and `commandfor` attributes.

And you can even create custom commands to declaratively
trigger an event on an element.

Using these features, we can implement a complex navigation menu,
all without JavaScript.
Note all the behaviors that are handled:
  - Popover management
  - Nested menus
  - Overflow management
  - Keyboard control
  - No z-index shenanigans

### Lazy Loading

If that sounds like too much work,
let's take a look at an easy win.
If you have a photo-heavy site,
you likely tried tracking
the user's scroll position,
and guessed when to load offscreen pictures,
so they didn't block the initial render.
That's the hard way. Let's do it the lazy way.

Just add `loading=lazy` to images
that are rendered offscreen
and they won't load until needed.

And that's widely supported, and ready for use.
And it's coming for video and audio elements as well.

### Security Improvements

This morning, Karen Tracey told us about
the exciting addition of Content Security Policies
in Django 6.

There's a new policy, Trusted Types,
you can enable, that ensures any content being written to the DOM,
with innerHTML or any other method,
first gets run through a sanitizer you define.

And a Sanitizer API is coming, which can replace third party libraries like DOMPurify.

### New Text Layout Options

Text layout has long been a struggle,
especially when trying to go from the
pixel perfect design mockups
to something that looks good
on multiple screen sizes.
There have been a lot of improvements
that make it easier for your text
to just look good.

When a header wraps across multiple lines,
you probably want each line to be roughly the same
length. That's hard to do, especially when you're
trying to solve that for lots of different headlines.

`text-wrap: balance` solves that by finding
the combination of lines that is the most balanced.

As a progressive enhancement, you can add this now.
Note this is different than some of the other features
we were looking at, where support is required for your site to work.
Because your content is still available in older browsers,
just a bit unbalanced, this is fine to start using early.

When you have long paragraphs of text,
no one wants to have one word
hanging out by itself at the end of a paragraph.

`text-wrap: pretty` is a quick
progressive enhancement that you can add
to body text for prettier wrapping.
Note how there never a single word on the last line of the right text.

And even without full support, you can add this, and it'll just be ignored in browsers without it.
And you can make text shrink and grow
to fit its container with `text-fit`.

With `grow`, the longest line of text grows to the size of the container.
With `shrink`, the text shrinks to fill the container (unless it wraps).

This is currently just in Chromium browsers.
And combining that with another new feature, text-box trim,
which adjusts the space around your text,
shows another solution to the CSS is awesome meme.

This should be coming soon- I just saw progress in Firefox, which would make this Newly Available.

### Customizable Selects

I have a love/hate relationship with the select element.
It's accessible, useful, and by default matches the UI of the user's device.
But it's not beautiful, and doesn't match your site's UI.

But with customizable selects, you can make more designed experiences
with just HTML and CSS, and no need to import a library.

Or you can even go crazy.
Look at the HTML- it's good, clean, accessible and semantic.
It'll work (just with the default system UI) on screen readers, mobile devices, the 10 year iPad you handed down to your kid.
And look at the JavaScript, there isn't any.
The animations, etc., are all in CSS.

This is still in the early days,
but there's active development and effort
to make this and other form elements much more themeable.

### Smoothing Navigations with View Transitions

Lots of times, when you navigate between two pages,
there are pieces of the views that are common between them.
The default on the web is you see the old view, and then it instantly gets replaced with the new view.
This can be jarring, and users can lose context.
View transitions help you smooth things out.

The simplest use case is to have
both pages opt in with a simple view-transition at rule.
This activates a default crossfade.

And here's how it looks on the out of the box Django Admin site.
Remember that these are 2 completely separate HTML documents,
and yet there is a transition between them.

With a bit of JavaScript to determine direction,
and a few keyframes, you can have
transitions back and forth
as you navigate through the site.
This gives users a sense of depth, order, and flow,
and can help keep them mentally oriented
as they move through their app.

And in the future, you may even be able to
do that all in CSS, without JavaScript.

Another use case is where there is
a part of your page that exists
both before and after a navigation.
By giving both items a shared `view-transition-name`,
when a user navigates between the two pages,
the browser automatically transitions between them

This includes the position, and even the color.
Of course, you can customize that more.

And you can also use view transitions in single page applications
or in other places where you're changing the state,
but not the actual document.

But this isn't just relegated to the files
of quirky things to throw into a demo.
This is something that you can design
to intentionally guide your user
through your site,
creating continuity, and improving their experience.

View transitions for single page applications are newly available.
And the best part is that this is a progressive enhancement.
For most use cases, this doesn't prevent users without support from accessing the content.
It's just some extra for the users that have it.

Support for cross document view transitions should be coming across browsers yet this year.
And the ability to transition just parts of the page is coming as well.

### Styling Context with Container Queries

A long standing request has been to
style an element
based on its context,
or the state of its parents.
Let's take a look at how that's useful.

You've likely used media queries
to implement a responsive design.

For instance, if this div is on screens narrower than 640px,
it will be 100% width.
If it's on a screen wider than 640px, it will be 50% width.
But this only works because the divs are being sized relative to the
viewport, or screen.

If you add a sidebar, then your calculations are off,
and the divs don't stack until they are much smaller then you intend.

Wouldn't it be nice to change based on the
width of the container, rather than the width of the screen?
But this was blocked by a conundrum.
If you could set styles on a container
you could easily end up in a recursive loop.

Luckily they solved this
by making it so that you could only style
children of the container you are measuring.

It looks very similar, but we are declaring our main element as a container,
and then using a container query instead of a media query.
And we use the `cqi` unit,
which is equal to one percent of the container's
inline size, in this case the width.

Now, the divs switch to stacking when the `<main>` element
is 640px, not the full viewport. Much better.

And container queries and container query units
can be used for responsive text sizing,
and make complex layouts and reused components
much easier to reason about.

And container queries are widely supported.
And you're able to react to more than just the size of a container.
With style container queries, you can add styles
based on the value of a custom property on your container.
People are finding this useful for styling components
based on a context you define,
for instance to differentiate a component that is in the featured section
versus one that isn't.

Container style queries are newly supported.
And you can style based on scroll state,
like if the container is sticky positioned,
and is stuck at the top.

Or if you want a "scroll to top" button,
but only if the user has scrolled away from the top.

Here, support is a bit further out.

### Scroll Animations
Another exciting new feature is the ability to
drive an animation's progress from the user's scroll,
rather than by time.

If you followed the World Cup, you may have seen something like this.
There's a lot happening here- let's break it down.
We have keyframes that collapse the games down.
Instead of animating those keyframes over time,
we are tying that to the scroll.
In this particular case, we just collapsing
while the round exits.
We are also animating a gradient on the border
across the entire scroll view.

And all of that without JavaScript.
And the browser is handling the scroll watching, and the animations, all performantly.

But that demo didn't just use scroll driven animations.

We are using scroll snapping to snap each round to the edge,
except the Finals, which snap to the center.
All the connection lines are drawn with anchor positioning.
We use scroll state queries to style the finals when it is snapped.
The border gradient uses the new `border-area` feature
to apply a background just to the border, without hacks.

HTML and CSS have come so far in just the last few years,
and together, these things make it possible for you
to make great and creative experiences,
with less hassle and better performance.

Reminder that you can view the slides
and all the demos at talks.jamessw.com.
All the support slides have links to the Web Features Explorer,
which has more resources to use the feature.

Thanks to my brother for the bird pictures.
And feel free to ask me questions
on Bluesky or Mastodon, or on DjangoCon Slack.
