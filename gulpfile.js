'use strict'

/* DEPENDENCIES
 ========================= */
var 	browserSync   = require('browser-sync'),
			del           = require('del'),
			gulp       	  = require('gulp'),
			concat        = require('gulp-concat'),
			wiredep       = require('wiredep').stream;



/* HTML TASKS
 ========================= */
gulp.task('html', function(){
    return gulp.src('app/*.html')
			   	 .pipe(browserSync.reload({stream: true}));
});

/* CSS TASKS
 ========================= */
gulp.task('css', function() {
	return gulp.src('app/css/**/*.css')
		 	   .pipe(browserSync.reload({stream: true}));
});

/* JS TASKS
 ========================= */
gulp.task('js', function() {
	return gulp.src([
									'app/js/modules/**/*.js',
									'app/js/controllers/**/*.js'
									])
	  		 .pipe(concat('common.js'))
				 .pipe(gulp.dest('app/js'))
			   .pipe(browserSync.reload({stream: true}));
});

/* BROWSERSYNC
 ========================= */
gulp.task('browser-sync', function() {
		browserSync({
			server: {
				baseDir: 'app'
			},
			notify: false
		});
});

/* WATCHER
 ========================= */
gulp.task('watch', ['html', 'css', 'js', 'browser-sync'], function() {
		gulp.watch('app/**/*.html', ['html']);
    gulp.watch('app/css/**/*.css', ['css']);
		gulp.watch('app/js/**/*.js', ['js']);
});
