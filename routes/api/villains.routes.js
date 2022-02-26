const router = require('express').Router()
const villainsController = require('../../controllers/villains.controllers')

// GET
// # route => /api/villains
router.get('/', villainsController.getVillainsList)

// # route => /api/villains/:villainId
router.get('/:villainId', villainsController.getVillainById)

// POST
// # route => /api/villains
router.post('/', villainsController.createVillain)

// PUT
// # route => /api/villains/:villainId
router.put('/:villainId', villainsController.editVillain)

// DELETE
// # route => /api/villains/:villainId
router.delete('/:villainId', villainsController.deleteVillain)

module.exports = router
