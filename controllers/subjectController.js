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

async function deleteSuject(req, res, next) {
    try {
        res.status(200).json(await subject.deleteSuject(req.params.id))
    } catch (error) {
        next(error)
    }
}

async function updateByid(req, res, next) {
    try {
        let subjectRes = await subject.getSubjectById(req.params.id)
        subjectRes[0].name = req.body.name
        res.status(200).json(await subject.updateByid(req.params.id, subjectRes[0]))
    } catch (error) {
        next(error)
    }
}

async function getSubjectById(req, res, next) {
    console.log(req.params)
    try {      
        res.status(200).json(await subject.getSubjectById(req.params.id))
    } catch (error) {
        next(error)
    }
}

module.exports = {
    get_subjects,
    get_subjects_page,
    create,
    deleteSuject,
    updateByid,
    getSubjectById
}