const router = require('express').Router()
const controller = require('../controller/todoController')

// router for appetizer
router.get('/', controller.getAllTodo);
router.get('/:id', controller.getTodoById);
router.post('/add/', controller.addTodo);

module.exports = router;