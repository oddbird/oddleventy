/* eslint-env node */

'use strict';

const beeper = require('beeper');
const chalk = require('chalk');
const Fiber = require('fibers');
const gulp = require('gulp');
const log = require('fancy-log');
const sass = require('gulp-sass');
const sassdoc = require('sassdoc');
const sasslint = require("gulp-stylelint");
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const { spawn } = require('child_process');

sass.compiler = require('sass');

const paths = {
  TEST_DIR: './_test/',
  SASS_DIR: './assets/scss/',
  CSS_DIR: './assets/css/',
  IGNORE: [
    '!**/.#*',
    '!**/flycheck_*'
  ],
  init: function () {
    this.SASS = [
      this.SASS_DIR + '**/*.scss'
    ].concat(this.IGNORE);
    this.ALL_SASS = [
      this.SASS_DIR + '**/*.scss',
      this.TEST_DIR + '**/*.scss'
    ].concat(this.IGNORE);
    return this;
  }
}.init();

// Try to ensure that all processes are killed on exit
const spawned = [];
process.on('exit', () => {
  spawned.forEach(pcs => {
    pcs.kill();
  });
});

const spawnTask = function(command, args, cb) {
  spawned.push(
    spawn(command, args, { stdio: 'inherit' })
      .on('error', err => {
        beeper();
        return cb(err);
      })
      .on('exit', cb),
  );
};

gulp.task('sass', () => {
  return gulp.src(paths.SASS_DIR + '**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({fiber: Fiber}))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.CSS_DIR));
});

const onError = function (err) {
  log.error(chalk.red(err.message));
  beeper();
  this.emit('end');
};

const sasslintTask = (src, failOnError, shouldLog) => {
  if (shouldLog) {
    const cmd = `sasslint ${src}`;
    log("Running", `'${chalk.cyan(cmd)}'...`);
  }
  const stream = gulp.src(src).pipe(
    sasslint({
      reporters: [{ formatter: "string", console: true }],
      failAfterError: failOnError
    })
  );
  if (!failOnError) {
    stream.on("error", onError);
  }
  return stream;
};

gulp.task(
  "sasslint",
  () => sasslintTask(paths.SASS, true)
);

gulp.task(
  "sasslint-nofail",
  () => sasslintTask(paths.SASS)
);

gulp.task(
  'sassdoc',
  () => gulp.src(paths.SASS).pipe(sassdoc())
);

gulp.task('watch', (cb) => {
  gulp.watch(paths.SASS, gulp.parallel(['sasslint', 'sassdoc', 'sass']));

  // lint all scss when rules change
  gulp.watch('**/.stylelintrc.yml', gulp.parallel('sasslint-nofail'));

  cb();
});

gulp.task(
  'serve',
  (cb) => spawnTask('yarn', ['serve'], cb)
);

gulp.task(
  'default',
  gulp.parallel('watch', 'serve'),
);
