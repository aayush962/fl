var mongoose = require("mongoose");

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
	website: String
});

module.exports = mongoose.model("Dealer", dealerSchema);