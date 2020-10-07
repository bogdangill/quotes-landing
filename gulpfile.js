const gulp = require('gulp');
const less = require('gulp-less');
const concat = require('gulp-concat');

function convertLess() {
    return gulp.src('./src/less/main.less')
        .pipe(less())
        .pipe(gulp.dest('./dist/css'))
}

function createBundle() {
    return gulp.src(['./src/js/*.js', './src/blocks/**/*.js'])
        .on('data', function(file){ console.log(file);})
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest('./dist/js'));
}


exports.convertLess = convertLess;
exports.createBundle = createBundle;