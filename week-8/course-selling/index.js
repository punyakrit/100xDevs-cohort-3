const express = require('express')
const { userRouter} = require('./routes/userAuth')
const { courseRouter } = require('./routes/courses')
const { adminRouter} = require('./routes/adminRoute')
const { default: mongoose } = require('mongoose')
require('dotenv').config()
const app = express()

app.use(express.json())
app.use('/user', userRouter)
app.use('/admin', adminRouter)
app.use('/course' , courseRouter)

async function main(){
    await mongoose.connect(process.env.DB_URL)
    console.log(process.env.DB_URL)
    console.log("Connected")
    app.listen(3000)
}

main()

