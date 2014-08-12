var fs = require('fs');
var path = require('path');
var _ = require('lodash');
// var main = 'gulp.task(\'compileAssets\', [';

module.exports = function(css, js) {
	return function(scope, cb) {
		update(scope.rootPath, css, js, cb);
	}
}

function update(path, css, js, cb) {
	fs.readFile(path, {encoding: 'utf8'}, function(err, contents) {
		if(err) return cb(err);

		contents = contents.replace('var cssFilesToInject = [', 'var cssFilesToInject = ['+css);
		contents = contents.replace('var jsFilesToInject = [', 'var jsFilesToInject = ['+js);
		
		fs.writeFile(path, contents, cb);
	});
}
