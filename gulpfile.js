var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('default', function() {
  console.log("hello world");
});

gulp.task('watch', () => {
    browserSync.init({
        server: {
            baseDir: 'server/'
        }
    });
    gulp.watch('./server/*').on('change', browserSync.reload);
    gulp.watch('./server/index.html').on('change', browserSync.reload);
});
