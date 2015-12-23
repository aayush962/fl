var mongoose = require("mongoose");
var express  = require("express");
var router   = express.Router();
var Product  = require("./models/product.js")
var Dealer   = require("./models/dealer.js")
var bodyParser  = require("body-parser");


mongoose.connect("mongodb://localhost/flapi")
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


//Middleware
router.use(function(req, res, next){
	console.log("Api Running Baby!!");
	next();
});

// CRUD Routes for Products ///////////////////////////////////////////////////////


//POST Product
	router.post("/products", function(req, res) {

		var product = new Product();
		product.title = req.body.title;

		product.save(function(err){
			if(err){
				res.send(err);
			} else{
				res.json({message: "Product Created!"});
			}
		});
	});
//GET Product
	router.get("/products", function(req, res){

		Product.find(function(err, products){
			if(err){
				res.send(err);
			} else{
				res.json(products);
			}
		});

	});
//GET Single Product
	router.get("/products/:id", function(req, res){
		Product.findById(req.params.id, function(err, product){
			if(err){
				res.send(err);
			} else{
				res.json(product);
			}
		});
	});
//UPDATE Single Product
	router.put("/products/:id", function(req, res){
		Product.findById(req.params.id, function(err, product){
			if(err){
				res.send(err);
			} else{
				product.title = req.body.title

				product.save(function(err){
					if(err){
						res.send(err);
					} else{
						res.json({ message: "Product Was Updated Successfully"});
					}
				});
			}
		});
	});
//DELETE a Product
	router.delete("/products/:id", function(req, res){
		Product.remove({
			_id: req.params.id
		}, function(err, product){
			if(err){
				res.send(err);
			} else{
				res.json({message: "Successfully deleted the product!"});
			}
		});
	});

////////////////////////////////////////////////////////////////////////////////////////



// CRUD Routes for Dealers ///////////////////////////////////////////////////////


//POST Dealer
	router.post("/dealers", function(req, res) {

		var dealer = new Dealer();
		dealer.title = req.body.title;

		dealer.save(function(err){
			if(err){
				res.send(err);
			} else{
				res.json({message: "Dealer Created!"});
			}
		});
	});
//GET Dealer
	router.get("/dealers", function(req, res){

		Dealer.find(function(err, dealers){
			if(err){
				res.send(err);
			} else{
				res.json(dealers);
			}
		});

	});
//GET Single Dealer
	router.get("/dealers/:id", function(req, res){
		Dealer.findById(req.params.id, function(err, dealer){
			if(err){
				res.send(err);
			} else{
				res.json(dealer);
			}
		});
	});
//UPDATE Single Dealer
	router.put("/dealers/:id", function(req, res){
	Dealer.findById(req.params.id, function(err, dealer){
			if(err){
				res.send(err);
			} else{
				dealer.title = req.body.title

				dealer.save(function(err){
					if(err){
						res.send(err);
					} else{
						res.json({ message: "Dealer Was Updated Successfully"});
					}
				});
			}
		});
	});
//DELETE a Dealer
	router.delete("/dealers/:id", function(req, res){
		Dealer.remove({
			_id: req.params.id
		}, function(err, dealer){
			if(err){
				res.send(err);
			} else{
				res.json({message: "Successfully deleted the dealer!"});
			}
		});
	});

////////////////////////////////////////////////////////////////////////////////////////



router.get("/", function(req, res){
	res.json({message: "Horray!!! I made an API"});
});

app.use("/api", router);


