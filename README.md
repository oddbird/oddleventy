# OddLeventy

[![CircleCI](https://circleci.com/gh/oddbird/oddleventy.svg?style=svg)](https://circleci.com/gh/oddbird/oddleventy) [![Netlify Status](https://api.netlify.com/api/v1/badges/4f75b5a7-8412-4586-bad0-b4de64bb4f17/deploy-status)](https://app.netlify.com/sites/oddleventy/deploys)

This site is built using:

- HTML, of course
- CSS w/ a load of Grids & Variables
- [Eleventy](http://www.11ty.io) JS w/ Markdown & Nunjucks
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
version of node for OddLeventy development.

The correct [Yarn](https://yarnpkg.com/) version is included in the repo, and
will be used automatically for any `yarn` command.

To upgrade the node version used by OddLeventy, update the version number in
three places and then run `nvm install` to upgrade:

- `.nvmrc`
- `package.json` (`engines.node` field)
- `.circleci/config.yml` (`docker.image` field)

To upgrade the yarn version used by OddLeventy, run
`yarn set version <new-version>`.

### Install dependencies

```
yarn
```

### Development tasks

Compile and run [Eleventy](http://www.11ty.io) server, with a watcher for file
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

Sass Docs are compiled into the `_site/style/` folder, which is then available
at the URL: `/style/`.

## Deployment

The site is auto-deployed on [Netlify](https://www.netlify.com/) from the
`master` branch on GitHub. Deploys are automated on push to master.

For testing production locally, run `yarn prod:serve` and access the site at
http://localhost:8080.

Use branches and PRs for changes, and Netlify will create staging previews for
functional review before merge.
