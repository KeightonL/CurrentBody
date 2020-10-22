var gulp = require('gulp');
var sass = require('gulp-sass');

var paths = {
    'css': './source/scss/screen.scss',
    'js': './source/js/**/*.js',
    'dest': {
        'css': './dist/css',
        'js': './dist/js'
    }
};

var browserSync = require('browser-sync').create();

// CSS
gulp.task('css', function(){
    return gulp.src((paths.css))
        .pipe(sass())
        .pipe(gulp.dest(paths.dest.css))
        .pipe(browserSync.reload({
            stream: true
        }))
});

// JS
gulp.task('js', function () {
    return gulp.src(paths.js)
      .pipe(gulp.dest(paths.dest.js));
  });

// BrowserSync
gulp.task('browserSync', function() {
    browserSync.init({
      server: {
        baseDir: 'dist'
      },
    })
})

// Watch
gulp.task('watch', ['browserSync'], function(){
    gulp.watch(paths.css, ['css']); 
    gulp.watch(paths.js, browserSync.reload); 
})

// Default gulp task
gulp.task('default', ['css', 'js', 'watch']);

// Build task
gulp.task('build', ['css', 'js']);