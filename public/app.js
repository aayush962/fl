var filterlady = angular.module("filterlady", []);

function mainController($scope, $http){
	$scope.formData = {};
	$http.get("/api/products")
		.success(function(data){
			$scope.products = data;
			console.log(data);
		})
		.error(function(data){
			console.log("Error: " + data);
		});
}