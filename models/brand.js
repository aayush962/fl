var mongoose = require("mongoose");

var brandSchema = new mongoose.Schema({
	name: String,
	desc: String
	});



module.exports = mongoose.model("Brand", brandSchema);