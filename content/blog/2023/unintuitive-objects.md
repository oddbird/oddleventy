---
title: How to Design More Intuitive Websites & Apps
author: sondra
date: 2023-11-07
tags:
  - Article
  - User Experience
image:
  src: blog/2023/graph.jpg
summary: |
   Do you want to make your website
   or web app
   more intuitive and user-friendly
   for the people who visit?
   If so, I'd like to introduce you
   to the world of Object-Oriented UX.
   As a UX designer at OddBird,
   using OOUX strategies
   to identify and avoid *un*intuitive objects
   has been key to architecting more
   user-friendly and intuitive web products.
   A warning, though, before you continue.
   Once you start seeing unintuitive objects,
   you won't be able to unsee them!
---
{% import 'embed.macros.njk' as embed %}

As a certified OOUX Strategist, I've been noticing unintuitive objects and working to avoid them in my own designs since 2020. That was the year when (among many other things) I first took Sophia Prater's [Object-Oriented UX Course](http://partners.ooux.com/348125/17189).
To understand unintuitive objects,
let's first define
what *objects* are
in a digital system.

## Objects on the Web
An *object* in a web project
is something that has
"structure, instances, and purpose." [OOUX Glossary](https://rewiredux.notion.site/d0827ee1695a4fa9b26f1f41b4a48ce2?v=96d4a2f843ac46a0b762e3efb4345209_)

Just as the structure of a chair
in the physical world
includes the seat, back, and legs,
the structure of a digital object
includes all the stuff
that makes up that object.
For example, on a news website,
an article is an object.
The structure of an article
includes the person who wrote the article,
the title, the images and text,
the published date and time,
the updated date and time,
the category like arts, and more.

Instances are all the specific occurences
of an object.
To go back to a physical objects,
instances of the chair object in my house
would include the pink roller chair I sit in at my desk,
the small chair my daughter uses in her room,
the tiny chair in my daughter's dollhouse,
a chair at the kitchen table.

{{ embed.img(
  src='blog/2023/chair-object-bookshop.jpg',
  alt='five instances of a chair in a bookshop'
) }}

Instances of a digital article object
on a blog site would include articles like:
"When to Choose a Progressive Web App,"
"SQLAlchemy for Django Developers," or
"FastAPI Path Operations for Django Developers."

{{ embed.img(
  src='blog/2023/article-object-website.jpg',
  alt='six instances of an article on oddbird blog'
) }}

The purpose of the chair object
in our example from the physical world
is to provide people (and dolls)
a place to sit down.
The purpose the digital article object
on the news site is
to convey information to readers
about what's going on in the world.

> "All humans think in objects—designers, end-users, and those who
> painted the caves of Chauvet. So, as we make our user experiences
> more object-oriented, we also make them more *intuitive*."
> [ooux.com](https://www.ooux.com/what-is-ooux)

With that definition of objects in mind,
let's look at what makes a digital object unintuitive
for people using the web.
Though it may seem backward,
looking at examples of digital objects gone wrong
is a really impactful way
to learn how to make them more intuitive.

## Unintuitve Objects on the Web
There are four type of unintuitive objects:
Broken, Isolated, Masked, and Shapeshifter.
To find examples of these unintuitive objects,
I decided to go spelunkling through the website
of one of my favorite places to visit in real life --
the Denver Zoo.
The photography and graphic design are lovely,
and what a great excuse
to pour over pictures of cute animals!
ANIMAL, HABITAT, and EVENT
are three important digital objects
on the Denver Zoo's website.

### Broken Objects
*Objects that are not directly manipulatable.*

A broken object is an object
that isn’t directly manipulatable
within a digital space.
Let's look at an example
on the Denver Zoo's site.

One of my favorite things to do at the zoo
is attend events like the feeding the penguins,
so EVENT is a really useful object
for the zoo to include on its site.
Unfortunately, EVENT has been incorporated
into this website in a broken way.

For example,
here are instances of the EVENT object
in a list.
As someone who would like to attend the EVENT,
I want to click on an individual EVENT
to see more detail
like a description or maybe a map
showing the way to the location,
but I can’t.
Also there are two different times
when the Penguin EVENT happens.
There are also a variety of locations
where the EVENTS happen.
As a person planning my visit to the zoo,
it would be useful to see all the time options
for one EVENT grouped together
or see only the EVENTS happening at the same time.
I would also like to see
all the EVENT happening at one location.
But I can’t sort or filter the EVENTS
by time or location.
I can’t take the actions I want to take
when I encounter this EVENT object in this system.
As a regular visitor
to the zoo site,
I would likely describe this experience
as unintuitive.

{{ embed.img(
  src='blog/2023/broken-event.jpg',
  alt='penguin event at two times in a list of events'
) }}

As a designer, I may have made
this less intuitive design choice myself
using the old way of thinking about UX --
designing user flows
instead of designing with objects.
If I was designing this
from an OOUX perspective, though,
I would identify the EVENT object,
all its attributes,
and all the actions users would like to take
before designing a landing page like this
or making any mockups at all.
With the OOUX method, it’s a lot easier
to catch or avoid creating broken objects
early in the process.
When people can easily do all the things
to an object on a website or an app
that they expect to be able to do,
they are more apt to describe the experience as intuitive.

### Isolated Objects
*Objects that are disconnected from related objects.*

The ANIMAL object
in the digital space of the Denver Zoo's website
is perhaps the most important object!
Unfortunately, if we look at specific instances
of the ANIMAL object,
we find another kind of unintuitive object
called an isolated object.
For example, the *African Penguin* is one instance
of the ANIMAL object.
The *Pinnacol African Penguin Point*
is this penguin's HABITAT at the zoo.
And *Demonstration - African Penguin*
is the name of the penguin EVENT
that zoo visitors can attend.
These objects are clearly related
in the physical world,
and should be related
on the website as well.

If we look at the African Penguin
in the list of all the ANIMALS
and on the page with details about African Penguin
there is no mention
of either the penguin's HABITAT or the EVENT.

{{ embed.img(
  src='blog/2023/penguin-detail-list.jpg',
  alt='penguin detail and list views'
) }}

Likewise, if we visit
the Pinnacol African Penguin Point HABITAT
on the website,
the African Penguin ANIMAL
is at least listed,
but it links back to the penguin HABITAT
not to the penguin ANIMAL.
Again, there is no mention of
the penguin demonstration EVENT.
The HABITAT is also included
on the map view of the zoo.
But there is no link to the African Penguin ANIMAL
nor to the EVENT
in this map view either.

{{ embed.img(
  src='blog/2023/penguin-habitat.jpg',
  alt='penguin habitat detail view'
) }}

{{ embed.img(
  src='blog/2023/penguin-habitat-map.jpg',
  alt='penguin habitat on a map'
) }}

Further, the section of the site
with information about
the Demonstration - African Penguin EVENT
mentions the name of the HABITAT
where the EVENT takes place
and the name of the ANIMAL,
but it doesn't link to either.

{{ embed.img(
  src='blog/2023/penguin-event.jpg',
  alt='penguin event'
) }}

As a visitor at the zoo myself,
I have chosen to wonder around
and look at the physical signage at the zoo
hoping I won't miss a fun event,
rather than to try to piece together
these unintuitive,
isolated objects using the website.

To fix this isolation problem,
as a designer using the OOUX method,
I would define the ANIMAL, HABITAT,
and EVENT objects
at the very beginning of the project.
I would list all of their relationships
to each other in the system
and prioritize the important relationships.
During the design phase,
I would prioritize those object relationships.
For example, when designing the detail view
of an ANIMAL object,
I would be sure to include
links to and from the HABITAT and EVENT objects.
I would likely even
design a mini or card view
of the HABITAT and EVENT objects
and nest those cards on the ANIMAL detail view.

### Masked Objects
*Objects that are styled to look the same, but are actually different.*

As a designer,
I have created my share
of masked objects in the past.
When creating a landing page,
it seems like a bit time saver
and provides a unified look
if everything uses a single card style.

For example,
leaving the zoo for a moment,
let's look at the DisneyPlus landing page.
Here is a consistently designed row of rectangles
with a label.
It is quite easy to skim.
But there are arguably two separate objects here
that have an identical design --
a MOVIE and a SERIES.
As a DisneyPlus webapp user,
I have often searched
for a movie to watch with my family,
clicked one of these lovely boxes,
and discovered to my dismay
that it isn't a movie,
but a TV series masquerading as a movie.

If I were to redesign
the DisneyPlus MOVIE and SERIES objects
as two separate objects,
I would list all of the attributes for each object,
and then identify the unique
and high priority attributes.
For example,
both a MOIVE and SERIES object
have an image (with the title included),
but a SERIES has seasons and episodes
while a MOVIE has a total length.
Even if I wanted a consistent rectangle card
on my homepage,
I could at least include the number of seasons
on the SERIES card
and the total length
on the MOVIE card.
Even that small difference in the designs
of a MOVIE and a SERIES object
would go a long way toward unmasking these objects.
To make a MOVIE and a SERIES
even more instantly differentiated,
I could do something like
make all MOVIE cards square
and all SERIES cards rectangular.

Now, it is arguable that MOVIES and SERIES
aren't actually different objects in this system.
They do have a large amount of the same attributes.
Perhaps they are two different types
of a VIDEO object. (There's probably a better word.)
That descision is up to the UX designer,
but even in that case,
it would be a more intuitive experience
for me, anyway,
to see a MOVIE or a SERIES tag
on these cards.

### Shapeshifter Objects
*Objects that are styled to look different, but are actually the same.*

In my experience,
one of the most common reasons
a website vistor will experience a site
as unintuitive
is due to shapeshifter objects.
Not only is avoiding shapeshift objects
as huge win for the user,
it can also save UX designers a lot of time
creating mockups.

Let's look again at the EVENT object
on the zoo website.
This object actually appears
in at least two different list views
on the website.
These lists both display EVENTS,
but for reasons that are unclear to me
the EVENT object looks different
in each list.
All EVENT times are grouped together
under the name of the event in one list,
while the other lists only a single time
with item list item.
In one list the times are in bold.
In the other list they are italicized.
One list includes the EVENT location.
The other doesn't.

These are fairly minor differences.
If you start to look for shapeshifters yourself,
you will find much more dramatic redesigns
of the same object
for no discernable reason.
Still, even with these small difference,
as a visitor to the website,
it is not instancely obvious
that these two lists contain instances
of exactly the same EVENT object.
Thinking back to the physical world of objects,
how disconcerting and unintuitive would it be
if you encountered a chair object
at a desk and a chair object at a table.
But in the context of the desk
the chair had four legs,
and in the context of a the table
the chair had three legs.
You would definitely have to
spend some time
thinking through whether the chair with three legs
would work for you as a chair!
We want our digital spaces
to feel as intuitve as our physcial space.
Identifying and interacting with this EVENT object
could be as intuitive as identifying
and sitting down in a chair,
if it looked and acted the same in every context.

Plus, the designer of these two list views
spent time redesigning the EVENT object
in each context.
With OOUX,
it much quicker
to identify objects upfront,
design the list view,
card view, and detail view
for each object one time,
and then use those same designs
everywhere the object appears on the site.
