'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var concat = require('gulp-concat');
var cssmin = require('gulp-cssmin');
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
        .pipe(gulp.dest('dist'))
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

gulp.task('check', function () {
    return gulp.src('src/**/*.js')
        .pipe($.jshint())
        .pipe($.jshint.reporter('default'))
        .pipe($.jshint.reporter('fail'));
});

gulp.task('clean', function (cb) {
    var del = require('del');
    del(['dist/css', 'dist/img', 'dist/js'], cb);
});

gulp.task('release', function () {
    return gulp.src(['dist/**/**/*'])
        .pipe(gulp.dest(''));
});

gulp.task('build', ['check', 'scripts', 'styles', 'views', 'images']);


gulp.task('default', ['clean'], function () {
    gulp.start('watch');
});
