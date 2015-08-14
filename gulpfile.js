var gulp = require('gulp'),
    minifyCSS = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    livereload = require('gulp-livereload'),
    concatCSS = require('gulp-concat-css');


    gulp.task('default', function() {
        gulp.src('css/*.css')
            .pipe(concatCSS('bundle.css'))
            .pipe(minifyCSS(''))
            .pipe(rename('bundle.min.css'))
            .pipe(gulp.dest('css'))
    });

    gulp.task('watch', function() {
       gulp.watch('css/*.css', ['default']);
    });