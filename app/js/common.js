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

		'ngSanitize', //angular-sanitize.js
		])	

	/* $rootScope 
	======================== */ 
	.run(function($rootScope) {
		$rootScope.moduleName = 'myApp';
		$rootScope.message = 'Hello Angular';
	});

}());
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
/* PhonesTabletsCtr
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

	angular.module('myApp.phones-tablets', [])
				 .controller('PhonesTabletsCtr', PhonesTabletsCtr);

	PhonesTabletsCtr.$inject = ['$log', '$scope', '$rootScope'];

	function PhonesTabletsCtr( $log, $scope, $rootScope ) {

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

		$scope.setFile = function () {
			if( $scope.data.mode=='Tablets' ) {
				return 'view/tabletList.html';
			}
			else if( $scope.data.mode=='Phones' ){
				return 'view/phoneList.html';
			}
		};
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