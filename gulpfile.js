const gulp = require('gulp');
const less = require('gulp-less');

function convertLess() {
    return gulp.src('./src/less/main.less')
        .pipe(less())
        .pipe(gulp.dest('./dist/css'))
}

exports.convertLess = convertLess;