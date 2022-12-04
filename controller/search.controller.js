const searchController = {}
const User = require('../model/user.model')
const Search = require('../model/search.model')
const Trying = require('../model/number.model')

searchController.search = async ( req , res , next ) => {
    const { search } = req.body
    const user_agent = req.headers['user-agent']
    // console.log(req.rawHeaders)
    // console.log(req.headers['user-agent'] , 'user agent')
    // console.log(req.headers['sec-ch-ua-platform'] , 'ip')
    // console.log(req.headers['user-agent']/3 , 'headers')
    // console.log(req.socket.remoteAddress)
    try {
        let find = false
        const searchs = await Search.find({})
        for (let i = 0 ; i < searchs.length ; i++) {
            if( search === searchs[i].word )
            {
                find = true
                let user = await User.findOne({ user_agent : user_agent })
                if( !user ) {
                    const newUser = new User({
                        user_agent : user_agent
                    })
                    const u = await newUser.save() 
                    user = u
                }
                const trying = await Trying.findOne({})
                let time = Math.abs(new Date().getTime() - user.timeStart.getTime())
                if(  time > 100000 ) {
                    await User.findOneAndUpdate({ user_agent : user_agent } , {
                        numberOfTry : 1
                    })
                    res.status(200)
                    res.redirect( 301 , `https://${searchs[i].domain}`)
                    // res.render('test' , {
                    //     word : searchs[i].word
                    // }) 
                } else {
                    if( user.numberOfTry <= trying.trying ) {
                
                        const update = await User.findOneAndUpdate({ user_agent : user_agent } , {
                            numberOfTry : user.numberOfTry + 1
                        })
                        res.status(200)
                        res.render('test' , {
                            word : searchs[i].word
                        }) 

                    } else {
                        res.status(300)
                        res.redirect(`/`) 
                    }
                }
                
                
            }
        }
        if ( !find ) res.redirect('/')
    } catch (error) {
        next(error)
    }
}


searchController.delete = async ( req , res , next ) => {
    const { searchId } = req.body
    let id = searchId
    try {
        const search = await Search.deleteOne({ _id : searchId })
        res.redirect('/admin')
    } catch (error) {
        next(error)
    }
}

module.exports = searchController