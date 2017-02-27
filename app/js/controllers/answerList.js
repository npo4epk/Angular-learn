/* AnswerListCtr
======================== */
(function(){

	'use strict';

	angular.module('myApp.answer-list', [])
				 .directive('answerList', answerList)	
				 .controller('AnswerListCtr', AnswerListCtr);

	AnswerListCtr.$inject = ['$log', '$scope', '$rootScope'];

	function AnswerListCtr( $log, $scope, $rootScope ) {
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
	};

	function answerList() {

		return function (scope, element, attrs) {

			var data = scope[attrs["answerList"]];

			if (angular.isArray(data.answers)) {
				var divElem = angular.element("<div>").addClass("answers");
				element.append(divElem);
				for (var i = 0; i < data.answers.length; i++) {
					var answerElem = angular.element('<div>').addClass("answer");
					var voteElem = angular.element('<div>').addClass("vote");

					var voteUpElem = angular.element('<a>').addClass("vote-up");
					voteElem.append(voteUpElem);
					var rateElem = angular.element('<span>').addClass("rate").text(data.answers[i].rate);
					voteElem.append(rateElem);
					var voteDownElem = angular.element('<a>').addClass("vote-down");
					voteElem.append(voteDownElem);
					answerElem.append(voteElem);

					answerElem.append(angular.element('<b>').text(data.answers[i].text));
					answerElem.append(angular.element('<p>').text(data.answers[i].author));
					var iElem =angular.element('<i>').text(data.answers[i].date);
					var dateElem = angular.element('<p>').append(iElem);
					answerElem.append(dateElem);
					divElem.append(answerElem);
				}
			}
		}
	};

}());


