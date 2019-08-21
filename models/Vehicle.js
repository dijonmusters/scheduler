const mongoose = require('mongoose');
const Driver = mongoose.model('Driver').schema;

const schema = {
  name: String,
  driver: {
    type: Driver,
    required: true
  }
};

module.exports = mongoose.model('Vehicle', schema);