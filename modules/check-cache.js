'use strict';
const axios = require('axios');
const cache = require('./cache.js');


function checkCache(searchQuery) {
  const key = 'location-' + searchQuery;
  const url = `https://api.weatherbit.io/v2.0/forecast/daily?key=${process.env.WEATHER_API_KEY}&lat=${lat}&lon=${lon}&city=${searchQuery}&units=I`

  if (!cache[key]) {
    cache[key] = {}
    cache[key].timestamp = Date.now();
    cache[key].data = axios.get(url)
      .then(data => parseData(data.data))
  }
  return cache[key].data
}

function parseData(data) {
  try {
    const weather = data.results.map(weather => {
      return new Weather(weather);
    })
    return Promise.resolve(weather);
  } catch (err) {
    return Promise.reject(err);
  }
}

class Weather {
  constructor(obj) {
    this.icon = `https://www.weatherbit.io/static/img/icons/` + `${obj.weather.icon}` + `.png`
    this.date = obj.datetime,
    this.mintemp = obj.min_temp,
    this.maxtemp = obj.max_temp,
    this.description = obj.weather.description
  }
}

module.exports = checkCache;