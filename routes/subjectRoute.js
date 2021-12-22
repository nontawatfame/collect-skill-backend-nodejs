var express = require('express');
var router = express.Router();
var subject = require("../service/subject")

router.get('/', async function (req, res, next) {
  try {
    res.send(await subject.getSubjects())
  } catch (error) {
    console.log(error)
    next(error)
  }
});

module.exports = router;
