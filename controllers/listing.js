const Listing = require("../models/Listing")

module.exports = {
    index: (req, res) => Listing.find({}).then(listings => res.json(listings)),

    create: (req, res) => Listing.create(req.body).then(listings => res.json(listings))

};