---
title: When to Choose a Native Mobile App
sub: Part 2 -- Responsive Web App vs Native Mobile App vs Progressive Web App
author: sondra
date: 2023-08-29
tags:
  - Article
  - Business Development
  - Native Mobile Apps
  - Push Notifications
  - Startups
  - User Experience
image:
  src: blog/2023/part2-native.jpg
  alt: A stand of smartphones
summary: |
  If you have an idea for a digital product,
  you may be wondering if you should build a
  responsive web app, a native mobile app,
  or a progressive web app.
  Is one option inherently better?
  What are the pros and cons?
  This is part 2 of a three-part series
  unpacking the reasons to choose
  one platform over another.
  Let's dive into native mobile apps.
---

{% import 'embed.macros.njk' as embed %}

If you haven't read part 1 yet, it has a great introduction to each option along
with a quick comparison chart: [When to Choose a Responsive Web
App](/2023/07/11/when-to-choose-a-responsive-web-app/)

**Read all three parts to compare app types:**

1. [When to Choose a Responsive Web App](/2023/07/11/when-to-choose-a-responsive-web-app/)
2. When to Choose a Native Mobile App (this article)
3. [When to Choose a Progressive Web App](/2023/10/30/when-to-choose-a-progressive-web-app/)

## Native Mobile App -- Best for Advanced Capabilities

> **TL;DR** --
> If your top priority is to provide a high level of specialized
> capability, especially for a specific mobile device like Android
> or iPhone, a native mobile app is likely the best option for
> building your digital product.

A native mobile app is an app created specifically for one particular mobile
platform such as iOS, Android, or Windows. Native mobile apps are built using
programming languages and tools unique to each platform: Swift or Objective-C
for iOS, or Kotlin, Java, and C++ languages for Android.

{{ embed.figure(
  data=[{
    img: 'blog/2023/yes.png',
    alt: 'The word "yes" with a smiley and sparkles'
  }],
  class='media-pull',
  attrs={'style': '--rowspan: span 3'}
) }}

## Choose a Native Mobile App When…

### Advanced Capabilities
*Choose a native mobile app when your project requires a high level of hardware
or software integration.*

Native apps can access all of a device's hardware and software features. For
example, unlike responsive web apps (RWAs), native mobile apps can integrate
directly with a specific mobile device's GPS for geofencing, access light and
proximity sensors, or access advanced camera APIs (e.g. for scanning QR codes).

{{ embed.img(
  src='blog/2023/iphone.jpg',
  alt='iphone phone lens'
) }}

### High Performance
*Choose a native mobile app when you need advanced performance.*

Native mobile apps are optimized for a specific platform. Because of this
specialization, they can provide a higher level of processing power for things
like large videos or games with lots of animation. This difference is especially
pronounced when there is limited or no access to an internet connection. Native
mobile apps are downloaded onto a specific device and can usually function even
when there is no internet access.

### Advanced Security
*Choose a native mobile app when you require custom security measures.*

A native mobile app offers security beyond the typical HTTPS encryption
available with an RWA. If you are developing a banking product that requires
secure authentication and verification of your users, or need to meet strict
HIPAA requirements, a native mobile app is likely a better option than a
responsive web app.

{{ embed.img(
  src='blog/2023/security.jpg',
  alt='phone with lock on the screen'
) }}

### Discoverable Via App Store
*Choose a native mobile app when the people you want to reach will look for your
app in an app store.*

Native mobile apps live in app stores like the Google Play Store and Apple's App
Store. If your research shows that the people you want to reach typically look
for the type of content you will provide in app stores, or if you want to build
your marketing plan around app stores, then a native mobile app is a better
choice than a responsive web app which is not listed in app stores.

On the other hand, a responsive web app with PWA enhancements can be listed in
the app store. Additionally, building a marketing campaign around an app store
can be expensive, and the tools to search for apps in the stores are limited.

{{ embed.img(
  src='blog/2023/app-store.jpg',
  alt='phone showing app store with the text new to the app store in one section'
) }}

{{ embed.figure(
  data=[{
    img: 'blog/2023/no.png',
    alt: 'The word "no" with a frowning face'
  }],
  class='media-pull',
  attrs={'style': '--rowspan: span 3'}
) }}

## Don't Choose a Native Mobile App When…

### Higher Development & Maintenance Costs
*Don't choose a native mobile app when you want to keep short and long-term
costs down.*

Native mobile apps require a unique codebase for each platform. For example, if
you want to make the same native mobile app available on both Android and iOS
devices, you need to build one codebase for Android and a separate codebase for
iOS. Each codebase requires different proprietary technologies, and likely
requires separate teams of developers to build and maintain each platform.

Frameworks like React Native and Flutter allow you to share a significant amount
of your codebase, but come with constraints, and result in an experience that
may not feel as native for users. To take advantage of the more advanced
features or platform-specific expectations, you may still need to write separate
code for each platform.

Due to separate codebases and proprietary technologies, it is frequently more
expensive to reach the same range of people with a native mobile app compared to
a responsive web app.

### Lengthy Development
*Don't choose a native mobile app when it's a priority to make your app
available to users quickly.*

Because native mobile apps require a separate codebase for each platform you
want to support, development generally takes longer than it does to develop a
single codebase for a responsive web app. Additionally, each app store has its
own set of requirements in order to publish an app, and these can be complex.
Wait times for app store approval to publish or update the app can be lengthy as
well.

### Not Discoverable Via Search Engines
*Don't choose a native mobile app when the people you want to reach will look
for your content with a search engine.*

Unlike responsive web apps, search engines don't index native mobile apps. If
your research indicates that people frequently use search engines to search for
the type of content you offer, an RWA may be a better choice. Alternatively, you
could build a marketing website for search engines to find, which simply
introduces your app and links people to the appropriate app store for download.
(A separate marketing website will further increase the design and development
costs.)

### Limited Reach
*Don't choose a native mobile app when you want to reach a broad audience across
devices.*

Because it takes longer and costs more to reach the same range of people with a
native mobile app than with a responsive web app, and because native mobile apps
offer less backward compatibility, the number of people who can access a native
mobile app will likely always be more limited than the number of people who can
access a responsive web app. Additionally, a native mobile app is
limited[^limited] to mobile devices. To provide access to your content on a
laptop or desktop, you would need to develop separate native desktop software or
a responsive web app.

[^limited]: Native mobile apps are limited to mobile devices, with the exception
  that [native iOS apps can now run on newer Macs][native apps].

[native apps]: https://support.apple.com/guide/app-store/iphone-ipad-apps-mac-apple-silicon-fird2c7092da/mac

## In Summary

A native mobile app excels in performance and security, and provides the most
advanced level of integration with specific devices. On the other hand, it tends
to be the most expensive to build and maintain compared to the other types of
apps -- especially responsive web apps -- and the range of people it can reach
is more limited. If you need a balance of expense, reach, and special
capabilities, a progressive web app might be the right answer for your project.
We'll look at the pros and cons of progressive web apps in the next part of this
series.

---

Is a **progressive web app** right for your digital project? Read more about
[When to Choose a Progressive Web App](/2023/10/30/when-to-choose-a-progressive-web-app/).
