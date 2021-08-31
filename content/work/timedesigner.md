---
title: TimeDesigner
sub: Whole-School Design Thinking & Scheduling
logo: tegy
client: &client Tegy
date: 2018-07-15
image:
  src: projects/tegy/grid-desktop.jpg
  alt: School schedule grid
fullgrid:
  - img: work/timedesigner/full-grid.jpg
    alt: A completed scenario with experiences laid out in a grid
experiencegrid:
  - img: work/timedesigner/experience-editing.jpg
    alt: Browser inspector showing grid markup and css for a single experience
emptygridoverlay:
  - img: work/timedesigner/empty-grid-overlay.jpg
    alt: The Firefox Grid Inspector tool includes an overlay of the grid lines
scenariogrid:
  - img: work/timedesigner/setting-up-scenario-grid.jpg
    alt: An empty resource planning grid showing the start and end times
overlapexperience:
  - img: work/timedesigner/overlap-experience.jpg
    alt: A row with overlapping experiences
people:
  - &furman
    name: Furman Brown
    face: furman-brown.jpg
    url: https://www.tegy.tools/profile/furman/profile
    title: Founder
    venue: *client
tags:
  - _post
  - Case Study
sample:
  desktop:
    src: tegy/timedesigner-desktop.jpg
    alt: Chicago K-8 School schedule iteration
  mobile:
    src: tegy/mobile-summary.jpg
    alt: Chicago K-8 School schedule iteration
  caption: |
     Chicago K-8 School schedule iteration with 1/2 hour added
tasks:
  - Accessible Interface
  - Custom Django Application
  - Integrated Style Guide
  - Information Architecture
  - Logo and Brand Identity
  - Responsive Design
  - Project Architecture
  - User Experience Design
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
      OddBird, provided **a focused team
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
{% import 'layout.macros.njk' as layout %}

{{ quotes.find(collections.all, ['range', 'scheduling']) }}

{{ layout.title('What We Did') }}

{% call embed.media_block(
  media=embed.screen(
    notch='0',
    content=embed.img(
      src='work/timedesigner/mobile-lg.jpg',
      alt='Small screen showing schedule grid filled with items',
      sizes='media'
    )
  )
) %}

{% call layout.grid('narrow-columns') %}

{% call layout.block('column') %}

### Design

- Wireframes & mockups
- Brand identity & implementation
- Accessible user interface (UI)
- User experience design (UX)
- Integrated style guide
- Information architecture
- Responsive across devices

{% endcall %}

{% call layout.block('column') %}

### Development

- CSS grid & custom properties
- Drag-and-drop interface
- Django
- Front-end
- Back-end
- On-going maintenance

{% endcall %}

{% endcall %}

{% endcall %}

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
of the educators who would use TimeDesigner,
as well as Tegy's vision
for their business.
R&C included creation of a
project goals document,
user profiles to understand
the actions different users
may want to take at different stages
in their journey through the app.
We created a data model
and glossary of terms,
with database requirements and relationships.
We designed wireframes --
unbranded and interactive
sketches of TimeDesigner’s core features.

{{ embed.figure(
  data=[{
    img: 'work/timedesigner/wireframe.jpg',
    alt: 'This early wireframe concept shows a clean table-like display with teachers and times as the column and row headers'
  }],
  caption='Wireframe of TimeDesigner’s schedule builder.'
) }}

Based on our research
and designs,
we compiled a full list of
all the required features
to reach Tegy's goals --
itemized, estimated, and prioritized
into several development phases.
Tegy used the R&C deliverables
to pitch investors
and to raise funding.
They were successful!

{{ quotes.find(collections.all, ['iterate', 'investment']) }}

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

At regular intervals
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

> When clients present us with small feature ideas,
> we keep asking why.
> When presented with a big vision,
> we keep asking how.
>
> ---Miriam Suzanne, Co-founder at OddBird

Together,
we dug into the details
of new features
to determine the implications --
both technical
and for usability.
Drawing on our many years of experience,
deep knowledge of web app development,
and involvement at the cutting edge of our fields,
OddBird guided Tegy
in a direction that would
have the biggest impact for users
without blowing the budget.

