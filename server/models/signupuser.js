const moongose = require('mongoose')
const bcrypt = require("bcrypt")
const SignUpUserData = new moongose.Schema ({
  email:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  },
  confirmpassword:{
    type:String,
    required:true
  },
})
SignUpUserData.pre('save', async function(next){
  if(this.isModified('password')){
    this.password = await bcrypt.hash(this.password,12)
    this.confirmpassword=  await bcrypt.hash(this.confirmpassword,12)
  }
  next();
})
const signupuserdat =moongose.model('signupuserdata', SignUpUserData)
module.exports=signupuserdat;
