# OddSite

[![Build Status](https://github.com/oddbird/oddleventy/actions/workflows/test.yml/badge.svg)](https://github.com/oddbird/oddleventy/actions/workflows/test.yml) [![Netlify Status](https://api.netlify.com/api/v1/badges/4f75b5a7-8412-4586-bad0-b4de64bb4f17/deploy-status)](https://app.netlify.com/sites/oddleventy/deploys)

This site is built using:

- HTML, of course
- CSS w/ a load of Grids & Variables
- [Eleventy](https://www.11ty.dev/) JS w/ Markdown & Nunjucks
- Sass w/ OddBird's [Accoutrement](https://www.oddbird.net/accoutrement/) &
  [Herman](https://www.oddbird.net/herman/)
- [Netlify](https://www.netlify.com/) for deployment
- A lot of ideas from a lot of cool people

## Develop:

### Install Node and Yarn

We recommend using [nvm](https://github.com/nvm-sh/nvm) for Node version
management. [Install it](https://github.com/nvm-sh/nvm#installation-and-update)
if necessary, then run `nvm install` (once per active shell) to use the correct
version of Node for OddSite development.

The correct [Yarn](https://yarnpkg.com/) version is included with Node, and will
be used automatically for any `yarn` command. To activate it, run
`corepack enable` (once per local Node installation).

To upgrade the Node version used by OddSite, update the version number in these
places and then run `nvm install` to upgrade:

- `package.json` (`engines.node` field)
- `.nvmrc`

To upgrade the yarn version used by OddSite, run `yarn set version latest` and
then update the version range in `package.json` (`engines.yarn` field).

### Install dependencies

```
yarn
```

### Development tasks

Compile and run [Eleventy](https://www.11ty.dev/) server, with a watcher for
file changes:

```
yarn serve
```

The site will be compiled into `_site/` and available at http://localhost:7050.

If
[localias](https://github.com/peterldowns/localias?tab=readme-ov-file#-localias)
is configured and running, add an alias for this project:

```
localias set oddsite.local 7050
```

This will allow you to visit the project at <https://oddsite.local>.

You can also run individual commands:

```
# build the static site for development
yarn build

# build the static site for development, re-processing all images
yarn build:images

# build the static site for production (in local development)
yarn build:prod

# build the static site for production (on Netlify)
yarn prod

# format and lint all files
yarn lint

# compile sass
yarn sass

# compile js
yarn js

# format and lint sass
yarn lint:sass

# format and lint js
yarn lint:js

# compile sass docs
yarn sassdoc
```

Sass Docs are compiled into the `_site/styleguide/` folder, which is then
available at the URL: `/styleguide/`.

## Deployment

The site is auto-deployed on [Netlify](https://www.netlify.com/) from the `main`
branch on GitHub. Deploys are automated on push to `main`.

Use branches and PRs for changes, and Netlify will create staging previews for
functional review before merge.
