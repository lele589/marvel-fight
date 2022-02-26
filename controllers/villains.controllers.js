const { Villain } = require('../database/db')

const getVillainsList = async (req, res) => {
  Villain.findAll()
    .then(villains => {
      res.status(200).json(villains)
    })
    .catch(error => {
      res.status(error.status).json({ error: error.message })
    })
}

const getVillainById = async (req, res) => {
  Villain.findOne({ where: { id: req.params.villainId } })
    .then(villain => {
      res.status(200).json(villain)
    })
    .catch(error => {
      res.status(error.status).json({ error: error.message })
    })
}

const createVillain = (req, res) => {
  Villain.create(req.body)
    .then(newVillain => {
      res.status(201).json({
        success: 'Se ha creado nuevo villano',
        user: newVillain,
      })
    })
    .catch(error => {
      res.status(error.status).json({ error: error.message })
    })
}

const editVillain = (req, res) => {
  Villain.update(req.body, {
    where: { id: req.params.villainId },
  })
    .then(updatedVillain => {
      res.status(200).json({
        success: 'Se ha editado el villano',
        user: updatedVillain,
      })
    })
    .catch(error => {
      res.status(error.status).json({ error: error.message })
    })
}

const deleteVillain = (req, res) => {
  Villain.destroy({
    where: { id: req.params.villainId },
  })
    .then(deletedVillain => {
      res.status(200).json({
        success: 'Se ha borrado el villano',
        user: deletedVillain,
      })
    })
    .catch(error => {
      res.status(error.status).json({ error: error.message })
    })
}

module.exports = {
  getVillainsList,
  getVillainById,
  createVillain,
  editVillain,
  deleteVillain,
}
