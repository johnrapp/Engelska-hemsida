var app = angular.module('app', ['ngRoute']);
app.config(function(routeProvider) {
	routeProvider
	.when('/', {
		template: 'templates/start.html';
	})
	.when('/about', {
		template: 'templates/about.html';
	})
	.when('/QA', {
		template: 'templates/QA.html';
	})
	.otherwise({
		redirectTo: '/';
	});
});