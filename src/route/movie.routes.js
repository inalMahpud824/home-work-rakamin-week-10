const {movieControllers} = require('../controller')
const router = require('express').Router()

router.get('/', movieControllers.getAllMovie)

module.exports = router