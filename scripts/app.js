var app = angular.module('app', ['ngRoute']);
app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'templates/start.html'
	})
	.when('/about', {
		templateUrl: 'templates/about.html'
	})
	.when('/QA', {
		templateUrl: 'templates/QA.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});