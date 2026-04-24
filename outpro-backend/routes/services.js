const express = require("express");
const router = express.Router();
const {
  getServices,
  updateService,
  getStats,
  updateStats,
} = require("../controllers/serviceController");
const { protect } = require("../middleware/auth");

router.get("/", getServices);
router.put("/:key", protect, updateService);

module.exports = router;
