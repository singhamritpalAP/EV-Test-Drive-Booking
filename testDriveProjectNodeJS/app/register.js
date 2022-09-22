
let mongodb1 = require("mongodb");
let talentsprint1 = mongodb1.MongoClient;

let register  = require("express").Router().post("/", (req, res) => {
        talentsprint1.connect("mongodb://localhost:27017/crud", (err, db) => {
            if(err)
                throw err;
            else{
                db.collection("users").insertOne({
                    "name" : req.body.name, 
                    "emailId" : req.body.email,
                    "phone" : req.body.phone,
                    "address" : req.body.address, 
                    "password": req.body.password }, 
                    (err, result) => {

                    if (err) 
                        throw err;
                    res.send({message:"1 document inserted"});
                    db.close();
            });
        }
    });

});
module.exports = register;

