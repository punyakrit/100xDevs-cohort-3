const jwt = require('jsonwebtoken')
require('dotenv').config()

function userAuth(req,res,next){
    const token = req.headers.token
    if(!token){
        res.status(403).json({
            message : "Token not found"
        })
        return
    }
    try{

        const decodedUserId = jwt.verify(token , process.env.JWT_SECRET)
        if(!decodedUserId){
            res.status(403).json({
                message:"Invalid login"
            })
            return
        }
        req.userId = decodedUserId.id
        next()
    }catch{
        res.json({
            message:"Something went wrong"
        })
        return
    }
}

module.exports = {
    userAuth
}