const Listing = require("../models/Listing")

module.exports = {
    index: (req, res) => Listing.find({}).then(listings => res.json(listings)),

    create: (req, res) => Listing.create(req.body).then(listings => res.json(listings)),

    showByMessage: (req, res) => Listing.findOne({ message: req.params.message})
    .then(listing => res.json(listing)),

    showByID: (req, res) => Listing.findById({ _id: req.params.id})
    .then(listing => res.json(listing)),

    update: (req, res) => Listing.findOneAndUpdate({_id: req.params.id },req.body)
    .then(listing => res.json(listing)),

    destroy: (req, res) => Listing.findByIdAndRemove(req.params.id).then(listing => {
        res.send(listing);
    })


};