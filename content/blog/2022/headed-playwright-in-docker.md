---
title: Running Playwright inside Docker containers
author: ed
date: 2022-11-30
tags:
  - Article
  - Testing
  - Docker
image:
  src: blog/2022/containers.jpg
  alt: |
    Overhead view of a cargo ship in water
    loaded with multi-colored shipping containers.
summary: |
  Learn how to run Playwright in headed mode to interact with the browser's user
  interface from outside Docker containers.
---

[Playwright] is a test runner that uses real browsers to test web applications
(an alternative to tools like [Selenium]). By default, Playwright runs these
browsers in headless mode, which means the pages are loaded and tested without
opening the browser window. This is great when running entire test suites
locally, and in CI where having a bunch of rapidly opening windows would be
disconcerting. However, when it comes to writing or debugging individual tests,
it is convenient to open the browser in _headed_ mode to actually see the page
being tested.

[Playwright]: https://playwright.dev/
[Selenium]: https://www.selenium.dev/

Playwright for JS includes [UI mode] to let you run end-to-end tests with a
graphical explorer and debugger, allowing you to view, run, and debug tests in a
real browser window. For other supported platforms (like Python), Playwright
includes the [Playwright Inspector] to conveniently launch the browser in headed
mode _and_ a separate window to control test execution. The inspector is
launched by setting `PWDEBUG=1` before calling `playwright`, and is compatible
with all browsers supported by Playwright (Safari, Chrome, and Firefox) in all
major operating systems.

[UI mode]: https://playwright.dev/docs/test-ui-mode
[Playwright Inspector]: https://playwright.dev/docs/debug#playwright-inspector

Additionally, Playwright also includes a `playwright open <url>` subcommand to
quickly launch the inspector on any URL. Examples in this post use `playwright
open <url>`, but they also apply to UI mode and the inspector.

## Playwright and Docker

For convenience, Playwright provides a [Docker image], which includes all
browsers pre-installed and configured so you can skip the dependency
installation steps. But what happens if you try to run Playwright with a headed
browser inside a Docker container -- which normally doesn't have a graphical
user interface?

[Docker image]: https://playwright.dev/docs/docker

```bash
# We expect a browser window to open and load google.com
docker run --rm mcr.microsoft.com/playwright npx -y playwright open google.com
```

```plaintext
Looks like you launched a headed browser without having a XServer running.
Set either 'headless: true' or use 'xvfb-run <your-playwright-app>' before running Playwright.

<3 Playwright Team
```

No browser window is launched! Instead we get an error message about not "having
a XServer running." The definition and functionality of XServer are beyond the
scope of this article, but without it we can't interact with applications that
require a user interface (like the browser). Here's [a more detailed
explanation] if you want to learn more.

[a more detailed explanation]: https://askubuntu.com/a/7885/27669

Searching for this error on the web will return results explaining how to
install and start XServer. That advice applies to non-containerized, Linux-based
systems. If your host system is macOS or Windows you actually don't want to do
that. Instead we want the container to use the _host XServer_ to launch
Playwright _inside the container_, which requires two modifications to our
`docker` command:

1. Set the `DISPLAY` environment variable inside the container using the `-e`
   option
2. Mount the XServer Unix socket inside the container using the `-v` option

```bash
docker run --rm \
-e DISPLAY=<host display> \
-v /tmp/.X11-unix:/tmp/.X11-unix \
mcr.microsoft.com/playwright npx -y playwright open google.com
```

The value of `<host display>` will depend on your host operating system, and you
will need to ensure `/tmp/.X11-unix` is available for mounting. The following
sections explain how to do this for Windows and macOS.

## Microsoft Windows

You might find it surprising (I certainly did) that Microsoft Windows has a
native XServer even though it's not a GNU/Linux system. It's called [WSLg], and
it's included as part of the [Windows Subsystem for Linux] (WSL). You most
likely already have WSL and WSLg installed if you are running [Docker Desktop]
in recent builds of Windows 10 and 11.

