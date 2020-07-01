# OddSite

[![CircleCI](https://circleci.com/gh/oddbird/oddleventy/tree/main.svg?style=svg)](https://circleci.com/gh/oddbird/oddleventy) [![Netlify Status](https://api.netlify.com/api/v1/badges/4f75b5a7-8412-4586-bad0-b4de64bb4f17/deploy-status)](https://app.netlify.com/sites/oddleventy/deploys)

This site is built using:

- HTML, of course
- CSS w/ a load of Grids & Variables
- [Eleventy](https://www.11ty.dev/) JS w/ Markdown & Nunjucks
- Sass w/ OddBird's [Accoutrement](https://www.oddbird.net/accoutrement/) &
  [Herman](https://www.oddbird.net/herman/)
- [CircleCI](https://circleci.com/) for continuous integration
- [Netlify](https://www.netlify.com/) for deployment
- A lot of ideas from a lot of cool people

## Develop:

### Install Node and Yarn

We recommend using [nvm](https://github.com/nvm-sh/nvm) for node version
management. [Install it](https://github.com/nvm-sh/nvm#installation-and-update)
if necessary, then run `nvm install` (once per active shell) to use the correct
version of node for OddSite development.

The correct [Yarn](https://yarnpkg.com/) version is included in the repo, and
will be used automatically for any `yarn` command.

To upgrade the node version used by OddSite, update the version number in these
places and then run `nvm install` to upgrade:

- `package.json` (`engines.node` field)
- `.nvmrc`

To upgrade the yarn version used by OddSite, update the version number in these
places and then run `yarn set version <new-version>` to upgrade:

- `package.json` (`engines.yarn` field)
- `.yarnrc` (`yarn-path` line)

### Install dependencies

```
yarn
```

### Development tasks

Compile and run [Eleventy](https://www.11ty.dev/) server, with a watcher for file
changes:

```
yarn serve
```

The site will be compiled into `_site/` and available at http://localhost:8080.

You can also run individual commands:

```
# build the static site for development
yarn build

# build the static site for production
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

Sass Docs are compiled into the `_site/styleguide/` folder, which is then available
at the URL: `/styleguide/`.

## Deployment

The site is auto-deployed on [Netlify](https://www.netlify.com/) from the
`main` branch on GitHub. Deploys are automated on push to `main`.

Use branches and PRs for changes, and Netlify will create staging previews for
functional review before merge.
