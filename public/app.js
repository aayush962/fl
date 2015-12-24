var app = angular.module("filterlady", [])

.controller( "mainController", function($scope, $http){
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


});