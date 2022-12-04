const mongoose = require('mongoose')

const { Schema } = mongoose

const searchSchema = Schema({
    word: {
        type: String,
        require: true
    } ,
    domain: {
        type: String,
        require: true
    } 
})


const Search = mongoose.model("search" , searchSchema)

module.exports = Search