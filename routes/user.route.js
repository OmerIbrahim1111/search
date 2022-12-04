const express = require("express")
const userController = require("../controller/user.controller")

const router = express.Router()


router.post('/user/addUser' , userController.addUser )



module.exports = router