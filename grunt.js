module.exports = function(grunt) {
    grunt.initConfig({
	test: {
	    files: ['*_test.js']
	}
    });
    
    grunt.registerTask('default', 'test');
};
