var gulp = require('gulp');
var less = require('gulp-less');
var watch = require('gulp-watch');
var prefix = require('gulp-autoprefixer');
var plumber = require('gulp-plumber');
var path = require('path');
var LessPluginCleanCSS = require('less-plugin-clean-css');
var cleanCSSPlugin = new LessPluginCleanCSS({ advanced: true });
gulp.task('less', function () {
    return gulp.src('./src/gnb.less')
        .pipe(plumber())
        .pipe(less({
        paths: ['./src'],
        plugins: [cleanCSSPlugin]
    }))
        .pipe(gulp.dest('./dist'));
});
gulp.task('watch', function () {
    gulp.watch('./src/*.less', ['less']);
});
gulp.task('default', ['watch']);
