/**
 * Created by sengwon on 2018-01-11.
 */
var express = require("express");
var router = express.Router();
var post  = require("../model/post");
var util = require("../util");
var moongoose = require('mongoose');

// create
router.post("/", function(req, res){
  post.create(req.body,function (err,post) {
    res.json(err||!post? util.successFalse(err): util.successTrue(post));
  });
});
//search
router.get('/edit', function(req, res){
  post.findOne({id:req.query.id})
    .exec(function(err,post){
      res.json(err||!post? util.successFalse(err): util.successTrue(post));
    });
});
// show_user
router.get('/:pageNum', function(req, res){
  post.find({})
    .skip(req.params.pageNum * 5)
    .limit(5)
    .sort({"createdAt":-1 ,"updatedAt":-1})
    .exec(function(err,post){
      res.json(err||!post? util.successFalse(err): util.successTrue(post));
    });
});

// update //writer랑  title 명시해라
router.put("/:id", function(req, res){
  req.body.updatedAt = Date.now(); // 2
  var _id = moongoose.Types.ObjectId(req.params.id);  //id로 검색할때는 objectid로 검색하라!
  post.findById({_id:_id})
    .exec(function (err,post) {
      if(err||!post) return res.json(util.successFalse(err));

      //update post
      for(var t in req.body){
        post[t] = req.body[t];
      }

      //save
      post.save(function (err,post) {
        if(err||!post) return res.json(util.successFalse(err));
        else {
          res.json(util.successTrue(post));
        }
      })
    })
});

// destroy
router.delete("/:title", function(req, res){
  post.findOneAndRemove({title:req.params.title}).exec(function (err,post) {
    res.json(err||!post? util.successFalse(err): util.successTrue(post));
  });
});

module.exports = router;
