const router = require('express').Router()
const heroesController = require('../../controllers/heroes.controllers')

// GET
// # route => /api/heroes
router.get('/', heroesController.getHeroesList)

// # route => /api/heroes/:heroId
router.get('/:heroId', heroesController.getHeroById)

// POST
// # route => /api/heroes
router.post('/', heroesController.createHero)

// PUT
// # route => /api/heroes/:heroId
router.put('/:heroId', heroesController.editHero)

// DELETE
// # route => /api/heroes/:heroId
router.delete('/:heroId', heroesController.deleteHero)

module.exports = router
