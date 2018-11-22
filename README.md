# oddleventy
OddBird Eleventy Test Site

```bash
# install what you need
yarn

# run the watcher and the server
gulp
```

## Nice:
- actively maintained and documented
- dev environment seems nice & fast to me… needs more setup and testing
- Mia had no trouble setting up the basics in a few minutes
- yaml data in frontmatter, accessible in content
- json data files scoped to global, folder, or page ('template')
- built to integrate nunjucks & markdown smoothly
- write nunjucks filters and shortcodes in JS (Mia can do it!)
- create named "collections" in JS (Mia can do it!)
- very flexible, with documented configuration
- simple to configure what is compiled, and what is passed through
- various official and community plugins available
- `permalink` setting allows you to override url per-template
  in case things move around…

## Gotcha:
- nunjucks is compiled before markdown,
  can cause meaningful-whitespace problems
  (work-around with markdown shortcode / filters in nunjucks)

## To Test:
- pagination
