const Vehicle = require('../models/Vehicle');
const Driver = require('../models/Driver');

const getRandomDriver = drivers => {
  const randomIndex = Math.floor(Math.random() * drivers.length)
  return drivers[randomIndex];
}

const populate = async () => {
  const drivers = await Driver.find();
  const vehicles = [
    { name: 'Bugatti La Voiture Noire', driver: getRandomDriver(drivers) },
    { name: 'Rolls-Royce Sweptail', driver: getRandomDriver(drivers) },
    { name: 'Mercedes-Maybach Exelero', driver: getRandomDriver(drivers) }
  ];
  return Vehicle.insertMany(vehicles);
}

module.exports = { populate };