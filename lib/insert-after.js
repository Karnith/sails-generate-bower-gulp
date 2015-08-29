var fs = require('fs');
var path = require('path');
var _ = require('lodash');

module.exports = function(target, pairs) {
	return function(scope, cb) {
		insert(scope.rootPath, target, pairs, cb);
	}
}

function insert(path, target, pairs, cb) {
	fs.readFile(path, {encoding: 'utf8'}, function(err, contents) {
		if(err) return cb(err);
		_(pairs).forEach(function (pair) {
		//	contents = contents.replace(target, target+pair);
		//});
			contents = contents.replace(pair[0], pair[0] + pair[1]);
		}).value();

		fs.writeFile(path, contents, cb);
	});
}
