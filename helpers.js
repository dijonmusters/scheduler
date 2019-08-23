const getDuration = (origin, destination) => {
  const commuteArray = origin.zone.commutes.filter(commuteZone => 
    destination.zone.name == commuteZone.zoneName
    )
  return commuteArray.length > 0 ? commuteArray[0].duration : 0
}

module.exports = {getDuration}