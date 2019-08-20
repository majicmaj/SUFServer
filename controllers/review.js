const Review = require("../models/Review")

module.exports = {
    index: (req, res) => Review.find({}).then(reviews => res.json(reviews)),

    create: (req, res) => Review.create(req.body).then(reviews => res.json(reviews)),

    showByMessage: (req, res) => Review.findOne({ message: req.params.message})
    .then(review => res.json(review)),

    showByID: (req, res) => Review.findById({ _id: req.params.id})
    .then(review => res.json(review)),

    update: (req, res) => Review.findOneAndUpdate({_id: req.params.id },req.body)
    .then(review => res.json(review)),

    destroy: (req, res) => Review.findByIdAndRemove(req.params.id).then(review => {
        res.send(review);
    })


};