[WSLg]: https://github.com/microsoft/wslg#readme
[Windows Subsystem for Linux]: https://apps.microsoft.com/detail/9p9tqf7mrm4r
[Docker Desktop]: https://www.docker.com/products/docker-desktop/

Let's start by verifying that WSL and WSLg are installed and running. First,
launch "WSL" from your Start Menu. A Linux terminal window should open (most
likely a recent version of Ubuntu). In that window, verify that the directory
`/mnt/wslg/` exists and contains these files inside the Linux filesystem:

```bash
ls -a -w 1 /mnt/wslg

.
..
.X11-unix
PulseAudioRDPSink
PulseAudioRDPSource
PulseServer
distro
doc
dumps
pulseaudio.log
runtime-dir
stderr.log
versions.txt
weston.log
wlog.log
```

If you don't see "WSL" in your Start Menu, or the `ls` command above fails with
`No such file or directory`, then your system is missing WSL entirely or is
running an old version. Visit the [Microsoft Store] to download an up-to-date
version.

[Microsoft Store]: https://apps.microsoft.com/detail/9p9tqf7mrm4r

Once you are all set up, we can set `DISPLAY=:0` as explained in the [official
guide]:

[official guide]: https://github.com/microsoft/wslg/blob/main/samples/container/Containers.md

```bash
docker run --rm \
-e DISPLAY=:0 \
-v /tmp/.X11-unix:/tmp/.X11-unix \
mcr.microsoft.com/playwright npx -y playwright open google.com
```

If all goes well, that should open two windows: a browser window with Google
loaded, and a Playwright Inspector window. Closing both will also stop the
container.

## macOS

Apple's operating system doesn't include a built-in XServer, but we can use
[XQuartz] to provide one:

[XQuartz]: https://www.xquartz.org/

1. Install XQuartz: `brew install --cask xquartz`
1. Open XQuartz, go to Preferences -> Security, and check "Allow connections
   from network clients"
1. Restart your computer (restarting XQuartz might not be enough)
1. Start XQuartz with `xhost +localhost`
1. Open Docker Desktop and edit settings to give access to `/tmp/.X11-unix` in
   Preferences -> Resources -> File sharing

Once XQuartz is running with the right permissions, you can populate the
environment variable and socket:

```bash
docker run --rm \
-e DISPLAY=host.docker.internal:0 \
-v /tmp/.X11-unix:/tmp/.X11-unix \
mcr.microsoft.com/playwright npx -y playwright open google.com
```

If all goes well, that should open two windows: a browser window with Google
loaded, and a Playwright Inspector window. Closing both will also stop the
container.

## Persisting the Configuration

To avoid having to specify the flags every time, you can use a
`docker-compose.yml` file to [set the environment variable] and [mount the
socket].

[set the environment variable]: https://docs.docker.com/compose/environment-variables/set-environment-variables/#use-the-environment-attribute
[mount the socket]: https://docs.docker.com/compose/compose-file/compose-file-v3/#volumes

```yaml
services:
  web:
    image: mcr.microsoft.com/playwright
    environment:
      - DISPLAY=... # Replace this line with the appropriate value
    volumes:
      - /tmp/.X11-unix:/tmp/.X11-unix
```

Remember: `environment` needs `DISPLAY=:0` in Windows and
`DISPLAY=host.docker.internal:0` in macOS. After editing and saving the file,
open the browser along with the Playwright Inspector with this command:

```bash
docker compose run --rm web npx -y playwright open google.com
```

## Debugging an Existing Test Suite

Most likely you already have a Playwright test suite that you run in CI or
locally via Docker. Note that as long as you set the `environment` and `volumes`
keys on your service definition you will be able to run Playwright in headed
mode against your existing tests. Assuming you have a `web` service configured
to run your tests AND have configured the `environment` and `volumes` keys as
described above, you can drop into bash and run your tests graphically with:

```bash
docker compose run --rm web bash
# If using the JS package
npx -y playwright test --ui

# For other platforms (Python, etc.)
PWDEBUG=1 <command you use to run playwright>
```

This setup enables you to keep your dev and testing environment containerized
while providing the flexibility of a graphical interface when needed.
