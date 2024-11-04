---
title: What do survey demographics tell us?
sub: Are we measuring what we meant to measure?
date: 2024-11-04
author: miriam
image:
  src: blog/2024/demographics.jpg
  alt: >
    A green on dark-gray horizontal bar chart,
    with the labels cut off
tags:
  - CSS
summary: |
  There's been a lot of interest
  in the results of the annual
  State of CSS survey,
  but are we asking all the right questions?
---

Sacha Greif's annual
[State of CSS survey](https://2024.stateofcss.com/en-US/)
wrapped up recently,
and the results are available.

I've seen a number of people
commenting on the
[demographics data](https://2024.stateofcss.com/en-US/demographics/),
asking what it says about our industry.
[Josh Comeau](https://www.joshwcomeau.com/email/2024-10-22-css-survey/)
and [Geoff Graham at CSS Tricks](https://css-tricks.com/state-of-css-2024-results/)
both provide some great commentary.
For example:
men in the US seem to make significantly more money
than the rest of the field.
Josh also points out when some questions
have a low response rate.

Those are great questions to ask.
But I haven't seen any analysis asking
if the survey demographics _actually match the industry_.
Or how that would impact our understanding of other survey answers.
For this, I would include a number of demographic questions
from other sections of the survey --
such as [industry sector](https://2024.stateofcss.com/en-US/usage/#industry_sector),
[CSS usage](https://2024.stateofcss.com/en-US/usage/#usage_type),
and [balance of time writing CSS (and HTML) vs JS](https://2024.stateofcss.com/en-US/usage/#css_js_balance).
Do we know how representative this is?

- Are 80% of global CSS authors actually white?
- Are 90% of CSS authors men?
- Do the majority of CSS authors spend more time writing JS?
- Is CSS mostly used for web apps?
- Does the industry skew young to the same degree as the survey?

If you don't know [Kevin Powell's work teaching CSS](https://www.kevinpowell.co/),
I highly recommend it.
But as you might expect
his audience is weighted towards students.
If he's a [primary source for respondents](https://2024.stateofcss.com/en-US/demographics/#source),
that's likely to impact the demographics, right?

There's no problem with that --
student perspectives are extremely useful! --
but it might change how we read the data.
With under 10,000 responses,
we know we're looking at a small
and self-selected sample of the field.
I know several excellent CSS authors
who didn't take the survey.
Are some more likely to respond than others?
For what reasons?
Are these results representative of CSS authors generally?
How would we know?

The largest 'source' is the survey itself,
which likely represents repeat participants.
So where did they come from initially?
The earliest data I can find is
[from the 2019 survey](https://2019.stateofcss.com/demographics/#source),
with the **State of JS** survey
as the most popular source.
Maybe it's not surprising if a majority of those respondents
write JS as their primary job?

In many cases,
polls use demographic data
_to adjust for response bias_ --
but that requires an understanding of how well
the demographics match the larger reality,
and also how that is likely to impact other data points.
How would it change our interpretation of the survey more generally
if we knew the answers to those questions?

- Do most CSS authors test their designs only on desktop,
  or is that specific to people who write CSS on the side?
- Is Tailwind broadly popular,
  or specifically within certain demographics?
- What other questions might arise from this analysis?
- Why aren't the OddBird [Winging It](https://www.oddbird.net/wingingit/) videos your top resource? 😅

The survey does allow us
to break down the data in various ways --
and run comparisons.
I don't feel qualified to parse out
what correlations are significant or relevant.
But poking around a bit,
a few things jumped out out:

- Men seem more likely to write JS primarily,
  while women are more likely to write CSS primarily.
- Respondents who write more JS are
  less likely to test across environments
  (and also less likely to answer that question).
- Respondents who write more JS are
  more likely to be working on applications.
- Kevin Powell sent people in all age brackets,
  but his largest bracket (22%) was people over 60!
  We love to see it.
  His next bracket (18%) was under 20.

Clearly, I don't have a lot of answers here.
These correlations don't tell us much
without knowing how representative the data is.
I'm just not sure what I'm looking at,
or how it should be read.
But it concerns me that browsers use surveys like this
as a primary gauge of developer interest --
seemingly without asking who's represented,
or who might be missing from the data.

Did you respond to the survey?
What questions do you have around this data?
Or what interesting correlations have you found?
Let us know on
[Mastodon](https://front-end.social/@oddbird)
or [Bluesky](https://bsky.app/profile/oddbird.dev).
