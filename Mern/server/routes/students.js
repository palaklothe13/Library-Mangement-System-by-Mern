const express=require("express");
const router=express.Router();
const Students=require("../Model/students");

router.get("/",async (req,res)=>{
var students=await Students.find();
res.json(students);
});
//http://localhost:4000/api/students/add?_id=101&name=abc&deptName=cse
    // router.get("/add",async (req,res)=>{
    //     try{
    //     var std=new Students(req.query);
    //     var result = await std.save();
    //     res.json(result);
    //     }
    //     catch(err){console.log(err);}
    //     });


        router.post("/",async (req,res)=>{
            try{
            var std=new Students(req.body); 
            var result = await std.save();
            res.json(result);
            }
            catch(err){console.log(err);}
            });
module.exports=router;