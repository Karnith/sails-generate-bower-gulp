/**
 * Install bower components.
 *
 * ---------------------------------------------------------------
 *
 * Installs bower components and copies the required files into the assets folder structure.
 *
 */

module.exports = function(gulp, plugins) {
	gulp.task('bower:copy', ['bower:install'], function() {
		return gulp.src('./bower_components/**/*.min.(js|css|css.map|js.map)')
				.pipe(gulp.dest('./assets/vendor'))
				.pipe(plugins.notify({ message: 'Bower copy task complete' }));
	});
	
	gulp.task('bower:install', function() {
		return plugins.bower()
				.pipe(gulp.dest('./bower_components'))
				.pipe(plugins.notify({ message: 'Bower install task complete' }));
	});
};
