---
card: large
title: QuarqNet
banner: QuarqNet Application
sub: Real-time telemetry & sharing for athletes
links:
  site: https://www.quarqnet.com/
logo: sram
image:
  src: projects/qasper.jpg
  alt: World's greatest athlete, Stacy Kvernmo's latest bike ride stats and mapped route
  width: 2786
  height: 958
client: SRAM/Quarq
date: 2015-01-01
end: 2016-12-15
tags:
  - _post
  - Case Study
  - Sports Sector
  - Wellness Sector
sample:
  desktop:
    src: quarqnet/desktop.jpg
    alt: Full-screen map of a bike ride path, along with ride metrics
    position: bottom left
  mobile:
    src: quarqnet/mobile.jpg
    alt: Mobile view of a bike ride path, along with ride metrics
    position: bottom
    fit: contain
    notch: 9%
  caption: |
    We worked closely with the Quarq team and active users --
    iterating on the design and functionality
    to give athletes, friends, family, coaches, and colleagues
    easy access to location and statistics in real time.
press:
  - text: |
      A mobile-friendly design that will let users see the live tracking
      and performance data, even on the go, making it easy to connect up
      with others while out on a ride.
    name: BikeRumor
    face: bike-rumor.jpg
    url: https://bikerumor.com/2016/09/28/share-ride-real-time-quarq-qollector/
    slug: mobile
  - text: |
      **QuarqNet** captures the data
      and seamlessly synchronizes activities
      with analysis sites like Strava, TrainingPeaks, and Today's Plan.
      Athletes get unaltered, high-definition data
      and training log perfection.
    name: AeroGeeks
    face: aero-geeks.jpg
    url: http://aerogeeks.com/2016/10/09/10-9-2016-wir-the-kona-edition/
    slug: data
tasks:
  - Product Branding
  - User Experience Design
  - Project Architecture
  - Responsive Styles
planning:
  - title: User Profiles
    icon: icons/users
    text: |
      Together, we identified three distinct users --
      athletes, coaches, and friends/family.
      Each type of user
      wanted to use QuarqNet
      in unique ways.
      Athletes, the primary users,
      might use the app
      to track routes and stats
      in real time,
      connect with other athletes,
      or share stats on third-party sites.
      A friend may want to
      check an athlete's location
      to meet up for an activity,
      and a coach may want to
      track an athlete's progress over time.
  - title: User Stories
    icon: icons/theater
    text: |
      We created an itemized list of user stories --
      a representation of all the user interactions.
      Each user story defined one task
      that an athlete, coach, or friend
      might want to accomplish on QuarqNet.
      Before beginning development,
      we estimated the user stories,
      and Quarq prioritized them.
      The process of
      creating, estimating, and prioritizing user stories
      continued throughout the project,
      allowing Quarq to remain up-to-date
      and in control of the project cost and scope.
  - title: Data Models
    icon: icons/site-map
    text: |
      The data model provides a sense
      of back-end database structure
      and object-relationships,
      built around conversations with the entire team
      to determine not just what is included
      but how users will interact
      with the available models:
      "An ACTIVITY represents a single timespan
      during which a user's Qollector was turned on."
      The resulting document also acts as
      a glossary of terms,
      to help the entire team communicate consistently
      and write code that integrates smoothly.
summary: |
  A custom application we designed and built
  in collaboration with Quarq’s internal developers --
  including a responsive interface,
  real-time mapping & telemetry,
  social networking,
  and third-party integrations with
  Strava, Training Peaks, Dropbox, and Today’s Plan.
---

{% import 'quotes.macros.njk' as quotes %}
{% import 'embed.macros.njk' as embed %}

{{ quotes.grid(press) }}

## What They Needed

[Quarq] partnered with OddBird to redesign and refactor QuarqNet, their
existing activity tracking web application for professional athletes –
making it responsive and user-friendly.

QuarqNet needed to integrate with Quarq's existing brand, both the
e-commerce site, and the packaging and printed collateral for the
Qollector, Quarq's wearable, activity-tracking hardware. The QuarqNet
brand also matches [Quarq Race Intelligence], another Quarq web
application OddBird had the privilege to design and develop.

[Quarq]: https://www.sram.com/en/quarq
[Quarq Race Intelligence]: /work/quarqrace/

{{ embed.icon_block(planning, 'Planning & Discovery Phase') }}

## UX Design & Development Process

### Communication

Before diving into process details, a word about communication. At the
beginning of each project, we establish a communication system for
designers, developers, and clients – a shared Slack channel for daily
communication and a schedule for weekly video meetings. User stories are
prioritized in Pivotal Tracker and contain scope goals and a task list.

