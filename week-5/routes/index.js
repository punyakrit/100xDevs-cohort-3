const express = require('express')

const app = express()

app.get('/sum',(req,res)=>{
    const a = req.query.a;
    const b = req.query.b;
    const sum = parseInt(a)+parseInt(b)
    res.json({
        sum:sum
    })
})

app.get('/sub',(req,res)=>{
    const a = req.query.a;
    const b = req.query.b;
    const sum = parseInt(a)- parseInt(b)
    res.json({
        sum:sum
    })
})

app.get('/mul',(req,res)=>{
    const a = req.query.a;
    const b = req.query.b;
    const sum = parseInt(a)*parseInt(b)
    res.json({
        sum:sum
    })
})

app.get('/div',(req,res)=>{
    const a = req.query.a;
    const b = req.query.b;
    const sum = parseInt(a)/parseInt(b)
    res.json({
        sum:sum
    })
})


app.listen(3000)