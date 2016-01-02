var express     = require("express");
var app         = express();
var bodyParser  = require("body-parser");
// var seedDB      = require("./seeds.js")
var mongoose    = require("mongoose");

// Connecting the models ////////////////////
var Dealer      = require("./models/dealer.js");
var Product     = require("./models/product");
var Category    = require("./models/category");
var Brand       = require("./models/brand");
/////////////////////////////////////////////

app.use(express.static(__dirname + '/public')); 
//Connecting to the database
var uri = process.env.MONGOLAB_URI || '127.0.0.1/flapi';
mongoose.connect(uri);
//////////////////////////////////////////////
//
//Seeding the database 
// seedDB();
//////////////////////

//Body Parser
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
////////////////////////////////////////////////////

var port = process.env.PORT || 3000;

// CRUD Routes for Products ///////////////////////////////////////////////////////


//POST Product
	app.post("/api/products", function(req, res) {

		var product = new Product();
		product.title = req.body.title;
		product.dealers = req.body.dealers;
		product.categories = req.body.categories;
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

		Product.find().populate("dealers").exec(function(err, products){
			if(err){
				res.send(err);
			} else{
				res.json(products);
			}
		});
	});
//GET Single Product
	app.get("/api/products/:id", function(req, res){
		Product.findById(req.params.id).populate("dealers").populate("categories").exec(function(err, product){
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



// CRUD Routes for Categories ///////////////////////////////////////////////////////


//POST Dealer
	app.post("/api/dealers", function(req, res) {

		var dealer = new Dealer();
		dealer.name = req.body.name;
		dealer.products = req.body.products;
		dealer.save(function(err){
			if(err){
				res.send(err);
			} else{
				res.json({message: "dealer Created!"});
			}
		});
	});
//GET dealer
	app.get("/api/dealers", function(req, res){

		Dealer.find().populate("products").exec(function(err, categories){
			if(err){
				res.send(err);
			} else{
				res.json(categories);
			}
		});

	});
//GET Single dealer
	app.get("/api/dealers/:id", function(req, res){
		Dealer.findById(req.params.id, function(err, dealer){
			if(err){
				res.send(err);
			} else{
				res.json(dealer);
			}
		});
	});
//UPDATE Single dealer
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
						res.json({ message: "dealer Was Updated Successfully"});
					}
				});
			}
		});
	});
//DELETE a dealer
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


// CRUD Routes for Categories ///////////////////////////////////////////////////////


//POST category
	app.post("/api/categories", function(req, res) {

		var category = new Category();
		category.title = req.body.title;

		category.save(function(err){
			if(err){
				res.send(err);
			} else{
				res.json({message: "category Created!"});
			}
		});
	});
//GET category
	app.get("/api/categories", function(req, res){

		Category.find(function(err, categories){
			if(err){
				res.send(err);
			} else{
				res.json(categories);
			}
		});

	});
//GET Single category
	app.get("/api/categories/:id", function(req, res){
		Category.findById(req.params.id, function(err, category){
			if(err){
				res.send(err);
			} else{
				res.json(category);
			}
		});
	});
//UPDATE Single category
	app.put("api/categories/:id", function(req, res){
	Category.findById(req.params.id, function(err, category){
			if(err){
				res.send(err);
			} else{
				category.title = req.body.title

				category.save(function(err){
					if(err){
						res.send(err);
					} else{
						res.json({ message: "category Was Updated Successfully"});
					}
				});
			}
		});
	});
//DELETE a category
	app.delete("api/categories/:id", function(req, res){
		Category.remove({
			_id: req.params.id
		}, function(err, category){
			if(err){
				res.send(err);
			} else{
				res.json({message: "Successfully deleted the category!"});
			}
		});
	});

////////////////////////////////////////////////////////////////////////////////////////



app.get('*', function(req, res) {
    res.sendfile('./public/index.html'); // load our public/index.html file
});

app.listen(port, function(){
console.log("Filterlady Api running now!");
});
