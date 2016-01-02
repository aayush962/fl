var mongoose = require("mongoose");
var Category = require("./category.js")
var Dealer      = require("./dealer.js")
var productSchema = new mongoose.Schema({
	title: String,
	price: String,
	image: String,
	categories: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Category"
		}
	],
	dealers: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Dealer"
		}
	]
});

var Product = mongoose.model("Product", productSchema);

// Dealer.findOne({
// 	name: "Glaze"
// }, function(err, dealer){
// 	Product.findOne({title: "Awesome Metal Towels"}, function(err, product){
// 		if(err){
// 			console.log(err);
// 		} else{
// 			product.dealers.push(dealer);
// 			product.save(function(err, data){
// 				if(err){
// 					console.log(err);
// 				} else{
// 					console.log(data);
// 				}
// 			})
// 		}
// 	});
// });


module.exports = mongoose.model("Product", productSchema);