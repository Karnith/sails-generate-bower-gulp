/**
 * Install bower components.
 *
 * ---------------------------------------------------------------
 *
 * Installs bower components and copies the required files into the assets folder structure.
 *
 */

module.exports = function(gulp, plugins) {
	gulp.task('bower:install', function() {
		return plugins.bower()
				.pipe(gulp.dest('./bower_components'))
				.pipe(plugins.notify({ message: 'Bower install task complete' }));
	});
	gulp.task('bower:copy', function() {
		return gulp.src('./bower_components/**/*.min.*')
				.pipe(gulp.dest('./assets/vendor'))
				.pipe(plugins.notify({ message: 'Bower copy task complete' }));
	});
};
