const express = require("express");
const router = express.Router();
const {
  createEnquiry,
  getAllEnquiries,
  getEnquiry,
  updateEnquiry,
  deleteEnquiry,
  getEnquiryStats,
} = require("../controllers/enquiryController");
const { protect } = require("../middleware/auth");

// Public
router.post("/", createEnquiry);

// Private (admin dashboard)
router.get("/", protect, getAllEnquiries);
router.get("/stats/summary", protect, getEnquiryStats);
router.get("/:id", protect, getEnquiry);
router.put("/:id", protect, updateEnquiry);
router.delete("/:id", protect, deleteEnquiry);

module.exports = router;
