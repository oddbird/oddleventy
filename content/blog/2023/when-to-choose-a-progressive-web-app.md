---
# eleventyExcludeFromCollections: true
# permalink: false
title: When to Choose a Progressive Web App
sub: Part 3 -- Responsive Web App vs Native Mobile App vs Progressive Web App
author: sondra
date: 2023-07-05
tags:
  - Article
  - Business Development
  - Progressive Web Apps
  - Push Notifications
  - Recommendations
  - Startups
  - User Experience
image:
  src: blog/2023/part3-progressive.jpg
  alt: Pen and notebook with a sketch of a website interface
summary: |
  If you're weighing the performance optimization
  and device integration opportunities
  of a native mobile app
  against the broad reach and lower cost
  of a responsive web app --
  and can't decide which is a higher priority
  for your digital product --
  don't despair.
  A progressive web app may be
  just the solution you need.
  This is part 3 of a three-part series
  unpacking the reasons to choose
  one platform over another.
  Let's explore progressive web apps.
---
{% import 'embed.macros.njk' as embed %}

If you haven't read parts 1 and 2 yet, you may want to start with the
introduction to responsive web apps, native mobile apps, and progressive web
apps in [part 1](/2023/05/05/when-to-choose-a-responsive-web-app/) (along with a
comparison chart for quick reference).

**Read all three parts to compare app types:**

1. [When to Choose a Responsive Web App](/2023/05/05/when-to-choose-a-responsive-web-app/)
2. [When to Choose a Native Mobile App](/2023/06/07/when-to-choose-a-native-mobile-app/)
3. [When to Choose a Progressive Web App](/2023/07/05/when-to-choose-a-progressive-web-app/)

## Progressive Web App -- Best of Both Worlds

> **tl;dr**
>
> If your top priority is some combination of wide reach and
> advanced capabilities, you will want to investigate the
> progressive web app option for your project.

A progressive web app (PWA) is a responsive web app (RWA) with additional
capabilities similar to a native mobile app. Like responsive web apps, PWAs are
built using standard web technologies -- HTML, CSS, and JavaScript. They are
accessible from any device with a web browser such as Chrome, Firefox, Microsoft
Edge, Safari, or a mobile browser. Like native mobile apps, PWAs can be included
in app stores. They can provide push notifications, offline mode, and a home
screen icon.

Many of the biggest companies (Google, AirBnB, Twitter, Microsoft, etc.) use
PWAs for their products alongside or in place of native apps. Check out this
[directory of PWAs](https://www.findpwa.com/list/top-apps). You may discover
you're already using one!

{{ embed.figure(
  data=[{
    img: 'blog/2023/yes.png',
    alt: 'The word "yes" with a smiley and sparkles'
  }],
  class='media-pull',
  attrs={'style': '--rowspan: span 3'}
) }}

## Choose a Progressive Web App When…

### Lower Development & Maintenance Costs
*Choose a progressive web app when it's important to keep initial development
costs low.*

Just like responsive web apps, progressive web apps require just one codebase to
be available on any device with a web browser, while providing users with a
native-like experience. This makes PWAs less expensive to develop and maintain
than a native mobile app, which requires unique codebases for each device.
Depending on the amount of special capabilities you need to add, however, a PWA
can cost more than a responsive web app.

### Faster Development & Updates
*Choose a progressive web app when it's a priority to make your app available to
users quickly.*

PWAs have all the same advantages of responsive web apps when it comes to speed
of development and updates. Developing only one codebase takes less time than
developing separate native mobile app codebases for each device. Updates require
fewer specialized technologies and can be done incrementally. On the other hand,
packaging your PWA for inclusion in app stores takes additional time, and
requires going through the app store approval process.

### Discoverable Via Search Engines & App Stores
*Choose a progressive web app when the people you want to reach will look for
your app with a search engine and in an app store.*

If your user research shows that people search for the type of content you offer
in app stores *and* via web searches, a PWA can help you reach all those people
more effectively than either a responsive web app -- which isn't available in
app stores -- or a native mobile app -- which doesn't appear in web searches.

Since PWAs are a type of web app, search engines like Google will automatically
index them and include them in search results. Various tools such as
[PWABuilder](https://www.pwabuilder.com/) essentially wrap up a PWA like a
native app for inclusion in Google, Apple, and Microsoft app stores.

### Broad Reach
*Choose a progressive web app when you want to reach a broad audience across
various devices.*

If your budget allows, PWAs can reach a broader audience than either responsive
web apps or native mobile apps. With a single codebase, people can access the
PWA on any device with a browser. They can find it from a search engine and,
with some extra packaging, in any app store. They can access a PWA via the
internet or download it onto their phone like a native mobile app and use it
offline. Like RWAs, PWAs take advantage of the web's high level of backward
compatibility, meaning people on older devices will retain some level of access.

### Specialized Capabilities
*Choose a progressive web app when you want to reach a broad range of people
while keeping costs down as much as possible, but need some specialized device
capabilities.*

PWAs are better than native mobile apps or RWAs at providing a balance between
reach, cost, and specialization. If you need to be able to send alerts or push
notifications to people even when they do not have the app open on their phone,
PWAs can do that just like native mobile apps, whereas RWAs cannot.

If you cannot afford to build and maintain more than one codebase, but people
using your app may have limited or sometimes no access to the internet, a PWA is
likely the best option. While it may not perform as seamlessly as a native app
without internet access, people can download a PWA onto their phone and access
the content without an internet connection.

Accessing an RWA requires opening a browser, but people can access a PWA via an
icon on their phone's home screen just like they do with a native mobile app.
This is not just a shortcut to a website, but rather a standalone application
completely independent from the browser interface.

Check out and test all the PWA capabilities on [What PWA Can Do
Today](https://whatpwacando.today/).

{{ embed.figure(
  data=[{
    img: 'blog/2023/no.png',
    alt: 'The word "no" with a frowning face'
  }],
  class='media-pull',
  attrs={'style': '--rowspan: span 3'}
) }}

## Don't Choose a Progressive Web App…

In a nutshell, if your budget and timeline is quite constrained and you don't
need any special capabilities, then the best option is to build a responsive web
app instead of a progressive web app. When you have additional budget and more
information about the needs of your users, you can always turn the RWA into a
PWA. On the other hand, if you do have plenty of budget and highly specialized
needs that require full integration with a specific mobile device, a native
mobile app is a better option than a progressive web app.

## You Made It!

Thanks for joining this three-part series to dig deep into responsive web apps,
progressive web apps, and native mobile apps. If you have questions or
additional thoughts, please [contact us](/contact/) or get in touch on
[Mastodon](https://front-end.social/@OddBird).

If you've decided that either a **responsive web app** or a **progressive web
app** is the right platform to build your digital product, we specialize in
designing and developing both types of apps. Check out our [past work](/work/)
and [let's chat](/contact/)! If you've determined that a native mobile app is
what you need, let us know and we can help refer you to experts in the mobile
platform of your choice.

---

Still not sure which platform is right for your digital product? Go back and
[review the **comparison
chart**](/2023/05/05/when-to-choose-a-responsive-web-app/#what-are-responsive-web-apps%2C-native-mobile-apps%2C-and-progressive-web-apps%3F)
while you muse.
