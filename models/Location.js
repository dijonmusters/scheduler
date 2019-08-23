const mongoose = require('mongoose');
const Zone = mongoose.model('./Zone').schema

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
  zone: Zone,
  profiles: [Profile]
}


module.exports = mongoose.model('Location', schema);