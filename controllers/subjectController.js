var subject = require("../model/subject")

async function get_subjects(req, res, next) {
    try {
        res.json(await subject.getSubjects())
    } catch (error) {
        next(error)
    }
}

async function create(req, res, next) {
    try {
        res.status(201).json(await subject.insert(req.body.name))
    } catch (error) {
        next(error)
    }
}

module.exports = {
    get_subjects,
    create
}