const { Hero } = require('../database/db')

const getHeroesList = async (req, res) => {
  Hero.findAll()
    .then(heroes => {
      res.status(200).json(heroes)
    })
    .catch(error => {
      res.status(error.status).json({ error: error.message })
    })
}

const getHeroById = async (req, res) => {
  Hero.findOne({ where: { id: req.params.heroId } })
    .then(hero => {
      res.status(200).json(hero)
    })
    .catch(error => {
      res.status(error.status).json({ error: error.message })
    })
}

const createHero = (req, res) => {
  Hero.create(req.body)
    .then(newHero => {
      res.status(201).json({
        success: 'Se ha creado nuevo héroe',
        user: newHero,
      })
    })
    .catch(error => {
      res.status(error.status).json({ error: error.message })
    })
}

const editHero = (req, res) => {
  Hero.update(req.body, {
    where: { id: req.params.heroId },
  })
    .then(updatedHero => {
      res.status(200).json({
        success: 'Se ha editado el héroe',
        user: updatedHero,
      })
    })
    .catch(error => {
      res.status(error.status).json({ error: error.message })
    })
}

const deleteHero = (req, res) => {
  Hero.destroy({
    where: { id: req.params.heroId },
  })
    .then(deletedHero => {
      res.status(200).json({
        success: 'Se ha borrado el héroe',
        user: deletedHero,
      })
    })
    .catch(error => {
      res.status(error.status).json({ error: error.message })
    })
}

module.exports = {
  getHeroesList,
  getHeroById,
  createHero,
  editHero,
  deleteHero,
}
