---
title: How to Design More Intuitive Websites & Apps
author: sondra
date: 2023-06-01
tags:
  - Article
  - User Experience
image:
  src: blog/2023/graph.jpg
summary: |
   Do you want to make your website or web app more intuitive and user-friendly for the people who visit? If so, I'd like to introduce you to unintuitive objects. As a UX designer at OddBird, identifying and then avoiding unintuitive objects have been key to architecting user-friendly and intuitive web products. A warning, though, before you continue. Once you see unintuitive objects, you won't be able to unsee them!
---
{% import 'embed.macros.njk' as embed %}

As a certified OOUX Strategist, I've been noticing unintuitive objects and working to avoid them in my own designs since 2020. That was the year when (among many other things) I first took Sophia Prater's [Object-Oriented UX Course](https://www.ooux.com/training).
To understand unintuitive objects, let's first look briefly at what we mean by objects in a digital system.

## Objects on the Web
An *object* in a web project is defined as something that has "structure, instances, and purpose." [OOUX Glossary](https://rewiredux.notion.site/d0827ee1695a4fa9b26f1f41b4a48ce2?v=96d4a2f843ac46a0b762e3efb4345209_)

Just as the structure of a chair in the physical world includes the seat, back, and legs, the structure of a digital object includes all the stuff that makes up that object. For example, on a news website, an article is an object. The structure of an article includes the person who wrote the article, the title, the images and text, the published date and time, the updated date and time, the category like arts, and more.

Instances are all the specific occurences of an object. To go back to a physical objects, instances of the chair object in my house would include the pink roller chair I sit in at my desk, the small chair my daughter uses in her room, the tiny chair in her dollhouse, a chair at the kitchen table. Instances of a digital article object would include articles like: "New E-Bike Rebates in Colorado," "Fires Rage in Canada," or "Discover the Genius of Fungi."

The purpose of the chair object in our example from the physical world is to provide people (and dolls) a place to sit down. The purpose the digital article object is to convey information to readers about what's going on in the world.

> "All humans think in objects —designers, end-users, and those who >
> painted the caves of Chauvet. So, as we make our user experiences
> more object-oriented, we also make them more *intuitive*."
> [ooux.com](https://www.ooux.com/what-is-ooux)

With that definition of objects in mind, let's look at what makes a digital object unintuitive for people using the web. Though it may seem backward, looking at examples of digital objects gone wrong is a really impactful way to understand what would make them intuitive.

## Unintuitve Objects on the Web
There are four type of unintuitive objects: Broken, Isolated, Masked, and Shapeshifter. To find examples of these unintuitive objects, I decided to go spelunkling through the website of one of my favorite places to visit in real life -- the Denver Zoo. The photography and graphic design are lovely, and what a great excuse to pour over pictures of cute animals! ANIMAL, HABITAT, and EVENT are three important digital objects on the Denver Zoo's website.

### Broken Objects
Objects that are not directly manipulatable.

### Isolated Objects
Objects that are disconnected from related objects.

The ANIMAL object in the digital space of the Denver Zoo's website is perhaps the most important one! Unfortunately, if we look at specific instances of the ANIMAL object, we find isolated objects. For example, the *African Penguin* is one instance of the ANIMAL object. The *Pinnacol African Penguin Point* is this penguin's HABITAT at the zoo. And *Demonstration - African Penguin* is the name of the penguin EVENT that zoo visitors can attend. If we look at the African Penguin in the list of all the ANIMALS and on the page with details about African Penguin there is no mention of either the penguin's HABITAT or the EVENT.

{{ embed.img(
  src='blog/2023/penguin-detail-list.jpg',
  alt='penguin detail and list views'
) }}

Likewise, if we visit the Pinnacol African Penguin Point HABITAT on the website, the African Penguin ANIMAL is at least listed, but it links back to the penguin HABITAT not to the penguin ANIMAL. Again, there is no mention of the penguin demonstration EVENT. The HABITAT is also included on the map view of the zoo. But there is no link to the African Penguin ANIMAL nor to the EVENT in the map view either.

{{ embed.img(
  src='blog/2023/penguin-habitat.jpg',
  alt='penguin habitat detail view'
) }}

{{ embed.img(
  src='blog/2023/penguin-habitat-map.jpg',
  alt='penguin habitat on a map'
) }}

Further, the section of the site with information about the Demonstration - African Penguin EVENT mentions the name of the HABITAT where the EVENT takes place and the name of the ANIMAL, but it doesn't link either.

{{ embed.img(
  src='blog/2023/penguin-event.jpg',
  alt='penguin event'
) }}

As a visitor at the zoo myself, one of my favorite things to do is attend the animal-specific demonstrations. But it is nearly impossible to use the website to find out the time and place (HABITAT) for a specific ANIMAL EVENT because these three essential objects are so isolated.

### Masked Objects
Objects that are styled to look the same, but are actually different.

### Shapeshifter Objects
Objects that are styled to look different, but are actually the same.
