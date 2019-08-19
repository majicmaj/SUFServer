const express = require("express");
const router = express.Router();
const listingController = require("../controllers/listing");

router.get("/", listingController.index);


module.exports = router;
