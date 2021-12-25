var logTime = require("../model/logTime")

async function create(req, res, next) {
    console.log(req.body)
    try {
        res.status(201).json(await logTime.insert(req.body.subjectId, req.body.tagId, req.body.timeStart, req.body.timeEnd, req.body.totalMinute))
    } catch (error) {
        next(error)
    }
}

async function getLogTimes(req, res, next) {
    try {
        res.json(await logTime.getLogTimes)
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getLogTimes,
    create
}