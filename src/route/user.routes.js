const {userControllers} = require('../controller')
const router = require('express').Router()

router.get('/', userControllers.getAllUsers)
router.get('/:id', userControllers.getUserById)
router.delete('/:id', userControllers.deleteUserById)
router.post('/', userControllers.createUser)
router.put('/:id', userControllers.updateUserById)

module.exports = router