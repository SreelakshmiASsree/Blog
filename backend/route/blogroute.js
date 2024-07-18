const express = require("express");
const { createblog, getBlog } = require("../controller/blogController");
const router = express.Router();

router.route("/blog").post(createblog);
router.route("/blog").get(getBlog);

module.exports = router;
