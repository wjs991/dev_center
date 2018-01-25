var express = require("express");
var mongoose = require("mongoose");
var bodyParser  = require("body-parser");
var path    = require('path');
var app = express();

// DB setting
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_DB); // 1
var db = mongoose.connection; // 2
// 3﻿
db.once("open", function(){
    console.log("DB connected");
});
// 4
db.on("error", function(err){
    console.log("DB ERROR : ", err);
});

//wk

// Other settings
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(function (req, res, next) { //1
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'content-type');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token");
    next();
});
// Routes
app.use('/api/user', require('./api/user')); //2
app.use('/api/auth', require('./api/auth')); //2
app.use('/api/todo',require('./api/todo'));
app.use('/api/post', require('./api/post'));

// Angular
app.use(express.static(path.resolve(__dirname, '../app'))); //1
app.get('*', function (req, res) { //2
  var indexFile = path.resolve(__dirname,'../app/index.html');
  res.sendFile(indexFile);
});


// Port setting
var port = process.env.PORT|| 8080;
app.listen(port, function(){
    console.log("server on!");
});
