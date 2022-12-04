const express = require('express')
const path = require("path")
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const session = require('express-session')

require('dotenv').config()
const User = require('./model/user.model')
const Search = require('./model/search.model')

const userRoute = require('./routes/user.route')
const searchRoute = require('./routes/search.route')
const adminRoute = require('./routes/admin.route')
const numberRoute = require('./routes/number.route')
const Trying = require('./model/number.model')
const db = require('./db')
const app = express()




// ------ DATABASE CONNECTION ------ //

db()


// mongoose.connect('mongodb+srv://omer5423:0918144099@cluster0.5uomasw.mongodb.net/?retryWrites=true&w=majority' , {})
// // mongoose.connect('mongodb://localhost:27017/project1' , {})
// mongoose.connection.on('connected' , () => console.log('database connected'))

// ------ DATABASE CONNECTION ------ //


// -------------------- //
//   MIDDELWAERS
// -------------------- //


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extends: true }))


// -------------------- //
//   MIDDELWAERS
// -------------------- //


app.set('view engine' , 'ejs')
app.set('views' , 'views')

app.use(express.static(path.join( __dirname , 'static')))



// ------ ADMIN ROUTES ------ //


app.get('/admin' , async (req , res ,next ) => {
    
    try {
        const searches = await Search.find({})
        const trying = await Trying.find({})
        res.render('admin' , {
            searches , 
            trying : trying[0].trying
        })
    } catch (error) {
        next(error)
    }
})




// ------ ADMIN ROUTES ------ //


// ------ ROUTES -------- //

app.use('/' , userRoute )
app.use('/' , searchRoute )
app.use('/' , adminRoute )
app.use('/' , numberRoute )



app.get('/' , (req , res ,next ) => {
    res.render('index' , {
        word: 'test'
    })
})

app.get('/test' , (req , res ,next ) => {
    res.sendFile(path.join( __dirname , 'views' , 'test.html'))
})



// const refresh = async () => {
//     try {
//         await User.deleteMany({})
//         console.log('deleted all user')
//     } catch (error) {
//         console.log(error)
//     }
// }
// setInterval  ( function () {
//     refresh()
// } , 100000 )

const port = process.env.PORT || 5001
app.listen( port , () => console.log(`server is working on port ${port}`))