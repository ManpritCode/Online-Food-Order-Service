
const moongoose = require('mongoose')


   

const OrderDetaile = new moongoose.Schema({
  items1:{
    type:String,
    required:true
  }

})

const order = moongoose.model('order', OrderDetaile)
module.exports = order;