const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000
const bodyParser = require("body-parser")
const { User } = require("./models/user.js")
const config = require('./config/dev.js')
//application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
//application/json
app.get('/',(req,res)=>res.send("Hello World!"))

mongoose.connect(config,{
}).then(() => console.log('Mongodb Connected...'))
.catch(err => console.log(err))

app.post('/register', (req, res) => {
    const user = new User(req.body)
    user.save((err, userInfo) => {
        if(err) return res.json({success: false, err})
        return res.status(200),json({
            success: true
        })
    })
})



app.listen(port, () => console.log(`Example app listening on port ${port}!`))