# Netlify 11ty Build Plugin

A plugin to make building with Eleventy and Netlify a joy!

### Speed up your builds ⚡
- Caches images generated by [@11ty/eleventy-img](https://github.com/11ty/eleventy-img) across builds
- Caches assets fetched by [@11ty/eleventy-cache-assets](https://github.com/11ty/eleventy-cache-assets) across builds
- Caches any other folders of your choice (optional)

## Install

Install plugin via npm as dependency:

**Note**: Till https://github.com/11ty/eleventy-img/pull/116 is merged,
please use [this fork](https://github.com/zeroby0/eleventy-img/tree/cache) instead of `@11ty/eleventy-img`.

```bash
npm r @11ty/eleventy-img
npm i zeroby0/eleventy-img#cache
npm i netlify-plugin-11ty
```

And add the plugin to your `netlify.toml` file

```toml
[[plugins]]
    package = "netlify-plugin-11ty"
```

## Configuration

Optionally, you can configure the plugin to suit your project's needs.

**Example**:

```toml
[[plugins]]
    package = "netlify-plugin-11ty"
    [plugins.inputs]
        cache_img = './img'
        cache_img_httpHeader = false

        cache_assets = '../.cache'
        cache_other = []
```

The following `inputs` options are available:

### 1. `cache_img`
**Type**: `String` or `Array of Strings`  
**Default**: `'./img'` (relative to the publish
directory)  

The folder(s) in which files generated by `@11ty/eleventy-img` are stored,
relative to the publish directory. Can be a String or an array of Strings.

If set to `false`, files generated by `@11ty/eleventy-img` are not saved in
Netlify cache.

### 2. `cache_img_httpHeader`

**Type**: `Boolean`  
**Default**: `false`  

If set to `true`, files generated by `@11ty/eleventy-img` will be served with
http header `cache-control: public, max-age=31536000, immutable`.

Files generated by `eleventy_img` have a hash calculated using file content and
[Sharp plugin options](https://www.11ty.dev/docs/plugins/image/#advanced-control-of-sharp-image-processor)
in their name by default ([starting from #116](https://github.com/11ty/eleventy-img/pull/116)),
so you can cache them indefinitely.

If you are using [custom filenames](https://www.11ty.dev/docs/plugins/image/#custom-filenames-new-in-image-0.4.0)
that don't include a hash, this option should be left `false` (default).

### 3. `cache_assets`

**Type**: `String` or `Array of Strings`  
**Default**: `'../.cache'` (relative to the
publish directory)  

The folder(s) in which remote assets fetched by `@11ty/eleventy-cache-assets`
are cached, relative to publish directory. Can be a String or an array of
Strings.

If set to `false`, assets fetched by `@11ty/eleventy-cache-assets` are not saved
in Netlify cache.

### 4. `cache_other`

**Type**: `String` or `Array of Strings`  
**Default**: `[]` (relative to the publish
directory)  

Any other folder(s) you'd like to cache across Netlify builds. If these folders
exist before restoring Nelify cache, their content will be merged and overwritten
with content from the cached folders.

## FAQs
### I `rimraf` my `_site` on every build

If your images are written to `_site/img` (default),
use `rimraf '_site/!(img)'`.

If they are in a subdirectory, say `_site/assets/images`,
use `rimraf '_site/!(assets)' '_site/assets/!(images)'`.

### Are there any Benchmarks?
Yes!

The speed-up, ofcourse, depends on how many images your website has,
but here is a benchmark I used when developing this plugin:

| Run                   | No cache persistence |  With cache persistence  |
|-----------------------|----------------------|--------------------------|
| 1st run (empty cache) | 11.74 seconds        | 11.52 seconds            |
| 2nd run (filled cache)| 11.32 seconds        | 131.82 **milliseconds**  |

[Read more](https://github.com/11ty/eleventy-img/pull/116#issuecomment-882870369)

## Recommended Netlify plugins
- [Subfont](https://github.com/munter/netlify-plugin-subfont)
- [Inline Critical CSS](https://github.com/Tom-Bonnike/netlify-plugin-inline-critical-css#readme)

## Bug Reports, Feature Requests, and Ideas
Please [create an issue](https://github.com/zeroby0/netlify-plugin-11ty/issues/new/) :)

## License
**MIT**

If you need this repository with a different License,
please [create an issue](https://github.com/zeroby0/netlify-plugin-11ty/issues/new/).