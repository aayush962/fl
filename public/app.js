
var app = angular.module("filterlady", ["ngRoute"])

.config(function ($routeProvider){
	$routeProvider
	.when("/",{
		templateUrl: "views/home.html",
		controller: "homeCtrl"
	})
	.when("/products/:productId",{
		templateUrl: "views/singleProduct.html",
		controller: "homeCtrl"
	})
	.when("/search", {
		templateUrl: "views/search.html",
		controller: "searchCtrl"
	})
	// .when("/products",{
	// 	templateUrl: "views/products.html",
	// 	controller: "HomeCtrl"
	// })
	// .when("/dealers",{
	// 	templateUrl: "views/dealers.html",
	// 	controller: "HomeCtrl"
	// })
	// .when("/dealers/:dealerId",{
	// 	templateUrl: "views/singleDealer.html",
	// 	controller: "HomeCtrl"
	// })

})

.controller( "homeCtrl", function($scope, $http){
	$scope.formData = {};
	$http.get("/api/products")
		.success(function(data){
			$scope.products = data;
			console.log(data);
		})
		.error(function(data){
			console.log("Error: " + data);
		});

	$http.get("/api/dealers")
		.success(function(data){
			$scope.dealers = data;
			console.log(data);
		})
		.error(function(data){
			console.log("Error: " + data);
		});

	$http.get("/api/categories")
		.success(function(data){
			$scope.categories = data;
			console.log(data);
		})
		.error(function(data){
			console.log("Error: " + data);
		});
})

.controller("searchCtrl", function($scope, $http, $routeParams){

	$scope.search_string = $routeParams.q;
	$http.get("/api/products")
		.success(function(data){
			$scope.products = data;

		})
		.error(function(data){
			console.log("Error: " + data);
		});
});

