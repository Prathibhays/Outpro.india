const mongoose = require("mongoose");

const testimonialSchema = new mongoose.Schema(
  {
    quote: {
      type: String,
      required: [true, "Quote is required"],
      trim: true,
    },
    author: {
      type: String,
      required: [true, "Author name is required"],
      trim: true,
    },
    role: {
      type: String,
      trim: true,
    },
    organization: {
      type: String,
      trim: true,
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      default: 5,
    },
    eventRef: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Event",
    },
    avatarUrl: {
      type: String,
      default: "",
    },
    isPublished: {
      type: Boolean,
      default: true,
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
    order: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

testimonialSchema.index({ isPublished: 1, isFeatured: -1, order: 1 });

module.exports = mongoose.model("Testimonial", testimonialSchema);
