const bcrypt = require('bcryptjs')
const { validationResult } = require('express-validator')

const { User } = require('../database/db')
const { createToken } = require('../middleware/users.middleware')

const registerUser = (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(422).json({ error: errors.array() })
  }

  req.body.password = bcrypt.hashSync(req.body.password, 10)
  req.body.role = req.body.role || 'user'

  User.create(req.body)
    .then(newUser => {
      res.status(200).json({
        success: 'Se ha creado el usuario',
        user: newUser,
      })
    })
    .catch(() => {
      res.status(400).json({ error: 'Se ha producido un error en el registro' })
    })
}

const loginUser = (req, res) => {
  const { email, password } = req.body

  if (email && password) {
    User.findOne({ where: { email } })
      .then(user => {
        if (user) {
          const samePass = bcrypt.compareSync(password, user.password)
          if (samePass) {
            res.cookie('name', user.name)
            res.status(200).json({
              success: 'Acceso correcto',
              user,
              token: createToken(user),
            })
          } else {
            res.status(401).json({ error: 'El email/password es incorrecto' })
          }
        } else {
          res.status(401).json({ error: 'El email/password es incorrecto' })
        }
      })
      .catch(error => {
        res.status(400).json({ error: error.message })
      })
  } else {
    res.status(400).json({ error: 'Debes rellenar los campos' })
  }
}

module.exports = {
  registerUser,
  loginUser,
}
