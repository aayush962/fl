// var mongoose = require("mongoose");
// var Faker = require("faker")
// var Product = require("./models/product");
// var Dealer = require("./models/dealer");

// // var Category = require("./models/category.js");
// // var products = []
// // var categories = [
// // 	{
// // 		name: "Building Materials",
// // 		subs: ["Bricks", "Cement", "Metal Rods"]
// // 	},

// // 	{
// // 		name: "Flooring",
// // 		subs: ["Tiles", "Marbles"]
// // 	},
// // 	{
// // 		name: "Furniture",
// // 		subs: ["Sofa", "Bed", "Table"]
// // 	},
// // 	{
// // 		name: "Bathroom and Kitchen",
// // 		subs: ["Special Accessories"]
// // 	},
// // 	{
// // 		name: "Stair Grills and Fencing",
// // 		subs: ["Railings", "Fittings"]
// // 	},
// // 	{
// // 		name: "Home Decor",
// // 		subs: ["Paints", "Lighting", "Partitions"]
// // 	},
// // 	{
// // 		name: "Sanitary and Hardware",
// // 		subs: ["Plumbing Fittings", "Products"]
// // 	},
// // 	{
// // 		name: "Doors and Windows",
// // 		subs: ["Framework", "Handles"]
// // 	},
// // 	{
// // 		name: "Electrical",
// // 		subs: ["Appliances"]
// // 	},
// // 	{
// // 		name: "Other Products",
// // 		subs: ["Security", "Soundproofing", "Elevators"]
// // 	},
// // ]
// // for(i = 0; i<20; i++){
// // 	prod = {
// // 		"title": Faker.commerce.productName(),
// // 		"price": Faker.commerce.price()
// // 	}
// // 	products.push(prod);
// // }
// // console.log(products);


// // function seedDB(){
// // 	categories.forEach(function(seed){
// // 		Category.create(seed, function(err, categories){
// // 			if(err){
// // 				console.log(err);
// // 			} else{
// // 				console.log("added a category!");
// // 			}
// // 		});
// // 	});
// // }
// // function seedDB(){
// // 	Product.remove({}, function(err){
// // 		if(err){
// // 			res.send(err);
// // 		}
// // 		console.log("Products deleted");
// // 	});
// // };
// function seedDB(){
// var products = Product.findOne({title: "Refined Wooden Sausages"}, function(err, product){

// 	var dealer = Dealer.findOne({name: "Glaze"}, function(err, dealer){
// 		product.dealers.push(dealer);
// 		product.save(function(err, data){
// 			if(err){
// 				console.log(err)
// 			} else{
// 				console.log(data);
// 			}
// 		});
// 		console.log(product);
// 	});
// });
// };

// module.exports = seedDB;