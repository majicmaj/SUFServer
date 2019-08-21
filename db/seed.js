const Listing = require("../models/Listing")
const Review = require("../models/Review")
const User = require("../models/User")
const listings = require("./listing.json");
const reviews = require("./review.json");
const users = require("./guest.json");
const users2 = require("./host.json");


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
    }),

    User.collection
    .insert(users2)
    .then(users2 => {
      console.log(users2);
    })
    .catch(err => {
      console.log(err);
    })
);