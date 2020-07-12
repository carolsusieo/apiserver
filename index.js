
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv');
dotenv.config();

const db = require('./db')
db.connectToDB(process.env);]
const contactRouter = require('./routes/contact-router')
const signupRouter = require('./routes/signup-router')
const easyRouter = require('./routes/easy-router')

const app = express()


app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())]
]
]
app.use(process.env.REACT_APP_API_URL,signupRouter)
app.use('/api/contact', contactRouter)
app.use('/api/easy', easyRouter)

app.listen(process.env.REACT_APP_PORT,
  () => console.log(`apiServer running on port ${process.env.REACT_APP_PORT}`))
