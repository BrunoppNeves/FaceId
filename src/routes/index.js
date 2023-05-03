const express = require("express");
const router = express.Router();

router.use("/users", require("./usersRoutes"));
router.use("/history", require("./historyRoutes"));
router.use("/images", require("./imagesRoutes"));
router.use("/auth", require("./authRoutes"));
router.use("/mqtt", require("./mqttRoutes"));

module.exports = router;
