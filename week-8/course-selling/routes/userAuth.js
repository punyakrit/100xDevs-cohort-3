const express = require('express')
const { userModel, purchaseModel } = require('../db/db')
const userRouter = express.Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
userRouter.use(express.json())
require('dotenv').config()
const {userAuth} = require('../middleware/user')
userRouter.post('/signup', async (req,res)=>{
    const email = req.body.email
    const name = req.body.name
    const password = req.body.password

    const emailExists = await userModel.findOne({email})
    if(emailExists){
        res.status(403).json({
            message:"User already Exists use Different Email"
        })
        return
    }else{
        const hashPassword = await  bcrypt.hash(password , 10)
        await userModel.create({
            email,
            name,
            password : hashPassword
        })
        res.json({
            message : "User Created"
        })
    }

 })

userRouter.post('/signin', async (req,res)=>{
    const email = req.body.email
    const password = req.body.password

    const user = await userModel.findOne({ email })
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

userRouter.get('/',userAuth,async (req,res)=>{
    const userId = req.userId
    console.log(userId)
    const user = await userModel.findOne({
        _id: userId
    })
    console.log(user)
    res.json({
        name: user.name,
        email : user.email
    })
})

userRouter.get('/purchases',userAuth, async (req,res)=>{
    const userPurchase = await purchaseModel.find({
        userId : req.userId
    })
    res.json({
        userPurchase
    })
})

module.exports = {
    userRouter
}