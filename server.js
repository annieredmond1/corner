// SERVER-SIDE JAVASCRIPT

// REQUIREMENTS //
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var ejs = require('ejs');
var mongoose = require("mongoose");
var db = require("./models/index");




//MIDDLEWARE
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
	console.log('index page');
  	res.render("index");
});

app.get('/supporters/new', function(req, res) {
  	res.render("supporters-new");
});

app.get('/supporters', function(req, res) {
	db.Supporter.find(function(err, supporters) {
		if (err) console.log(err);
		console.log('supporters are: ', supporters);
  	res.render("supporters", {supporters: supporters});
	});
});

app.post('/api/supporters', function (req, res) {
	var supporter = req.body;
	console.log("req.body is: ", req.body);
	db.Supporter.create(supporter, function (err, supporter) {
		console.log("supporter created");
			if (err) console.log(err);
			console.log("supporter is: ", supporter);		
		res.json(supporter);
	});	
});

app.listen(process.env.PORT || 3000, function() {
  	console.log("corner is running on port 3000");
});