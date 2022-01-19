var logTime = require("../model/logTime")
var subject = require("../model/subject")
var moment = require("moment");

async function create(req, res, next) {
    try {
        console.log(req.body)
        let dateStart = moment(req.body.timeStart).format("YYYY-MM-DD HH:mm:ss")
        let dateEnd = moment(req.body.timeEnd).format("YYYY-MM-DD HH:mm:ss")

        await logTime.create(req.body.subjectId, req.body.tagId, dateStart, dateEnd, req.body.totalSeconds)

        let subjectData = await subject.getSubjectById(req.body.subjectId)
        let secondsTotal = await logTime.getToToalSecondsSubjectById(req.body.subjectId)

        if (secondsTotal[0].seconds != null) {
            subjectData[0].seconds_total = parseInt(secondsTotal[0].seconds)
        } else if (secondsTotal[0].seconds == null) {
            subjectData[0].seconds_total = 0 + parseInt(req.body.totalSeconds)
        }
        await subject.update(subjectData[0])
        
        res.status(201).json({
            status: "s",
            data: await subject.getSubjectById(req.body.subjectId)
        })
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
        let log = await logTime.getLogTimes(startPage, req.params.size, req.params.startDate, req.params.endDate)
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