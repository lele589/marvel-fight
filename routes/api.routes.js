const router = require('express').Router()

const usersApiRouter = require('./api/users.routes')

router.use('/users', usersApiRouter)

module.exports = router
