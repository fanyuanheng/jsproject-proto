var requirejs = require('requirejs');

requirejs.config({
    baseUrl: 'src',
    nodeRequire: require
});

requirejs(['user'], function(User) {
    exports.testUser = function(test){
	var user = new User({
	    name: "Tom"
	});
	test.expect(1);
	test.equal(user.get('name'), 'Tom', 'should be Tom');
	test.done();
    };    
});
