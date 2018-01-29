var express = require("express");
var router = express.Router();
var util = require('../util');
var http = require('https');
var token = " 70c60b523f839728920387acb4522500156b821c";
var app = express();
var client_id = "cc2d7e3046aa9e47749e";
var secret= "b70de4195f582d14893003a4e0bd04e212e916de";
var redirect_uri = "https://tmdtmdtmd.herokuapp.com/gitauth/user";
const octokit = require('@octokit/rest')({
  debug: true
});

function handleResponse(response) {
  var serverData = '';
  response.on('data', function (chunk) {
    serverData += chunk;
  });
  response.on('end', function () {
    console.log(serverData);
  });
}
  router.get("/",function(req,res,next){
   return http.get("https://github.com/login/oauth/authorize/"+`${client_id}`, function(err){
    //console.log(err);
    }).end();
  }
);

router.get("/user",function(req,res){
  console.log(req);
  console.log(res);
});

module.exports = router;