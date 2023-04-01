
const express = require("express")
const router = express.Router();
const SignUpUserData = require('../models/signupuser')
const bcrypt = require('bcrypt')
const order = require('../models/Orders')
router.use(express.json());


router.post('/Signupuser', async (req, res) => {
    const { email, password, confirmpassword } = req.body
    if (!email || !password || !confirmpassword) {
        return res.status(422).json({ error: "plz fill data" })
    }
    try {
        const userExist = await SignUpUserData.findOne({ email: email })
        if (userExist) {
            return res.status(422).json({ error: 'you are allredy Register' })
        } else if (password != confirmpassword) {
            return res.status(422).json({ error: 'password & confirmpassword not be same' })
        }
        else {
            const signupUser = new SignUpUserData({
                email, password, confirmpassword
            })
            const savedata = await signupUser.save();
            if (savedata) {
                res.status(201).json({ message: "Your accont create succefully" })
            } else {
                res.status(500).json({ err: 'failed to user register' })
            }
            try {
                const ismatch = await bcrypt.compare(password, SignUpUserData.password);
                if (ismatch) {
                    console.log("sucees")
                }
            } catch (error) {
                console.log(error)
            }
        }
    } catch (error) {
        console.log(error)
    }
}
)
router.post('/login', async(req,res)=>{
    router.use(express.json());
    try {
        const { email, password } = req.body;
        if (!email || !password) {
           return res.status(400).json({ error: "plz filled the data" })
        }
        const userlogin = await SignUpUserData.findOne({ email: email })
        if (userlogin) {
            const isMatch = await bcrypt.compare(password,userlogin.password);
            if (!isMatch) {
                res.status(400).json({ error: "invailed crediential" })
             } else {
                res.json({ message: "user login successfuly" })
             }
        }else {
            res.status(400).json({ error: "invailed credientials" })
         }
    }catch(error){
        console.log(error)
    }})



   router.post('/orders', async(req,res)=>{
    try{  




        const signupUser = new order({
            items1
        })
        const savedata = await signupUser.save();
    
    console.log(savedata)
       const savadata1 = await orderf.save();
       if(savadata1){
        console.log("save orders")
       }else{
        console.log("not save orders")
       }

    }catch(error){
        console.log(error)
    }


   })
   
router.get('/userdata',async (req,res)=>{
    try{ 
        
        const userdata = await SignUpUserData.find({});

     
        res.send({status:"ok",data:userdata})
     //   console.log(userdata)
      
    }catch(err){
        console.log(err) 
    }
})

module.exports = router;



