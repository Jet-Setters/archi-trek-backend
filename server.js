'use strict';

//----------------------Dependencies-------------------------
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { default: axios } = require('axios');

//----------------------Modules-------------------------

const getLocation = require('./modules/get-location.js')
const getMap = require('./modules/get-map.js')
const getWeather = require('./modules/get-weather.js')
const getCovidData = require('./modules/get-covid-data.js')
const getDayPlanner = require('./modules/get-dayPlanner.js')
const notFoundHandler = require('./modules/not-found.js')



//--------------------Configurations--------------------------
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT = process.env.PORT || 3002;


//---------------------Routes---------------------------------
// Root route
app.get('/', (req, res) => {
  res.send('This is the root route');
});


app.get('/location', getLocation);
app.get('/weather', getWeather);
app.get('/map', getMap);
app.get('/covid', getCovidData);
app.get('dayplanner', getDayPlanner);
app.get('*', notFoundHandler);



// Default route
app.get('/*', (req, res) => {
  res.status(404).send('Route not found');
});


//--------------------Listening-------------------------------
app.listen(PORT, () => {
  console.log(`Server listening on ${ PORT }`);
});