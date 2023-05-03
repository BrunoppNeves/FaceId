const controller = require("../controller/usersController");
const middleware = require("../middleware/auth");
const express = require("express");
const router = express.Router();

router.use(middleware);
router.post("/create", controller.create);
router.get("/list", controller.list);
router.get("/find/:id", controller.findOne);
router.put("/update/:id", controller.update);
router.delete("/delete/:id", controller.delete);

module.exports = router;
