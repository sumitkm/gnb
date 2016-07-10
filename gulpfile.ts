// <reference path="./typings/index.d.ts" />

var gulp = require('gulp');
var less = require('gulp-less');
var watch = require('gulp-watch');
var prefix = require('gulp-autoprefixer');
var plumber = require('gulp-plumber');
//var livereload = require('gulp-livereload');
var path = require('path');

var LessPluginCleanCSS = require('less-plugin-clean-css'),
var cleanCSSPlugin = new LessPluginCleanCSS({advanced: true});

gulp.task('less', function() {
    return gulp.src('./src/gnb.less')
        .pipe(plumber())
        .pipe(less({
          paths: ['./src'],
          plugins: [cleanCSSPlugin]
        }))
        .pipe(gulp.dest('./dist'));
        //.pipe(livereload());
});
gulp.task('watch', function() {
    gulp.watch('./src/*.less', ['less']);  // Watch all the .less files, then run the less task
});

gulp.task('default', ['watch']); // Default will run the 'entry' watch task
