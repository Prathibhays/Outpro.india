const Service = require("../models/Service");
const Stats = require("../models/Stats");

// @route  GET /api/services
// @access Public
exports.getServices = async (req, res, next) => {
  try {
    const services = await Service.find({ isActive: true }).sort({ order: 1 });
    res.status(200).json({ success: true, data: services });
  } catch (error) {
    next(error);
  }
};

// @route  PUT /api/services/:key
// @access Private
exports.updateService = async (req, res, next) => {
  try {
    const service = await Service.findOneAndUpdate(
      { key: req.params.key },
      req.body,
      { new: true, runValidators: true, upsert: true }
    );
    res.status(200).json({ success: true, data: service });
  } catch (error) {
    next(error);
  }
};

// @route  GET /api/stats
// @access Public
exports.getStats = async (req, res, next) => {
  try {
    let stats = await Stats.findOne();
    if (!stats) stats = await Stats.create({});
    res.status(200).json({ success: true, data: stats });
  } catch (error) {
    next(error);
  }
};

// @route  PUT /api/stats
// @access Private
exports.updateStats = async (req, res, next) => {
  try {
    let stats = await Stats.findOne();
    if (!stats) {
      stats = await Stats.create(req.body);
    } else {
      Object.assign(stats, req.body);
      await stats.save();
    }
    res.status(200).json({ success: true, data: stats });
  } catch (error) {
    next(error);
  }
};
