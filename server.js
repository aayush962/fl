var express     = require("express");
var app         = express();
var bodyParser  = require("body-parser");
//var seedDB      = require("./seeds.js")
var mongoose    = require("mongoose");
var Product     = require("./models/product.js")
var Dealer      = require("./models/dealer.js")

app.use(express.static(__dirname + '/public')); 

//Connecting to the database
var uri = process.env.MONGOLAB_URI || '127.0.0.1/flapi';
mongoose.connect(uri)
//////////////////////////////////////////////
//
//Seeding the database 
//seedDB();
//////////////////////

//Body Parser
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
////////////////////////////////////////////////////

var port = process.env.PORT || 8000;

// CRUD Routes for Products ///////////////////////////////////////////////////////


//POST Product
	app.post("/api/products", function(req, res) {

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
	app.get("/api/products", function(req, res){

		Product.find(function(err, products){
			if(err){
				res.send(err);
			} else{
				res.json(products);
			}
		});

	});
//GET Single Product
	app.get("/api/products/:id", function(req, res){
		Product.findById(req.params.id, function(err, product){
			if(err){
				res.send(err);
			} else{
				res.json(product);
			}
		});
	});
//UPDATE Single Product
	app.put("/api/products/:id", function(req, res){
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
	app.delete("/api/products/:id", function(req, res){
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
	app.post("/api/dealers", function(req, res) {

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
	app.get("/api/dealers", function(req, res){

		Dealer.find(function(err, dealers){
			if(err){
				res.send(err);
			} else{
				res.json(dealers);
			}
		});

	});
//GET Single Dealer
	app.get("/api/dealers/:id", function(req, res){
		Dealer.findById(req.params.id, function(err, dealer){
			if(err){
				res.send(err);
			} else{
				res.json(dealer);
			}
		});
	});
//UPDATE Single Dealer
	app.put("api/dealers/:id", function(req, res){
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
	app.delete("api/dealers/:id", function(req, res){
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



app.get('*', function(req, res) {
    res.sendfile('./public/index.html'); // load our public/index.html file
});

app.listen(port);
console.log("Filterlady Api running now!")