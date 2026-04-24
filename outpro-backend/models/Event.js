const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Event title is required"],
      trim: true,
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    shortDescription: {
      type: String,
      maxlength: [200, "Short description max 200 characters"],
    },
    eventType: {
      type: String,
      required: true,
      enum: [
        "tournament",
        "corporate_league",
        "adventure",
        "college_fest",
        "sports_day",
        "other",
      ],
    },
    sport: {
      type: String,
      trim: true,
    },
    client: {
      name: { type: String, trim: true },
      organization: { type: String, trim: true },
    },
    location: {
      city: { type: String, trim: true },
      venue: { type: String, trim: true },
      state: { type: String, default: "Rajasthan" },
    },
    date: {
      type: Date,
      required: true,
    },
    stats: {
      participants: { type: Number, default: 0 },
      teams: { type: Number, default: 0 },
      duration: { type: String }, // e.g. "2 days"
      matches: { type: Number, default: 0 },
    },
    services: [
      {
        type: String,
        enum: [
          "event_management",
          "logistics",
          "event_marketing",
          "athlete_management",
          "brand_activation",
          "consulting",
        ],
      },
    ],
    images: [
      {
        url: { type: String },
        caption: { type: String },
        isCover: { type: Boolean, default: false },
      },
    ],
    testimonial: {
      quote: { type: String },
      author: { type: String },
      role: { type: String },
    },
    isPublished: {
      type: Boolean,
      default: true,
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
    tags: [String],
  },
  { timestamps: true }
);

// Auto-generate slug from title
eventSchema.pre("save", function (next) {
  if (this.isModified("title")) {
    this.slug = this.title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .trim();
  }
  next();
});

eventSchema.index({ isPublished: 1, isFeatured: -1, date: -1 });

module.exports = mongoose.model("Event", eventSchema);
