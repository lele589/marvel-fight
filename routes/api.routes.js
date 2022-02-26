const router = require('express').Router()

const usersApiRouter = require('./api/users.routes')
const heroesApiRouter = require('./api/heroes.router')

router.use('/users', usersApiRouter)
router.use('/heroes', heroesApiRouter)

module.exports = router
