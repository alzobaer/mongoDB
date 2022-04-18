const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const { default: mongoose } = require("mongoose");
const catSchema = require("../schemas/catSchema")
const catsRouter = express.Router();

catsRouter.use(express.json());
const Cat = new mongoose.model("Cat", catSchema);

//Post a CatSchema
catsRouter.post("/", (req, res) => {
    const newCat = new Cat(req.body);
    newCat.save((err) => {
        if(err){
            res.send(err);
        }
        else{
            res.send("Inserted Successfully");
        }
    })
})
//post many schema
catsRouter.post("/all", (req, res) => {
    Cat.insertMany(req.body, (err) => {
        if(err){
            res.send(err);
        }else{
            res.send("Cats were inserted successfully");
        }
    })
}) 

//Get a schema by id
catsRouter.get("/:id", (req, res) => {
    Cat.find({_id: req.params.id}, (err, data) => {
        if(err){
            res.send(err);
        }else{
            res.send("Get Request is found\n" + data);
        }
    })
})

//PUT a schema by id
catsRouter.put("/:id", (req, res) => {
    Cat.updateOne({_id: req.params.id}, {
        $set: {
            name: "Big Cat"
        }
    }, (err) => {
        if(err){
            res.send(err);
        }else{
            res.send("Updated Successfully");
        }
    })
})

//Delete a schema
catsRouter.delete("/:id", (req, res) => {
    Cat.deleteOne({_id: req.params.id}, (err) => {
        if(err){
            res.send(err);
        }
        else{
            res.send("Deleted Successfully");
        }
    })
})



module.exports = catsRouter;