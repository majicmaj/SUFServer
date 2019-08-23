const express = require("express");
const router = express.Router();
const listingController = require("../controllers/listing");

router.get("/", listingController.index);
router.post("/", listingController.create);
router.get("/message: message", listingController.showByMessage);
router.get("/id: id", listingController.showByID);
router.put("/:id", listingController.update);
router.delete("/:id", listingController.destroy);


module.exports = router;
