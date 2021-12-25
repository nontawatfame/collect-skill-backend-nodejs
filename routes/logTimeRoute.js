var express = require('express');
var router = express.Router();

var logTimeController = require("../controllers/logTimeController");

router.get('/get-log-times', logTimeController.getLogTimes);
router.get('/create', logTimeController.create);
router.post('/create', logTimeController.create)


module.exports = router