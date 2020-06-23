'use strict';

const gulp = require('gulp');
const responsive = require('gulp-responsive');

const { responsiveConfig } = require('#/images');

gulp.task('images', () =>
  gulp
    .src(`src/images/**/*.{jpg,png}`)
    .pipe(
      responsive(
        {
          '**/*': responsiveConfig.concat([{}]),
        },
        {
          quality: 80,
          progressive: true,
          withMetadata: false,
          withoutEnlargement: true,
          errorOnUnusedImage: false,
          errorOnEnlargement: false,
          silent: true,
        },
      ),
    )
    .pipe(gulp.dest('_built/images')),
);
