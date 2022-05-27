---
title: Replace Dependabot with a single Python dependency upgrade pull request
author: ed
date: 2022-05-27
tags:
  - Article
  - Build Tools
  - DevOps
  - Pip
  - Python
  - Tips
image:
  src: blog/2022/bot.jpg
summary: |
  Keeping your Python dependencies up to date can become an unwieldy task when
  Dependabot opens a dozen pull requests every week. We present an alternative
  approach that uses only one for all upgrades.
---

[Dependabot](https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates)
is a useful tool provided by GitHub to all repositories. By including a simple
`dependabot.yml` file maintainers get an automatic pull request every time one
of their dependencies releases a new version. Combined with a robust automated
test suite this greatly reduces the burden of manually keeping dependencies up
to date.

However, as projects grow and more dependencies are added the noise produced by
individual pull requests starts becoming an issue on itself. That's why a
"grouped updates" feature for Dependabot has been
[requested](https://github.com/dependabot/dependabot-core/issues/1190) since
[2018](https://github.com/dependabot/dependabot-core/issues/2265). As of May
2022, the feature is on [Dependabot's
roadmap](https://github.com/github/roadmap/issues/148), but doesn't have a
concrete release date.

At OddBird we decided to leverage [GitHub
Actions](https://github.com/features/actions) to produce a pull request with all
Python dependencies updated at once. We have created a workflow that runs every
Monday in the early morning. By the time we start our work day the pull request
has been opened and we can merge it right away if all tests pass, or debug any
issues introduced by upstream breaking changes. We also gave us the option of
[running the workflow on
demand](https://docs.github.com/en/actions/managing-workflow-runs/manually-running-a-workflow)
to upgrade dependencies at our convenience.

Broadly speaking the workflow will:

1. Checkout our code
1. Configure a Python environment that matches our project version
1. Run a custom command to upgrade all dependencies
1. Use git to detect changed files
1. Commit the changes to a pre-defined branch (if they exist)
1. Open a pull request for that branch (if it doesn't exist already)

This workflow should be compatible with most Python projects. You might need to
adjust step 3 to run your own command depending on what package manager you use
(we use and recommend [pip-tools](https://github.com/jazzband/pip-tools)).

Here's what the resulting [automated pull
request](https://github.com/oddbird/Metecho/pull/2161) looks like. In this case
we also included JavaScript changes, but you can see the branch was merged
cleanly without any extra commits by maintainers. In other cases we had to do
some clean up to account for breaking changes in our dependencies.

We've been using this approach on several projects now and are pretty satisfied
with the reduction in PR noise without compromising on security and features.
So, without further ado, here's the sweet YAML file you can drop into your repo:

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
      - uses: actions/setup-python@v3
        with:
          # Replace with the Python version you use in your project
          python-version: "3.10"
      - name: Upgrade Python dependencies
        # ADD YOUR CUSTOM DEPENDENCY UPGRADE COMMANDS BELOW
        run: |
          pip install -U pip pip-tools
          pip-compile --upgrade -o requirements/prod.txt requirements/prod.in
          pip-compile --upgrade -o requirements/dev.txt requirements/dev.in
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
