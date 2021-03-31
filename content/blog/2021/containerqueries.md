---
title: Getting Started With Container Queries
sub: TK
author: david
card: feature
date: 2021-04-01
image:
  src: projects/w3c.jpg
tags:
  - CSS
  - CSSWG
  - Article
  - Container Queries
  - 
summary: |
  **TK** TK.

  [CSS4]: https://www.w3.org/community/css4/
  [Design Token]: https://www.w3.org/community/design-tokens/
---

 The container query, that elusive feature developers have requested and proposed for years, has finally made its debut in browsers. Well, sort of. As of Chrome Canary <!--[version]  -->, the most recent container query proprosal, submitted by OddBird's own Miriam Suzanne, is available for use behind an experimental flag. What _are_ container queries exactly? And why should you care? 


What are container queries, and why?

`@Media` queries sparked a responsive design revolution by allowing developers to change the styles for elements based on the size of the entire viewport. Up until now, what could not be done, was change the style of an element based on the size of its parent element. 

Let's say you had an article headline component that could end up almost anywhere on a site. It could be part of a featured article, big and bold, spanning the full width of the page. That same headline could sit in a list of other articles in a sidebar. Or it could be a teaser that sits in between another article. In a word, like most components you are building today, it could show up almost anywhere and probably only rarely directly correlates to the size of the viewport. 

Instead of changing styles based on the size of the viewport, `@container` queries allow developers to change the style of elements based on the size of their parent element or nearest container.  

As currently proposed, the  `@container` query syntax feels a lot like writing a `@media` query, but the big difference is that a `@container` query has to be implemented in two parts.

First, a containment definition has to be made. This let's the browser know that this will be the container you will be querying against later. 

The second part is determining when you want styles of elements inside of that container to change and then writing the styles that should be applied. 

`@container (min-width: 30em) { /* do this */};`

Just as with `@media` queries, you can write as many `@container` queries as needed.

`@container (min-width: 45em) { /* do this */};`

`@container (min-width: 60em) { /* do this */};`



[Maybe an example of a use case here?]

To get started using container queries, first we have to define a containment context. What is the container I want to query against? 

[show code defining containment]

explain contain property
explain layout inline size

Once a containment context has been defined, use  @container to declare what should happen to elements at different sizes. This works a lot like media queries, so the syntax will look familiar.

[example of using @container]

Any styles inside of this block will be applied when the container fulfills the condition of the query. 

[How to turn on the flag]
