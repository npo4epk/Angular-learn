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