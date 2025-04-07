const express= require('express')
const {adminAuth} = require('../middleware/admin')
const { adminModel, courseModel } = require('../db/db')
const adminRouter = express.Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

adminRouter.post('/signup', async (req,res)=>{
    const email = req.body.email
    const name = req.body.name
    const password = req.body.password

    const emailExists = await adminModel.findOne({email})
    if(emailExists){
        res.status(403).json({
            message:"User already Exists use Different Email"
        })
        return
    }else{
        const hashPassword = await  bcrypt.hash(password , 10)
        await adminModel.create({
            email,
            name,
            password : hashPassword
        })
        res.json({
            message : "Admin User Created"
        })
    }
})

adminRouter.post('/signin',async (req,res)=>{
    const email = req.body.email
    const password = req.body.password

    const user = await adminModel.findOne({ email })
    if (!user) {
        return res.status(403).json({
            message: "Invalid Creds"
        })
    }
    const isPasswordCorrect = await bcrypt.compare(password, user.password)
    if (!isPasswordCorrect) {
        return res.status(403).json({
            message: "Invalid Creds"
        })
    }

    const token = jwt.sign({id : user._id} , process.env.JWT_SECRET)
    
    res.json({
        token : token
    })
})

adminRouter.post('/course',adminAuth, async(req,res)=>{
    const userId = req.userId
    const {title,description , price, imageUrl} = req.body
    const addData = await courseModel.create({
        title: title,
        description: description,
        price: price,
        imageUrl: imageUrl,
        creatorId: userId
    })
    res.json({
        message:"Course Added"
    })

})

adminRouter.get('/course/bulk',adminAuth, async (req,res)=>{
    const userId = req.userId
    const allCourse = await courseModel.find({creatorId : userId})    
    res.json({
        allCourse
    })
})


module.exports = {
    adminRouter
}