---
title: Research & Concepting
sub: Strategy, design concepts, and estimates based on user-research
index: Research & Concepting
image:
  src: pages/design-sketch.jpg
  alt: Sketched design concept
pitch:
  - title: Project Summary
    icon: icons/map
    text: |
      Your chance to provide a general sense of the goals, scope, and
      requirements of the project. We'll work with you to gain an
      understanding of your users and the core features that define
      your web app.
  - title: Interactive Mockup
    icon: icons/mockup
    text: |
      Beautiful designs of the application showing core features as defined
      in the Project Summary. Highly designed, interactive visualizations
      of your web app that represent the content layout and demonstrate
      basic features. Colors and fonts will be based on the existing brand
      or an accessible placeholder brand. (Full brand identity development
      process not included, but available upon request.)
planning1:
  - title: Goals
    icon: icons/map
    text: |
      Together we'll discuss the goals, scope, and requirements of the
      project and create a map for our journey. Some of the information may
      be available in planning documents you have already created. This
      process includes a review of technical, brand, and marketing goals as
      needed. Below are a few sample questions.

      <figure class='text-sample'>

      **What is the goal of the application?**
      *In other words, when it's done and working great,
      what specific outcomes will occur? Are we trying to close sales?
      Are we telling a story? Are we earning permission to follow up?
      Are we hoping that people will watch or learn?*

      **Who are we trying to reach?**
      *Is it everyone? Existing customers?
      A certain kind of prospect?
      What are the existing apps and sites
      that this group has demonstrated they enjoy interacting with?*

      **Does your audience have specific accessibility needs?
      Basic accessibility is included.**
      *Do varying ability levels play a role?
      Languages or other cultural/location differences?*

      </figure>
  - title: User Profiles
    icon: icons/users
    text: |
      Next we will create User Profiles to help us imagine a day in the life
      of your users. When and where do they use the application? What are
      they trying to do on the tool, and why? Below is a sample excerpt from
      a User Profile.

      <figure class='text-sample'>

      **User 1 - Coach**
      In the morning, Sam sits down at her desk in her office
      and opens CoachHub on her desktop in Chrome browser.
      She skims the dashboard and notices two alerts --
      new customer signups --
      that she needs to respond to right away.
      She clicks on one customer name
      and is taken directly to their profile information.
      Sam quickly browses their list of needs
      and clicks on her calendar to confirm the meeting date
      the new customer requested.
      It is easy to continue to the next customer
      because the tool bar with alerts
      still appears at the top of this page.
      After taking care of the immediate tasks...

      </figure>
  - title: Interactive Wireframe
    icon: icons/interact
    text: |
      We will also create a basic, interactive design of the application,
      showing the movement of users through core interactions. We'll make it
      look good, but lo-fi and unbranded, including several linked gray-scale
      pages. Wireframes are a great way to start visualizing your web product
      or site -- helping us get into the specifics of what your app should do.
      Wireframes are also a fantastic tool to get investor, CEO, or board
      approval.
planning2:
  - title: User Stories
    icon: icons/theater
    text: |
      Using the Goals, User Profiles, Interviews, and Wireframe we will
      create a list of expected features or 'stories' written from the
      perspective of individuals. The final list of User Stories represents
      all the ways people will interact with the web application or site.
      User Stories help us provide an accurate estimate, and collaborate with
      you to prioritize tasks, keeping you in control of the cost. Below is a
      sample set of User Stories. Large projects can have over 100 Stories.

      <figure class='text-sample'>

      **As a Coach, I want...**

      - to see a dashboard.
      - to check alerts.
      - to see and confirm appointments on a calendar.
      - to view a client's profile with need requests.

      **As a Client, I want...**

      - to create a profile.
      - to request an appointment on a calendar.
      - to select specific services from a list.

      </figure>
  - title: Data Model/Glossary
    icon: icons/site-map
    text: |
      What are the core concepts/objects around which the application is
      built? These are the data models. What are the relationships between
      the models? What data attributes does each model have, and what is the
      data-type for each attribute? Giving everything a name and describing
      the relationships will help guide development, and keep the entire team
      on the same page.
  - title: Itemized & Prioritized Estimate
    icon: icons/estimate
    text: |
      We'll estimate each User Story individually, providing you with an
      itemized hourly estimate, organized into phases where appropriate.
      We'll work with you to add, remove, and rearrange features to find the
      right balance of functionality and budget.
industry:
  - title: Competitor Overview
    icon: icons/running
    text: |
      Let's take a look at existing web apps and companies that serve a
      similar audience to get an overview of industry trends and potential
      pitfalls to avoid. We'll do a more detailed analysis of a direct
      competitor, asking questions like 'what are the specific features this
      competitor is using to serve people?' and 'how comfortable do users
      feel when using this competitor's web app?'
  - title: User Interviews
    icon: icons/messaging
    text: |
      Because your digital product needs to serve different people with
      distinct needs, we would like to have direct conversations with a
      variety of users in order to create something they will all find
      useful. These interviews can happen over the phone, via video chat,
      or through an online survey.
action:
  text: Schedule a call to begin
  url: /contact/
summary: |
  **Most projects start with Research & Concepting**
  to make sure we thoroughly understand your project.
  We'll help you pinpoint the right
  digital product -- a combination of customer/user needs and business
  goals -- with a robust plan for development and launch. We'll create an
  interactive wireframe to visualize your application or website, and a
  prioritized estimate to keep you in control of cost.
---

{% import 'quotes.macros.njk' as quotes %}
{% import 'embed.macros.njk' as embed %}

{{ quotes.find(
  collections.all,
  slugs='easy'
) }}


## What You Get

**This process delivers all the information required to take your
project to the next step.** We’ll help you understand the full scope of
your vision, experiment with interactive visualization, define the
Minimum Viable Product (MVP), get to know your customers on a new level,
and see a full estimate for design and development. Use the Research &
Concepting deliverables to present your idea to your board or CEO, or to
take the leap into creating your web project!

{{ embed.icon_block(planning1) }}

{% call embed.figure(
  caption='Sample Interactive Wireframe showing one laptop sized screen and the mobile view of the same content with clickable links.'
) %}
  {{ embed.img(
    src='pages/interactive-prototypes.png',
    attrs={'class': 'extend-large'}
  ) }}
{% endcall %}

{{ embed.icon_block(planning2) }}

## Get to Know Your Industry

The purpose of a web app or site is to improve life for people. We offer
these additional items to help you get to know the people who will
interact with your digital product more fully. Let's find out what's
familiar to them, where they are struggling, and what would make their
lives easier.

{{ embed.icon_block(industry) }}

{% call embed.figure(
  caption='Sample User Survey using Google Forms.'
) %}
  {{ embed.img(
    src='pages/web-app-survey.jpg',
    attrs={'class': 'size-full align-center'}
  ) }}
{% endcall %}
