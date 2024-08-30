const mongoose =require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/mydb7");

var schema = mongoose.Schema({_id:String, name:String, deptName:String});
var Students= mongoose.model("student",schema);
module.exports=Students;