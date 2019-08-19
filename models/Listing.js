const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const ListingSchema = new Schema({
    message: "string" 
});

module.exports = mongoose.model("Listing", ListingSchema)