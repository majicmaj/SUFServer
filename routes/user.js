const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");

router.get("/", userController.index);
router.post("/", userController.create);
// router.get("/message: message", userController.showByMessage);
router.get("/id: id", userController.showByID);
router.put("/:id", userController.update);
router.delete("/:id", userController.destroy);



module.exports = router;