const mongoose = require('mongoose')

const { Schema } = mongoose

const userSchema = Schema({
    user_agent: {
        type: String,
        require: true
    } , 
    numberOfTry: {
        type: Number,
        default: 1
    } ,
    timeStart : {
        type: Date ,
        default : new Date()
    }
})


const User = mongoose.model( "user" , userSchema )

module.exports = User