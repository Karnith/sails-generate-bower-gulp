/**
 * sails-generate-bower
 *
 * Usage:
 * `sails generate bower`
 *
 * @type {Object}
 */

var path = require('path');
var merge = require('./merge-json');
var insertAfter = require('./insert-after');
var update = require('./update');


var templates = require('path').resolve(__dirname,'../templates');

module.exports = {

	templatesDirectory: templates,

	before: require('./before'),

	targets: {
		'./': { exec: function (scope, cb) { console.log('Running generator (sails-generate-bower-gulp) @ `'+scope.rootPath+'`...'); cb(); }},
		
		'./bower.json': { exec: merge(path.join(templates, 'bower.json'), ['name', 'version', 'author', 'authors', 'licence', 'private'], './package.json')},

		'./tasks/config/bower.js': {copy: path.join(templates, '/tasks/config/bower.js')},
		
		'./tasks/pipeline.js': { exec: update('\n  \'vendor/**/*.css\',', '\n  \'vendor/**/*.js\',') },
		
		'./tasks/register/compileAssets.js': { exec: insertAfter('gulp.task(\'compileAssets\', [', [['\n		\'bower:copy\','], ['\n		\'bower:install\','] ]) },
		
		'./package.json': { exec: merge(path.join(templates, 'package.json')) }
	}
};
