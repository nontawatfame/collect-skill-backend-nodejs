var express = require('express');
var router = express.Router();

var subjectRouter = require('./subjectRoute');

router.use("/subjects", subjectRouter)


module.exports = router;