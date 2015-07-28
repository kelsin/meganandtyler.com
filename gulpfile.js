var gulp = require('gulp');
var pages = require('gulp-gh-pages');
var wintersmith = require('run-wintersmith');

gulp.task('deploy', ['build'], function() {
    return gulp.src('./build/**/*')
    .pipe(pages());
});

gulp.task('build', function(done) {
    wintersmith.build(done);
});

gulp.task('default', function() {
    wintersmith.preview();
});
