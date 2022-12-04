const Trying = require("../model/number.model")

const numberController = {}


numberController.addNumber = async ( req , res , next ) => {
    const { trying } = req.body
    try {
        const num1 = await Trying.findOne({})
        if( num1 ) {
            await Trying.findOneAndUpdate({} , {
                trying : trying
            })
        } else {
            const newNumber = new Trying({
                trying 
            })
            const num = await newNumber.save()
            console.log(num)
        }
        res.redirect('/admin')
    } catch (error) {
        next( error )
    }
}


module.exports = numberController