At the end of each planning conversation,
we documented proposed features
in the Trello project management tool.
We organized
and prioritized Trello cards
into two-week plans --
what are the most important features
right now --
and saved long-term feature goals
to be prioritized later.

{{ embed.figure(
  data=[{
    img: 'work/timedesigner/trello-sample.jpg',
    alt: 'close up of our project management tool with sample user story cards'
  }],
  caption='Trello board project management sample.'
) }}

## Design and Development

### Creating a Flexible Schedule with CSS Grid and Custom Properties

One of the key features we built was a flexible resource planning `scenario`.

{{ embed.figure(
  data=fullgrid,
  caption='An example of a scenario when many items -- or experiences --
    are added to the planning grid.'
) }}

Each scenario has an editable start and end time which we
use to calculate the total number of minutes in a school day.
We pass this data to a CSS variable on the grid container.

```html
<div class="row-grid" style="--day: 420;">
```

In our CSS grid definition,
we use this `--day` variable to set the total number of columns.
We end up with 1 column for each minute of the school day.

```css
.row-grid {
  grid-template-columns: repeat(var(--day), minmax(1px, 1fr));
}
```

{{ embed.figure(
  data=scenariogrid,
  caption='After creating a new scenario,
    the start and end times are used to make the overall grid.
    This example also shows vertical grid lines drawn with
    CSS borders using two different colors for the hour
    (`major`) and half hour (`minor`) segments.'
) }}

{{ embed.figure(
  data=emptygridoverlay,
  caption='We can see a great overview of the grid by
    using the grid inspector tool in Firefox.'
) }}

Each experience (`.exp`) on the grid is placed
using a start time (`--start`)
and duration (`--span`).
We include the option to add a transition period (`--plus`)
as well.

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
  caption='Using the Inspector, we see how variables are defined and
    used in the markup and css to place experiences anywhere on the grid.'
) }}

For optimal flexibility,
an experience may overlap in time with another experience.
Thanks to CSS Grid,
we are able to place these in a sensible way with minimal effort.
By using `grid-auto-flow` with a value of `dense`
we can allow the row to place experiences where they
fit regardless of where they were added in the markup.
Additionally, we can assign the row a minimum height
and allow it to grow taller as needed by using `minmax`.

```css
.row-grid {
  grid-auto-flow: dense;
  grid-auto-rows: minmax(1.75rem, auto);
}
```

{{ embed.figure(
  data=overlapexperience,
  caption='CSS Grid allows us to backfill available
    space of items regardless of document ordering.
    This can lead to accessibility issues if not applied with care.'
) }}

### Drag-and-Drop Schedule Interface with CSS Grid

We combined a drag-and-drop interface
with CSS grid. Anytime you drag an experience,
the software updates CSS variables
which makes the grid move around responsively.

{{ embed.figure(
  data=[{
    img: 'work/timedesigner/dragdrop.jpg',
    alt: 'A close up of an experience being dragged on the scheduling grid'
  }],
  caption='Each rectangle or "experience" can be dragged and dropped, updating the CSS variables.'
) }}

### Print-to-PDF Reports

We used print-to-pdf to generate reports which is cool.

{{ embed.figure(
  data=[{
    img: 'work/timedesigner/reports.jpg',
    alt: 'A preview of the schedule in a table view
      filled with color coded experiences with times on top,
      and categories on the left.'
  }],
  caption='Reports generated with print-to-pdf'
) }}

### Site-Wide Undo & Redo

There is a site-wide undo & redo.

## On-Going

{{ embed.figure(
  data=[{
    img: 'work/timedesigner/fullapp.jpg',
    alt: '@@@'
  }],
  caption='Selecting a color for experiences in a TimeDesigner schedule'
) }}

In the years
since TimeDesigner launched,
OddBird has continued
to support the project.
We have provided periodic bug fixes
and maintenance --
though the site has needed relatively little.
Tegy has been training school teams
and scheduling engineers
in organization design using TimeDesigner.
After several years,
we are excited to work with Tegy again
to create Phase 2 of TimeDesigner,
enabling more schools
to innovate organization models,
make better use of their resources,
and improve the learning environment
for everyone.
