var gulp = require('gulp')
  , jade = require('gulp-jade')
  , less = require('gulp-less')
  , concat = require('gulp-concat')
  , minifyCSS = require('gulp-minify-css');

gulp.task('less', function() {
    gulp.src('src/less/*.less')
    .pipe(less())
    .pipe(concat('website.min.css'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('build/css'))
});

gulp.task('jade', function() {
    gulp.src('src/jade/index.jade')
    .pipe(jade())
    .pipe(gulp.dest('build'))
});
