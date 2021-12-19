const jwt = require('jsonwebtoken')
const dayjs = require('dayjs')
const { check } = require('express-validator')

const { User } = require('../database/db')

const createToken = user => {
  const payload = {
    id: user.id,
    name: user.name,
    expire: dayjs().add(10, 'minutes').unix(),
  }

  return jwt.sign(payload, process.env.SECRET_KEY)
}

const checkToken = (req, res, next) => {
  if (!req.headers['authorization']) {
    return res.status(403).json({ error: 'Debes incluir la cabecera de Authorization' })
  }

  const token = req.headers['authorization']
  let data = {}
  try {
    data = jwt.verify(token, process.env.SECRET_KEY)
  } catch {
    return res.status(400).json({ error: 'El token no es correcto' })
  }

  if (dayjs().unix() > data.expire) {
    return res.status(400).json({ error: 'El token está caducado' })
  }

  req.userId = data.userId
  next()
}

const formValidationUser = [
  check('name', 'El campo "nombre" es obligatorio').exists(),
  check('role', 'El campo "rol" solo puede asignarse como "admin" o "user"').isIn([
    'admin',
    'user',
  ]),
  check('email', 'El campo "email" es obligatorio y debe tener un formato correcto')
    .exists()
    .isEmail()
    .custom(async value => {
      const user = await User.findOne({ where: { email: value } })
      if (user) {
        throw new Error('Este email ya está registrado')
      } else {
        return true
      }
    }),
  check('password', 'La contraseña debe tener mínimo 8 caracteres')
    .exists()
    .matches(/^([a-zA-Z0-9@*#]{8,15})$/),
]

module.exports = {
  createToken,
  checkToken,
  formValidationUser,
}
