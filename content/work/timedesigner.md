---
title: TimeDesigner
sub: Whole-School Design Thinking & Scheduling
logo: tegy
client: &client Tegy
date: 2018-07-15
image:
  src: projects/tegy/grid-desktop.jpg
  alt: School schedule grid
people:
  - &furman
    name: Furman Brown
    # face: furman-brown.jpg
    url: https://www.tegy.tools/profile/furman/profile
    title: Founder
    venue: *client
press:
  - text: |
      OddBird is high-caliber and nimble.
      Innovative at heart.
      Together,
      **we fundamentally transformed
      the Chicago public school system.**
    <<: *furman
    slug: innovative
  - text: |
      I have been having so much fun with this
      tool. The tool has been very helpful and
      you all have really **helped me think about
      scheduling creatively.** Thanks again!
    name: Dr. Amy Vondra
    face: amy-vondra.jpg
    url: https://www.cps.edu/about/leadership/principal-advisory/
    title: Principal, Chicago Public Schools
    slug: scheduling
  - text: |
      **I really enjoy this iterative design process.**
      Seeing how OddBird does the iteration
      has improved my own iterative system with schools.
    <<: *furman
    slug: iterate
  - text: |
      OddBird was the wise investment.
      We could have selected a cheaper avenue for this work --
      **we would have paid for it manifold in the long run**.
    <<: *furman
    slug: investment
  - text: |
      The internet was useless in deciding who to hire,
      with too much conflicting info.
      Then I found OddBird,
      providing **a focused team
      with a wide range of talent.**
    <<: *furman
    slug: range
  - text: |
      OddBird allowed me to **transform my vision
      into an MVP that has momentum**.
      I'm confident I'll be able to land big venture capital
      and increase my revenue from courses,
      because the tool has sped up the process.
    <<: *furman
    slug: mvp
  - text: |
      I love working with Miriam as a project manager,
      She's excellent at reigning me in.
    <<: *furman
    slug: focus
  - text: |
      When we were close to testing with actual users,
      I started to panic.
      But Miriam asked "what do you need?"
      and then we built that, and it worked.
    <<: *furman
    slug: needs
  - text: |
      OddBird already had so many processes
      in place as a team
      and knew how to work together;
      that allowed us get to where we are now.
    <<: *furman
    slug: process
summary: |
  Tegy TimeDesigner helps school teams
  easily create multiple scheduling scenarios
  from various perspectives,
  and plan ahead for future iterations.
  Currently the software is only available to schools in
  Tegy training programs.
---

{% import 'quotes.macros.njk' as quotes %}

<!-- all but the first quote -->
{{ quotes.grid(press | slice(2) | first ) }}
