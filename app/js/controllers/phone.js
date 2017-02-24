/* PhoneCtr
======================== */
(function(){
	
	"use strict";

	angular.module('myApp.phone', [])
			   .controller('PhoneCtr', PhoneCtr);	

	PhoneCtr.$inject = ['$scope', '$log']; 

	function PhoneCtr( $scope, $log) {
		$scope.phone = {
			name : 'Motorolla EX - 250',
			year : 2015,
			price : 200,
			company : {
				name : 'Motorolla',
				country : 'Россия'
			}
		}
	}

}());