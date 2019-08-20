const express = require("express");
const router = express.Router();
const guestController = require("../controllers/guest");

router.get("/", guestController.index);
router.post("/", guestController.create);
// router.get("/message: message", guestController.showByMessage);
router.get("/id: id", guestController.showByID);
router.put("/:id", guestController.update);
router.delete("/:id", guestController.destroy);



module.exports = router;