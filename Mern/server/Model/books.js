const mongoose =require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/mydb7");

var schema = mongoose.Schema({_id:String, bookName:String,authorName:String, price:Number,
    studentName:String, issueDate:Date
});
var Books= mongoose.model("book",schema);
module.exports=Books;