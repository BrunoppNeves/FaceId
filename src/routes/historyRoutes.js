const controller = require("../controller/historyController");
const middleware = require("../middleware/auth");
const express = require("express");
const router = express.Router();

router.use(middleware);
router.post("/create", controller.create);
router.get("/list", controller.list);
router.get("/find/:id", controller.findOne);
router.delete("/delete", controller.delete);

module.exports = router;
