const mongoose = require('mongoose');
const Location = mongoose.model('Location').schema;
const Vehicle = mongoose.model('Vehicle').schema;
const Customer = mongoose.model('Customer').schema;


const schema = {
  customer: Customer,
  origin: Location,
  destination: Location,
  vehicle: Vehicle,
  day: Date,
  start: Date, // calculated field
  end: Date // calculated field
};

module.exports = mongoose.model('Booking', schema);