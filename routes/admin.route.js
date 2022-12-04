const express = require('express')
const adminController = require('../controller/admin.controller')

const router = express.Router()

router.post('/admin/addword' , adminController.addSearchWords)


module.exports = router