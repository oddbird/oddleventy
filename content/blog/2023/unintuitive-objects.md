---
title: How to Design More Intuitive Websites & Apps
author: sondra
date: 2023-11-07
tags:
  - Article
  - User Experience
image:
  src: blog/2023/masks.jpg
chair:
  - img: blog/2023/chair-object-shop.jpg
    alt: two people sit in chairs in a bookshop reading and drinking coffee.
      five red arrows point to the five chairs arranged around tables beside the
      front window of the shop
article:
  - img: blog/2023/article-object-web.jpg
    alt: two rows of three rectangular posts each with an image, text blurb, and
      article label. six red arrows point to the article label on each post
object:
  - img: blog/2023/animal-habitat-demo.jpg
    alt: three overlapping sections of three web pages showing animal, habitat,
      and demonstration titles
penguin:
  - img: blog/2023/penguin-detail-list.jpg
    alt: two web pages, one showing a penguin in a list of animals and another
      showing the African (Black-Footed) Penguin detail page with a picture of
      two penguins, a description, adaptations, and classification. Habitat and
      range section is a paragraph with no link to the penguin's habitat.
habitat:
  - img: blog/2023/penguin-habitat.jpg
    alt: The penguin habitat detail page with a picture of penguins swimming,
      the name of the habitat Pinnacol African Penguin Point, a description, and
      a link to the African Penguin animal that links back to the habitat page,
      not the animal detail page
map:
  - img: blog/2023/penguin-habitat-map.jpg
    alt: A map of the zoo with Pinnacol African Penguin Point circled in red,
      but no links from the map to the penguin habitat page
isolated:
  - img: blog/2023/isolated-demo-list.jpg
    alt: Demonstrations in a list. Each list item shows the name of the
      demonstration which includes the animal's name, the location, and a single
      time when that demo happens. Red arrows point to the name of the animal,
      the habitat, and the name of the demo
broken:
  - img: blog/2023/broken-event.jpg
    alt: Demonstrations in a list. Demonstration - African Penguin demos happen
      at two different times and are listed separately in this live view. They
      are both highlighted with a red circle.
disney:
  - img: blog/2023/disney-rectangles.jpg
    alt: A screenshot of a small section of the DisneyPlus website with rows of
      shows designed as identical rectangles. Each rectangle has an image and a
      title.
series:
  - img: blog/2023/tv-series.jpg
    alt: A screenshot of a small section of the DisneyPlus website with the
      Behind the Attraction rectangle highlighted and an overlayed screenshot of
      the tv series detail view with the words 2 seasons circled in red and a
      red arrow pointing to more episodes.
movie:
  - img: blog/2023/movie.jpg
    alt: A screenshot of a small section of the DisneyPlus website with
      The Beatles Now and Then rectangle highlighted and an overlayed screenshot
      of the movie detail view with 12m circled in red and a red arrow pointing
      to suggested movies.
masked:
  - img: blog/2023/masked-demo.jpg
    alt: Two versions of the demo list with the Demonstration - African Penguin
      event times circled in red on both lists.
summary: |
  Do you want to make your website
  or web app
  more intuitive for the people who visit?
  If so, I'd like to introduce you
  to the world of Object-Oriented UX.
  As a UX designer at OddBird,
  using OOUX strategies
  to identify and avoid *un*intuitive objects
  has been key to our design process.
  A warning, though, before you continue:
  once you start seeing unintuitive objects,
  you won't be able to unsee them!
---

{% import 'embed.macros.njk' as embed %}

