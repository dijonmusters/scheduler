require('dotenv').config()
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { startOfDay, endOfDay } = require('date-fns');
const app = express();
const port = 5000;

const uri = process.env.MONGO_URI;

mongoose.connect(uri, { useNewUrlParser: true })
  .then(() => console.log('successfully connected to mongo'))
  .catch(e => console.error(e));

const Driver = require('./models/Driver');
const Vehicle = require('./models/Vehicle');

app.use(cors());
app.use(express.json());

const getVehicle = (time, duration) => {
  // return vehicle with least trips (or maybe most trips), available at that time
  return Vehicle.findOne();
}

const closestTimes = (time, duration) => {
  // return 3 closest times
  // if time is available return time, closest before, closest after
  return [time];
}

const getDuration = (origin, destination) => {
  // return the duration of trip
  return 0;
}



// GET nearestTimes (time): [time]
app.get('/nearest-times', async (req, res) => {
  const { time } = req.body;

})

// POST book (customerId, time): success || error
app.post('/book', async (req, res) => {
  const { customerId, time, origin, destination } = req.body;
  const duration = getDuration(origin, destination);
  try {
    const customer = await Customer.findOne({ _id: customerId });
    const vehicle = await getVehicle(time, duration);
    if (!vehicle) {
      const closestTrips = closestTimes(time, duration);
      return res.send({ closestTrips });
    }
    const booking = new Booking({ customer, origin, destination, vehicle, time });
    await booking.save();
    res.send({ booking, closestTrips });
  }
  catch(e) {
    res.status(402).send(e);
  }
});

app.get('/bookings', async (req, res) => {
  const { start, end } = req.body;
  const startTime = startOfDay(start);
  const endTime = endOfDay(end);
  const bookings = await Booking.find({
    start: {
      $gte: startTime
    },
    end: {
      $lte: endTime
    }
  });
  res.send({ bookings });
});

// ALL BOOKINGS
// app.get('/bookings', async (req, res) => {
//   const bookings = await Booking.find();
//   res.send({ bookings });
// });

// PUT book (newTime, bookingId): success || error
// DELETE book (bookingId): success || error

// app.get('/get', async (req, res) => {
//   const drivers = await Driver.find();
//   res.send(drivers);
// });

// app.get('/create', async (req, res) => {
//   const driver = new Driver({ name: 'Jon' });
//   await driver.save();
//   res.send('successfully created driver');
// });

// app.get('/create-vehicle', async (req, res) => {
//   try {
//     const driver = new Driver({ name: 'Jon' });
//     await driver.save();
//     const vehicle = new Vehicle({ name: 'Jon\'s car', driver });
//     await vehicle.save();
//     res.send('successfully created vehicle');
//   }
//   catch(e) {
//     res.status(403).send('failed to create vehicle');
//   }
// });

// app.get('/get-vehicle', async (req, res) => {
//   const vehicles = await Vehicle.find();
//   res.send(vehicles);
// });

app.listen(port, () => console.log(`listening on port ${port}`));