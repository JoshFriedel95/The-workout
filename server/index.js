require('dotenv').config()
const express = require('express')
const session = require('express-session')
const massive = require('massive')
const cors = require('cors')
const path = require('path')
const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET, USER, PASSWORD} = process.env
const nodemailer = require('nodemailer')
const usersCtrl = require('./controllers/users')
const postsCtrl = require('./controllers/posts')
const nodeCtrl = require('./controllers/nodemailer')
const stripeCtrl = require('./controllers/stripe')
// const authMiddleware = require('./middleware/verifyUser')


const app = express()
app.use(express.json())
app.use(cors())
app.use(session({
    resave:false,
    saveUninitialized:true,
    secret:SESSION_SECRET,
    cookie:{maxAge: 1000 * 60 * 60 * 24}
}))
app.use(express.static(`${__dirname} + /../build`))

app.post('/api/auth/register', usersCtrl.register)
app.post('/api/auth/login', usersCtrl.login)
app.get('/api/auth/user', usersCtrl.getUser)
app.post('/api/auth/logout', usersCtrl.logout)
app.post('/api/contact', nodeCtrl.sendEmail)

app.get('/api/review', postsCtrl.readReview)
app.get('/api/reviews', postsCtrl.readReviews)


app.post('/api/plans', stripeCtrl.payment)
app.post('/api/review', postsCtrl.createReview)
app.delete('/api/reviews/:id', postsCtrl.deleteReview)
app.post('/api/reviews/:id', postsCtrl.editReview)




const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: USER,
        pass: PASSWORD
    }
});

massive({
    connectionString: CONNECTION_STRING,
    ssl:{
        rejectUnauthorized: false
    },
}).then(dbInstance => {
    app.set('db', dbInstance)
    app.set('transporter', transporter)
    console.log('DB Ready')
    app.listen(SERVER_PORT, () => console.log(`Running on ${SERVER_PORT}`))
})
app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'))
})