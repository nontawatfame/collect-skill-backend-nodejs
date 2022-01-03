var tag = require("../model/tag")

async function getTags(req, res, next) {
    try {
        res.json(await tag.getTags())
    } catch (error) {
        next(error)
    }
}

async function create(req, res, next) {
    try {
        res.status(201).json(await tag.create(req.body.name, req.body.subject_id))
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getTags,
    create
}