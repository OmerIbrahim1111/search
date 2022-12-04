const User = require("../model/user.model")

const userController = {}

userController.addUser = async ( req , res , next ) => {
    const { name , password } = req.body
    try {
        const newUser = new User({
            name ,
            password
        })
        const user = await newUser.save()
        console.log(user)
        res.redirect('/')
    } catch (error) {
        next(error)
    }
}


module.exports = userController