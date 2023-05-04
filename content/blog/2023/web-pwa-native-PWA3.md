---
title: Part 3 - Responsive Web App vs PWA vs Native Mobile App
sub: When to choose a progressive web app (PWA) for you digital product
author: sondra
date: 2023-07-05
tags:
  - Article
  - Business Development
  - Push Notifications
  - Recommendations
  - Startups
  - User Experience
image:
  src: blog/2023/part3-progressive.jpg
  alt: |
    Pen and notebook with a sketch of a website interface
summary: |
  If you're weighing the performance optimazation
  and device integration opportunities
  of a native mobile app
  against the broad reach and lower cost
  of the responsive web app,
  and can't decide which is a higher priority
  for your digital product,
  don't despair.
  The progressive web app may be
  just the solution you need.
  This is part 3 of a three-part series
  unpacking the reasons to choose
  one platform over another.
  Let's explore the progressive web app.
---
{% import 'embed.macros.njk' as embed %}

If you haven't read parts 1 and 2 yet, you may want to start with the introduction to RWAs, PWAs, and Native Mobile Apps in part 1. There's also a comparison chart for quick reference.
[Read Intro to Responsive Web Apps, PWAs, and Native Mobile App](/2023/05/05/web-pwa-native-RWA1)

## Progressive Web App - Best of Both Worlds

> **TL;DR**
>
> If your top priority is some combination of wide reach and
> advanced capabilities, you will want to investigate the
> progressive web app (PWA) option for your app project.

A progressive web app (PWA) is a responsive web app
with additional capabilities similar to a native mobile app. Like responsive web apps, PWAs are built using standard web technologies -- HTML, CSS, and JavaScript. They are accessible from any device with a web browser such as Chrome, Firefox, Microsoft Edge, Safari, or a mobile browser. Like native mobile apps, PWAs can be included in app stores. They can provide push notifications, offline mode, and a homescreen icon.

{{ embed.img(
  src='blog/2023/yes.png',
  alt='The word yes with a smiley and sparkles',
  attrs={
    'class': 'align-left'
  }
) }}

### Choose a PWA when…

### Lower Development & Maintenance Costs
*…when it’s important to keep initial development costs low.*

Just like responsive web apps, progressive web apps require just one [codebase](/2023/05/05/web-pwa-native-RWA1/#choose-an-rwa-when%E2%80%A6) to be available on any device with a web browser. From a single codebase, a PWA can reach people on any device with a browser, making it less expensive to develop and maintain than a native mobile app which requires unique codebases for each device. Depending on the amount of special capabilities you need to add, a PWA can cost a bit more than an RWA.

### Faster Development & Updates
*…when it’s a priority to make your app available to users quickly.*

PWAs have all the same advantages of RWAs when it comes to speed of development and updates. Developing only one codebase takes less time than developing separate native mobile app codebases for each device. Updates require fewer specialized technologies and can be done incrementally. On the other hand, packaging your PWA for inclusion in app stores takes more time, then a simple RWA, and requires going through the app stores approval process.

### Discoverable Via Search Engine & App Store
*…when the people you want to reach will look for your app with a search engine and in an app store.*

If your user research shows that people search for the type of content you offer in app stores *and* via web searches, the PWA can help you reach all those people more effectively than either an RWA -- which isn't available in app stores -- or a native mobile app -- which doesn't appear in web searches.

Since PWAs are a type of web app, search engines like Google will automatically index them and include them in search results. Various tools such as PWABuilder essentially wrap up a PWA like a native app for inclusion in the Google, Apple, and Windows app stores.

### Broad Reach
*…when you want to reach a broad audience across devices.*

If budget allows, PWAs can reach a broader audience than either responsive web apps or native mobile apps. With a single codebase, people can access the RWA on any device with a browser. They can find it from a search engine and, with some extra packaging, in any app store. They can access a PWA via the internet or download it onto their phone like a native mobile app and use it offline. Like RWAs, PWAs take advantage of the web's high level of "backward compatibility," meaning people on older devices will have some level of access.

### Specialize Capabilities
*…when you want to reach a broad range of people while keeping costs down as much as possible, but need some specialized capabilties.*

PWAs are better than native mobile apps and RWAs at providing a balance between reach, cost, and specialization. If you need to be able to send alerts or "push notifications" to people even when they do not have the app open on their phone, PWAs can offer that just like native mobile apps, whereas RWAs cannot.

If you cannot afford to build and maintain more than one codebase, but people using your app may have limited or sometimes no access to the internet, a PWA is likely the best option. While it may not perform as seamlessly as a native app without internet access, people can download a PWA onto their phone and access the content without a wifi or data connection.

To access and RWA, people need to open a browsers, but people can access a PWA via an icon on their phone's homescreen just like they do with a native mobile app.

{{ embed.img(
  src='blog/2023/no.png',
  alt='The word no with a frowning face',
  attrs={
    'class': 'align-left'
  }
) }}

### Don’t choose a PWA when…

In a nutshell, if your budget and timeline is quite constrained and you don't need any special capabilities, then the best option would be to build a responsive web app instead of a PWA. After you have more information about what the people using your app want and you have additional budget, you can always turn the RWA into a PWA. On the otherhand, if you do have plenty of budget and highly specialized needs that require full integration with a specific mobile device, a native mobile is going to be a better option than a PWA.

## You Made It!
Thanks for joining this epic journey to dig deep into the responsive web app, progressive web app, and native mobile app platforms. If you have questions about anything you read here, please feel free to ask us. We have a [handy dandy contact form](/contact/) you can use or you can chat with us on [Mastodon](https://front-end.social/@OddBird).

If you've decided that an RWA or a PWA are the right platform to build your digital product, we specialize in designing and developing those two types of apps at OddBird. Check out our [past work](/work/) and [let's chat](/contact/). If you've determined that a native mobile app is what you need, please let us know, and we can help refer you to experts in your mobile platform of choice.

____
Still not sure which platform is right for your digital product? Go back and review the **comparison chart** while you muse.
[Responsive Web App vs PWA vs Native Mobile App Comparison Chart](/2023/05/05/web-pwa-native-RWA1/#what-are-rwas%2C-pwas%2C-and-native-mobile-apps%3F)
