const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const GuestSchema = new Schema({
    firstName: String,
    lastName: String,
    age: Number,
    licensePlate: String,
    carType: String,
    phone: Number,
    email: String,
    username: String,
    history: [
        {
            listing: {
                type: Schema.Types.ObjectId,
                ref: "Listing"
            },
            date: String,
            amountPaid: Number
        }
    ]

});

module.exports = mongoose.model("Guest", GuestSchema)