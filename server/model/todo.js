/**
 * Created by sengwon on 2018-01-09.
 */
var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

var todoSchema = mongoose.Schema({
  title:{type:String, required:true},
  body:{type:String},
  writer:{type:String},
  createdAt:{type:Date, default:Date.now}, // 2
  updatedAt:{type:Date},
  dopublic:{type:Boolean},
  },
  {
    toObject: {virtuals: true} // 4
});

todoSchema.virtual("createAt")
  .get(function () {
    return getDate(this.createdAt);
  });
todoSchema.virtual("createTime")
  .get(function () {
    return getTime(this.createdAt)
  });
todoSchema.virtual("updatedDate")
  .get(function(){
    return getDate(this.updatedAt);
  });

todoSchema.virtual("updatedTime")
  .get(function(){
    return getTime(this.updatedAt);
  });

function getDate(dateObj){
  if(dateObj instanceof Date)
    return dateObj.getFullYear() + "-" + get2digits(dateObj.getMonth()+1)+ "-" + get2digits(dateObj.getDate());
}

function getTime(dateObj){
  if(dateObj instanceof Date)
    return get2digits(dateObj.getHours()) + ":" + get2digits(dateObj.getMinutes())+ ":" + get2digits(dateObj.getSeconds());
}

function get2digits(num){
  return ("0" + num).slice(-2);
}
var todo = mongoose.model('todo',todoSchema);
module.exports = todo;