I've been noticing unintuitive objects
and working to avoid them
since I first took Sophia Prater's
[Object-Oriented UX Course](http://partners.ooux.com/348125/17189) in 2020,
becoming a [Certified OOUX Strategist](https://www.ooux.com/people/sondraeby).
To understand unintuitive objects,
let's first define
what *objects* are
in a digital system.

## Objects on the Web

An *object* in a web project
is something that has
**structure**, **instances**, and **purpose**.

Just as the structure of an object
in the physical world
such as a chair
includes the seat, back, and legs,
the structure of a digital object
includes all the stuff
that makes up that object.
For example, on a blog,
an article is an object.
The structure of an article
includes the author,
the title, the images and text,
the published date and time,
the updated date and time,
the category or topic, and more.

Instances are all the specific occurrences
of an object.
To go back to a physical object,
instances of the chair object in my house
would include the pink roller chair I sit in at my desk,
the small chair my daughter uses in her room,
the tiny chair in my daughter's dollhouse,
and each chair at the kitchen table.

{{ embed.figure(
  data=chair,
  caption='Five instances of a CHAIR object in a bookshop'
) }}

Instances of a digital article object
on a blog could include articles like:
"When to Choose a Progressive Web App,"
"SQLAlchemy for Django Developers," or
"FastAPI Path Operations for Django Developers."

{{ embed.figure(
  data=article,
  caption='Six instances of an ARTICLE object on OddBlog'
) }}

The purpose of the chair object
in our example from the physical world
is to provide people (and dolls)
a place to sit down.
The purpose of the digital article object
on the blog is
to convey information to readers
about specific topics of interest.

> "All humans think in objects -- designers, end-users, and those who
> painted the caves of Chauvet. So, as we make our user experiences
> more object-oriented, we also make them more *intuitive*."
>
>--*Sophia Prater*, [ooux.com](https://www.ooux.com/what-is-ooux)

With that definition of objects in mind,
let's look at what makes a digital object *unintuitive*
for people using the web.
Though it may seem backward,
looking at examples of digital objects gone wrong
is a really impactful way
to learn how to make them more intuitive.

## Unintuitive Objects on the Web

There are four type of unintuitive objects:
**Isolated**, **Broken**, **Masked**, and **Shapeshifter**.
To find examples of these unintuitive objects,
I decided to go spelunking through the website
of one of my favorite places to visit --
the Denver Zoo.
The photography and graphic design are lovely,
and what a great excuse
to pore over pictures of cute animals!

### Isolated Objects
*Objects that are disconnected from related objects.*

ANIMAL, HABITAT (where an animal lives),
and DEMO (an animal demonstration event)
are three essential objects
at the zoo.
The zoo website does include
all three of these objects --
ANIMAL, HABITAT, and DEMO.
Hooray!

{{ embed.figure(
  data=object,
  caption='ANIMAL, HABITAT, and DEMO are three important objects at the zoo'
) }}

The ANIMAL object
in the digital space of the Denver Zoo's website
is perhaps the most important object!
If we look at specific instances
of the ANIMAL object, though,
we find the first type of unintuitive object
called an isolated object.
For example, the *African Penguin* is one instance
of the ANIMAL object.
The *Pinnacol African Penguin Point*
is this penguin's HABITAT at the zoo.
And *Demonstration -- African Penguin*
is the name of the penguin DEMO
that zoo visitors can attend.

These three objects
ANIMAL, HABITAT, and DEMO
are necessarily related
in the physical world,
and should be related
on the website as well.

However, if we look at the African Penguin
in the list of all the ANIMALS
or on the African Penguin detail page,
there is no link
to the penguin's HABITAT
and not even any mention of the penguin DEMO.

{{ embed.figure(
  data=penguin,
  caption='Penguin ANIMAL detail and list views
    with no link to the penguin HABITAT'
) }}

Likewise, if we visit
the Pinnacol African Penguin Point HABITAT
on the website,
the African Penguin ANIMAL
is at least listed,
but it links back to the penguin HABITAT
instead of to the penguin ANIMAL.
Again, there is no mention of
the penguin demonstration DEMO.

{{ embed.figure(
  data=habitat,
  caption='Penguin HABITAT with a broken link to the penguin ANIMAL'
) }}

The HABITAT is also included
on the map view of the zoo.
But there is no link to the African Penguin ANIMAL
nor to the DEMO
in this map view either.

{{ embed.figure(
  data=map,
  caption='No link to the penguin ANIMAL or the penguin DEMO on the map view'
) }}

Further, the section of the site
with information about
the Demonstration -- African Penguin DEMO --
mentions the name of the HABITAT
where the DEMO takes place
and the name of the ANIMAL,
but it doesn't link to either.

{{ embed.figure(
  data=isolated,
  caption='DEMOs in a list with ANIMAL and HABITAT name,
    but no link to either related object'
) }}

As a visitor at the zoo,
I have opted to wander around
and look at the physical signage at the zoo
hoping I won't miss a fun event,
rather than to try to piece together
these unintuitive,
isolated objects using the website.

To fix this isolation problem,
as a designer using the OOUX method,
I would define the ANIMAL, HABITAT,
and DEMO objects
at the very beginning of the project.
I would list all of their relationships
to each other in the system
and prioritize the important relationships.
When designing the detail view
of an ANIMAL object,
I would be sure to include
links to and from the HABITAT and DEMO objects
to establish these high-priority relationships.
I would likely even
design a card view
of the HABITAT and DEMO objects
and nest those cards within the ANIMAL detail page.

### Broken Objects
*Objects that are not directly manipulatable.*

A *broken object* is an object
that isn't directly manipulatable
within a digital space.

One of my favorite things to do at the zoo
is attend demonstrations like the feeding of the penguins.
So DEMO is a really useful object
for the zoo to include on its website.
Hooray!
Unfortunately, DEMO has been incorporated
into the zoo's website in a broken way.

For example,
here are instances of the DEMO object
in a list.

{{ embed.figure(
  data=broken,
  caption='DEMO list view with no way to filter or sort'
) }}

As someone who would like to attend the penguin DEMO,
I want to click on an individual DEMO
to see more details,
like a description or a map
showing the way to the location,
but I can't.
There are also two different times
when the penguin DEMO happens,
and a variety of locations
where DEMOS happen.
As a person planning my visit to the zoo,
it would be useful to see all the time options
for one DEMO grouped together,
or see only the DEMOS happening at a specific time,
or all the DEMOS happening at one location.
But I can't sort or filter the DEMOS
by time or location --
I can't take the actions I want to take
when I encounter this DEMO object in this system.
As a regular visitor
to the zoo site,
I would describe this experience
as *unintuitive*.

If I were redesigning this DEMO list
using the object-oriented method,
again I would identify the DEMO object
at the very beginning of the project
and list all the actions people would like to take
before designing a landing page like this
or making any mockups at all.
That way,
when it comes time to design this landing page,
I could focus on laying out and styling the interactions
I had already identified
instead of trying to figure out
what the interactions should be
while designing them.
Splitting up these concerns
means you're less likely to forget
or leave out important interactions.
You're more likely to create a digital experience
where people can easily do all the things
to an object that they expect to be able to do --
a more *intuitive* web design!

### Masked Objects
*Objects that are styled to look the same, but are actually different.*

As a designer,
I have accidentally created my share
of masked objects before I learned
to design in objects.

To understand masked objects,
let's go straight to an example.
When creating a landing page,
it can seem like a big time saver
and provide a unified look
if everything uses the same card style.
Leaving the zoo for a moment,
let's look at the DisneyPlus landing page.
Here we see several rows of rectangles
that all look identical
except for the specific image and title.

{{ embed.figure(
  data=disney,
  caption='DisneyPlus website with rows of shows
    designed as identical rectangles'
) }}

It is quite easy to skim.
But there are arguably two separate objects here
that have an identical design --
a MOVIE and a TV SERIES.
As a DisneyPlus web app user,
I have often searched
for a movie to watch with my family,
clicked one of these lovely boxes,
and discovered to my dismay
that it wasn't a movie,
but a TV series masquerading as a movie.

{{ embed.figure(
  data=series,
  caption='One rectangle goes to a TV SERIES detail page'
) }}

{{ embed.figure(
  data=movie,
  caption='Another rectangle goes to a MOVIE detail page'
) }}

If I were to redesign
the DisneyPlus MOVIE and SERIES objects
as two separate objects,
I would list all of the attributes for each object,
and then identify the unique
and high priority attributes.
For example,
both a MOVIE and SERIES object
have an image (with the title included),
but a SERIES has *seasons* and *episodes*
while a MOVIE has a *total length*.
Even if I wanted a consistent rectangle card
on my homepage,
I could at least include the number of seasons
on the SERIES card
and the total length
on the MOVIE card.
To make a MOVIE and a SERIES
even more instantly differentiated,
I could make all MOVIE cards square
and all SERIES cards rectangular.

MOVIES and SERIES arguably
aren't actually different objects in this system.
They do have a large amount of the same attributes.
Perhaps they are two different types
of a VIDEO object.
That decision is up to the UX designer --
but even in that case,
it would be a more intuitive experience
to see a MOVIE or a SERIES tag
on these cards.

### Shapeshifter Objects
*Objects that are styled to look different, but are actually the same.*

In my experience,
one of the most common reasons
a website visitor will experience a site
as *unintuitive*
is due to shapeshifter objects.
Not only is avoiding shapeshift objects
a huge win for the user,
but it can also save UX designers a lot of time
creating mockups.

Let's look again at the DEMO object
on the zoo website.
This object appears
in at least two different list views
on the website.
These lists both display DEMOS,
but the DEMO object looks different
in each list.
One list shows each DEMO title once
with all the times the DEMO happens
right under the title.
The other list
shows each DEMO title multiple times
with only one of the times the DEMO happens.
In the first list the times are in bold,
while in the other list the times are italicized.
In the first list the `am` and `pm` do not have punctuation,
while in the other they do.
The first list does not include
the DEMO location -- the other does.

{{ embed.figure(
  data=masked,
  caption='Two versions of the DEMO list in which the DEMO styles shift'
) }}

These are fairly minor differences.
If you start to look for shapeshifters yourself,
you will find much more dramatic redesigns
of the same object on websites and apps
for no discernable reason.
Even with these small differences,
as a visitor to the website
it is not immediately obvious
that these two lists contain instances
of exactly the same DEMO object.
We want our digital spaces
to feel as intuitive as our physical spaces.
Identifying and interacting with this DEMO object
could be as intuitive as identifying
and sitting down in a chair,
if it looked and acted the same in every context.

Additionally, the designer of these two list views
spent time redesigning the DEMO object
in each context.
Using OOUX,
we can more efficiently identify objects upfront,
design the list view,
card view, and detail view
for each object one time,
and then use those same designs
everywhere the object appears on the site.

If you're interested in learning more
about object-orient UX,
check out [ooux.com](https://www.ooux.com/).
If you'd like an OOUX analysis or redesign
of your website or app,
please [contact us](/contact/) for a quote.
Happy object-oriented UX designing!
