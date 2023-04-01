const express = require("express")
const app = express();
require("./db/connection");
const rtdata= require('./models/restruarantdata')
const myrouter = require('./Router/Signupuserdata')

app.get('/alldata',async (req,res)=>{
    try{ 
        
        const alldata = await rtdata.find({});

     
        res.send({status:"ok",data:alldata})
       // console.log(alldata)
      
    }catch(err){
        console.log(err) 
    }
})




app.listen(3000,()=>{
    console.log("app listen on port no 3000")
})



 
  
     



app.use(myrouter);