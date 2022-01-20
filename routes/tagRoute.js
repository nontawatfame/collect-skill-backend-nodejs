var express = require('express');
var router = express.Router();

var tagController = require("../controllers/tagController");

router.get('/get-tags', tagController.getTags);
router.get('/get-tags-subject-id/:subject_id', tagController.getTagsBySubjectId)
router.post('/create', tagController.create)
router.get('/check-tag-name/:name/:subjectId/:id', tagController.checkTagName)

module.exports = router;
