const express = require("express");
const router = express.Router();
const hostController = require("../controllers/host");

router.get("/", hostController.index);
router.post("/", hostController.create);
// router.get("/message: message", hostController.showByMessage);
router.get("/id: id", hostController.showByID);
router.put("/:id", hostController.update);
router.delete("/:id", hostController.destroy);



module.exports = router;