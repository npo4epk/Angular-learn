/* myApp
======================== */
(function(){

	'use strict';

	angular.module('myApp.answer', [])
				 .controller('AnswerCtr', AnswerCtr);

	AnswerCtr.$inject = ['$log', '$scope', '$rootScope'];
	
	function AnswerCtr( $log, $scope, $rootScope ) {
		$scope.save = function (answer, answerForm){
			$log.log(answerForm);
			$log.log(answer);
			if(answerForm.$valid){
                // действия по сохранению
                $log.log(answer);
                alert(answer.author + ", ваш ответ сохранен");
              }
            };
          };
}());