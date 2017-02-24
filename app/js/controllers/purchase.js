/* PurchaseCtr
======================== */
(function(){

	"use strict";

	var model = {
		items: [
		{ purchase: "Хлеб", done: false, price: 15.9 },
		{ purchase: "Масло", done: false, price: 60 },
		{ purchase: "Картофель", done: true, price: 22.6 },
		{ purchase: "Сыр", done: false, price:310 }
		]
	};
	
	angular.module( 'myApp.purchase', [] )
				 .controller('PurchaseCtr', PurchaseCtr);

	PurchaseCtr.$inject = ['$scope', '$log'];

	function PurchaseCtr( $scope, $log ) {
	// $log.log('Вошли!');
	$scope.list = model;
	$scope.addItem = function( text, price ) {
		price =  parseFloat(price); // преобразуем введенное значение к числу
		if ( text != "" && !isNaN(price) ) { // если текст установлен и введено число, то добавляем
			$scope.list.items.push({ purchase: text, price: price, done: false });
		} 
	}
}

}());