const Enquiry = require("../models/Enquiry");
const { sendEnquiryConfirmation, sendAdminNotification } = require("../utils/email");

// @route  POST /api/enquiries
// @access Public — submitted from the contact/plan-event form
exports.createEnquiry = async (req, res, next) => {
  try {
    const enquiry = await Enquiry.create(req.body);

    // Fire emails in background — don't block the response
    Promise.allSettled([
      sendEnquiryConfirmation(enquiry),
      sendAdminNotification(enquiry),
    ]).catch((err) => console.error("Email error:", err));

    res.status(201).json({
      success: true,
      message: "Enquiry submitted! We'll get back to you within 24 hours.",
      data: { id: enquiry._id },
    });
  } catch (error) {
    next(error);
  }
};

// @route  GET /api/enquiries
// @access Private (Admin)
exports.getAllEnquiries = async (req, res, next) => {
  try {
    const {
      status,
      eventType,
      page = 1,
      limit = 20,
      sortBy = "createdAt",
      order = "desc",
      search,
    } = req.query;

    const filter = {};
    if (status) filter.status = status;
    if (eventType) filter.eventType = eventType;
    if (search) {
      filter.$or = [
        { name: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
        { organization: { $regex: search, $options: "i" } },
      ];
    }

    const total = await Enquiry.countDocuments(filter);
    const enquiries = await Enquiry.find(filter)
      .sort({ [sortBy]: order === "asc" ? 1 : -1 })
      .skip((page - 1) * limit)
      .limit(Number(limit));

    res.status(200).json({
      success: true,
      total,
      page: Number(page),
      pages: Math.ceil(total / limit),
      data: enquiries,
    });
  } catch (error) {
    next(error);
  }
};

// @route  GET /api/enquiries/:id
// @access Private
exports.getEnquiry = async (req, res, next) => {
  try {
    const enquiry = await Enquiry.findById(req.params.id);
    if (!enquiry) {
      return res.status(404).json({ success: false, message: "Enquiry not found" });
    }

    // Mark as read when admin views it
    if (!enquiry.isRead) {
      enquiry.isRead = true;
      await enquiry.save();
    }

    res.status(200).json({ success: true, data: enquiry });
  } catch (error) {
    next(error);
  }
};

// @route  PUT /api/enquiries/:id
// @access Private — update status, add notes
exports.updateEnquiry = async (req, res, next) => {
  try {
    const allowedUpdates = ["status", "adminNotes", "isRead"];
    const updates = {};
    allowedUpdates.forEach((key) => {
      if (req.body[key] !== undefined) updates[key] = req.body[key];
    });

    const enquiry = await Enquiry.findByIdAndUpdate(
      req.params.id,
      updates,
      { new: true, runValidators: true }
    );

    if (!enquiry) {
      return res.status(404).json({ success: false, message: "Enquiry not found" });
    }

    res.status(200).json({ success: true, data: enquiry });
  } catch (error) {
    next(error);
  }
};

// @route  DELETE /api/enquiries/:id
// @access Private
exports.deleteEnquiry = async (req, res, next) => {
  try {
    const enquiry = await Enquiry.findByIdAndDelete(req.params.id);
    if (!enquiry) {
      return res.status(404).json({ success: false, message: "Enquiry not found" });
    }
    res.status(200).json({ success: true, message: "Enquiry deleted" });
  } catch (error) {
    next(error);
  }
};

// @route  GET /api/enquiries/stats/summary
// @access Private
exports.getEnquiryStats = async (req, res, next) => {
  try {
    const [statusCounts, typeCounts, unread] = await Promise.all([
      Enquiry.aggregate([
        { $group: { _id: "$status", count: { $sum: 1 } } },
      ]),
      Enquiry.aggregate([
        { $group: { _id: "$eventType", count: { $sum: 1 } } },
      ]),
      Enquiry.countDocuments({ isRead: false }),
    ]);

    res.status(200).json({
      success: true,
      data: { statusCounts, typeCounts, unread },
    });
  } catch (error) {
    next(error);
  }
};
