require('dotenv').config()

const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')

app.use(express.json())

app.post('/token',(req,res)=>{
    const refreshToken = req.body.token
    if(refreshToken == null) return res.sendStatus(401)
    
})

app.post('/login',(req,res)=>{
    const username = req.body.username
    const user = {name:accessToken}
    const accessToken = generateAccessToken(user)
    const refreshToken = jwt.sign(user,process.env.REFRESH_TOKEN_SECRET)
    // add the refresh token into the database
    res.json({accessToken : accessToken,refreshToken:refreshToken})
})



function generateAccessToken(user){
    return jwt.sign(user,process.env.ACCESS_TOKEN_SECRET,{expiresIn:'10m'})
}