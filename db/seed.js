const Listing = require("../models/Listing")
const Review = require("../models/Review")
const User = require("../models/User")

Listing.find({}).remove(() =>
  Listing.collection
    .insert(listings)
    .then(listings => {
      console.log(listings);
    })
    .catch(err => {
      console.log(err);
    })
);

Review.find({}).remove(() =>
  Review.collection
    .insert(reviews)
    .then(reviews => {
      console.log(reviews);
    })
    .catch(err => {
      console.log(err);
    })
);

User.find({}).remove(() =>
  User.collection
    .insert(users)
    .then(users => {
      console.log(users);
    })
    .catch(err => {
      console.log(err);
    })
);