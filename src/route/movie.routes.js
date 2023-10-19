const {movieControllers} = require('../controller')
const router = require('express').Router()

router.get('/', movieControllers.getAllMovie)
router.get('/:id', movieControllers.getMovieById)

module.exports = router