/* PhoneCtr
======================== */
(function(){
	
	"use strict";

	angular.module('myApp.phone', [])
			   .controller('PhoneCtr', PhoneCtr);	

	PhoneCtr.$inject = ['$scope', '$log', '$rootScope']; 

	function PhoneCtr( $scope, $log, $rootScope) {
		$scope.phone = {
			name : 'Motorolla EX - 250' + ' - ' + $rootScope.message + ' (добавленно с $rootScope)',
			year : 2015,
			price : 200,
			company : {
				name : 'Motorolla',
				country : 'Россия'
			}
		}
	}

}());