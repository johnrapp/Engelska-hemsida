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
})
/* Detta gör att om man sätter classen "term" och lägger in en förklaring för begreppet "data-explination" kommer förklaringen att visas
	i en ruta när man för musen över texten */
.directive('term', function() {
	return {
		restrict: 'EAC',
		scope: {explination: '@'},
		transclude: true,
		replace: true,
		/*Följande kommer byta ut elementet med strängen och lägga vad som står i elementet från början där det står data-ng-transclude*/
		template: '<span><span data-ng-transclude></span><article class="explination" data-ng-bind="explination"></article></span>',
	}
});