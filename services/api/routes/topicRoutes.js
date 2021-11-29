const router = require('express').Router()
const controller = require('../controller/topicController')

// router for appetizer
router.get('/', controller.getAllTopic);
router.get('/:subject_id', controller.getAllTopicBySubjectId);
router.get('/:subject_id/:id', controller.getTopicById);
router.post('/add/', controller.addTopic);

module.exports = router;