var logTime = require("../model/logTime")
var moment = require("moment");

async function create(req, res, next) {
    try {
        
        console.log(req.body)
        let dateStart = moment(req.body.timeStart).format("YYYY-MM-DD HH:mm:ss")
        let dateEnd = moment(req.body.timeEnd).format("YYYY-MM-DD HH:mm:ss")
        res.status(201).json(await logTime.create(req.body.subjectId, req.body.tagId, dateStart, dateEnd, req.body.totalSeconds))
    } catch (error) {
        next(error)
    }
}

async function getLogTimes(req, res, next) {
    console.log(req.params)
    try {
        console.log(req.params.page)
        console.log(req.params.size)
        let startPage =  (req.params.page - 1) * req.params.size
        let log = await logTime.getLogTimes(startPage, req.params.size)
        console.log(log)
        res.status(200).json(log)
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getLogTimes,
    create
}