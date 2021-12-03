const router = require('express').Router()
const controller = require('../controller/editController')

// router for appetizer
router.put('/update/users/:user_id', controller.editUserById);
router.put('/update/subject/:subject_id', controller.editSubjectById);
router.put('/update/topics/name/:topic_id', controller.editTopicsNameById);
router.put('/update/topics/material/:topic_id', controller.editTopicsMaterialsById);
router.put('/update/topics/video/:topic_id', controller.editTopicsVideosById);
router.put('/update/todo/:id', controller.editTodoById);
router.delete('/delete/users/:id', controller.deleteUsersById);
router.delete('/delete/subject/:subject_id', controller.deleteSubjectById);
router.delete('/delete/topics/:topic_id', controller.deleteTopicById);
router.delete('/delete/todo/:id', controller.deleteTodoById);

module.exports = router;