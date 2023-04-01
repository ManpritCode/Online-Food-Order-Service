const moongoose = require('mongoose')

const DB ="mongodb+srv://Manpreet:Mssingh8182.@cluster0.x1viwpy.mongodb.net/RestuarantData?retryWrites=true&w=majority"

const PORT = "3000"
moongoose.connect(DB).then(()=>{
    console.log('connection successful')
}).catch((err) => console.log( "no 2connection"))