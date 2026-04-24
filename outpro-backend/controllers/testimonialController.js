const Testimonial = require("../models/Testimonial");

// @route  GET /api/testimonials
// @access Public
exports.getTestimonials = async (req, res, next) => {
  try {
    const filter = { isPublished: true };
    if (req.query.featured === "true") filter.isFeatured = true;

    const testimonials = await Testimonial.find(filter)
      .sort({ order: 1, createdAt: -1 })
      .populate("eventRef", "title slug");

    res.status(200).json({ success: true, data: testimonials });
  } catch (error) {
    next(error);
  }
};

// @route  POST /api/testimonials
// @access Private
exports.createTestimonial = async (req, res, next) => {
  try {
    const testimonial = await Testimonial.create(req.body);
    res.status(201).json({ success: true, data: testimonial });
  } catch (error) {
    next(error);
  }
};

// @route  PUT /api/testimonials/:id
// @access Private
exports.updateTestimonial = async (req, res, next) => {
  try {
    const testimonial = await Testimonial.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!testimonial) {
      return res.status(404).json({ success: false, message: "Not found" });
    }
    res.status(200).json({ success: true, data: testimonial });
  } catch (error) {
    next(error);
  }
};

// @route  DELETE /api/testimonials/:id
// @access Private
exports.deleteTestimonial = async (req, res, next) => {
  try {
    await Testimonial.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true, message: "Deleted" });
  } catch (error) {
    next(error);
  }
};
