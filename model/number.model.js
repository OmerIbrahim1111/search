const mongoose = require('mongoose')

const { Schema } = mongoose

const numberSchema = Schema({
    trying: {
        type: Number,
        require: true
    } 
})


const Trying = mongoose.model( "number" , numberSchema )

module.exports = Trying