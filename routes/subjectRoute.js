var express = require('express');
var router = express.Router();

var subjectController = require("../controllers/subjectController");

router.get('/get-subjects', subjectController.get_subjects);
router.get('/get-subjects/:page/:size', subjectController.get_subjects_page);
router.get('/get-subjects/:id', subjectController.getSubjectById);
router.post('/create', subjectController.create)
router.put('/update/:id', subjectController.updateByid)
router.delete('/delete/:id', subjectController.deleteSuject)
router.get('/check-subject-name/:name/:id', subjectController.checkSubjectName)

module.exports = router;
