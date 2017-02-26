/* PhonesTabletsSwitchCtr
======================== */
(function(){

	'use strict';

	var phones = [{
		name: 'сматрофы - Nokia Lumia 630',
		year: 2014,
		price: 200,
		company: 'Nokia'
	},{
		name: 'Samsung Galaxy S 4',
		year: 2014,
		price: 400,
		company: 'Samsung'
	},{
		name: 'Mi 5',
		year: 2015,
		price: 300,
		company: 'Xiaomi'
	}];

	var tablets = [{
		name: 'планшеты - Samsung Galaxy Tab S4',
		year: 2014,
		price: 300,
		company: 'Samsung'
	},{
		name: 'LG G PAD 8.3',
		year: 2013,
		price: 180,
		company: 'LG'
	},{
		name: 'IdeaTab A8',
		year: 2014,
		price: 220,
		company: 'Lenovo'
	}];

	angular.module('myApp.phones-tablets-switch', [])
				 .controller('PhonesTabletsSwitchCtr', PhonesTabletsSwitchCtr);

	PhonesTabletsSwitchCtr.$inject = ['$log', '$scope', '$rootScope'];

	function PhonesTabletsSwitchCtr( $log, $scope, $rootScope ) {

		$log.log('dada');
		$scope.tablets = tablets;
		$scope.phones = phones;

		$scope.data = {};

		$scope.modes = [{
			value: 'Tablets',
			label: 'Планшеты'
		},{
			value: 'Phones',
			label: 'Смартфоны'
		}];

		$scope.somestyle={background: '#eee', color:'#333'};
		$scope.someclass="myclass";

		$scope.app = {visible : false};
		$scope.app2 = {visible : false};


	}

}());