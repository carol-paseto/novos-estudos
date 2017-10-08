var gulp = require('gulp'),
	sass = require('gulp-ruby-sass'),
	watch = require('gulp-watch');

// task para sass
gulp.task('sass', function(){
	return sass('sass/**/*.sass').pipe(gulp.dest('css'))
});

// task para watch
gulp.task('watch', function(){
	gul.watch('sass/**/*.sass', ['sass'])
});

//task default
gulp.task('default', ['sass', 'watch']);