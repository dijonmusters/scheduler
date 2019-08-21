const Driver = require('../models/Driver');
const faker = require('faker');

const populate = async () => {
  const drivers = [
    { name: faker.name.firstName() },
    { name: faker.name.firstName() },
    { name: faker.name.firstName() },
    { name: faker.name.firstName() },
    { name: faker.name.firstName() }
  ];
  return Driver.insertMany(drivers);
}

module.exports = { populate };