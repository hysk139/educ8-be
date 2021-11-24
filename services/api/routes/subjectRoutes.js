const router = require('express').Router()
const controller = require('../controller/subjectController')

// router for appetizer
router.get('/', controller.getAllSubject);
router.get('/:user_id/', controller.getSubjectByUserId);
router.get('/:user_id/:id', controller.getSubjectById);
router.post('/add/', controller.addSubject);

module.exports = router;