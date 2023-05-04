---
title: Part 1 - Responsive Web App vs PWA vs Native Mobile App
sub: When to choose a responsive web app (RWA) for your digital product
author: sondra
date: 2023-05-05
tags:
  - Article
  - Business Development
  - Push Notifications
  - Recommendations
  - Startups
  - User Experience
image:
  src: blog/2023/part1-web.jpg
  alt: |
    spider web with dew drops
summary: |
  The decision of what platform
  to build your app with
  is quite important –
  affecting project scope, timeline, and budget.
  But understanding the differences between
  a responsive web app,
  a progressive web app,
  or a native mobile app,
  and which one is right for your project
  can seem insurmountably difficult.
  Welcome to part 1 of a three-part series
  unpacking the reasons to choose
  one platform over another.
  Let's start with the responsive web app (RWA).
---
{% import 'embed.macros.njk' as embed %}

You have an idea for a custom digital product you’d like to build, and it’s time to decide how to build it. One of your friends swears you won’t succeed unless you build a native mobile app for iPhone. A colleague argues that a responsive web app is the only way to go. Who’s right? Are there alternative options? The decision of how to build your app is quite important – affecting project scope, timeline, and budget – but understanding when to choose one option over another can seem insurmountably difficult.

The great news is that you don’t need to spend years becoming a web developer yourself in order to make a wise choice. In the following three-part series, we’ll dig into the three main options for building mobile apps: Responsive Web Apps (RWAs), Progressive Web Apps (PWAs), and Native Mobile Apps, and how to determine the best option for your project. As you read, think about who your app will serve, what their most pressing needs are, and how your app will meet those needs.

## What are RWAs, PWAs, and Native Mobile Apps?
Here are the biggest differences in a nutshell.

- **Responsive Web App (RWA)** - An application that runs in a browser, such as Chrome, Firefox, or Safari, and responds to fit any screen size on any device.
- **Progressive Web App (PWA)** - A responsive web app with additional capabilities that mimic a native mobile app.
- **Native Mobile App** - An app built specifically for one particular mobile operating system, like iOS or Android.


{{ embed.img(
  src='blog/2023/web-pwa-native-comparison-chart.png',
  alt='A comparison chart showing the differences between
  responsive web apps, progressive web apps, and native
  mobile apps'
) }}


## Responsive Web Apps - Best for Wide Reach

> **TL;DR**
>
> If your top priority is to reach as wide a range of
> people as possible, as quickly as possible, while keeping
> development and maintenance costs down, a responsive web app is
> likely the best option for building your digital product.

An RWA is essentially a website that resizes and rearranges its content – responding to fit whatever screen size a person chooses to use. RWAs are built using standard web technologies like HTML, CSS, and JavaScript. They are accessible from any device with a web browser such as Chrome, Firefox, Microsoft Edge, Safari, or a mobile browser.

<div class="contain">

{{ embed.img(
  src='blog/2023/yes.png',
  alt='The word yes with a smiley and sparkles',
  attrs={
    'class': 'align-left'
  }
) }}

## Choose an RWA when…
### Lower Cost
*…when it’s important to keep initial development costs low.*

Responsive web apps use a single “codebase.” The term “codebase” is developer speak for the collection of code used to build an application. Compared to native mobile apps, RWAs are relatively inexpensive to develop, requiring just one codebase to be available on any device with a web browser.

To be clear, building any kind of app is not a low cost endeavor. Even a very simple responsive web app can have a starting price of $10K, and very complex web apps, such as social media platforms or project management software, cost many millions of dollars to design, develop, and maintain.

</div>

### Faster Development
*…when it’s a priority to make your app available to users quickly.*

RWAs take less time to build, relative to native mobile apps; it only takes one codebase to reach any device with a browser. It can also take less time to make the minimum viable product (MVP) available to an initial set of users, get feedback, and release frequent, incremental updates.

### Less Maintenance
*…when you need to keep ongoing maintenance costs low.*

RWAs require less time and expense to maintain compared to native mobile apps. An RWA’s single codebase is built with standard web technologies, and doesn’t require an update of the entire app to make incremental improvements. It also takes less time and fewer developers to update a single codebase than to update separate codebases that use specialized technology for multiple platforms.

### Discoverable Via Search Engine
*…when the people you want to reach will look for your content with a search engine.*

Search engines, like Google, “crawl” the web looking for keywords and other information to sort and rank the content. Then they collect, process, and store a database of all that content. This is called “indexing.” RWAs live on the web, so unless special code is added to prevent it, they will automatically be indexed and appear in organic search results.

### Broad Reach
*…when you want to reach a broad audience across devices.*

People can access the same RWA on any device from a small iPhone to an Android tablet, from a MacBook laptop to a giant Windows desktop, unlike native mobile apps which are limited to supported mobile devices. Additionally, the web provides a high level of “backward compatibility,” meaning RWAs can be available in some form even on old devices. On the other hand, one platform update can totally block a device from accessing a native mobile app.

{{ embed.img(
  src='blog/2023/no.png',
  alt='The word no with a frowning face',
  attrs={
    'class': 'align-left'
  }
) }}

## Don’t choose an RWA when…
### Limited Capabilities
*…when your project requires a high level of specialized capability.*

RWAs cannot access all of a device’s hardware and software features. For example, if your digital product requires direct integration with a specific mobile device’s GPS for geofencing or access to light and proximity sensors, then an RWA won’t work.

### Performance Limitations
*…when you need advanced performance.*

If a person has a slow internet connection, they will have trouble accessing RWA content that requires a lot of processing power – like videos or animated games. If they have no internet connection, they will not be able to access an RWA at all.

### Security Limitations
*…when you require advanced security.*

If your project needs advanced security beyond typical HTTPS encryption, such as with banking applications, an RWA is less likely able to meet those requirements.

### Not Discoverable Via App Store
*…when the people you want to reach will look for your app in an app store.*

RWAs are not listed in app stores. If the people you want to reach exclusively use app stores to search for apps, they will not be able to find a responsive web app.
____
Is a **Native Mobile App** right for your digital project?
[Read Part 2 - Responsive Web App vs PWA vs Native Mobile App](/2023/06/07/web-pwa-native-Native2/)
