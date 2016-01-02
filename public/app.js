
var app = angular.module("filterlady", ["ngRoute"])

.config(function ($routeProvider){
	$routeProvider
	.when("/",{
		templateUrl: "views/home.html",
		controller: "homeCtrl"
	})
	.when("/products/:category", {
		templateUrl: "views/home.html",
		controller: "homeCtrl"
	})
	.when("/addCategory",{
		templateUrl: "/addCategory.html",
		controller: "addCategoryController"
	})
	.when("/products/:productId",{
		templateUrl: "views/singleProduct.html",
		controller: "singleProductCtrl"
	})
	.when("/search", {
		templateUrl: "views/search.html",
		controller: "searchCtrl"
	})
	// .when("/products",{
	// 	templateUrl: "views/products.html",
	// 	controller: "HomeCtrl"
	// })
	.when("/addProduct", {
		templateUrl: "views/addProduct.html",
		controller: "addProductController"
	})
	.when("/addDealer", {
		templateUrl: "views/addDealer.html",
		controller: "addDealerController"
	})
	// .when("/dealers",{
	// 	templateUrl: "views/dealers.html",
	// 	controller: "HomeCtrl"
	// })
	// .when("/dealers/:dealerId",{
	// 	templateUrl: "views/singleDealer.html",
	// 	controller: "HomeCtrl"
	// })

})

.controller( "homeCtrl", function($scope, $http, $routeParams){
	$scope.category = $routeParams.category;
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

// .controller("categorySearch", function($scope, $http, $routeParams){
// 	$http.get("/api/products")
// 	.success(function(data){
// 		$scope.products = 
// 	})
// })

.controller("singleProductCtrl", function($scope, $http, $routeParams){

	$http.get("/api/products/" + $routeParams.productId)
	.success(function(data){
		$scope.product = data;
		console.log($scope.product);
	})
	.error(function(data){
		console.log(data);
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
})

.controller("addProductController", function($scope, $http, $routeParams){

	$http.get("/api/dealers")
	.success(function(data){
		$scope.dealerOptions = data
	})
	.error(function(data){
		console.log(data);
	});
	$http.get("/api/categories")
	.success(function(data){
		$scope.categoryOptions = data
	})
	.error(function(data){
		console.log(data);
	});

	$scope.addProduct = function(){
		console.log($scope.title);
		$http.post("/api/products", {"title": $scope.title, dealers: $scope.dealers, categories: $scope.categories})
		.success(function(){
			console.log("Done");
		})
		.error(function(data){
			console.log(data);
		})
	};
})

.controller("addDealerController", function($scope, $http, $routeParams){

	$http.get("/api/products")
	.success(function(data){
		$scope.productOptions = data
	})
	.error(function(data){
		console.log(data);
	});

	$scope.addDealer = function(){
		console.log($scope.name);
		$http.post("/api/dealers", {"name": $scope.name, products: $scope.products})
		.success(function(){
			console.log("Done");
		})
		.error(function(data){
			console.log(data);
		})
	};
})

.controller("addCategoryController", function($scope, $http, $routeParams){
	console.log("Hello");
	$scope.addCategory = function(){
		console.log($scope.name);
		$http.post("/api/categories", {"name": $scope.name})
		.success(function(){
			console.log("Done");
		})
		.error(function(data){
			console.log(data);
		})
	};
});

// .controller("addDealerController", function($scope, $http, $routeParams){

// 	$http.get("/api/products")
// 	.success(function(data){
// 		$scope.productOptions = data
// 	})
// 	.error(function(data){
// 		console.log(data);
// 	});

// 	$scope.addDealer = function(){
// 		console.log($scope.name);
// 		$http.post("/api/products", {"title": $scope.name, products: [$scope.dealer]})
// 		.success(function(){
// 			console.log("Done");
// 		})
// 		.error(function(data){
// 			console.log(data);
// 		})
// 	};


