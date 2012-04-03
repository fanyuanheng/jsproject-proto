module.exports = function(grunt) {
    grunt.initConfig({
	test: {
	    files: ['test/**/*.js']
	}
    });

    grunt.registerTask('requirejs', 'Configure RequireJS for node', function() {
	requirejs = require('requirejs');
	requirejs.config({
	    baseUrl: 'src',
	    nodeRequire: require
	});
    });
    
    grunt.registerTask('default', 'requirejs test');

    grunt.registerTask('go', 'requirejs test');
};
