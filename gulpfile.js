'use strict';
const gulp = require('gulp');
const responsive = require('gulp-responsive');

const { responsiveConfig } = require('#/type');

gulp.task('images', () =>
  gulp
    .src(`src/images/**/*.{jpg,png}`)
    .pipe(
      responsive(
        {
          '**/*': responsiveConfig,
        },
        {
          quality: 80,
          progressive: true,
          withMetadata: false,
          withoutEnlargement: true,
          errorOnUnusedImage: false,
          errorOnEnlargement: false,
        },
      ),
    )
    .pipe(gulp.dest('_site/assets/images')),
);
