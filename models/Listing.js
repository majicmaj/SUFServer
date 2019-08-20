const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const ListingSchema = new Schema({
    active: false,
    host: [
        {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    ],
    review: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review"
        }
    ],
    guest: [
        {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    ]

});

module.exports = mongoose.model("Listing", ListingSchema)