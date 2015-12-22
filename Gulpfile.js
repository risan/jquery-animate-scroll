var gulp    = require('gulp'),
    jscs    = require('gulp-jscs'),
    jshint  = require('gulp-jshint'),
    uglify  = require('gulp-uglify'),
    gutil   = require('gulp-util'),
    qunit   = require('gulp-qunit'),
    rename  = require('gulp-rename');

gulp.build = function(src, dest, validate) {
  return gulp.src(src)
    .pipe(validate === true ? jshint() : gutil.noop())
    .pipe(validate === true ? jshint.reporter('jshint-stylish') : gutil.noop())
    .pipe(jscs({ fix: true }))
    .pipe(jscs.reporter())
    .pipe(jscs.reporter('fail'))
    .pipe(gulp.dest(dest));
};

/**
 * Build and minified.
 *
 * @param  {string} src       Sources files location
 * @param  {string} dest      Build result location
 * @param  {bool}   validate  Validate the js files
 * @return {Gulp}
 */
gulp.buildMinified = function(src, dest, validate) {
  return gulp.src(src)
    .pipe(validate === true ? jshint() : gutil.noop())
    .pipe(validate === true ? jshint.reporter('jshint-stylish') : gutil.noop())
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(gulp.dest(dest));
};

gulp.task('js', function() {
  return gulp.build('src/*.js', 'dist', true);
});

gulp.task('js-min', function() {
  return gulp.buildMinified('src/*.js', 'dist', true);
});

gulp.task('test', function() {
  return gulp.src('./test/*.html')
    .pipe(qunit());
});

gulp.task('default', ['js', 'js-min']);
