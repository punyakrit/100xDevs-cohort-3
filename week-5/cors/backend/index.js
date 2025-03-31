const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())

app.use(express.json())

app.post('/',(req,res)=>{
    const a  = req.body.a
    res.json({
        message :"Hello" + a
    })
})


app.listen(3000)