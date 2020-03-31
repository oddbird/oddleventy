'use strict';
const gulp = require('gulp');
const responsive = require('gulp-responsive');

gulp.task('images', () =>
  gulp
    .src(`src/images/**/*.{jpg,png}`)
    .pipe(
      responsive(
        {
          // Resize all JPG images to three different sizes: 200, 500, and 630 pixels
          '**/*': [
            {
              width: 320,
              rename: { suffix: '-320' },
            },
            {
              width: 550,
              rename: { suffix: '-550' },
            },
            {
              // Compress, strip metadata
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
