/**
 * Created by sengwon on 2018-01-09.
 */
var express = require("express");
var router = express.Router();
var todo  = require("../model/todo");
var util = require("../util");

// Index
/*
router.get("/", function(req, res){
  todo.find({})                  // 1
    .sort("-createdAt")            // 1
    .exec(function(err, todo){    // 1
      res.json(err||!todo? util.successFalse(err): util.successTrue(todo));
    });
});*/

// create
router.post("/", function(req, res){
  todo.create(req.body,function (err,todo) {
    res.json(err||!todo? util.successFalse(err): util.successTrue(todo));
  });
});

// show_user
router.get('/', function(req, res){
  todo.find({writer:req.query.writer})
    .sort("-updatedAt")
    .exec(function(err,todo){
      res.json(err||!todo? util.successFalse(err): util.successTrue(todo));
    });
});

// update //writer랑  title 명시해라
router.put("/new", function(req, res){
  req.body.updatedAt = Date.now(); // 2
  todo.findOne({title:req.query.title,writer:req.query.writer})
    .exec(function (err,todo) {
      if(err||!todo) return res.json(util.successFalse(err));

      //update todo
      for(var t in req.body){
        todo[t] = req.body[t];
      }

      //save
      todo.save(function (err,todo) {
        if(err||!todo) return res.json(util.successFalse(err));
        else {
          res.json(util.successTrue(todo));
        }
      })
    })
});

// destroy
router.delete("/remove", function(req, res){
 todo.findOneAndRemove({title:req.query.title,writer:req.query.writer}).exec(function (err,todo) {
   res.json(err||!todo? util.successFalse(err): util.successTrue(todo));
 });
});

module.exports = router;
