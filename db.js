const mongoose = require( "mongoose" )

// const MONGODB_URL = 'mongodb+srv://omer5423:0918144099@cluster0.5uomasw.mongodb.net/?retryWrites=true&w=majority'
const MONGODB_URL = 'mongodb://localhost:27017/project1'
module.exports = async () =>
{
    const connectionParams = {
        // user: 'omer5423',
        // pass: '0918144099',
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
    
    try {
        await mongoose.connect( process.env.DB_URL , connectionParams )
        console.log('connected to database successfully')
    } catch (error) {
        console.log(error)
    }
}
