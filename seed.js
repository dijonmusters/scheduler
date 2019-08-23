const mongoose = require('mongoose');
const Driver = require('./models/Driver');
const Vehicle = require('./models/Vehicle');
const Zone = require('./models/Zone');
const Location = require('./models/Location');




const populate = () => {
  // do this
}

const uri = "mongodb+srv://nick:spurs4357@schedulercluster-tsmyv.mongodb.net/scheduler_database?retryWrites=true&w=majority"


mongoose.connect(uri, { useNewUrlParser: true })
  .then(() => {
    console.log('successfully connected to mongo')
    // populateDrivers()
    // populateVehicles()
    // populateInitialZones()
    // populateZoneCommutes()
    // populateLocations()
  })
  .catch(e => console.error(e));

const populateDrivers = () => {
  console.log("populating drivers")
  const names = ['jon', 'nick', 'leigh', 'shawnee', 'jay']
  names
    .map(name => new Driver({name: name}))
    .forEach(driver => {
      console.log("creating " + driver)
      driver.save()
    })
}

const populateVehicles =  async () => {
  console.log("populating vehicles")
  const drivers = await Driver.find()
  drivers
    .map((driver, i) => new Vehicle({name: `vehicle${i}`, driver: driver}))
    .forEach(vehicle => vehicle.save())
}

const populateInitialZones = () => {
  console.log("populating zones")
  const names = ["hanozono-zone", "hirafu-zone", "kutchan-zone"]
  names.map(
    zoneName => new Zone({name: zoneName, commutes: []})
  ).forEach(zone => zone.save())
}

const populateZoneCommutes = async () => {
  console.log("populating commutes")
  const zones = await Zone.find() //["hanozono-zone", "hirafu-zone", "kutchan-zone"]
  zones.map((zone, i) => {
    console.log("adding commutes to ")
    console.log(zone)
    const otherZones = zones.filter(z => z!==zone)
    const commutes = otherZones
      .map((otherZone, i) => {
        return {
          name: otherZone.name,
          duration: i * 15 + 15
        }
    })
    console.log("adding commutes")
    console.log(commutes)
    Zone.findOneAndUpdate({name: zone.name}, {commutes: commutes}, (err, res) => err ? console.log(err) : console.log(res))
  })
}

const populateLocations = async () => {
  console.log("populate locations")
  const hirafuZone = await Zone.findOne({name: "hirafu-zone"})
  const hanozonoZone = await Zone.findOne({name: "hanozono-zone"})
  const kutchanZone = await Zone.findOne({name: "kutchan-zone"})


  const hirafuLifts = new Location({
    name: "hirafu-lifts",
    zone: hirafuZone
  })
  const hirafuShops = new Location({
    name: "hirafu-shops",
    zone: hirafuZone
  })

  const hanozonoLifts = new Location({
    name: "hanozono-lifts",
    zone: hanozonoZone
  })
  const hanozonoSkiHire = new Location({
    name: "hanozono-ski-hire",
    zone: hanozonoZone
  })

  const ramen = new Location({
    name: "ramen-rest",
    zone: kutchanZone
  })
  const supermarket = new Location({
    name: "supermarket",
    zone: kutchanZone
  })

  const locations = [hirafuLifts, hirafuShops, hanozonoLifts, hanozonoSkiHire, kutchanZone, ramen, supermarket]
  locations.forEach(l => {
    console.log("saving " + l)
    l.save()
  })
}


module.exports = {populateDrivers}