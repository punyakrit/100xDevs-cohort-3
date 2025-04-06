const express = require('express')

const courseRouter = express.Router()

courseRouter.get('/all',(req,res)=>{
    res.json({
        courses : []
    })
})

courseRouter.post('/purchase',(req,res)=>{
    
})

module.exports ={
    courseRouter
}

