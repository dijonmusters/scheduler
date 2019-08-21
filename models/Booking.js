const mongoose = require('mongoose');
const Location = mongoose.model('Location').schema;
const Vehicle = mongoose.model('Vehicle').schema;

const schema = {
  customer: Customer,
  origin: Location,
  destination: Location,
  vehicle: Vehicle,
  time: Date,
  start: Date, // calculated field
  end: Date // calculated field
};

module.exports = mongoose.model('Booking', schema);