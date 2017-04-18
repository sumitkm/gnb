// <reference path="./typings/index.d.ts" />

var gulp = require('gulp');
var less = require('gulp-less');
var watch = require('gulp-watch');
var prefix = require('gulp-autoprefixer');
var plumber = require('gulp-plumber');
var livereload = require('gulp-livereload');
var path = require('path');
var connect = require('gulp-connect');
var gutil = require('gutil');
var LessPluginCleanCSS = require('less-plugin-clean-css');
var cleanCssPlugin = new LessPluginCleanCSS({ advanced: true });

var onError = function (err) {
  console.log(err.toString());
  this.emit('end');
};

gulp.task('less', () => {
    try
    {
    return gulp.src('./src/gnb.less')
        .on('error', (err) => { console.error(err); this.emit('end'); })
        .pipe(plumber({
          errorHandler: onError
        }))
        .pipe(less({
            paths: ['./src'],
            plugins: [cleanCssPlugin]
        }))
        .pipe(gulp.dest('./dist'))
        .pipe(connect.reload());
    }
    catch (exception)
    {
        console.error("less task failed: ", exception);
    }
});

gulp.task('connect', () => {
    connect.server({
        livereload: true,
        port: 8081
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