To establish color patterns for QuarqNet, OddBird designers started with
the existing brand colors and selected related user interface colors.
These colors were communicated via Pivotal Tracker and coded as Sass
Maps to establish front-end development patterns as well as an automated
"living" [style guide].

{{ embed.img(
  src='work/quarqnet/communication.png',
  alt='user story in Pivotal Tracker and Sass color maps',
  attrs={
    'class': 'extend-large'
  }
) }}

[style guide]: https://quarqnet.com/styleguide/config-colors.html

### User Story

OddBird's user experience design and development process always begins
with a user story, written from the perspective of a single user. One of
the very first user stories on the list for QuarqNet was: *As an
athlete, I can view my activity (map & data).*

### Initial Sketches

<div class="contain">

{{ embed.img(
  src='work/quarqnet/activity.jpg',
  alt='initial sketch of activity map and data',
  attrs={
    'class': 'align-left'
  }
) }}

Because of our focus on users, OddBird's development process for each
user story begins with rough sketches showing the flow of a specific
user through the content. The athletes using QuarqNet needed easy access
to the map of their route as well as the activity data. This initial
sketch displays the map and activity details together in a single view.
No clicking necessary to access the most useful information on both
mobile and larger screens.

</div>

### Hi-Fi Mockups

After the design direction for a user story is approved, we create
static or interactive mockups, often using [Adobe Xd]. These mockups
allow us to experiment with brand implementation as well as clarify user
flow and interaction – identifying sticking points and iterating
quickly. In conversation with Quarq, we worked to create a simple,
scannable layout for the activity data. We don't linger too long on this
step or attempt pixel perfection, as new UX problems nearly always
present themselves during implementation.

{{ embed.img(
  src='work/quarqnet/mockup1.png',
  alt='initial mockups of activity map and data',
  attrs={
    'class': 'extend-large'
  }
) }}

[Adobe Xd]: https://www.adobe.com/products/xd.html

### Implementation

Additional UX design changes happen during implementation as we begin to
interact with the new features in the context of the browser. Whether
working with our own internal developers or partnering with external
developers, we maintain a tight a feedback loop between designers and
developers as well as the clients at this stage. We have frequent video
calls to demo, discuss, pair, and re-design features. For this user
story we improved the dotted line, font size, and spacing of the
activity data within the browser.

{{ embed.img(
  src='work/quarqnet/implementation.png',
  alt='initial implementation of activity map and data',
  attrs={
    'class': 'extend-large'
  }
) }}

## Iteration Process

### User Story

Our process is agile and iterative, aiming to deliver usable
functionality quickly and in small increments. The faster our work gets
in front of stakeholders and alpha-test users, the faster we can make
adjustments and deliver exactly what's required, even as feedback along
the way alters the project requirements (which, in our experience, it
always does).

As we tested implemented features with QuarqNet users, we identified
bugs and user flow issues. The activity data box had become quite
complex. The same box displayed activity data, a list of past
activities, and more. During testing, users were not able to move
quickly between the pieces of information they needed. Plus, the tab
navigation we created hid too much of the map on mobile screens, a no-go
for our active QuarqNet users. A new user story was born: *As an
athlete, I want to move quickly and easily between activity list, data,
and map.*

### Sketches

Back to the sketch pad. The new proposal? Clarify wording, add a
collapsed view, make the tabs more compact, and move navigation to the
bottom of the activity box.

{{ embed.img(
  src='work/quarqnet/compact.png',
  alt='sketch of new, compact navigation',
  attrs={
    'class': 'extend-full'
  }
) }}

### Interactive Sketch

For this core user experience interaction, our designers fleshed out the
proposal further with a cross between a sketch and an interactive
mockup. The blue boxes below represent click targets and demonstrate the
user flow between activity list, data, and collapsed views. Play with
the interactive [InVision sketch].

{{ embed.img(
  src='work/quarqnet/interactive.png',
  alt='interactive sketch of new, compact navigation',
  attrs={
    'class': 'extend-large'
  }
) }}

[InVision sketch]: https://projects.invisionapp.com/share/YC8PAW1K3

### Hi-Fi Mockup

A hi-fi mockup added further detail, defining colors, shadows, icons,
and other visual clues to improve user comprehension of the new flow.

{{ embed.img(
  src='work/quarqnet/mockup3.jpg',
  alt='mockup of new, compact navigation',
  attrs={
    'class': 'extend-large'
  }
) }}

### Implementation

After minor design tweaks in the browser, we had our solution! View the
current, live application at [QuarqNet.com].

{{ embed.img(
  src='work/quarqnet/implementation3.png',
  alt='current, live application tab navigation',
  attrs={
    'class': 'extend-large'
  }
) }}

[QuarqNet.com]: https://www.quarqnet.com/
