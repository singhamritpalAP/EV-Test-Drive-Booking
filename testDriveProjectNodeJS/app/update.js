let mongodb = require("mongodb");
let talentsprint = mongodb.MongoClient;

let update  = require("express").Router().put("/",(req,res)=>{

    console.log(req.body.empName);
    console.log(req.body.salary);
    console.log(req.body.email);

        talentsprint.connect("mongodb://localhost:27017/crud",(err,db)=>
        {
            if(err)
                throw err;
            else{                
                var newvalues = { $set: {
                    // "empId"   : req.body.empId, 
                    "name" : req.body.name, 
                    "emailId" : req.body.emailId,
                    "phone" : req.body.phone,
                    "address" : req.body.address, 
                    "password": req.body.password } };
                db.collection("users").updateOne({emailId:req.body.emailId}, newvalues, (err, result)=> {
                        if (err) 
                            throw err;
                        else                            
                            res.send({message:"1 document updated: " + result});                        
                        db.close();
                      });                      
                    }
                });
              });

module.exports = update;

