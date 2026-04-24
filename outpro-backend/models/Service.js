const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema(
  {
    key: {
      type: String,
      unique: true,
      required: true,
      enum: [
        "event_management",
        "logistics",
        "event_marketing",
        "athlete_management",
        "brand_activation",
        "consulting",
      ],
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    tagline: {
      type: String,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    icon: {
      type: String, // emoji or icon class
    },
    features: [String],
    startingPrice: {
      type: Number, // in INR
    },
    order: {
      type: Number,
      default: 0,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Service", serviceSchema);
