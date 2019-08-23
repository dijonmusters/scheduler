const mongoose = require('mongoose');
const Driver = mongoose.model('Driver').schema;
const Booking = mongoose.model('Booking').schema;


const schema = {
  name: String,
  driver: {
    type: Driver,
    required: true
  },
  bookings: [Booking]
};

module.exports = mongoose.model('Vehicle', schema);