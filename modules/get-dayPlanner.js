'use strict';

const axios = require('axios');

function getDayPlanner (req, res) {
  // console.log('Here!', req.query);
  const location_id = req.query.location_id;
  const lat = req.query.lat;
  const lon = req.query.lon;
  const start_date = req.query.start_date;
  const end_date= req.query.end_date;
  const searchQuery = req.query.searchQuery;
  const tripAPI = `https://www.triposo.com/api/20210615/day_planner.json?location_id=${location_id}&latitude=${lat}&longitude=${lon}&start_date=${start_date}&end_date=${end_date}&account=${process.env.TRIP_ACCOUNT_ID}&token=${process.env.TRIP_API}`

  axios.get(tripAPI)
    .then(results => {
      res.send(results.data.results)
    })
    .catch(err => {
      console.log(err);
      res.send(err);
    })
  };

module.exports = getDayPlanner;
