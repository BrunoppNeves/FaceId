const controller = require("../controller/mqttController");
const middleware = require("../middleware/auth");
const express = require("express");
const router = express.Router();

router.use(middleware);
router.get("/abre", controller.abrePorta);
router.get("/abre3s", controller.abre3sPorta);
router.get("/fecha", controller.fechaPorta);

module.exports = router;
