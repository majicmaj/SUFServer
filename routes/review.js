const express = require("express");
const router = express.Router();
const reviewController = require("../controllers/review");

router.get("/", reviewController.index);
router.post("/", reviewController.create);
// router.get("/message: message", reviewController.showByMessage);
router.get("/id: id", reviewController.showByID);
router.put("/:id", reviewController.update);
router.delete("/:id", reviewController.destroy);



module.exports = router;