const Search = require("../model/search.model")

const adminController = {}

adminController.addSearchWords = async ( req , res , next ) => {
    const { word , domain } = req.body
    try {
        const newWord = new Search({
            word  ,
            domain
        })
        const w = await newWord.save()
        res.redirect('/admin')
    } catch (error) {
        next(error)
    }
}



module.exports = adminController