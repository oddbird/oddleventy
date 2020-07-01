---
title: Open Design for OddBird.net
author: miriam
card: feature
date: 2016-07-12
tags:
  - Article
  - OddSite
  - Open Design
image:
  src: blog/oddsite.jpg
  alt: Early design concepts for OddBird's new site
summary: |
  We're re-building our website in the open,
  and writing about our process along the way.
  We hope you'll follow along and even get involved!
series: Open Design
---

It's time for a major overhaul of the OddBird website, referred to
internally as our **OddSite**. This will be more work than we can handle
in one pass, so we're going to take things slow and re-design our site
in the open – sharing our thoughts while we work.

## You Can Get Involved in Several Ways:

- **Feedback and Conversation:** Join our [open Slack channel] for
    front-row access to the process. Ask us questions, provide feedback,
    and hang-out with us along the way. You can also talk to us on
    [Twitter].
- **Live Site and Open Code:** Follow our progress here and on
    [Github].
- **Open Plans:** Find our to-do list, and watch our process on our
    Github [project board]. (note: we were using Pivotal Tracker, but
    wanted to [test the new Github features])

[open Slack channel]: http://friends.oddbird.net
[Twitter]: https://twitter.com/oddbird
[Github]: https://github.com/oddbird/oddsite/
[project board]: https://github.com/oddbird/oddsite/projects/1
[test the new Github features]: /2016/10/07/github-projects/

## What is Open Design?

At OddBird, we are very familiar with [open source collaboration], and
daily client feedback, but designing a site in the open is new to us.
Luckily, [we're not the first to do it]. There's a broad range of open
design practices, so we'll mix-and-match to see what works for us.

We decided to re-design our live site, rather than starting from scratch
on a private staging server. That means we'll be taking live traffic
while we work, and using [continuous integration] to make updates on a
regular basis. It also means we needed a usable first draft, so the site
would work publically from day one. We'll post more about that drafting
process in the next week or two.

You'll be able to see the site live as it develops, but we'll also post
articles along the way – capturing screen shots of the site at different
stages, sharing artifacts from the design process (such as sketches and
planning documents), and telling stories about our process and decision
making. We also have our [source code] available on GitHub, and will
talk about the open source tools we use, and share any tools we build.

[open source collaboration]: /open-source/
[we're not the first to do it]: https://bradfrost.com/blog/post/designing-in-the-open/
[continuous integration]: https://en.wikipedia.org/wiki/Continuous_integration
[source code]: https://github.com/oddbird/oddsite/

## Our Process From Here...

These are the rough stages we expect to go through:

1.  **Planning and Rough Drafts** — You're looking at a first rough
    outline of the site contents and organization. [Miriam] and [Sondra]
    put together this draft based on conversations with the team, as a
    proposal to discuss. At this point everything is still up for
    debate.
2.  **Information Architecture** — Before we dive into the fun design
    work, we want to make sure that all our content is in place,
    visitors can find the information they need, and we're telling the
    story we want to tell. We need to spend some time looking at it,
    playing with it, sorting out exactly what user stories are most
    important, and planning how those stories can be achieved.
3.  **Code Architecture** —  With a better view of our own content,
    we'll spend some time improving the data structures, views, and
    templates that drive the site. We're using [rstBlog] – a powerful
    but poorly-documented Python static-site generator – so it will take
    some customization and a lot of documentation to make sure we have a
    maintainable site going forward. We want to encourage regular
    updates, so it's important that we get the development flow right.
4.  **Design and Interaction** — We save most of our graphic design work
    for the end of the process. In reality, our designers are involved
    at every stage, guiding the planning and architecture from the
    start. [Sondra] made a few photoshop sketches to get us started on
    this first draft, and we'll generate more sketches to help us
    understand the architecture and flow as we move forward. But once
    everything is in place, we will be able to make much more clear and
    informed decisions about the final visual details.

[Miriam]: /authors/miriam/
[Sondra]: /authors/sondra/
[rstBlog]: https://github.com/mitsuhiko/rstblog

## Rinse and Repeat...

The steps can be listed like a numbered waterfall, but that's not how it
will happen in practice. The site goals will get broken down into
distinct user stories, and each story will reflect a microcosm of the
larger process. Changes to architecture will affect how we think about
user stories, and "final" changes to design will affect the
architecture. The process is flexible, and we can move around as we need
to, but having a general order reminds us what is most important to
focus on at each stage of the process.
