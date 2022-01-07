var subject = require("../model/subject")

async function get_subjects(req, res, next) {
    console.log(req.params)
    try {
        res.json(await subject.getSubjects())
    } catch (error) {
        next(error)
    }
}

async function get_subjects_page(req, res, next) {
    console.log(req.params)
    try {
        let startPage =  (req.params.page - 1) * req.params.size
        res.json(await subject.getSubjectsPage(startPage, req.params.size))
    } catch (error) {
        next(error)
    }
}

async function create(req, res, next) {
    try {
        res.status(201).json(await subject.create(req.body.name))
    } catch (error) {
        next(error)
    }
}

module.exports = {
    get_subjects,
    get_subjects_page,
    create
}