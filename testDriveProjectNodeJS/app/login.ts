let mongodb2 = require("mongodb");
let talentsprint2 = mongodb2.MongoClient;  

let login  = require("express").Router().get("/:email/:password",(req,res)=>{
        talentsprint2.connect("mongodb://localhost:27017/crud",(err,db)=>{
            if(err){
                throw err;
            }
            else{
                db.collection("employee").findOne({"email":req.params.email,"password":req.params.password}, 
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

