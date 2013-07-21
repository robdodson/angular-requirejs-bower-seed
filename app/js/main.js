require.config({
	paths: {
		angular: '../components/angular/angular',
		text: '../components/requirejs-text/text'
	},
	baseUrl: 'app/js',
	shim: {
		'angular' : {'exports' : 'angular'},
		'angularMocks': {deps:['angular'], 'exports':'angular.mock'}
	},
	priority: [
		"angular"
	]
});

require( [
	'angular',
	'app',
	'routes'
], function(angular, app, routes) {
	'use strict';
		angular.bootstrap(document, [app['name']]);
});
