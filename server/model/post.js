/**
 * Created by sengwon on 2018-01-11.
 */
/*
 " 배열 값 삭제

 db.use.update({name:'Sue'},{$pull:{languages:'scala'}});    해당 도큐먼트의 배열에서 해당 값만 사라진다.

 배열 값 추가

 db.use.update({name:'Sue'},{$push:{languages:'scala'}});     해당 도큐먼트의 배열에 해당 값이 추가된다."
 */
/*export class Post{

  constructor(

    public id?: string,
  public title?: string,
  public body?: string,
  public categoryId?: string,
  public comments?: Comment[],

){


}

}
*/
var mongoose = require('mongoose');


var postSchema = mongoose.Schema({
    title:{type:String, required:true},
    body:{type:String},
    createdAt:{type:Date, default:Date.now}, // 2
    updatedAt:{type:Date},
    type:{type:String,default:'normal'}
  },
  {
    toObject: {virtuals: true} // 4
  });

postSchema.virtual("createAt")
  .get(function () {
    return getDate(this.createdAt);
  });
postSchema.virtual("createTime")
  .get(function () {
    return getTime(this.createdAt)
  });
postSchema.virtual("updatedDate")
  .get(function(){
    return getDate(this.updatedAt);
  });

postSchema.virtual("updatedTime")
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

var post = mongoose.model('post', postSchema);
module.exports = post;
