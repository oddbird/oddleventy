'use strict';

const gulp = require('gulp');
const responsive = require('gulp-responsive');

const { responsiveConfig } = require('#/images');

gulp.task('responsive-images', () =>
  gulp
    .src('src/images/**/*.{jpg,png,jpeg,tiff,raw}')
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

gulp.task('copy-images', () =>
  gulp
    .src('src/images/**/!(*.jpg|*.png|*.jpeg|*.tiff|*.raw)')
    .pipe(gulp.dest('_built/images')),
);

gulp.task('images', gulp.parallel('responsive-images', 'copy-images'));
