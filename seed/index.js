require('dotenv').config();
const mongoose = require('mongoose');
const driver = require('./driver');
const vehicle = require('./vehicle');
const customer = require('./customer');

const uri = process.env.MONGO_URI;

const populate = async() => {
  console.log('-----beginning database seed-----');
  await driver.populate();
  await vehicle.populate();
  console.log('-----successfully seeded database-----');
  mongoose.connection.close();
};

mongoose.connect(uri, { useNewUrlParser: true })
  .then(() => {
    console.log('successfully connected to database')
    populate();
  })
  .catch(e => console.error(e));
