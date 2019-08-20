const Host = require("../models/Host")

module.exports = {
    index: (req, res) => Host.find({}).then(hosts => res.json(hosts)),

    create: (req, res) => Host.create(req.body).then(Hosts => res.json(Hosts)),

    showByMessage: (req, res) => Host.findOne({ message: req.params.message})
    .then(host => res.json(host)),

    showByID: (req, res) => Host.findById({ _id: req.params.id})
    .then(host => res.json(host)),

    update: (req, res) => Host.findOneAndUpdate({_id: req.params.id },req.body)
    .then(host => res.json(host)),

    destroy: (req, res) => Host.findByIdAndRemove(req.params.id).then(host => {
        res.send(host);
    })


};