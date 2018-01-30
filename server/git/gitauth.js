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
var ClientOAuth2 = require('client-oauth2');
var config = require('./config');
var githubAuth = new ClientOAuth2({
  clientId: config.GITHUB_KEY,
  clientSecret: config.GITHUB_SECRET,
  accessTokenUri: 'https://github.com/login/oauth/access_token',
  authorizationUri: 'https://github.com/login/oauth/authorize',
  redirectUri: 'https://tmdtmdtmd.herokuapp.com/gitauth/user',
  scopes: ['repo:status','user:email']
})

/*
var token = githubAuth.createToken('access token', 'optional refresh token', 'optional token type', { data: 'raw user data' });
  console.log(token);
  // Set the token TTL. 
token.expiresIn(1234) // Seconds
token.expiresIn(new Date('2016-11-08')) // Date.

  // Refresh the users credentials and save the new access token and info.
 // token.refresh().then(storeNewToken)

  // Sign a standard HTTP request object, updating the URL with the access token
  // or adding authorization headers, depending on token type.
token.sign({
      method: 'get',
      url: 'https://api.github.com/users'
}) //=> { method, url, headers, ... }
//console.log(token);*/

router.get("/",function(req,res){
  var uri = githubAuth.code.getUri();
  console.log(uri);
  res.redirect(uri);
  }
);

router.get("/user",function(req,res){
  githubAuth.code.getToken(req.originalUrl)
  .then(function (user) {
    console.log("dddddddddddddddddddddddddddddddddddd");
    console.log(user) //=> { accessToken: '...', tokenType: 'bearer', ... } 

    // Refresh the current users access token. 
    user.refresh().then(function (updatedUser) {
      console.log(updatedUser !== user) //=> true 
      console.log(updatedUser.accessToken)
    })

    // Sign API requests on behalf of the current user. 
    user.sign({
      method: 'get',
      url: 'https://api.github.com/users'
    })
    console.log(user.accessToken);
    // We should store the token into a database. 
    return res.redirect('https://api.github.com/'+"?user"+user.accessToken);
  })
})
module.exports = router;