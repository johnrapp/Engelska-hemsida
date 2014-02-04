angular.module('app', ['ngRoute'])
.config(function($routeProvider) {
	//För att berätta vilka sidor som ska visa vilka ng/template sidor
	$routeProvider
	.when('/', {
		templateUrl: 'templates/start.html'
	})
	.when('/indepth', {
		templateUrl: 'templates/indepth.html'
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
		template: '<span><span data-ng-transclude></span><article class="explination">{{explination}}</article></span>',
		link: function link(scope, element, attrs) {
			element.ready(function() {
				var $term = element.find('span');
				var $explination = element.find('article').addClass('hidden');
				var calculateMargin = function() {
					return - $explination.outerWidth() / 2 - $term.width() / 2;
				}
				$explination.css('margin-left', calculateMargin());

				/*Visa förklaringen när man pekar med musen över elementet och animera opacity så den visas mer och mer*/
				element.hover(function() {
					$explination.removeClass('hidden');
					$explination.animate({
						opacity: 1
					});

					/*För att centrera förklaringen måste göras varje gång eftersom elementet inte alltid
						är på den nuvarande sidan när sidan laddar in*/
					$explination.css('margin-left', calculateMargin);
				},
				function() {
					$explination.addClass('hidden');
					$explination.css('opacity', '0');
				});
			});
		}
	}
})
.directive('question', function() {
	return {
		restrict: 'EAC',
		scope: {answer: '@'},
		transclude: true,
		replace: true,
		/*Det som står i frågan kommer hamna i sectionen med data-ng-transclude och
			svaret kommer hamna i sectionen med class="answer"*/
		template: '<article><section class="question-inner" data-ng-transclude></section><section class="answer">{{answer}}</section></article>',
		link: function link(scope, element, attrs) {
			var $question = element.find('.question-inner');
			var $answer = element.find('.answer').addClass('hidden');
			$question.click(function() {
				/*Växla classen hidden när man klickar på frågan*/
				$answer.toggleClass('hidden')
			});
		}
	}
});