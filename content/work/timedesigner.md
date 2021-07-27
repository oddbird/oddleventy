---
title: TimeDesigner
sub: Whole-School Design Thinking & Scheduling
logo: tegy
client: &client Tegy
date: 2018-07-15
image:
  src: projects/tegy/desktop.jpg
  alt: School schedule grid
experiencegrid:
  - img: work/timedesigner/experience-editing.jpg
    alt: Browser inspector showing grid markup and css for a single experience
scenariogrid:
  - img: work/timedesigner/setting-up-scenario-grid.jpg
    alt: A new resource planning grid showing the start and end times
people:
  - &furman
    name: Furman Brown
    # face: furman-brown.jpg
    url: https://www.tegy.tools/profile/furman/profile
    title: Founder
    venue: *client
tags:
  - _post
  - Case Study
sample:
  desktop:
    src: timedesigner/SOMETHING HERE.jpg
    alt: SOMETHING HERE
  mobile:
    src: timedesigner/SOMETHING HERE.jpg
    alt: SOMETHING HERE
  caption: |
    SOMETHING HERE
tasks:
  - Accessible Interface
  - Custom Django Application
  - Integrated Style Guide
  - Information Architecture
  - Logo and Brand Identity
  - Responsive Design
  - Project Architecture
  - User Experience Design
  - WCAG & HIPAA Compliant
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
{% import 'embed.macros.njk' as embed %}

<!-- all but the first quote -->
{{ quotes.grid(press | slice(2) | first ) }}

## What They Needed

Tegy came to OddBird
with a multi-year plan
and a vision for
a suite of web applications
to help educators
improve their students' school experience
through organization design.
They needed project planning and guidance,
wireframes and itemized estimates
for investor pitches.
They needed
graphic and user experience design,
front- and back-end development,
and on-going maintenance.

## Research & Concepting

As with most OddBird web projects,
we started with a planning phase
to look deeply into the needs
of the educators who would use Tegy Time,
as well as Tegy's vision
for their business.

## Project Management

Research & Concepting helped
with initial sorting,
goal setting,
and prioritization.
But with such a huge need
and broad vision,
on-going guidance
was key
to moving the project
toward the successful launch
of a usable tool.

At regular intervals,
throughout the design & development phase,
OddBird met with Furman
on video calls
and in person.
We spent time listening to the vision
and asking strategic questions --
getting to the heart of the project,
understanding the reason behind
each new feature suggestion,
and identifying top priorities.
When presented with proposals
for small features,
we asked how each would support
Tegy's long-term goals.
When presented with big-picture vision,
we helped suggest specific,
small tasks
that would move the project
in the desired direction.

> When presented with small feature ideas,
we keep asking why.
When presented with a big vision,
> we keep asking how.

Together,
we dug into the details
of new features
to determine the implications --
both technical
and for usability.
Drawing on our many years of experience,
deep knowledge of web app development,
and involvement at the cutting edge our fields,
OddBird guided Tegy
in a direction that would
have the biggest impact for users
without blowing the budget.

At the end of our conversations,
we documented proposed features
in the Trello project management tool.
We organized
and prioritized Trello cards
into a two-week plan --
what's the most important feature
right now --
and saved long-term feature goals
to be priorized later.

<figure>
<img src="{{ site.images }}work/timedesigner/trello-sample.jpg" class="extend-full" alt="" /><figcaption>Trello board project management sample.</figcaption>
</figure>


## Design and Development

### CSS Grid

One of the key features we built was a flexible resource planning area.
Each scenario has an editable start and end time which we
use to calculate the total number of minutes in a school day.
We pass this data to a CSS variable on the grid container.

```html
<div class="row-grid" style="--day: 420;">
```

In our CSS grid definition,
we use this variable to set the total number of columns.
We end up with 1 column for each minute of the school day.

```css
.row-grid {
  grid-template-columns: repeat(var(--day),minmax(1px,1fr));
}
```

{{ embed.figure(
  data=scenariogrid,
  caption='After creating a new scenario, the start and end times are used to make the overall grid.'
) }}

The example above shows the vertical grid lines drawn with CSS borders using a style for the hour (`major`) and half hour (`minor`) segments.

Every item (`exp`) on the grid is placed using a start time (`--start`)
and duration (`--span`).
We include the option to add a transition period (`--plus`) to each item.

```html
<div style="--start: 410; --span: 55; --plus: 10;" class="exp">
```

The duration and transition period are added to create a `--total`
span amount for the grid-column.

```css
.exp {
  --total: calc(var(--span) + var(--plus));
  grid-column: calc(var(--start) + 1) / span var(--total);
}

```

{{ embed.figure(
  data=experiencegrid,
  caption='Using the Inspector, we see how an items variables are defined and used in the markup and css.'
) }}


### Drag-and-Drop Schedule Interface

## On-Going

In the three years
since TimeDesigner launched,
OddBird has continued
to support the project.
We have provided periodic maintenance -
though the site has needed relatively little -
and bug fixes.
For three years,
Tegy has been training school teams
and scheduling engineers
in organization design using Tegy Time.
As of 2021,
we are excited to work with Tegy again
to create Phase 2 of Tegy Time,
enabling more schools
to innovate organization models,
make better use of their resources,
and improve the learning environment
for everyone.
