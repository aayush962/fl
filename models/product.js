var mongoose = require("mongoose");
var Dealer      = require("./dealer.js")

var productSchema = new mongoose.Schema({
	title: String,
	price: String,
	dealers: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Dealer"
		}
	]
});

// Dealer.create({
// 	name: "Aayush Agarwal Part 2"
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