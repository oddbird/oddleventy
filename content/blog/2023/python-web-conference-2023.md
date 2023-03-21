---
title: Python Web Conference 2023 Recap
author: ed
date: 2023-03-21
tags:
  - Article
  - Python
  - Conferences
image:
  src: blog/2023/pwc23.png
summary: |
  OddBird sponsored Python Web Conference 2023 and sent me to attend. In this
  article I showcase my favorite talks and activities of this excellent online
  event.
---

[Python Web Conference](https://2023.pythonwebconf.com/) is an online conference
that brings together the Python web development community. This year it ran from
March 13–17 and featured five tracks: App Dev, Cloud, Culture, PyData, and
Tutorials. I was especially interested in the App Dev and Cloud tracks, and I
was not disappointed. Here's a recap of my most memorable moments.

## App Security Does Not Need To Be Fun: Ignoring OWASP To Have A Terrible Time

By [Dwayne
McDaniel](https://2023.pythonwebconf.com/presentations/app-security-does-not-need-to-be-fun-ignoring-owasp-to-have-a-terrible-time).

Have you ever felt like you don't have the expertise and tools required to
assess the security of the applications and websites you develop? I certainly
have, which is why I appreciate this talk so much. It was a treasure trove of
useful resources provided by the [Open Web Application Security
Project](https://owasp.org/), aka OWASP:

- [Top Ten](https://owasp.org/www-project-top-ten/) -- A list of the most common
  web application vulnerabilities explained in short, plain English
  descriptions. It includes "How to Prevent" and "Example Attack Scenarios" for
  each.
- [Cheat Sheet Series](https://cheatsheetseries.owasp.org/) -- The tagline says
  it all: "Life is too short. AppSec is tough. Cheat!" These cheat sheets are
  detailed without being overwhelming. My favorite is the [Top 10 Cheat
  Sheet](https://cheatsheetseries.owasp.org/IndexTopTen.html), with practical
  steps to mitigate the vulnerabilities in the Top Ten list.
- [WebGoat](https://owasp.org/www-project-webgoat/) -- "A deliberately insecure
  application that allows interested developers just like you to test
  vulnerabilities commonly found in Java-based applications that use common and
  popular open source components."
  [Python](https://owasp.org/www-project-pygoat/) and
  [Node.js](https://owasp.org/www-project-node.js-goat/) versions are also
  available.
- [Juice Shop](https://owasp.org/www-project-juice-shop/) -- "Probably the most
  modern and sophisticated insecure web application! It can be used in security
  trainings, awareness demos, CTFs and as a guinea pig for security tools!"
- [Zed Attach Proxy (ZAP)](https://www.zaproxy.org/) -- An actual vulnerability
  scanner tool intended to find security breaches in your application. Use it
  carefully and only under authorization of the system being tested.
- [SecureFlag](https://owasp.org/www-project-secureflag-open-platform/) -- A
  CTF-style game that teaches you how to secure a web application by finding and
  fixing vulnerabilities.

## 1-click deploys of Python web apps to Azure

By [Pamela
Fox](https://2023.pythonwebconf.com/presentations/1-click-deploys-of-python-web-apps-to-azure).

I'm constantly on the lookout for new deployment platforms for my Python web
apps. I'm especially interested in platforms that allow the team to automate as
much as possible, use an "infrastructure as code" pattern, and have security and
monitoring built-in. Azure is one of those platforms, and this talk was a great
introduction to the topic. Here are some of the highlights:

- [Azure
  Bicep](https://learn.microsoft.com/en-us/azure/azure-resource-manager/bicep/overview?tabs=bicep) --
  Allows you to describe the desired state of your resources in a descriptive,
  easy-to-read language, and Azure will take care of the rest. This is a great
  alternative to the [Azure Resource Manager (ARM)
  templates](https://docs.microsoft.com/en-us/azure/azure-resource-manager/templates/overview)
  that are currently used to define Azure resources.
- [NubesGen](https://nubesgen.com/) -- Easily generate Terraform and Bicep
  templates for your project. Automate your infrastructure using GitOps best
  practices with GitHub Actions.

## Optimizing Django deployments with a Continuous Observability Strategy

By [Chad
Carlson](https://2023.pythonwebconf.com/presentations/optimizing-django-deployments-with-a-continuous-observability-strategy).

[Platform.sh](https://platform.sh/) is another Platform-as-a-Service (PaaS)
provider that has caught my attention. From this talk I got the impression they
offer a very integrated hosting solution that not only takes care of
provisioning and deployment, but also includes observability and monitoring
tools (think logging and metrics). I was particularly impressed by their
[Blackfire](https://www.blackfire.io/) demo.

## No Holds Barred Web Framework Battle

By [Daniel Roy
Greenfeld](https://2023.pythonwebconf.com/presentations/no-holds-barred-web-framework-battle).

The legendary *pydanny* took us on a journey through the history of Python web
frameworks and presented a very comprehensive comparison of the most popular
contenders: Django, Flask, and FastAPI. We learned about the pros and cons of
each, with particular attention to speed, developer experience (DX), async
support, database integration, and general capabilities. In my mind this
solidified FastAPI as the clear winner when it comes to speed and async support,
but Django is still a strong contender due to its "batteries included" approach
(the admin, for example, is plain magic) and wide ecosystem of third-party
packages.

## Taking a step back and leveraging GitOps to wrangle your clusters and projects

By [JJ
Asghar](https://2023.pythonwebconf.com/presentations/taking-a-step-back-and-leveraging-gitops-to-wrangle-your-clusters-and-projects).

For years I've been part of the trend of making git the single source of truth
for an application. Not only the application code lives in the repo, but also
configuration files for infrastructure. Additionally, deployments are automated
and depend on pushing to git branches instead of a manual process. It turns out
this is called "GitOps" and this talk was a great introduction to the topic.
What was new to me was the idea of deploy targets *polling* the repo to detect
if they have new changes to deploy, instead of the repo *pushing* changes to the
deploy targets. Apparently this allows applications to be deployed to multiple
environments without having to mix different types of configuration files in the
repository.

## Joyful Pyodide with...tests?

By [Paul
Everitt](https://2023.pythonwebconf.com/presentations/joyful-pyodide-with-tests).

This is one of those talks where a big chunk went over my head but I was so
enthralled by the technology being presented and the passion and charisma of the
speaker that I didn't care! Paul presented a setup where he was able to test
Python code running in the browser with actual Python unit tests, instead of the
good ol' "click around until something breaks." I appreciated the fact that he
presented this as a great tool but warned everyone that the performance penalty
is high and not something to be taken lightly.

## Python Puzzlers: Test Your Knowledge at Trivia

By the [Six Feet Up
team](https://2023.pythonwebconf.com/presentations/python-puzzlers-test-your-knowledge-at-trivia).

This was one of the social hour activities that I participated in. We were split
in two teams and used breakout rooms to answer trivia questions about Python. We
went for four or five rounds, and my team was ahead for most of the time. But
then the other team caught up and took the win in the last round which involved
recalling as much of the [Zen of
Python](https://www.python.org/dev/peps/pep-0020/) as possible. So close!

## Closing thoughts

This was my first remote-only conference, and I was pleasantly surprised by how
[Six Feet Up](https://sixfeetup.com/) organized it. There were no technical
issues, the talks were of excellent quality, they facilitated conversations in
face-to-face calls and Slack, and just made everyone feel great to be together,
even if we were physically apart. I'm looking forward to the next one!
