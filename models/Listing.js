const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const ListingSchema = new Schema({
    message: String 
});

module.exports = mongoose.model("Listing", ListingSchema)