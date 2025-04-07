const express = require('express')
const {userAuth} = require('../middleware/user')
const { userModel, courseModel, purchaseModel } = require('../db/db')
const courseRouter = express.Router()

courseRouter.get('/all',userAuth ,async (req,res)=>{
    const allCourse = await courseModel.find({})
    res.json({
        allCourse
    })
})

courseRouter.post('/purchase',userAuth, async(req,res)=>{
    const {courseId} = req.body
    const userId = req.userId
    const insertData = await purchaseModel.create({
        courseId : courseId,
        userId : userId
    })
    res.json({
        message:"Course Bought"
    })
})

module.exports ={
    courseRouter
}

