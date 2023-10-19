const {movieControllers} = require('../controller')
const { uploadMiddleware } = require('../middleware')
const router = require('express').Router()

router.get('/', movieControllers.getAllMovie)
router.get('/:id', movieControllers.getMovieById)
router.delete('/:id', movieControllers.deleteMovieById)
router.post('/', uploadMiddleware.single('file'), movieControllers.createMovie)

module.exports = router