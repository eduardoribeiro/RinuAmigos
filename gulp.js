// Less configuration
var gulp = require('gulp'),
    less = require('gulp-less'),
    watch = require('gulp-watch');

gulp.task('less', function() {
    gulp.src('less/*.less')
        .pipe(less())
        .pipe(gulp.dest(function(f) {
            return f.base;
        }))
});

gulp.task('default', function() {
    gulp.watch('less/*.less', ['less']);
})