const mongoose = require('mongoose');
// const Commute = require('./Commute')

const Commute = {
  zoneName: String,
  duration: Number
}

const schema = {
  name: String, //HirafuZone
  commutes: [Commute]
}

module.exports = mongoose.model("Zone", schema)