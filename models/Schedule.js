const mongoose = require('mongoose');
const Location = mongoose.model('Location').schema;
const Vehicle = mongoose.model('Vechicle').schema;

const schema = {
  startDate: Date,
  endDate: Date,
  daysOfWeek: [String],
  startTime: Number,
  endTime: Number,
  destination: [Location],
  vehicles: [Vechicle]
};

module.exports = mongoose.model('Schedule', schema);