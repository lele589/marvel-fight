const router = require('express').Router()
const { formValidationUser } = require('../../middleware/users.middleware')
const usersControllers = require('../../controllers/users.controllers')

// POST
// # route => /api/users/register
router.post('/register', formValidationUser, usersControllers.registerUser)

// # route => /api/users/login
router.post('/login', usersControllers.loginUser)

module.exports = router
