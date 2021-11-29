const router = require('express').Router()
const controller = require('../controller/todoController')

// router for appetizer
router.get('/', controller.getAllTodo);
router.get('/:topic_id', controller.getAllTodoByTopicId);
router.get('/:topic_id/:id', controller.getTodoById);
router.post('/add/', controller.addTodo);

module.exports = router;