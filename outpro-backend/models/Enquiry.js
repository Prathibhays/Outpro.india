const mongoose = require("mongoose");

const enquirySchema = new mongoose.Schema(
  {
    // Contact info
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      maxlength: [100, "Name cannot exceed 100 characters"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      lowercase: true,
      trim: true,
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
      trim: true,
    },
    organization: {
      type: String,
      trim: true,
      default: "",
    },

    // Event details
    eventType: {
      type: String,
      required: [true, "Event type is required"],
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
      default: "",
    },
    expectedParticipants: {
      type: String,
      enum: ["<50", "50-100", "100-300", "300-500", "500+"],
    },
    eventDate: {
      type: Date,
    },
    eventLocation: {
      type: String,
      trim: true,
      default: "",
    },
    budget: {
      type: String,
      enum: ["<5000", "5000-15000", "15000-50000", "50000+", "discuss"],
      default: "discuss",
    },

    // Services requested (multi-select from frontend)
    servicesNeeded: [
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

    message: {
      type: String,
      trim: true,
      maxlength: [1000, "Message cannot exceed 1000 characters"],
    },

    // CRM tracking
    status: {
      type: String,
      enum: ["new", "contacted", "quoted", "confirmed", "completed", "lost"],
      default: "new",
    },
    adminNotes: {
      type: String,
      default: "",
    },
    source: {
      type: String,
      enum: ["website", "whatsapp", "instagram", "referral", "other"],
      default: "website",
    },
    isRead: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

// Index for fast admin queries
enquirySchema.index({ status: 1, createdAt: -1 });
enquirySchema.index({ email: 1 });

module.exports = mongoose.model("Enquiry", enquirySchema);
