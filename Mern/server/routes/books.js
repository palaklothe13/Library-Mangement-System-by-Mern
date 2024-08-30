const express= require("express");
const router= express.Router();
const Books= require("../Model/books");

router.get("/", async (req,res)=>{
    var books = await Books.find();
        res.json(books)
   } );

   router.get("/", async (req,res)=>{
    var books = await Books.find({_id: req.params.id});
        res.json(books)
   } );

   router.delete("/:id", async (req,res)=>{
    var books = await Books.deleteOne({_id: req.params.id});
        res.json(books)
});

router.put("/:id", async (req,res)=>{
    var books = await Books.updateOne({_id: req.params.id});
        res.json(books)
});

router.post("/", async (req,res)=>{
    var books = new  Books(req.body);
    var result = await Books.save();
        res.json(books);
});
module.exports= router;




