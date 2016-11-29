var express  = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var database;
var reviews = require('./controllers/reviews')

app.use(bodyParser.json());

app.use(function(req,res,next){
        res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Content-Type, Authorization");
    next();
})

app.get('/api/reviews',reviews.getUserReviews);

mongoose.connect("mongodb://localhost:27017/beerdb",function(err,db){
    if(!err){
        console.log("we are connected to mongo");
        database = db;
    }
})

var server = app.listen(5000,function(){
    console.log("linstening on port",server.address().port);
})
