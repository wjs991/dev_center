var express = require("express");
var router = express.Router();
var util = require('../util');
var requset_api= require("request");
var token = " 70c60b523f839728920387acb4522500156b821c";
var app = express();
var client_id = "cc2d7e3046aa9e47749e";
var secret= "b70de4195f582d14893003a4e0bd04e212e916de";
var redirect_uri = "https://tmdtmdtmd.herokuapp.com/gitauth/user";
const octokit = require('@octokit/rest')({
  debug: true
});
var giturl = "https://github.com/login/oauth/authorize";
var ClientOAuth2 = require('client-oauth2');
var config = require("./config.js");
var githubOAuth = require('github-oauth')({
  githubClient: process.env.GITHUB_KEY,
  githubSecret: process.env.GITHUB_SECRET,
  baseURL: 'https://tmdtmdtmd.herokuapp.com/gitauth',
  loginURI: '/',
  callbackURI: '/user'
})


router.get("/",function(req,res){
  console.log("started oauth");
  return githubOAuth.login(req, res);
});

router.get("/user",function(req,res){
  console.log("received callback");
  return githubOAuth.callback(req, res);
})

githubOAuth.on('error', function(err) {
  console.error('there was a login error', err)
})

githubOAuth.on('token', function(token, serverResponse) {
  serverResponse.end(JSON.stringify(token))
})
module.exports = router;