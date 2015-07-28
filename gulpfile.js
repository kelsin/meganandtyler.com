var gulp = require('gulp');
var pages = require('gulp-gh-pages');

gulp.task('deploy', function() {
    return gulp.src('./build/**/*')
    .pipe(pages());
});
