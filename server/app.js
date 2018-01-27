var express = require("express");
var mongoose = require("mongoose");
var bodyParser  = require("body-parser");
var path    = require('path');
var app = express();

// DB setting
//mongoose.connect("mongodb://wjs991:avjaCJDsBwch8brv9Z51N8YjRWWViqr0tQmmcebPuqZZG2zN2BL9PbjV1EVdNeXh9DKtsKwR9Dr0HIlUbmADlw==@wjs991.documents.azure.com:10255/?ssl=true&replicaSet=globaldb",{uri_decode_auth: true }); // 1
mongoose.connect("mongodb://wjs991.documents.azure.com:10255/?ssl=true",{
        auth:{
            user:"wjs991",password:"avjaCJDsBwch8brv9Z51N8YjRWWViqr0tQmmcebPuqZZG2zN2BL9PbjV1EVdNeXh9DKtsKwR9Dr0HIlUbmADlw=="
        }
    })

//mongoose.connect("process.env.MONGODB_URI");//server
//mongoose.connect("mongodb://admin:1234@ds121686.mlab.com:21686/heroku_p9q0dqln");//local
var db = mongoose.connection; // 2
// 3﻿
db.once("open", function(){
    console.log("DB connected");
});
// 4--
db.on("error", function(err){
    console.log("DB ERROR : ", err);
});

//wk

// Other settings
app.disable('Etag');
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
app.use('/push');

// Angular
app.use(express.static(path.resolve(__dirname, '../dist'))); //1

app.get('*', function (req, res) { //2
  var indexFile = path.resolve(__dirname,'../dist/index.html');
  console.log(__dirname);
  res.sendFile(indexFile);
});


// Port setting
var port = process.env.PORT|| 8080;
app.listen(port, function(){
    console.log("server on!");
});
