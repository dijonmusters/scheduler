const mongoose = require('mongoose');
const Driver = require('./models/Driver');
const Vehicle = require('./models/Vehicle');
const Booking = require('./models/Booking');
const Customer = require('./models/Customer');
const Location = require('./models/Location');
const LocationDistance = require('./models/LocationDistance');
const Schedule = require('./models/Schedule');

const populate = () => {
  // do this
}

const uri = 'mongodb+srv://scheduler_user:TAz9OH1%23UEVoIZ1r3s7A1@scheduler-ifsby.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(uri, { useNewUrlParser: true })
  .then(() => populate())
  .catch(e => console.error(e));

