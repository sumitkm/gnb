// <reference path="./typings/index.d.ts" />

var gulp = require('gulp');
var less = require('gulp-less');
var watch = require('gulp-watch');
var prefix = require('gulp-autoprefixer');
var plumber = require('gulp-plumber');
var livereload = require('gulp-livereload');
var path = require('path');
var connect = require('gulp-connect');

var LessPluginCleanCSS = require('less-plugin-clean-css');
var cleanCssPlugin = new LessPluginCleanCSS({ advanced: true });

gulp.task('less', () => {
    return gulp.src('./src/gnb.less')
        .pipe(plumber())
        .pipe(less({
            paths: ['./src'],
            plugins: [cleanCssPlugin]
        }))
        .pipe(gulp.dest('./dist'))
        .pipe(connect.reload());
});

gulp.task('connect', () => {
    connect.server({
        livereload: true
    });
});

gulp.task('html', () => {
    gulp.src('./demo/*.html')
        .pipe(connect.reload());
});

gulp.task('watch', () => {
    gulp.watch(['./demo/*.html'], ['html']);
    gulp.watch('./src/*.less', ['less']);

});

gulp.task('dev', ['connect', 'watch']);

gulp.task('default', ['less']);
