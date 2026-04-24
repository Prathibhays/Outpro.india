const mongoose = require("mongoose");

// Single document to store site-wide stats
const statsSchema = new mongoose.Schema(
  {
    eventsExecuted: { type: Number, default: 0 },
    athletesManaged: { type: Number, default: 0 },
    onTimePercent: { type: Number, default: 100 },
    proClients: { type: Number, default: 0 },
    citiesCovered: { type: Number, default: 0 },
    yearsActive: { type: Number, default: 1 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Stats", statsSchema);
