const User = require("../models/User");

module.exports = {
    index: (req, res) => User.find({}).then(users => res.json(users)),

    create: (req, res) => User.create(req.body).then(users => res.json(users)),

    showByEmail: (req, res) => User.findOne({ email: req.params.email})
    .then(user => res.json(user)).catch(err=>res.send(err)),

    showByID: (req, res) => User.findById({ _id: req.params.id})
    .then(user => res.json(user)),

    update: (req, res) => User.findOneAndUpdate({_id: req.params.id },req.body)
    .then(user => res.json(user)),

    updateByEmail: (req, res) => User.findOneAndUpdate({ email: req.params.email },req.body)
    .then(user => res.json(user)),

    destroy: (req, res) => User.findByIdAndRemove({ _id: req.params.id}).then(user => 
        res.send(user)),

    destroyByEmail: (req, res) => User.findByIdAndRemove({ email: req.params.email}).then(user => 
        res.send(user))
    }



