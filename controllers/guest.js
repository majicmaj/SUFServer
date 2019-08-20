const Guest = require("../models/Guest")

module.exports = {
    index: (req, res) => Guest.find({}).then(guests => res.json(guests)),

    create: (req, res) => Guest.create(req.body).then(guests => res.json(guests)),

    showByMessage: (req, res) => Guest.findOne({ message: req.params.message})
    .then(guest => res.json(guest)),

    showByID: (req, res) => Guest.findById({ _id: req.params.id})
    .then(guest => res.json(guest)),

    update: (req, res) => Guest.findOneAndUpdate({_id: req.params.id },req.body)
    .then(guest => res.json(guest)),

    destroy: (req, res) => Guest.findByIdAndRemove(req.params.id).then(guest => {
        res.send(guest);
    })


};