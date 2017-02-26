/* TextCtr
======================== */
(function(){

	var milks = [{
		name: 'Молоко 1',
		year: 2015,
		price: 200,
		expression : '<strong>С тегами</strong>',
	},{
		name: 'Молоко 2',
		year: 2016,
		price: 200,
		expression : '<strong>С тегами</strong>',
	},{
		name: 'Молоко 3',
		year: 2017,
		price: 200,
		expression : '<strong>С тегами</strong>',
	}];

	"use strict";

	angular.module('myApp.milk', [])
				 .controller('MilkCtr', MilkCtr);

	MilkCtr.$inject = ['$log', '$scope', '$rootScope'];

	function MilkCtr( $log, $scope, $rootScope ) {

		$scope.milks = milks;
	}


}());