var mongoose = require("mongoose");
var Faker = require("faker")
var Product = require("./models/product");
// var Dealer = require("./models/dealer");

// var products = []

// for(i = 0; i<20; i++){
// 	prod = {
// 		"title": Faker.commerce.productName(),
// 		"price": Faker.commerce.price()
// 	}
// 	products.push(prod);
// }
// console.log(products);


// function seedDB(){
// 	products.forEach(function(seed){
// 		Product.create(seed, function(err, products){
// 			if(err){
// 				console.log(err);
// 			} else{
// 				console.log("added a product!");
// 			}
// 		});
// 	});
// }
// function seedDB(){
// 	Product.remove({}, function(err){
// 		if(err){
// 			res.send(err);
// 		}
// 		console.log("Products deleted");
// 	});
// };

//module.exports = seedDB;