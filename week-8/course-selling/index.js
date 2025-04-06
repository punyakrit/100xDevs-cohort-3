const express = require('express')
const { userRouter} = require('./routes/userAuth')
const { courseRouter } = require('./routes/courses')
const { adminRouter} = require('./routes/adminRoute')
const app = express()


app.use('/user', userRouter)
app.use('/admin', adminRouter)
app.use('/course' , courseRouter)

app.listen(3000)

