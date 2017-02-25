(function () {

	"use strict"

	angular.module('myApp', [
		'myApp.purchase',
		'myApp.phone',
		'myApp.text',
		'myApp.phoneList',
		])	

	/* $rootScope 
	======================== */ 
	.run(function($rootScope) {
		$rootScope.moduleName = 'myApp';
		$rootScope.message = 'Hello Angular';
	});

}());