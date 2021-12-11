const Sequelize = require('sequelize')

const UserModel = require('../models/users')
const HeroModel = require('../models/heroes')
const VillainModel = require('../models/villains')
const AspectModel = require('../models/aspects')
const EncounterModel = require('../models/encounters')
const GameModeModel = require('../models/gameMode')
const FightModel = require('../models/fighting')

const db = new Sequelize(
  process.env.MYSQL_DATABASE,
  process.env.MYSQL_USER,
  process.env.MYSQL_PASSWORD,
  {
    host: '127.0.0.1',
    dialect: 'mysql',
  },
)

const User = UserModel(db, Sequelize)
const Hero = HeroModel(db, Sequelize)
const Villain = VillainModel(db, Sequelize)
const Aspect = AspectModel(db, Sequelize)
const Encounter = EncounterModel(db, Sequelize)
const GameMode = GameModeModel(db, Sequelize)
const Fight = FightModel(db, Sequelize)

// Comentado porque se sincronizan las tablas a través de migraciones, si se quiere sincronizar con 'npm run start', descomentar esto
/* db.sync({ force: false }).then(() => {
  console.log('TABLAS SINCRONIZADAS')
}) */

module.exports = {
  User,
  Hero,
  Villain,
  Aspect,
  Encounter,
  GameMode,
  Fight,
}
