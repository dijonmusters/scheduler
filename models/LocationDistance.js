const mongoose = require('mongoose');
const Location = mongoose.model('Location').schema;

const Destination = {
  location: Location,
  duration: Number
}

const schema = {
  origin: Location,
  destinations: [Destination]
};

module.exports = mongoose.model('LocationDistance', schema);