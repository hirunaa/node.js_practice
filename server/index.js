const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 5000
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const { auth } = require('./middleware/auth.js')
const { User } = require("./models/user.js")
const config = require('./config/dev.js')
//application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cookieParser())
//application/json
app.get('/', (req, res) => res.send("Hello World!"))

mongoose.connect('mongodb+srv://tmfrl040622:k48989955@cluster0.4s8m2sd.mongodb.net/test', {
}).then(() => console.log('Mongodb Connected...'))
    .catch(err => console.log(err))
app.get('/api/hello', (req, res) => {
    res.send("ㅎㅇ")
})
app.post('/api/users/register', (req, res) => {
    const user = new User(req.body)
    //console.log(req.body)
    user.save((err, userInfo) => {
        if (err) {
            return res.json({ success: false, err })
        }
        else {
            return res.status(200).json({
                success: true
            })
        }
    })
})

app.post('/api/users/login', (req, res) => {
    User.findOne({ email: req.body.email }, (err, user) => {
        if (!user) {
            return res.json({
                loginSuccess: false,
                message: "제공된 이메일에 해당하는 유저가 없습니다."
            })
        }
        else{
            user.comparePassword(req.body.password, (err, isMatch) => {
                if (!isMatch)
                    return res.json({ loginSuccess: false, message: "비밀번호가 틀렸습니다." });
                user.generateToken((err, user) => {
                    if (err) return res.status(400).send(err);
                    return res.cookie("x_auth", user.token)
                        .status(200)
                        .json({ loginSuccess: true, userId: user._id })
                })


            })
        }

    })

})

app.get('/api/users/auth', auth, (req, res) => {
    res.status(200).json({
        _id: req.user._id,
        isAdmin: req.user.role === 0 ? false : true,
        isAuth: true,
        email: req.user.email,
        password: req.user.password,
        name: req.user.name,
        lastname: req.user.lastname,
        role: req.user.role,
        image: req.user.image
    })
})
app.get('/api/users/logout', auth, (req, res) => {
    User.findOneAndUpdate({ _id: req.user._id }, { token: "" }, (err, user) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).send({ success: true })
    })
})



app.listen(port, () => console.log(`Example app listening on port ${port}!`))