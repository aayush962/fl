'use strict';

(function () {

		angular.module('Ctrls', [
				'Wrappers',
				'Utils'
		])


		// ---------------------- Main Ctrl ------------------------------
		// MailCtrl for controlling the navigation and footer. Wrapper Controller over body.
		.controller(

		'MainCtrl', 

		['$scope', '$location', '$rootScope',
		function ($scope, $location, $rootScope) {
			$scope.search_categories = {
				    availableOptions: ['Products','Services'],
			};
			$scope.search_category = 'Products';
			$scope.search_string = "";

			$rootScope.user_location = '';
		}])

		// ---------------------- Home Ctrl ------------------------------
		.controller(

		'HomeCtrl', 

		['$scope', '$location',
		function ($scope, $location) {

		}])

		// ---------------------- Single Product Ctrl ------------------------------
		.controller(

		'SingleProductCtrl', 

		['$scope', '$location', 'getSingleProductWrapper',
		function ($scope, $location, getSingleProductWrapper) {
			getSingleProductWrapper($scope)();
		}])

		.controller(

		'SingleMerchantCtrl', 

		['$scope', '$location', 'getSingleMerchantWrapper',
		function ($scope, $location, getSingleMerchantWrapper) {
			getSingleMerchantWrapper($scope)();
		}])
		

		// ---------------------- Search Product Ctrl ------------------------------
		.controller(

		'SearchCtrl', 

		['$scope', '$location', 'searchWrapper', '$routeParams',
		function ($scope, $location, searchWrapper, $routeParams) {
			console.log($routeParams);
			$scope.search = searchWrapper($scope);
			$scope.search({
				search_string: $routeParams.q,
				category: $routeParams.category
			});
		}]);
}());