const {getDuration} = require('../helpers')
const Zone = require('../models/Zone');
const Location = require('../models/Location');


test("getDuration with valid zones", () => {
    const zone1 = new Zone({name: "zone1", commutes: []})
    const zone2 = new Zone({name: "zone2", commutes: [{zoneName: zone1.name, duration: 30}]})
    const location1 = new Location({name: "location1", zone: zone1})
    const location2 = new Location({name: "location2", zone: zone2})


    const result = getDuration(location2, location1)

    expect(result).toBe(30)
})