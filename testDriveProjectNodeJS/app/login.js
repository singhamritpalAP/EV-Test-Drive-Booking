
let mongodb = require("mongodb");
let talentsprint = mongodb.MongoClient;  

let login  = require("express").Router().get("/:emailId/:password",(req,res)=>{
        talentsprint.connect("mongodb://localhost:27017/crud",(err,db)=>{
            if(err){
                throw err;
            }
            else{
                db.collection("users").findOne({"emailId":req.params.emailId,"password":req.params.password}, 
                (err, result) => {
                    if (err) {
                        throw err;
                    }
                    else{
                            res.send(result);                    
                        }
                });
            }
        });
});
module.exports = login;




