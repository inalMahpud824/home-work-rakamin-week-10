const {movieControllers} = require('../controller')
const router = require('express').Router()

router.get('/', movieControllers.getAllMovie)
router.get('/:id', movieControllers.getMovieById)
router.delete('/:id', movieControllers.deleteMovieById)

module.exports = router