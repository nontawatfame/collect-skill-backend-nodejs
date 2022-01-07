var express = require('express');
var router = express.Router();

var subjectController = require("../controllers/subjectController");

router.get('/get-subjects', subjectController.get_subjects);
router.get('/get-subjects/:page/:size', subjectController.get_subjects_page);
router.post('/create', subjectController.create)

module.exports = router;
