'use strict';
const axios = require('axios');
// const checkCache = require('./check-cache.js');

function getLocation(req, res) {
  const searchQuery = req.query.searchQuery;
  const locationAPI = `https://us1.locationiq.com/v1/search.php?key=${process.env.LOCATION_API}&q=${searchQuery}&format=json`;

  // checkCache(searchQuery)
  //   .then(data => res.send(data))
  //   .catch(err => console.error(err));
  console.log(locationAPI);

  axios.get(locationAPI)
    .then(results => {
      res.status(200).send(results.data)
    })
    .catch(err => {
      res.status(500).send(err)
    })
  
};

module.exports = getLocation;