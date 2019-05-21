var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('js', function () {
    gulp.src('js/custom.js')
        .pipe(concat('custom-min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js/'));
});

// Minify JS
gulp.task('mini', ['js'], function () {
});

gulp.task('default',"mini");
