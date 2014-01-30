var app = angular.module('app', ['ngRoute']);
app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'templates/start.html'
	})
	.when('/about', {
		templateUrl: 'templates/about.html'
	})
	.when('/FAQ', {
		templateUrl: 'templates/FAQ.html'
	})
	.when('/history', {
		templateUrl: 'templates/history.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});