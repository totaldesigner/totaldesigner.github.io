'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var concat = require('gulp-concat');
var cssmin = require('gulp-cssmin');
var git = require('gulp-git');
var shell = require('gulp-shell');
var uglify = require('gulp-uglify');

// Load plugins
var $ = require('gulp-load-plugins')();


gulp.task('styles', function () {
    var browsers = [
        '> 1%',
        'last 2 versions',
        'Firefox ESR',
        'Opera 12.1'
    ];
    return gulp.src('src/less/*.less')
        .pipe($.less({paths: ['bower_components']}).on('error', $.util.log))
        .pipe($.postcss([require('autoprefixer-core')({browsers: browsers})]))
        .pipe(concat('main.css'))
        //.pipe(cssmin())
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('scripts', function () {
    return gulp.src('src/js/*.js')
        .pipe(concat('main.js'))
        //.pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

gulp.task('views', function () {
    return gulp.src(['!src/jade/layout.jade', 'src/jade/*.jade'])
        .pipe($.jade({pretty: true})).on('error', $.util.log)
        .pipe(gulp.dest(''))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('images', function () {
    return gulp.src('src/img/**/*')
        .pipe($.imagemin({
            svgoPlugins: [{
                convertPathData: false
            }]
        }))
        .pipe(gulp.dest('img'));
});

gulp.task('browser-sync', function () {
    browserSync({
        server: {
            baseDir: './dist'
        }
    });
});

gulp.task('watch', ['build'], function () {
    gulp.watch('src/**/*.js', ['scripts']);
    gulp.watch('src/**/*.less', ['styles']);
    gulp.watch('src/img/**/*', ['images']);
    gulp.watch('src/**/*.jade', ['views']);
    gulp.start('browser-sync');
});

// JSHint grunfile.js
gulp.task('selfcheck', function () {
    return gulp.src('gulpfile.js')
        .pipe($.jshint())
        .pipe($.jshint.reporter('default'))
        .pipe($.jshint.reporter('fail'));
});

gulp.task('prepare', function () {
    return gulp.src('src/**/*.js')
        .pipe(shell([
            'rm -rf bower_components',
            'bower cache clean',
            'bower install']));
});

gulp.task('check', function () {
    return gulp.src('src/**/*.js')
        .pipe(shell([
            'rm -rf bower_components',
            'bower cache clean',
            'bower install']))
        .pipe($.jshint())
        .pipe($.jshint.reporter('default'))
        .pipe($.jshint.reporter('fail'));
});

gulp.task('clean', function (cb) {
    var del = require('del');
    del(['dist/css', 'dist/img', 'dist/js'], cb);
});

gulp.task('copy', function () {
    gulp.src(['bower_components/anyjs/any.js']).pipe(gulp.dest('dist/js'));
    gulp.src(['bower_components/anyjs/any.css']).pipe(gulp.dest('dist/css'));
});

gulp.task('build', ['check', 'scripts', 'styles', 'views', 'images', 'copy']);


gulp.task('default', ['clean'], function () {
    gulp.start('watch');
});
