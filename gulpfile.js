'use strict';
const gulp = require('gulp');
const responsive = require('gulp-responsive');

gulp.task('images', () =>
  gulp
    .src(`src/images/**/*.{jpg,png}`)
    .pipe(
      responsive(
        {
          // Resize all JPG images to three different sizes: 320, 550, and 1200 pixels
          '**/*': [
            {
              width: 480,
              rename: { suffix: '-480' },
            },
            {
              width: 960,
              rename: { suffix: '-960' },
            },
            {
              width: 1280,
              rename: { suffix: '-1280' },
            },
            {
              width: 2240,
              rename: { suffix: '-2240' },
            },
          ],
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
