/* myApp
======================== */
(function () {

	"use strict"

	angular.module('myApp', [
		'myApp.purchase',
		'myApp.phone',
		'myApp.text',
		'myApp.phoneList',
		'myApp.milk',
		'myApp.phones-tablets',
		'myApp.phones-tablets-switch',
		'myApp.question',
		'myApp.question-filter',
		'myApp.answer',
		'myApp.answer-list',
	
		'ngSanitize', //angular-sanitize.js
		])	

	/* $rootScope 
	======================== */ 
	.run(function($rootScope) {
		$rootScope.moduleName = 'myApp';
		$rootScope.message = 'Hello Angular';
	});

}());