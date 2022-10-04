const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000

app.get('/',(req,res)=>res.send("Hello World!"))

mongoose.connect('mongodb+srv://tmfrl040622:k48989955@cluster0.4s8m2sd.mongodb.net/test',{
}).then(() => console.log('Mongodb Connected...'))
.catch(err => console.log(err))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))