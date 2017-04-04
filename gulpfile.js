var gulp = require('gulp'),
	less = require('gulp-less'),
	babel = require('gulp-babel')
	browserSync = require('browser-sync').create();

gulp.task('watch', () => {
    browserSync.init({
        server: {
            baseDir: 'server/'
        }
    });
    gulp.watch('./server/less/**.less', ['less']);
    gulp.watch('./server/*').on('change', browserSync.reload);
    gulp.watch('./server/index.html').on('change', browserSync.reload);
    gulp.watch('./server/es6/*.js', ['babel']);
});

gulp.task('less', () => {
    gulp.src('server/less/**.less')
        .pipe(less())
        .pipe(gulp.dest('./server/css'));
});
gulp.task('babel', () => {
	console.log(123);
	gulp.src('./server/es6/*.js')
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(gulp.dest('./server/es5/')) ;
});
