/**
 * Install bower components.
 *
 * ---------------------------------------------------------------
 *
 * Installs bower components and copies the required files into the assets folder structure.
 *
 */

module.exports = function(gulp, plugins) {
	gulp.task('bower', function() {
		var install = plugins.bower()
				.pipe(gulp.dest('./bower_components'))
				.pipe(plugins.notify({ message: 'Bower install task complete' }));
	
		var copy = gulp.src('./bower_components/**/*.min.*')
				.pipe(gulp.dest('./assets/vendor'))
				.pipe(plugins.notify({ message: 'Bower copy task complete' }));
		return plugins.stream(install, copy);
	});
};
