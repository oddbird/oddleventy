'use strict';

// Create a new Fractal instance and export it for use elsewhere if required
const fractal = (module.exports = require('@frctl/fractal').create());

// if we want to make our own reusable theme
// const oddTheme = require('oddTheme');

// Set the title of the project
fractal.set('project.title', 'OddPieces');

// Tell Fractal where the components will live
fractal.components.set('path', `${__dirname}/content/_includes`);

// Tell Fractal where the documentation pages will live
fractal.docs.set('path', `${__dirname}/content/docs`);

// Register the Nunjucks adapter for components
fractal.components.engine('@frctl/nunjucks');

// Look for files with a .njk file extension
fractal.components.set('ext', '.njk');

// Specify a directory of static assets
// fractal.web.set('static.path', __dirname + '/public');

// Set the static HTML build destination
// fractal.web.set('builder.dest', __dirname + '/build');

// if we want to make our own reusable theme, call it here
// fractal.web.theme(oddTheme); // use the sub-classed theme when it exists

const mandelbrot = require('@frctl/mandelbrot');

const oddTheme = mandelbrot({
  skin: 'navy',
  // skin: "maroon"
  // skin: "grey"
  // skin: "orange"
});

fractal.web.theme(oddTheme);

// Specify the static assets directory that contains the custom stylesheet.
// oddTheme.addStatic(__dirname + '/assets', '/_oddTheme');

// Export the custom theme instance so it can be used in Fractal projects
// module.exports = oddTheme;
