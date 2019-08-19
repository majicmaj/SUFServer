const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const HostSchema = new Schema({
    name: String,
    averageRating: Number,
    address: {
        city: String,
        street: String,
        zipCode: Number
    },
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review"
        }
    ],
    listing: [
        {
            type: Schema.Types.ObjectId,
            ref: "Listing" 
        }
    ]

});

module.exports = mongoose.model("Host", HostSchema)