const express = require('express')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const cors = require('cors')

require('dotenv').config()

const apiRouter = require('./routes/api.routes')

const app = express()

require('./database/db')

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/api', apiRouter)

app.use((req, res) => {
  res.status(404).send('404: Page not found')
})

module.exports = app
