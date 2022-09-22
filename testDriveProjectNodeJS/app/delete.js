let mongodb = require("mongodb");
let talentsprint = mongodb.MongoClient;

let del  = require("express").Router().delete("/:emailId",(req,res)=>{  
    talentsprint.connect("mongodb://localhost:27017/crud",(err,db)=> {
            if(err)
                throw err;
            else{
                db.collection("users").deleteOne({emailId:req.params.emailId}, (err, result)=> {                      
                    if (err) 
                            throw err;
                        else
                            res.send({message:"1 document deleted"});
                        db.close();
                      });
                    }
                });
                });

module.exports = del;









