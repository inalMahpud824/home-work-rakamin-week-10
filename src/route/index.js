const movieRoutes = require('./movie.routes.js')
const router = require('express').Router()

router.use('/movies', movieRoutes)

module.exports = router
