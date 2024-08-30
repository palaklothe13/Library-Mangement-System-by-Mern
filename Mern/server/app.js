var express=require("express");
var app=express();
app.listen(4000);

const cors = require("cors");
app.use(cors());
const bp = require("body-parser");
app.use(bp.urlencoded({extended:false}));
app.use(bp.json());


const bookRouter= require("./routes/books");
const studentRouter= require("./routes/students");
const issueRouter= require("./routes/issueReturn");

app.use("/api/books", bookRouter);
app.use("/api/students", studentRouter);
app.use("/api/issue", issueRouter);
