---
title: TimeDesigner
sub: Whole-School Design Thinking & Scheduling
logo: tegy
client: &client Tegy
date: 2016-01-01
end: 2018-07-15
image:
  src: work/timedesigner/grid-desktop.jpg
  alt: School schedule grid
fullgrid:
  - img: work/timedesigner/full-grid.jpg
    alt: a completed scenario with experiences laid out in a grid
experiencegrid:
  - img: work/timedesigner/experience-editing.jpg
    alt: browser inspector showing grid markup and css for a single experience
emptygridoverlay:
  - img: work/timedesigner/empty-grid-overlay.jpg
    alt: Firefox Grid Inspector tool including an overlay of the grid lines
scenariogrid:
  - img: work/timedesigner/setting-up-scenario-grid.jpg
    alt: an empty resource planning grid showing the start and end times
overlapexperience:
  - img: work/timedesigner/overlap-experience.jpg
    alt: a row with overlapping experiences
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
  - Education Sector
sample:
  desktop:
    src: timedesigner/timedesigner-desktop.jpg
    alt: Chicago K-8 School schedule iteration
  caption: |
     School scheduling -- from typical schedule
     to an iteration with expanded planning time
     for teachers -- built with CSS grid.
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
      OddBird provided **a focused team
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
  TimeDesigner helps school teams
  rapidly create multiple scheduling scenarios
  from various perspectives,
  and plan ahead for future iterations.
  OddBird helped Tegy
  plan, design, develop, launch, and maintain
  their school scheduling web app
  using CSS grid and custom property wizardry
  on the front-end,
  and well-tested Django/Python on the back-end.
  Currently, the software is only available to schools in
  Tegy training programs.
---

{% import 'quotes.macros.njk' as quotes %}
{% import 'embed.macros.njk' as embed %}
{% import 'layout.macros.njk' as layout %}

{{ quotes.find(collections.all, ['range', 'scheduling']) }}

{{ layout.title('What We Did') }}

{% call embed.media_block(
  media=embed.img(
    src='work/timedesigner/timedesigner-sample.jpg',
    alt='scenario with grouped experiences colored green'
  ),
  name='desktop-work'
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
- Ongoing maintenance

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
brand and user experience design,
front- and back-end development,
and ongoing maintenance
for their first web application, TimeDesigner.

## Research & Concepting

As with most OddBird web projects,
we started with a planning phase
to delve deep into the needs
of the educators who would use TimeDesigner,
as well as Tegy's vision
for their business.
Research & Concepting included creation of a
Project Goals document,
and User Profiles to understand
the actions different users
may want to take at different stages
in their journey through the app.
We created a Data Model
and glossary of terms,
with database requirements and relationships.
We designed Wireframes --
unbranded and interactive
sketches of TimeDesigner’s core features.

{{ embed.figure(
  data=[{
    img: 'work/timedesigner/wireframe.jpg',
    alt: 'early wireframe concept showing a clean table-like display
      with teachers and times as the column and row headers'
  }],
  caption='Wireframe of TimeDesigner’s schedule builder.'
) }}

Based on our research
and designs,
we compiled a full list of
all the required features
to reach Tegy's goals --
itemized, estimated, and prioritized
into several phases.
Tegy used the R&C deliverables
to pitch investors
and to raise funding
for an innovative school scheduling tool
called TimeDesigner.
They were successful,
and together
we moved to the next phase,
Design & Development.

{{ quotes.find(collections.all, ['iterate', 'investment']) }}

## Project Management

Before digging into
the juicy details
of Design & Development
for TimeDesigner,
a word about Project Management.
While Research & Concepting helped
with initial sorting,
goal setting,
and feature prioritization,
ongoing Project Management
was key to distilling Tegy's broad vision
into a useful, digital product.

At regular intervals
throughout design & development
of the TimeDesigner web application,
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
both for the application itself
and for usability.
Drawing on our many years of experience,
deep knowledge of web app development,
and involvement at the cutting edge of our fields,
OddBird guided Tegy
in a direction that would
have the biggest impact for users
without blowing their budget.

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

## Design & Development

### Creating a Flexible Schedule with CSS Grid and Custom Properties

One of the key features we built
for the TimeDesigner web application
was a flexible resource planning `scenario`.

{{ embed.figure(
  data=fullgrid,
  caption='An example of a scenario when many items -- or "experiences" --
    are added to the planning grid.'
) }}

Each scenario has an editable start and end time which we
use to calculate the total number of minutes in a school day.
Behind the scenes, we pass this data
to a CSS variable on the grid container.

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
    used in the markup and CSS to place experiences anywhere on the grid.'
) }}

For optimal flexibility,
an experience may overlap in time with another experience.
Thanks to CSS Grid,
we are able to place these in a sensible way with minimal effort.
Using `grid-auto-flow` with a value of `dense`,
we can allow the row to place experiences where they
fit, regardless of where they were added in the markup.
Additionally, we can assign the row a minimum height
and allow it to grow taller as needed using `minmax`.

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

This use of CSS grid combined beautifully
with an intuitive drag-and-drop interface.
An experience's `--start` variable is
updated continuously while being dragged,
allowing it to move responsively along the grid.

{{ embed.figure(
  data=[{
    img: 'work/timedesigner/dragdrop.jpg',
    alt: 'close up of an experience being dragged on the scheduling grid'
  }],
  caption='Each rectangle -- or "experience" --
    can be dragged and dropped,
    updating the CSS variables.'
) }}

### Print-to-PDF Reports

Users needed the ability to view, print or download
PDF reports of their scenarios
using print-specific layouts.
To do this, we created
custom print styles,
and used print-to-pdf
in a [headless Chrome](https://github.com/fate0/pychrome) instance
to render an HTML string to a PDF.

In addition to showing the scenario grid,
the reports included an expanded table view for each row
and a chart of the total minutes per color for the scenario.

{{ embed.figure(
  data=[{
    img: 'work/timedesigner/reports.jpg',
    alt: 'preview of the schedule in a table view
      filled with color coded experiences with times on top,
      and categories on the left'
  }],
  caption='Viewable reports can be printed or downloaded via print-to-pdf.'
) }}

### Site-Wide Undo & Redo

We also implemented a site-wide undo/redo feature
(available via visible buttons
or familiar `Ctrl-Z`/`Ctrl-Shift-Z`/`Ctrl-Y` keyboard shortcuts)
through a custom action manager.
Each action taken on the site
is added to a stack,
storing both "forward" and "backward" effects.
Undoing an action
triggers the "backward" effect
of the most recent action,
popping it off the end of the stack.
Redoing an action runs the "forward" effect again,
adding the action back to the end of the stack.

{{ embed.figure(
  data=[{
    img: 'work/timedesigner/undo-redo.jpg',
    alt: 'scenario with redo button highlighted'
  }],
  caption='Each action taken on the site is added to a stack,
    storing both "forward" and "backward" effects.'
) }}

## Ongoing Development

{{ embed.figure(
  data=[{
    img: 'work/timedesigner/fullapp.jpg',
    alt: 'scenario with multiple experiences selected'
  }],
  caption='Selecting a color for experiences in a TimeDesigner schedule.'
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
