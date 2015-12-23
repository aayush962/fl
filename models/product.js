var mongoose = require("mongoose");

var productSchema = new mongoose.Schema({
	title: String,
	price: String
});

module.exports = mongoose.model("Product", productSchema);