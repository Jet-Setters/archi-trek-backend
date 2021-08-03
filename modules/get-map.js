'use strict';
const axios = require('axios');

function getMap(req, res) {
  const lat = req.query.lat
  const lon = req.query.lon

  const mapAPI = `https://maps.locationiq.com/v3/staticmap?key=${process.env.LOCATION_API}&center=${lat},${lon}&zoom=10`

  axios.get(mapAPI)
    .then(mapResponse => {
      res.status(200).send(mapResponse)
    })
    .catch(err => {
      res.status(500).send(err)
    })
};

module.exports = getMap;