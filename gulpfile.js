var gulp = require('gulp')
  , jade = require('gulp-jade')
  , less = require('gulp-less')
  , gutil = require('gulp-util')
  , clean = require('gulp-clean')
  , watch = require('gulp-watch')
  , concat = require('gulp-concat')
  , uglify = require('gulp-uglify')
  , minifyCSS = require('gulp-minify-css')
  , livereload = require('gulp-livereload')
  , spawn = require('child_process').spawn
  , tinylr = require('tiny-lr')
  , server = tinylr()
  , node;

gulp.task('clean', function() {
    return gulp.src('build', {read: false})
    .pipe(clean());
});

gulp.task('less', function() {
    gulp.src('src/less/*.less')
    .pipe(less())
    .pipe(concat('website.min.css'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('build/css'))
    .pipe(livereload(server));
});

gulp.task('jade', function() {
    gulp.src('src/jade/index.jade')
    .pipe(jade())
    .pipe(gulp.dest('build'))
    .pipe(livereload(server));
});

gulp.task('js', function() {
    gulp.src('src/js/*.jade')
    .pipe(uglify())
    .pipe(concat('website.min.js'))
    .pipe(gulp.dest('build/js'))
    .pipe(livereload(server));
});

gulp.task('server', function() {
    if (node) node.kill();
    node = spawn('node', ['server.js'], {stdio: 'inherit'});
    node.on('close', function(code) {
        if (code === 8) console.log('Error detected, waiting for changes...');
        tinylr.close();
    });
});

gulp.task('watch', function() {
    server.listen(5003, function(err) {
        if (err) {
            console.log(err);
            server.close();
            return;
        }
        gulp.watch('src/less/*.less', ['less']);
        gulp.watch('src/jade/*.jade', ['jade']);
        gulp.watch('src/js/*.js', ['js']);
    });
});

gulp.task('default', ['less', 'jade', 'js', 'server', 'watch']);
