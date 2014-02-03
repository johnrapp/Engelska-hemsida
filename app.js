angular.module('app', ['ngRoute'])
.config(function($routeProvider) {
	//För att berätta vilka sidor som ska visa vilka ng/template sidor
	$routeProvider
	.when('/', {
		templateUrl: 'templates/start.html'
	})
	.when('/FAQ', {
		templateUrl: 'templates/FAQ.html'
	})
	.when('/history', {
		templateUrl: 'templates/history.html'
	})
	.when('/environment', {
		templateUrl: 'templates/environment.html'
	})
	.otherwise({
		redirectTo: '/'
	});
})
.controller('currentCtrl', function($rootScope, $scope, $location) {
	//När sidan byts visar jag för HTMLen vilken den nuvarande url:en är
	$rootScope.$on('$routeChangeSuccess', function() {
		$scope.current = $location.url();
	});
});