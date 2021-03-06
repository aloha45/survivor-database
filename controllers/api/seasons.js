const Season = require('../../models/season')

module.exports = {
    index,
    show,
    create,
    update,
    delete: deleteOne
}

function index (req, res) {
    Season.find({}, (err, seasons) => {
        res.status(200).json(seasons)
    })
}

function show (req, res) {
    Season.findById(req.params.id, (err, season) => {
        res.status(200).json(season)
    })
}

function create (req, res) {
    Season.create(req.body, (err, season) => {
        res.status(201).json(season)
    })
}

function update (req, res) {
    Season.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then((season) => {
        res.status(200).json(season)
    })
}

function deleteOne (req, res) {
    Season.findByIdAndDelete(req.params.id, (err, season) => {
        res.status(200).json(season)
    })
}