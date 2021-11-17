const router = require('express').Router()
const controller = require('../controller/editController')

// router for appetizer
router.put('/update/users/:id', controller.editUserById);
router.put('/update/subject/:id', controller.editSubjectById);
router.put('/update/topics/:id', controller.editTopicsById);
router.put('/update/todo/:id', controller.editTodoById);
router.delete('/delete/users/:id', controller.deleteUsersById);
router.delete('/delete/subject/:id', controller.deleteSubjectById);
router.delete('/delete/topics/:id', controller.deleteTopicById);
router.delete('/delete/todo/:id', controller.deleteTodoById);

module.exports = router;