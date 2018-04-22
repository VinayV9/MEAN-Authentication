const mongoose = require('mongoose')
const config = require('./config')

mongoose.connect(config.mlab, (err)=>{

    if(err) {
        throw err
    }else{
        console.log("mongodb connected:D")
    }   
    
})

module.exports = mongoose
