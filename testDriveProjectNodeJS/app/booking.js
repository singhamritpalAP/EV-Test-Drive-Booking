
let mongodb1 = require("mongodb");
let talentsprint1 = mongodb1.MongoClient;

let register  = require("express").Router().post("/", (req, res) => {
        talentsprint1.connect("mongodb://localhost:27017/crud", (err, db) => {
            if(err)
                throw err;
            else{
                db.collection("bookings").insertOne({
                    "name" : req.body.name, 
                    "phone" : req.body.phone,
                    "address" : req.body.address, 
                    "email" : req.body.email, 
                    "car": req.body.car,
                    "date": req.body.date,
                    "time": req.body.time }, 
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