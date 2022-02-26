const router = require('express').Router()

const usersApiRouter = require('./api/users.routes')
const heroesApiRouter = require('./api/heroes.routes')
const villainsApiRouter = require('./api/villains.routes')

router.use('/users', usersApiRouter)
router.use('/heroes', heroesApiRouter)
router.use('/villains', villainsApiRouter)

module.exports = router
