const express = require('express')
const { userRouter} = require('./routes/userAuth')
const { courseRouter } = require('./routes/courses')
const app = express()


app.use('/user', userRouter)
app.use('/course' , courseRouter)

app.listen(3000)
