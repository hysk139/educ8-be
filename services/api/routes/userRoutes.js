const router = require('express').Router()
const controller = require('../controller/userController')

// router for appetizer
router.get('/', controller.getAllUser);
router.get('/:id', controller.getUserById);
router.post('/add/', controller.addUser);

module.exports = router;
