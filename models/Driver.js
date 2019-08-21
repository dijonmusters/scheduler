const mongoose = require('mongoose');

const schema = {
  name: String
};

module.exports = mongoose.model('Driver', schema);