---
title: Running Playwright inside Docker containers
author: ed
date: 2022-11-30
tags:
  - Article
  - Testing
  - Docker
summary: |
  Learn how to run Playwright in headed mode to interact with the browser's user
  interface from outside Docker containers.
---

[Playwright](https://playwright.dev/) is a test runner that uses real browsers
to test web applications (an alternative to tools like
[Selenium](https://www.selenium.dev/)). By default, Playwright runs these
browsers in headless mode, which means the pages are loaded and tested without
opening the browser window. This is great when running entire test suites
locally, and in CI where having a bunch of rapidly opening windows would be
disconcerting. However, when it comes to writing or debugging individual
tests, it is convenient to open the browser in *headed* mode to actually see the
page being tested.

Playwright includes the [Playwright
Inspector](https://playwright.dev/docs/debug#playwright-inspector) to
conveniently launch the browser in headed mode *and* a separate window to
control test execution. The inspector is launched by setting `PWDEBUG=1` before
calling `playwright`, and is compatible with all browsers supported by
Playwright (Safari, Chrome, and Firefox) in all major operating systems.
Playwright also includes a `playwright open <url>` subcommand to quickly launch
the inspector on any URL. Examples in this post use `playwright open <url>`, but
`PWDEBUG=1` is equivalent.

Playwright also provides a convenient [Docker
image](https://playwright.dev/docs/docker), which includes all three browsers
pre-installed and configured so you can skip the dependency installation steps.
But what happens if you try to run the Playwright Inspector inside a Docker
container -- which normally doesn't have a graphical user interface?

```bash
# We expect a browser window to open and load google.com
# Update the image tag to match your desired version of Playwright
docker run --rm mcr.microsoft.com/playwright:v1.28.0 npx -y playwright open google.com

╔════════════════════════════════════════════════════════════════════════════════════════════════╗
║ Looks like you launched a headed browser without having a XServer running.                     ║
║ Set either 'headless: true' or use 'xvfb-run <your-playwright-app>' before running Playwright. ║
║                                                                                                ║
║ <3 Playwright Team                                                                             ║
╚════════════════════════════════════════════════════════════════════════════════════════════════╝
```

No browser window is launched! Instead we get an error message about not "having
a XServer running." The definition and functionality of XServer are beyond the
scope of this article, but without it we can't interact with applications that
require a user interface (like the browser). Here's [a more detailed
explanation](https://askubuntu.com/a/7885/27669) if you want to learn more.

Searching for this error on the web will return results explaining how to
install and start XServer. That advice applies to non-containerized, Linux-based
systems. If your host system is macOS or Windows you actually don't want to do
that. Instead we want the container to use the *host XServer* to launch
Playwright *inside the container*, which requires two modifications to our
`docker` command:

1. Set the `DISPLAY` environment variable inside the container using the `-e`
   option
2. Mount the XServer Unix socket inside the container using the `-v` option

```bash
docker run --rm \
-e DISPLAY=<host display> \
-v /tmp/.X11-unix:/tmp/.X11-unix \
mcr.microsoft.com/playwright:v1.28.0 npx -y playwright open google.com
```

The value of `<host display>` will depend on your host operating system, and you
will need to ensure `/tmp/.X11-unix` is available for mounting. The following
sections explain how to do this for Windows and macOS.

## Microsoft Windows

You might find it surprising (I certainly did) that Microsoft Windows has a
native XServer even though it's not a GNU/Linux system. It's called
[WSLg](https://github.com/microsoft/wslg#readme), and it's included as part of
the [Windows Subsystem for
Linux](https://www.microsoft.com/store/productId/9P9TQF7MRM4R) (WSL). You most
likely already have WSL and WSLg installed if you are running [Docker
Desktop](https://www.docker.com/products/docker-desktop/) in recent builds of
Windows 10 and 11.

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
running an old version. Visit the [Microsoft
Store](https://www.microsoft.com/store/productId/9P9TQF7MRM4R) to download an
up-to-date version.

Once you are all set up, we can set `DISPLAY=:0` as explained in the [official
guide](https://github.com/microsoft/wslg/blob/main/samples/container/Containers.md):

```bash
docker run --rm \
-e DISPLAY=:0 \
-v /tmp/.X11-unix:/tmp/.X11-unix \
mcr.microsoft.com/playwright:v1.28.0 npx -y playwright open google.com
```

If all goes well, that should open two windows: a browser window with Google
loaded, and a Playwright Inspector window. Closing both will also stop the
container.

## macOS

Apple's operating system doesn't include a built-in XServer, but we can use
[XQuartz](https://www.xquartz.org/) to provide one:

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
mcr.microsoft.com/playwright:v1.28.0 npx -y playwright open google.com
```

If all goes well, that should open two windows: a browser window with Google
loaded, and a Playwright Inspector window. Closing both will also stop the
container.

## Persisting the configuration

To avoid having to specify the flags every time, you can use a
`docker-compose.yml` file to [set the environment
variable](https://docs.docker.com/compose/environment-variables/#set-environment-variables-in-containers)
and [mount the
socket](https://docs.docker.com/storage/bind-mounts/#use-a-bind-mount-with-compose).

```yaml
# docker-compose.yml
version: '3'

services:
  web:
    image: mcr.microsoft.com/playwright:v1.28.0
    environment:
      - DISPLAY=... # Replace this line with the appropriate value
    volumes:
      - /tmp/.X11-unix:/tmp/.X11-unix
```

Remember: `environment` needs `DISPLAY=:0` in Windows and
`DISPLAY=host.docker.internal:0` in macOS. After editing and saving the file,
run `docker-compose` to open the browser (or run any Playwright command) along
with the Playwright Inspector:

```bash
docker-compose run web npx -y playwright open google.com
```

Enjoy using and inspecting the browser from inside containers!
