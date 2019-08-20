const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: String,
    lastName: String,
    averageRating: Number,
    age: Number,
    licensePlate: String,
    carType: String,
    phone: Number,
    email: String,
    password: String,
    username: String,
    location: {
        city: String,
        address: String,
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
    ],
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

module.exports = mongoose.model("User", UserSchema)