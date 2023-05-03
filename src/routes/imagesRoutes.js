const controller = require("../controller/imagesController");
const middleware = require("../middleware/auth");
const uploadImage = require("../middleware/uploadImage");
const express = require("express");
const router = express.Router();

router.use(middleware);
router.post(
  "/upload/:id",
  uploadImage.fields([
    { name: "foto1", maxCount: 1 },
    { name: "foto2", maxCount: 1 },
    { name: "foto3", maxCount: 1 },
    { name: "foto4", maxCount: 1 },
    { name: "foto5", maxCount: 1 },
  ]),
  controller.upload
);
router.get("/list", controller.list);
router.get("/update/:id", controller.update);
router.delete("/delete", controller.delete);

module.exports = router;
