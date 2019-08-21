const mongoose = require('mongoose');
const Location = mongoose.model('Location').schema;

const schema = {
  startDate: Date,
  endDate: Date,
  daysOfWeek: [String],
  startTime: Number,
  endTime: Number,
  destination: [Location],
  vehicles: [Vehicle]
};

module.exports = mongoose.model('Schedule', schema);