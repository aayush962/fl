var mongoose = require("mongoose");

var categorySchema = new mongoose.Schema({
	name: String,
	subs: Array
	});

module.exports = mongoose.model("Category", categorySchema);