const movieRoutes = require('./movie.routes.js')
const userRoutes = require('./user.routes.js')
const router = require('express').Router()

router.use('/movies', movieRoutes)
router.use('/users', userRoutes)
module.exports = router
