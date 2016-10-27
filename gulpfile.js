
var gulp = require('gulp');
var sass = require('gulp-ruby-sass');

gulp.task('default', ['build']);

gulp.task('build', ['sass']);

gulp.task('sass', function () {
    sass('scss/guardian-con.scss', {
      style: 'compressed'
    })
        .on('error', sass.logError)
        .pipe(gulp.dest('css'));
});

gulp.task('watch', ['build'], function() {
  gulp.watch('scss/**/*.scss', ['sass']);
});
