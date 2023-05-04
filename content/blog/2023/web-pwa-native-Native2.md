---
title: Part 2 - Responsive Web App vs PWA vs Native Mobile App
sub: When to choose a native mobile app for you digital product
author: sondra
date: 2023-06-07
tags:
  - Article
  - Business Development
  - Push Notifications
  - Recommendations
  - Startups
  - User Experience
image:
  src: blog/2023/part2-native.jpg
  alt: |
    A stand of smartphones
summary: |
  If you have an idea for a digital product,
  you may be wondering if you should build a
  responsive web app, PWA, or native app.
  Is one option inherently better?
  What are the pros and cons?
  This is part 2 of a three-part series
  unpacking the reasons to choose
  one platform over another.
  Let's dive into the native mobile app.
---
{% import 'embed.macros.njk' as embed %}

If you haven't read part 1 yet, it has a great introduction to each option along with a quick comparison chart.
[Read Intro to Responsive Web Apps, PWAs, and Native Mobile App](/2023/05/05/web-pwa-native-RWA1)


## Native Mobile App - Best for Advanced Capabilities

> **TL;DR**
>
> If your top priority is to provide a high level of specialized
> capability, especially for a specific mobile device like Android
> or iPhone, a native mobile app is likely the best option for
> building your digital product.

A native mobile app is an app created specifically for one particular mobile platform such as iOS, Android, or Windows. Native mobile apps are built using programming languages and tools unique to each platform. Swift or Objective-C for iOS. Kotlin, Java, and C++ languages along with SDK and APK tools for Android.

{{ embed.img(
  src='blog/2023/yes.png',
  alt='The word yes with a smiley and sparkles',
  attrs={
    'class': 'align-left'
  }
) }}

### Choose a Native Mobile App when…
### Advanced Capabilities
*…when your project requires a high level of hardware or software integration.*

Native apps can access all of a device's hardware and software features. For example, unlike RWAs, native mobile apps can integrate directly with a specific mobile device’s GPS for geofencing, access light and proximity sensors, or use a device’s camera.

### High Performance
*…when you need advanced performance.*

Native mobile apps are optimized for a specific platform. Because of this specialization, they can provide a higher level of processing power for things like large videos or games with lots of animation, compared to an RWA. This difference is especially pronounced when there is limited or no access to an internet connection. Native mobile apps are downloaded onto a specific device and can function even when there is no internet access.

### Advance Security
*…when you require advanced security.*

A native mobile app offers advanced security beyond the typical HTTPS encryption available with an RWA. If you are developing a banking product or need to meet strict HIPPA requirements, a native mobile app is likely a better option than an RWA.

### Discoverable Via App Store
*…when the people you want to reach will look for your app in an app store.*

Native mobile apps live in app stores like the Google Play Store and Apple’s App Store. If your research shows that the people you want to reach typically look for the type of content you will provide in app stores or if you want to build your marketing plan around app stores, then a native mobile app is a better choice than the RWA which is not listed in app stores.

{{ embed.img(
  src='blog/2023/no.png',
  alt='The word no with a frowning face',
  attrs={
    'class': 'align-left'
  }
) }}

### Don’t choose a Native Mobile App when…
### Higher Development & Maintenance Costs
*…when you want to keep short and long-term costs down.*

Native mobile apps require a unique codebase for each platform. For example, if you wanted to make the same native mobile app available on both Android and iOS mobile devices, you would need to build one codebase for Android and a separate codebase for iOS. Each codebase requires different proprietary technologies and likely requires separate teams of developers to build and maintain each platform. It is frequently more expensive to reach the same range of people with a native mobile app compared to an RWA.

### Lengthy Development
*…when it’s a priority to make your app available to users quickly.*

Because native mobile apps require a separate codebase for each platform you want to support, development generally takes longer than it does to develop a single codebase for an RWA. Additionally, each app store has its own set of requirements in order to launch an app. These can sometimes be complex. Wait times for app store approval to publish the app or an update can be lengthy as well.

### Not Discoverable Via Search
*…when the people you want to reach will look for your content with a search engine.*

Unlike for RWAs, search engines don’t index native mobile apps. If your research indicates that people frequently use search engines to search for the type of content you offer, an RWA may be a better choice. Alternatively, you could build a marketing website for the search engine to find that introduces your app and links people to the appropriate app store for download. (A separate marketing website will futher increase the costs and development costs.)

### Limited Reach
*…when you want to reach a broad audience across devices.*

Because it takes longer and costs more to reach the same range of people with a native mobile app than with an RWA, and because native mobile apps offer less backward compatibility, the number of people who can access a native mobile app will likely always be more limited than the number of people who can access an RWA. Additionally, a native mobile app is limited to mobile devices. To provide access to your content on a laptop or desktop, you would need to develop a separate native desktop software.

____
Is a **Progressive Web App** right for your digital project?
[Read Part 3 - Responsive Web App vs PWA vs Native Mobile App](/2023/07/05/web-pwa-native-PWA3/)
