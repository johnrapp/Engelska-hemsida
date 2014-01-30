angular.module('app', ['ngRoute'])
.config(function($routeProvider) {
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
	.otherwise({
		redirectTo: '/'
	});
})
.controller('currentCtrl', function($rootScope, $scope, $location) {
	$rootScope.$on('$routeChangeSuccess', function(event, current) {
		$scope.current = $location.url();
	});
});