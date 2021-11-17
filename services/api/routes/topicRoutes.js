const router = require('express').Router()
const controller = require('../controller/topicController')

// router for appetizer
router.get('/', controller.getAllTopic);
router.get('/:id', controller.getTopicById);
router.post('/add/', controller.addTopic);

module.exports = router;