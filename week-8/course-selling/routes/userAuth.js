const express = require('express')
const { userModel } = require('../db/db')
const userRouter = express.Router()

userRouter.post('/signup', (req,res)=>{

})

userRouter.post('/signin', (req,res)=>{
    
})

userRouter.get('/purchases', (req,res)=>{
    
})

module.exports = {
    userRouter
}