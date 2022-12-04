const express = require("express")

const searchController = require("../controller/search.controller")

const router = express.Router()


router.post('/search' , searchController.search )
router.post('/search/delete' , searchController.delete )


module.exports = router