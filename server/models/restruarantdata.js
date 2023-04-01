const mongoose = require('mongoose')


const RestuarantData = new mongoose.Schema({
    restuarantname:{
        type:"String",
        required:true
    },
    location:{
        type:"String",
        required:true
    },
    cityname:{
        type:"String",
        required:true
    },
    itemtype:{
        type:"String",
        required:true
    },
    phoneno:{
        type:"String",
        required:true
    },
    imageurl:{
        type:"String",
        required:true
    },
    item1name:{
        type:"string",
        require:true
    },
    item1description:{
        type:"string",
        require:true
    },
    item1price:{
        type:"string",
        require:true,
    },
    item1imageurl:{
        type:"string",
        require:true
    },
    item2name:{
        type:"string",
        require:true
    },
    item2description:{
        type:"string",
        require:true
    },
    item2price:{
        type:"string",
        require:true,
    },
    item2imageurl:{
        type:"string",
        require:true
    },
    item3name:{
        type:"string",
        require:true
    },
    item3description:{
        type:"string",
        require:true
    },
    item3price:{
        type:"string",
        require:true,
    },
    item3imageurl:{
        type:"string",
        require:true
    },
    item4name:{
        type:"string",
        require:true
    },
    item4description:{
        type:"string",
        require:true
    },
    item4price:{
        type:"string",
        require:true,
    },
    item4imageurl:{
        type:"string",
        require:true
    },
    item5name:{
        type:"string",
        require:true
    },
    item5description:{
        type:"string",
        require:true
    },
    item5price:{
        type:"string",
        require:true,
    },
    item5imageurl:{
        type:"string",
        require:true
    },
 



})

const Restdata = mongoose.model('Restdata',RestuarantData)
module.exports = Restdata ;