var requirejs = require('requirejs');

requirejs.config({
    baseUrl: 'src',
    nodeRequire: require
});

requirejs(['user'], function (User) {
    var user = new User({
	name: "Tom"
    });
    console.log(user.get('name'));
});
