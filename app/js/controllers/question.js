/* PhonesTabletsSwitchCtr
======================== */
(function(){

	'use strict';

	angular.module('myApp.question', [])
	.controller('QuestionCtr', QuestionCtr);

	QuestionCtr.$inject = ['$log', '$scope', '$rootScope'];

	function QuestionCtr($log, $scope, $rootScope) {

		$scope.question={
			text: 'Какой js-фреймворк лучше использовать?',
			author: 'Иван Иванов',
			date: '20/10/2013',
			answers: 
			[{
				text: 'AngularJS!',
				author: 'Вова Сидоров',
				date: '21/10/2013',
				rate:2
			},{
				text: 'AngularJS лучше всех',
				author: 'Олег Кузнецов',
				date: '22/10/2013',
				rate:0
			},{
				text: 'Я бы использовал knockout',
				author: 'Неизвестный',
				date: '23/10/2013',
				rate:0
			}]
		};

		$scope.voteUp = function(answer) {
			$log.log(answer);
			answer.rate++;
		};

		$scope.voteDown = function(answer) {
			answer.rate--;
		};

		$scope.questColorClass = 'questcolor';

		$scope.changeClass = function(event) {
			$log.log('da');
			$scope.questColorClass = event.type == "mouseenter" ? "questselectedcolor" : "questcolor";
		};
	}

}());