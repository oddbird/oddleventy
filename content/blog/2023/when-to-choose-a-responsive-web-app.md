---
title: When to Choose a Responsive Web App
sub: Part 1 -- Responsive Web App vs Native Mobile App vs Progressive Web App
author: sondra
date: 2023-05-05
tags:
  - Article
  - Business Development
  - Push Notifications
  - Recommendations
  - Responsive Web Apps
  - Startups
  - User Experience
image:
  src: blog/2023/part1-web.jpg
  alt: spider web with dew drops
summary: |
  The decision of what platform
  to use to build your app
  is quite important --
  affecting project scope, timeline, and budget.
  But understanding the differences between
  a responsive web app,
  a native mobile app,
  and a progressive web app --
  and deciding which one is right for your project --
  can seem insurmountably difficult.
  Welcome to part 1 of a three-part series
  unpacking the reasons to choose
  one platform over another.
  Let's start with responsive web apps.
---
{% import 'embed.macros.njk' as embed %}

You have an idea for a custom digital product you'd like to build, and it's time
to decide how to build it. One of your friends swears you won't succeed unless
you build a native mobile app for iPhone. A colleague argues that a responsive
web app is the only way to go. Who's right? Are there alternative options?

The great news is that you don't need to spend years becoming a web developer
yourself in order to make a wise choice. In the following three-part series,
we'll dig into the three main options for building mobile apps -- responsive web
apps, native mobile apps, and progressive web apps -- and how to determine the
best option for your project. As you read, think about who your app will serve,
what their most pressing needs are, and how your app will meet those needs.

<!-- **Read all three parts to compare app types:**

1. [When to Choose a Responsive Web App](/2023/05/05/when-to-choose-a-responsive-web-app/)
2. [When to Choose a Native Mobile App](/2023/06/07/when-to-choose-a-native-mobile-app/)
3. [When to Choose a Progressive Web App](/2023/07/05/when-to-choose-a-progressive-web-app/) -->

## What are Responsive Web Apps, Native Mobile Apps, and Progressive Web Apps?

Here are the biggest differences in a nutshell.

- **Responsive Web App (RWA)** -- An application that runs in web browsers, such
  as Chrome, Firefox, or Safari, and responds to fit any screen size on any
  device
- **Native Mobile App** -- An app built specifically for one particular mobile
  operating system, like iOS or Android, and downloaded from an app store
- **Progressive Web App (PWA)** -- A responsive web app with additional
  capabilities that mimic a native mobile app, such as push notifications and
  offline mode

{{ embed.img(
  src='blog/2023/app-comparison-chart.jpg',
  alt='A comparison chart showing the differences between
    responsive web apps, progressive web apps, and native
    mobile apps'
) }}

## Responsive Web Apps -- Best for Wide Reach

> **tl;dr**
>
> If your top priority is to reach as wide a range of
> people as possible, as quickly as possible, while keeping
> development and maintenance costs down, a responsive web app is
> likely the best option for building your digital product.

A responsive web app is essentially a website that resizes and rearranges its
content -- responding to fit whatever screen size a person chooses to use. RWAs
are built using standard web technologies like HTML, CSS, and JavaScript. They
are accessible from any device with a web browser such as Chrome, Firefox,
Microsoft Edge, Safari, or a mobile browser.

{{ embed.figure(
  data=[{'img': 'blog/2023/variousdeviceframes.jpg'}],
  caption='OddContrast app -- a responsive web app sample --
    shown in different sized devices'
) }}

{{ embed.figure(
  data=[{
    img: 'blog/2023/yes.png',
    alt: 'The word "yes" with a smiley and sparkles'
  }],
  class='media-pull',
  attrs={'style': '--rowspan: span 3'}
) }}

## Choose a Responsive Web App When…

### Lower Cost
*Choose a responsive web app when it's important to keep initial development
costs low.*

Responsive web apps use a single codebase.[^codebase] Compared to native mobile
apps, RWAs are relatively inexpensive to develop, requiring just one codebase to
be available on any device with a web browser.

{{ embed.img(
  src='blog/2023/html-css-js.jpg',
  alt='html and css code samples'
) }}

To be clear, building any kind of app is not a low cost endeavor. Even a very
simple responsive web app can have a starting price of $10K, and very complex
web apps, such as social media platforms or project management software, cost
many millions of dollars to design, develop, and maintain.

Here's the icing: a responsive web app can later be turned into a progressive
web app. So a responsive web app can be a good first step even if you plan to
add more capabilities later.

[^codebase]: The term *codebase* is developer-speak for the collection of code
  used to build an application.

### Faster Development
*Choose a responsive web app when it's a priority to make your app available to
users quickly.*

