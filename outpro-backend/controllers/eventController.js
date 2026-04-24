const Event = require("../models/Event");

// @route  GET /api/events
// @access Public
exports.getAllEvents = async (req, res, next) => {
  try {
    const {
      eventType,
      featured,
      page = 1,
      limit = 9,
      sport,
    } = req.query;

    const filter = { isPublished: true };
    if (eventType) filter.eventType = eventType;
    if (featured === "true") filter.isFeatured = true;
    if (sport) filter.sport = { $regex: sport, $options: "i" };

    const total = await Event.countDocuments(filter);
    const events = await Event.find(filter)
      .sort({ isFeatured: -1, date: -1 })
      .skip((page - 1) * limit)
      .limit(Number(limit))
      .select("-__v");

    res.status(200).json({
      success: true,
      total,
      page: Number(page),
      pages: Math.ceil(total / limit),
      data: events,
    });
  } catch (error) {
    next(error);
  }
};

// @route  GET /api/events/:slug
// @access Public
exports.getEventBySlug = async (req, res, next) => {
  try {
    const event = await Event.findOne({
      slug: req.params.slug,
      isPublished: true,
    });

    if (!event) {
      return res.status(404).json({ success: false, message: "Event not found" });
    }

    res.status(200).json({ success: true, data: event });
  } catch (error) {
    next(error);
  }
};

// @route  POST /api/events
// @access Private
exports.createEvent = async (req, res, next) => {
  try {
    const event = await Event.create(req.body);
    res.status(201).json({ success: true, data: event });
  } catch (error) {
    next(error);
  }
};

// @route  PUT /api/events/:id
// @access Private
exports.updateEvent = async (req, res, next) => {
  try {
    const event = await Event.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!event) {
      return res.status(404).json({ success: false, message: "Event not found" });
    }

    res.status(200).json({ success: true, data: event });
  } catch (error) {
    next(error);
  }
};

// @route  DELETE /api/events/:id
// @access Private
exports.deleteEvent = async (req, res, next) => {
  try {
    const event = await Event.findByIdAndDelete(req.params.id);
    if (!event) {
      return res.status(404).json({ success: false, message: "Event not found" });
    }
    res.status(200).json({ success: true, message: "Event deleted" });
  } catch (error) {
    next(error);
  }
};
