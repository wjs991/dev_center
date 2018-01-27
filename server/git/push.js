var express = require("express");
var router = express.Router();
var githubhook = require('githubhook');
var github = githubhook({/* options */});

github.listen();

github.on('*', function (event, repo, ref, data) {
    console.log(data);
});

github.on('event', function (repo, ref, data) {
});

github.on('event:reponame', function (ref, data) {
});

github.on('event:reponame:ref', function (data) {
});

github.on('reponame', function (event, ref, data) {
});

github.on('reponame:ref', function (event, data) {
});

// GitLab system hooks
github.on('*', function (event, type, data) {
});

github.on('type', function (event, data) {
});


module.exports = router;