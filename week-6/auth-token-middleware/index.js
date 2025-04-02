const express = require('express')
const jwt = require('jsonwebtoken')
const JWT_SECRET = "dmnjejdejd"

const app = express()
app.use(express.json())

const users= []

function authMiddleware(req,res,next){
    const token = req.headers.token
    if(!token){
        res.status(404).json({
            message : "Token not found"
        })
    }
    const decoded = jwt.verify(token, JWT_SECRET)
    const email = decoded.email

    const user = users.find((u) => u.email == email)
    if(user){
        req.user = user
        next()
    }else{
        res.status(403).json({
            message : "Wrong creds"
        })
    }
}

app.post('/signup',(req,res)=>{
    const email = req.body.email
    const password = req.body.password
    const emailExists = users.find((u)=> u.email === email)
    console.log(emailExists)
    if(!emailExists){
        users.push({
            email: email,
            password: password
        })
        res.json({
            message : "You are signed up"
        })
        return
    }else{
        res.status(403).json({
            message: "User Already exists"
        })
        return
    }
})


app.post('/signin', (req,res)=>{
    const email = req.body.email
    const password = req.body.password
    const emailExists = users.find((u)=>u.email ===email && u.password === password)
    if(emailExists){
        const token = jwt.sign({email} , JWT_SECRET)
        res.json({
            token : token
        })
    }else{
        res.status(403).json({
            message : "Invalid creds"
        })
        return
    }
})

app.get('/me',authMiddleware , (req,res)=>{
    const user = req.user

    res.json({
        user
    })
})

app.listen(3000)