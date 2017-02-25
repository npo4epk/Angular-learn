/* PhoneListCtr
======================== */
(function(){
	
	"use strict";

	angular.module('myApp.phoneList', [])
				 .controller('PhoneListCtr', PhoneListCtr);

	PhoneListCtr.$inject = ['$scope', '$log', '$rootScope'];
	
	function PhoneListCtr( $scope, $log, $rootScope) {

		$scope.phones = [{
			name: 'Nokia Lumia 630',
			year: 2014,
			price: 200,
			company: {
				name: 'Nokia',
				country: 'Финляндия'
			}
		},{
			name: 'Samsung Galaxy S 4',
			year: 2014,
			price: 400,
			company: {
				name: 'Samsung',
				country: 'Республика Корея'
			}
		},{
			name: 'Mi 5',
			year: 2015,
			price: 300,
			company: {
				name: 'Xiaomi',
				country: 'Китай'
			}
		}];
	} 	

}());