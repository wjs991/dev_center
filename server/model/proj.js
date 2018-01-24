/**
 * Created by sengwon on 2018-01-10.
 */
var mongoose = require("mongoose");

var projSchema = mongoose.Schema({
  title:{type:String},
  createdAt:{},
  updatedAt:{},
  member:{},
});
