const express = require('express')
const numberController = require('../controller/number.controller')

const router = express.Router()


router.post('/number' , numberController.addNumber)



module.exports = router