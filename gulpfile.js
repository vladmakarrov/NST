const gulp = require('gulp'),
      sass = require('gulp-sass'),
      browsersync = require('browser-sync').create(),
      prettify = require('gulp-prettify');
      kit = require('gulp-kit');

function gulpKit() {
  return gulp
    .src('./kit/*.kit')
    .pipe(kit())
    .pipe(gulp.dest('./'));
};

function gulpSass() {
  return gulp
    .src('./styles/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css'));
}

function serve(done) {
  browsersync.init({
    server: {
      baseDir: "./"
    },
    notify: false
  }, done);
}

function reload(done) {
  browsersync.reload();
  done();
}

function prettifyFunc() {
  return gulp
    .src('*.html')
    .pipe(prettify({
      indent_size: 2,
    }))
    .pipe(gulp.dest('./'));
}

const compile = gulp
  .series(
    gulp.parallel(
      gulp.series(
        prettifyFunc,
      ),
      gulpKit,
      gulpSass,
    ),
    serve,
  );

function watchFiles() {
  gulp.watch('./styles/**/*.scss', gulp.series(gulpSass, reload));
  gulp.watch('./kit/**/*.kit', gulp.series(gulpKit, reload));
  gulp.watch('./**/*.html', gulp.series(reload));
  gulp.watch('./scripts/**/*.js', gulp.series(reload));
}

exports.watch = gulp.series(compile, watchFiles);