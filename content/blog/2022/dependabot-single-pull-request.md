---
title: Replace Dependabot With a Single Dependency Upgrade Pull Request
author: ed
date: 2022-06-01
tags:
  - Article
  - Build Tools
  - DevOps
  - JavaScript
  - Pip
  - Python
  - Tips
image:
  src: blog/2022/bot.jpg
summary: |
  Keeping your project dependencies up to date can become an unwieldy task when
  Dependabot opens a dozen pull requests every week. We present an alternative
  approach that uses only one scheduled pull request for all upgrades.
---

[Dependabot](https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates)
is a useful tool provided by GitHub to all repositories. Maintainers only need
to specify the frequency at which they want to check for updates and Dependabot
will open a pull request for each package that has published a new version since
the last check. Combined with a robust automated test suite, this greatly
reduces the burden of manually keeping dependencies up to date.

However, as projects grow and more dependencies are added, the noise produced by
individual pull requests starts becoming an issue in itself. That's why a
"grouped updates" feature for Dependabot has been
[requested](https://github.com/dependabot/dependabot-core/issues/1190) since
[2018](https://github.com/dependabot/dependabot-core/issues/2265). As of May
2022, the feature is on [Dependabot's
roadmap](https://github.com/github/roadmap/issues/148), but doesn't have a
concrete release date.

At OddBird we decided to leverage [GitHub
Actions](https://github.com/features/actions) to produce a pull request with all
dependencies updated at once. We have created a workflow that runs every Monday
in the early morning. By the time we start our work day the pull request has
been opened and we can merge it right away if all tests pass, or debug any
issues introduced by upstream breaking changes. We also have the option of
[running the workflow on
demand](https://docs.github.com/en/actions/managing-workflow-runs/manually-running-a-workflow)
to upgrade dependencies at our convenience.

Broadly speaking, the workflow will:

1. Checkout our code
1. Configure the runtimes required by our project (Python and Node)
1. Run a custom command to upgrade all dependencies
1. Use git to detect changed files
1. Commit the changes to a pre-defined branch (if they exist)
1. Open a pull request for that branch (if it doesn't exist already)

This workflow should be compatible with most projects, but you will need to
adjust steps two and three to run your own commands depending on what package
manager you use. We'll explain how to do it with
[pip-tools](https://github.com/jazzband/pip-tools) for Python and
[yarn](https://yarnpkg.com/) for Node.

## Upgrade Python Dependencies

By using GitHub's own [setup-python](https://github.com/actions/setup-python)
action we can easily install our required Python version on the runner and
configure dependency caching. Once the Python runtime has been set up we just
need to call `pip-tools` to upgrade all dependencies:

```bash
pip install -U pip pip-tools
pip-compile --upgrade -o requirements/prod.txt requirements/prod.in
pip-compile --upgrade -o requirements/dev.txt requirements/dev.in
```

This results in changes to `.txt` and `.in` files in the requirements folder.
These changes will be included in the automated pull request and CI will test
the project against the new package versions.

Note that if you use other tools to install Python packages (like Poetry,
Pipenv, or plain pip) you will need to use those instead of pip-tools to
generate the upgraded requirement files.

## Upgrade Node (JavaScript) Dependencies

GitHub also provides an official
[setup-node](https://github.com/actions/setup-node) action that will configure
Node on the runner. After the Node runtime has been set up we can upgrade Node
dependencies with:

```bash
rm -f yarn.lock
npx --yes yarn-upgrade-all
```

In this case we are using
[`yarn-upgrade-all`](https://github.com/tylerlong/yarn-upgrade-all) to get
updated versions for all dependencies. This will modify both `package.json` and
`yarn.lock`, which will cause CI to test against the new package versions when
the automated pull request is opened.

One of the main advantages of `yarn-upgrade-all` is that it allows us to specify
individual [dependencies to
ignore](https://github.com/tylerlong/yarn-upgrade-all#ignore-some-packages).
This is useful when old versions of a package are still receiving security
fixes, you're using an alpha/beta/rc version of a package, or you just want to
avoid or postpone the breaking changes introduced by major version bumps. For
example, here we are excluding three packages from the weekly upgrades with a
bit of configuration in `package.json`:

```json
"yarn-upgrade-all": {
  "ignore": [
    "@testing-library/vue",
    "node-fetch",
    "vue-svg-loader"
  ]
}
```

Lastly, note that `setup-node` is also compatible with npm and pnpm, so a
similar setup should work for you if you use those tools to manage Node
dependencies.

## Open a New Pull Request from GitHub Actions

GitHub runners include two useful command line utilities that will allow us to
open pull requests without manual intervention:

- `git` lets us add and commit changes to a new branch.
- [`gh`](https://cli.github.com/) is a handy command line interface for the
  GitHub API and allows us to fetch information about existing pull requests,
  and open new ones.

This snippet will commit and push to a new branch and open a pull request based
on it:

```bash
BRANCH_NAME="auto-upgrades"
git add .
git commit -m "Automated dependency upgrades"
git push -f origin $BRANCH_NAME
gh pr create \
--head $BRANCH_NAME \
--title "Automated dependency upgrades"
```

[The resulting pull request](https://github.com/oddbird/Metecho/pull/2161)
includes upgrades for both Python and Node dependencies. Most of the time it can
be merged cleanly without any extra commits by maintainers. In other cases we
have to do some cleanup to account for breaking changes in our dependencies.

## Putting It All Together

We've been using this approach on several projects now, and are thrilled with
the reduction in PR noise without compromising on security and features. So,
without further ado, here's the sweet YAML file you can drop into your repo that
leverages all tools we've discussed so far:

{% raw %}
```yml
# File: .github/workflows/upgrade-dependencies.yml
name: Upgrade dependencies

on:
  workflow_dispatch: # Allow running on-demand
  schedule:
    # Runs every Monday at 8:00 UTC (4:00 Eastern)
    - cron: '0 8 * * 1'

jobs:
  upgrade:
    name: Upgrade & Open Pull Request
    runs-on: ubuntu-latest
    env:
      # This branch will receive updates each time the workflow runs
      # It doesn't matter if it's deleted when merged, it'll be re-created
      BRANCH_NAME: auto-dependency-upgrades
    steps:
      - uses: actions/checkout@v3
        with:
          # [Optional] Use a separate key to automatically execute checks on the resulting PR
          # https://github.com/peter-evans/create-pull-request/blob/main/docs/concepts-guidelines.md#triggering-further-workflow-runs
          ssh-key: ${{ secrets.DEPLOY_KEY }}

      # START PYTHON DEPENDENCIES
      - uses: actions/setup-python@v3
        with:
          python-version: "3.10"
          cache: pip
      - name: Upgrade Python dependencies
        # ADD YOUR CUSTOM DEPENDENCY UPGRADE COMMANDS BELOW
        run: |
          pip install -U pip pip-tools
          pip-compile --upgrade -o requirements/prod.txt requirements/prod.in
          pip-compile --upgrade -o requirements/dev.txt requirements/dev.in
      # END PYTHON DEPENDENCIES

      # START NODE DEPENDENCIES
      - uses: actions/setup-node@v3
        with:
          node-version: "16"
          cache: yarn
      - name: Upgrade JS dependencies
        # ADD YOUR CUSTOM DEPENDENCY UPGRADE COMMANDS BELOW
        run: |
          rm -f yarn.lock
          npx --yes yarn-upgrade-all
      # END NODE DEPENDENCIES

      - name: Detect changes
        id: changes
        run:
          # This output boolean tells us if the dependencies have actually changed
          echo "::set-output name=count::$(git status --porcelain=v1 2>/dev/null | wc -l)"
      - name: Commit & push changes
        # Only push if changes exist
        if: steps.changes.outputs.count > 0
        run: |
          git config user.name github-actions
          git config user.email github-actions@github.com
          git add .
          git commit -m "Automated dependency upgrades"
          git push -f origin ${{ github.ref_name }}:$BRANCH_NAME
      - name: Open pull request if needed
        if: steps.changes.outputs.count > 0
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        # Only open a PR if the branch is not attached to an existing one
        run: |
          PR=$(gh pr list --head $BRANCH_NAME --json number -q '.[0].number')
          if [ -z $PR ]; then
            gh pr create \
            --head $BRANCH_NAME \
            --title "Automated dependency upgrades" \
            --body "Full log: https://github.com/${{ github.repository }}/actions/runs/${{ github.run_id }}"
          else
            echo "Pull request already exists, won't create a new one."
          fi
```
{% endraw %}
