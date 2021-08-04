'use strict';
const axios = require('axios');
const countryCodes = require('./country-codes.js')

function getCovidData(req, res) {
  const country = req.query.searchQuery
  const code = Object.keys(countryCodes).find(key => countryCodes[key] === country)

  const covidAPI = `http://corona-api.com/countries/${code}`
  axios.get(covidAPI)
    .then(covidData => {
      res.status(200).send(covidData.data)
    })
    .catch(err => {
      res.status(500).send(err)
    })
};

module.exports = getCovidData;