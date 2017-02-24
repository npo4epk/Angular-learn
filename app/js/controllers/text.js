/* TextCtr
======================== */
(function(){

	"use strict";

	angular.module('myApp.text', [])
				 .controller('TextCtr', function(){
				 	this.message = 'Controller',
				 	this.text = 'Контроллер без $scope';
				 })

}());