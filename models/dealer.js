var mongoose = require("mongoose");
var Product = require("./product.js")
var dealerSchema = new mongoose.Schema({
	name: String,
	owner: String,
	estd: Number,
	description: String,
	legal: String,
	facilities: String,
	awards: String,
	hours: String,
	turnover: String,
	mode: String,
	employees: String,
	contact: String,
	address: String,
	email: String,
	notes: String,
	website: String,
	products: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Product"
		}
	]
});


var Dealer = mongoose.model("Dealer", dealerSchema);

// Product.find(function(err, data){
// 	console.log(data);
// });

// Product.findOne({
// 	title: "Awesome Metal Towels"
// }, function(err, product){
// 	Dealer.findOne({name: "Glaze"}, function(err, dealer){
// 		if(err){
// 			console.log(err);
// 		} else{
// 			dealer.products.push(product);
// 			dealer.save(function(err, data){
// 				if(err){
// 					console.log(err);
// 				} else{
// 					console.log(data);
// 				}
// 			})
// 		}
// 	});
// });


module.exports = mongoose.model("Dealer", dealerSchema);