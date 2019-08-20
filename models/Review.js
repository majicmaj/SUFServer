const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
    rating: Number,
    comment: String,
    host: [
        {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    ],
    guest: [
        {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    ]

});

module.exports = mongoose.model("Review", ReviewSchema)