RWAs take less time to build, relative to native mobile apps; it only takes one
codebase to reach any device with a browser. It can also take less time to make
the minimum viable product[^MVP] (MVP) available to an initial set of users, get
feedback, and release frequent, incremental updates.

No matter the type, even a very simple MVP of your app will take at least a few
months to build. Very complex apps often take multiple years to design and
develop. If you want to make sure you're meeting the needs of the people who use
your app, you will want to allow time to collect their feedback along the way
and make improvements.

{{ embed.img(
  src='blog/2023/faster-dev.jpg',
  alt='sticky notes and sketches for web app'
) }}

[^MVP]: An MVP or *minimum viable product* is a version of a product with just
  enough features to be usable by initial users who can provide feedback for
  future product development.

### Less Maintenance
*Choose a responsive web app when you need to keep ongoing maintenance costs
low.*

Responsive web apps require less time and expense to maintain compared to native
mobile apps. An RWA's single codebase is built with standard web technologies,
and doesn't require an update of the entire app to make incremental
improvements. It also takes less time and fewer developers to update a single
codebase than to update separate codebases that use specialized technology for
multiple platforms.

{{ embed.img(
  src='blog/2023/tools.jpg',
  alt='two wrenches'
) }}

### Discoverable Via Search Engines
*Choose a responsive web app when the people you want to reach will look for
your content with a search engine.*

Search engines, like Google, crawl the web looking for keywords and other
information to sort and rank the results. Then they collect, process, and store
a database of all that content. This is called *indexing*. RWAs live on the web,
so unless special code is added to prevent it, they will automatically be
indexed and appear in organic search results.

{{ embed.img(
  src='blog/2023/seo.jpg',
  alt='letters SEO with arrows pointing out in all directions'
) }}

### Broad Reach
*Choose a responsive web app when you want to reach a broad audience across
various devices.*

People can access the same RWA on any device -- from a small phone to a tablet,
from a laptop to a giant desktop -- unlike native mobile apps, which are limited
to specific supported mobile devices. Additionally, the web provides a high
level of backward compatibility,[^compatibility] meaning RWAs can be available
in some form even on old devices. On the other hand, one platform update can
totally block a device from accessing a native mobile app.

[^compatibility]: A technology has *backward compatibility* when it can operate
  with or take input from an older system.

{{ embed.img(
  src='blog/2023/paperchain.jpg',
  alt='paper chain of people'
) }}

{{ embed.figure(
  data=[{
    img: 'blog/2023/no.png',
    alt: 'The word "no" with a frowning face'
  }],
  class='media-pull',
  attrs={'style': '--rowspan: span 3'}
) }}

## Don't Choose a Responsive Web App When…

### Limited Capabilities
*Don't choose a responsive web app when your project requires a high level of
specialized capability.*

RWAs cannot access all of a device's hardware and software features. For
example, if your digital product requires direct integration with a specific
mobile device's GPS for geofencing or access to light and proximity sensors,
then an RWA won't work.

It is *possible* to access some advanced device features in the context of an
RWA, but then you would be moving into the [progressive web
app](/2023/07/05/when-to-choose-a-progressive-web-app/) space.

### Performance Limitations
*Don't choose a responsive web app when you need advanced performance.*

If a person has a slow internet connection, they will have trouble accessing RWA
content that requires a lot of processing power -- like videos or animated
games. If they have no internet connection, they will not be able to access an
RWA at all.

### Security Limitations
*Don't choose a responsive web app when you require advanced security.*

If your project needs advanced security beyond typical HTTPS encryption, such as
with banking applications, an RWA is less likely to be able to meet those
requirements.

### Not Discoverable Via App Store
*Don't choose a responsive web app when the people you want to reach will look
for your app in an app store.*

RWAs are not listed in app stores. If the people you want to reach exclusively
use app stores -- such as Google Play or the Apple App Store -- to search for
apps, they will not be able to find a responsive web app.

## In Summary

A responsive web app tends to be less expensive to build than other types of
apps -- especially native mobile apps -- and offers the broadest reach. But if
you have specialized needs around performance,[^performance] security, or
availability in app stores, one of the other two types of apps -- a native
mobile app or a progressive web app -- are probably going to be a better fit. In
the next part of this series, we'll take a look at the pros and cons of native
mobile apps.

{{ embed.img(
  src='blog/2023/various-devices.jpg',
  alt='various sized devices'
) }}

[^performance]: In the context of the web, *performance* refers to the speed at
  which web pages are downloaded and displayed on a web browser.

---

Curious about native mobile apps? Sign up for OddNews to be notified when **Part
2 -- When to Choose a Native Mobile App** hits the OddBlog.

^^ADD SIGN UP FORM HERE^^

<!-- Is a **native mobile app** right for your digital project? Read more about
[When to Choose a Native Mobile App](/2023/06/07/when-to-choose-a-native-mobile-app/). -->
