const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
    rating: Number,
    comment: String,
    host: [
        {
            type: Schema.Types.ObjectId,
            ref: "Host"
        }
    ],
    guest: [
        {
            type: Schema.Types.ObjectId,
            ref: "Guest"
        }
    ]

});

module.exports = mongoose.model("Review", ReviewSchema)