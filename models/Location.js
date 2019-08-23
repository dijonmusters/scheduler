const mongoose = require('mongoose');
const Zone = require('./Zone')

const Time = {
  start: Number, // 9
  end: Number // 17
}

const Profile = {
  name: String,
  windows: [Time]
}

const schema = {
  name: String, //Ski lift1
  zone: Zone.schema,
  profiles: [Profile]
}


module.exports = mongoose.model('Location', schema);