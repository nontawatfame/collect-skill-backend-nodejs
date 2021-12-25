var express = require('express');
var router = express.Router();

var subjectRouter = require('./subjectRoute');
var logTimeRoute = require('./logTimeRoute');

router.use("/subject", subjectRouter)
router.use("/log-time", logTimeRoute)

module.exports = router;