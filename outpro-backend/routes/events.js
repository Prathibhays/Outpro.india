const express = require("express");
const router = express.Router();
const {
  getAllEvents,
  getEventBySlug,
  createEvent,
  updateEvent,
  deleteEvent,
} = require("../controllers/eventController");
const { protect } = require("../middleware/auth");

// Public
router.get("/", getAllEvents);
router.get("/:slug", getEventBySlug);

// Private
router.post("/", protect, createEvent);
router.put("/:id", protect, updateEvent);
router.delete("/:id", protect, deleteEvent);

module.exports = router;
