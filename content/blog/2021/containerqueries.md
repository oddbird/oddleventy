---
title: Getting Started With Container Queries
sub: TK
author: davidh
date: 2021-04-01
image:
  src: projects/w3c.jpg
tags:
  - CSS
  - CSSWG
  - Article
  - Container Queries
summary: |
  summary: |
  [Chrome Canary](https://www.google.com/chrome/canary)
  released a version last week with an early prototype version of **container queries**. 
  What are they and how will they change the way we build layouts?
---

 The `@container` query, that elusive feature developers have been requesting and proposing for years, has finally made its debut in browsers. Well, sort of. As of Chrome Canary <!--[version]  -->, the most recent @container query proprosal, developed by OddBird's own Miriam Suzanne, is available for use behind an experimental flag. What _are_ container queries exactly? And why should you care? 


What are container queries, and why?

`@Media` queries sparked a responsive design revolution by allowing developers to change the styles of elements based on the size of the entire viewport. Up until now, what could not be done, was change the style of an element based on the size of its parent element. 

Let's say you had an article headline component that could end up almost anywhere on a site. It could be part of a featured article, big and bold, spanning the full width of the page. That same headline could sit in a list of other articles in a sidebar. Or it could be a teaser that sits in between other content. In a word, it could show up almost anywhere and the way it should be styled probably only rarely directly correlates to the size of the viewport. 

Instead of changing styles based on the size of the viewport, `@container` queries allow authors to change the style of elements based on the size of their parent element or nearest container.  

The current `@container` query syntax feels a lot like writing a `@media` query, but a main difference is that a `@container` query has to be implemented in two parts.

First, a containment context has to be defined. This lets the browser know which container you will be querying against later. 

```
section {
  /* establishes a new containment context on the inline axis */
  contain: layout inline-size;
} 
```

The `contain` property is part of the existing [CSS Containment Module](https://drafts.csswg.org/css-contain/). The `layout` value turns on [layout contaiment](https://drafts.csswg.org/css-contain/#valdef-contain-layout), which ensures that "nothing outside can affect its internal layout, and vice versa." The `inline-size` value is a proposed change to the Containment Module that would let authors explicitly declare in which dimension containment should be applied. 

The second part of a container query is determining the conditions for when styles of elements inside of a defined containment context should change and then writing the styles to be applied

```
@container (min-width: 30em) { 
  .some-element {
     /* styles to apply */
   }
  };
```
Any styles inside of this block will be applied when the container fulfills the condition of the query. 

Just as with `@media` queries, you can write as many `@container` queries as needed.

[How to turn on the flag]
