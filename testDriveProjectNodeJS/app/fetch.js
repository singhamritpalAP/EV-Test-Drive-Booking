var express = require('express');
let bodyParser = require("body-parser");

let mongodb = require("mongodb");
let mongodbClient = mongodb.MongoClient;

let fetch = express.Router().get("/", (req, res) => {
    mongodbClient.connect("mongodb://localhost:27017/crud", (err, db) => {        
        if(err) {
            throw err;
        } else {
            db.collection("users").find({}).toArray((err, emp) => {
                if(err) {
                    throw err;
                } else {
                    if(emp.length > 0) {
                        res.send(emp);
                    } else {
                        res.send({message: "No Record(s) Found!!!"});
                    }
                }
            });
        }
    });
});

module.exports = fetch;