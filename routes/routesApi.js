var express = require('express');
var router = express.Router();

var subjectRouter = require('./subjectRoute');
var logTimeRoute = require('./logTimeRoute');
var tagRoute = require("./tagRoute");

router.use("/subject", subjectRouter)
router.use("/log-time", logTimeRoute)
router.use("/tag", tagRoute)

module.exports = router;